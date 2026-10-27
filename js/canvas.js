/**
 * ============================================================================
 * INTERACTIVE ARCHITECTURAL BACKGROUND ENGINE (<canvas> + Smart Image Fallback)
 * Inspired by Keita Yamada (p5aholic.me) minimalist generative aesthetics.
 * ============================================================================
 */

(function () {
  'use strict';

  const CanvasEngine = {
    canvas: null,
    ctx: null,
    imageLayer: null,
    rafId: null,
    width: 0,
    height: 0,
    dpr: 1,
    time: 0,
    isRunning: false,
    reducedMotion: false,
    style: 'dot-matrix',
    interactive: true,
    palette: {
      dotBase: 'rgba(244, 244, 240, 0.16)',
      dotActive: 'rgba(210, 255, 0, 0.85)',
      lineActive: 'rgba(210, 255, 0, 0.16)',
      gridStroke: 'rgba(244, 244, 240, 0.08)'
    },
    pointer: {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      active: false
    },
    dots: [],
    particles: [],

    init() {
      this.canvas = document.getElementById('bg-canvas');
      this.imageLayer = document.getElementById('bg-image-layer');
      if (!this.canvas) return;

      this.ctx = this.canvas.getContext('2d', { alpha: true });
      const bgConfig =
        (window.PORTFOLIO_DATA &&
          window.PORTFOLIO_DATA.config &&
          window.PORTFOLIO_DATA.config.background) ||
        {};

      this.style = bgConfig.canvasStyle || 'dot-matrix';
      this.interactive = bgConfig.interactive !== false;
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      this.updatePalette();

      // Check if user requested static background image mode
      if (bgConfig.mode === 'image' && bgConfig.imagePath && bgConfig.imagePath.trim() !== '') {
        this.tryStaticImage(bgConfig.imagePath.trim(), bgConfig.imageOpacity);
      } else {
        this.enableCanvasMode();
      }
    },

    tryStaticImage(path, opacity) {
      const probe = new Image();
      probe.onload = () => {
        if (this.imageLayer) {
          this.imageLayer.style.backgroundImage = `url("${path}")`;
          this.imageLayer.style.opacity = typeof opacity === 'number' ? String(opacity) : '0.16';
          this.imageLayer.classList.add('is-visible');
        }
        this.canvas.style.display = 'none';
        this.stop();
      };
      probe.onerror = () => {
        // Smart Fallback: if background image is missing, seamlessly activate <canvas>
        if (this.imageLayer) {
          this.imageLayer.classList.remove('is-visible');
        }
        this.enableCanvasMode();
      };
      probe.src = path;
    },

    enableCanvasMode() {
      this.canvas.style.display = 'block';
      this.resize();
      this.bindEvents();

      if (this.reducedMotion) {
        this.renderStaticFrame();
      } else {
        this.start();
      }
    },

    updatePalette() {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      if (theme === 'light') {
        this.palette = {
          dotBase: 'rgba(17, 17, 17, 0.16)',
          dotActive: 'rgba(13, 118, 94, 0.88)',
          lineActive: 'rgba(13, 118, 94, 0.16)',
          gridStroke: 'rgba(17, 17, 17, 0.08)'
        };
      } else {
        this.palette = {
          dotBase: 'rgba(244, 244, 240, 0.15)',
          dotActive: 'rgba(210, 255, 0, 0.88)',
          lineActive: 'rgba(210, 255, 0, 0.15)',
          gridStroke: 'rgba(244, 244, 240, 0.07)'
        };
      }

      if (this.reducedMotion && this.ctx) {
        this.renderStaticFrame();
      }
    },

    refreshTheme() {
      this.updatePalette();
    },

    resize() {
      if (!this.canvas || !this.ctx) return;
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);

      this.canvas.width = Math.floor(this.width * this.dpr);
      this.canvas.height = Math.floor(this.height * this.dpr);
      this.canvas.style.width = `${this.width}px`;
      this.canvas.style.height = `${this.height}px`;

      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      this.buildScene();

      if (this.reducedMotion) {
        this.renderStaticFrame();
      }
    },

    buildScene() {
      const isMobile = this.width < 768;

      if (this.style === 'particles') {
        const count = isMobile ? 28 : 58;
        this.particles = [];
        for (let i = 0; i < count; i++) {
          this.particles.push({
            x: Math.random() * this.width,
            y: Math.random() * this.height,
            vx: (Math.random() - 0.5) * 0.32,
            vy: (Math.random() - 0.5) * 0.32,
            r: Math.random() * 1.3 + 0.8
          });
        }
        return;
      }

      // Build architectural coordinate matrix for 'dot-matrix' & 'wave-grid'
      const gap = isMobile ? 42 : 34;
      const cols = Math.ceil(this.width / gap) + 1;
      const rows = Math.ceil(this.height / gap) + 1;
      const offsetX = (this.width - (cols - 1) * gap) * 0.5;
      const offsetY = (this.height - (rows - 1) * gap) * 0.5;

      this.dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = offsetX + c * gap;
          const oy = offsetY + r * gap;
          this.dots.push({
            ox,
            oy,
            x: ox,
            y: oy,
            col: c,
            row: r
          });
        }
      }
      this.gridCols = cols;
      this.gridRows = rows;
      this.gridGap = gap;
    },

    bindEvents() {
      let resizeTimer = null;
      window.addEventListener(
        'resize',
        () => {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(() => this.resize(), 120);
        },
        { passive: true }
      );

      if (this.interactive) {
        window.addEventListener(
          'pointermove',
          (e) => {
            this.pointer.targetX = e.clientX;
            this.pointer.targetY = e.clientY;
            this.pointer.active = true;
          },
          { passive: true }
        );

        window.addEventListener(
          'pointerleave',
          () => {
            this.pointer.active = false;
            this.pointer.targetX = -9999;
            this.pointer.targetY = -9999;
          },
          { passive: true }
        );
      }

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.stop();
        } else if (!this.reducedMotion) {
          this.start();
        }
      });
    },

    start() {
      if (this.isRunning) return;
      this.isRunning = true;
      const loop = () => {
        if (!this.isRunning) return;
        this.tick();
        this.rafId = window.requestAnimationFrame(loop);
      };
      this.rafId = window.requestAnimationFrame(loop);
    },

    stop() {
      this.isRunning = false;
      if (this.rafId) {
        window.cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
    },

    renderStaticFrame() {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = this.palette.dotBase;
      for (let i = 0; i < this.dots.length; i++) {
        const d = this.dots[i];
        this.ctx.beginPath();
        this.ctx.arc(d.ox, d.oy, 1, 0, Math.PI * 2);
        this.ctx.fill();
      }
    },

    tick() {
      this.time += 0.014;
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);

      // Smooth pointer interpolation (lerp)
      if (this.pointer.active) {
        if (this.pointer.x < -1000) {
          this.pointer.x = this.pointer.targetX;
          this.pointer.y = this.pointer.targetY;
        } else {
          this.pointer.x += (this.pointer.targetX - this.pointer.x) * 0.12;
          this.pointer.y += (this.pointer.targetY - this.pointer.y) * 0.12;
        }
      } else {
        this.pointer.x += (-9999 - this.pointer.x) * 0.08;
        this.pointer.y += (-9999 - this.pointer.y) * 0.08;
      }

      if (this.style === 'particles') {
        this.drawParticles(ctx);
      } else if (this.style === 'wave-grid') {
        this.drawWaveGrid(ctx);
      } else {
        this.drawDotMatrix(ctx);
      }
    },

    drawDotMatrix(ctx) {
      const radius = this.width < 768 ? 110 : 165;
      const radiusSq = radius * radius;
      const px = this.pointer.x;
      const py = this.pointer.y;
      const activeNodes = [];

      ctx.fillStyle = this.palette.dotBase;

      for (let i = 0; i < this.dots.length; i++) {
        const d = this.dots[i];
        // Subtle harmonic architectural breath
        const waveX = Math.sin(this.time + d.oy * 0.012) * 1.6;
        const waveY = Math.cos(this.time * 0.85 + d.ox * 0.012) * 1.6;

        let tx = d.ox + waveX;
        let ty = d.oy + waveY;
        let influence = 0;

        const dx = tx - px;
        const dy = ty - py;
        const distSq = dx * dx + dy * dy;

        if (distSq < radiusSq && distSq > 0.01) {
          const dist = Math.sqrt(distSq);
          influence = 1 - dist / radius;
          const push = influence * influence * 14;
          tx += (dx / dist) * push;
          ty += (dy / dist) * push;
        }

        d.x += (tx - d.x) * 0.18;
        d.y += (ty - d.y) * 0.18;

        if (influence > 0.14) {
          activeNodes.push({ x: d.x, y: d.y, influence });
        } else {
          ctx.fillRect(d.x - 0.85, d.y - 0.85, 1.7, 1.7);
        }
      }

      // Render focal accent nodes and subtle geometric micro-links near pointer
      if (activeNodes.length > 0) {
        ctx.strokeStyle = this.palette.lineActive;
        ctx.lineWidth = 0.75;
        ctx.beginPath();
        for (let i = 0; i < activeNodes.length; i++) {
          const a = activeNodes[i];
          for (let j = i + 1; j < activeNodes.length; j++) {
            const b = activeNodes[j];
            const ddx = a.x - b.x;
            const ddy = a.y - b.y;
            if (ddx * ddx + ddy * ddy <= (this.gridGap * 1.38) ** 2) {
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
            }
          }
        }
        ctx.stroke();

        ctx.fillStyle = this.palette.dotActive;
        for (let i = 0; i < activeNodes.length; i++) {
          const n = activeNodes[i];
          const size = 1.7 + n.influence * 2.1;
          ctx.fillRect(n.x - size * 0.5, n.y - size * 0.5, size, size);
        }
      }
    },

    drawWaveGrid(ctx) {
      const cols = this.gridCols;
      const rows = this.gridRows;
      const px = this.pointer.x;
      const py = this.pointer.y;
      const radius = 170;

      ctx.strokeStyle = this.palette.gridStroke;
      ctx.lineWidth = 1;

      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const d = this.dots[r * cols + c];
          const wave = Math.sin(this.time * 1.3 + c * 0.28 + r * 0.18) * 5;
          let y = d.oy + wave;
          const dx = d.ox - px;
          const dy = y - py;
          const dist = Math.hypot(dx, dy);
          if (dist < radius) {
            y += Math.sin((1 - dist / radius) * Math.PI) * 14;
          }
          if (c === 0) ctx.moveTo(d.ox, y);
          else ctx.lineTo(d.ox, y);
        }
        ctx.stroke();
      }
    },

    drawParticles(ctx) {
      const linkDistSq = 125 * 125;
      const px = this.pointer.x;
      const py = this.pointer.y;

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = this.width;
        if (p.x > this.width) p.x = 0;
        if (p.y < 0) p.y = this.height;
        if (p.y > this.height) p.y = 0;

        const dx = p.x - px;
        const dy = p.y - py;
        const dSq = dx * dx + dy * dy;
        const nearCursor = dSq < 160 * 160;

        ctx.fillStyle = nearCursor ? this.palette.dotActive : this.palette.dotBase;
        ctx.beginPath();
        ctx.arc(p.x, p.y, nearCursor ? p.r + 0.9 : p.r, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < this.particles.length; j++) {
          const q = this.particles[j];
          const ldx = p.x - q.x;
          const ldy = p.y - q.y;
          if (ldx * ldx + ldy * ldy < linkDistSq) {
            ctx.strokeStyle = nearCursor ? this.palette.lineActive : this.palette.gridStroke;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
    }
  };

  window.PortfolioCanvas = CanvasEngine;
})();

