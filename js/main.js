/**
 * ============================================================================
 * MAIN APPLICATION CONTROLLER (CYBER AZURE AWWWARDS EDITION)
 * Features:
 * - Guaranteed English ('en') Default Landing + Instant EN | ID | FR Switcher
 * - Clean Non-Scrambled Top Navigation + Hardened Section Heading Decoder
 * - Cyber Azure Blue (Option A) & Royal Cobalt (Option B) Dual-Theme Palettes
 * - Architectural Curtain Boot Intro (~0.6s, Fail-Safe & Reduced-Motion Safe)
 * - Velocity-Reactive Infinite Kinetic Tech Ticker (Lenis Scroll Synced)
 * - Live <canvas> Mode Switcher (DOTS | WAVES | NODES) in Status Bar
 * - Radial Border Spotlight Tracking + 3D Specular Card Tilt
 * - Parallax Giant Outline Section Watermarks (01 — 06)
 * - Developer Command Palette (Ctrl+K / Cmd+K) + Floating Toast Notifications
 * - Mobile Floating Flexbox Quick-Dock + Interactive Before/After QC Slider
 * ============================================================================
 */

(function () {
  'use strict';

  const STORAGE_THEME_KEY = 'hans_portfolio_theme';
  const STORAGE_LANG_KEY = 'hans_portfolio_lang';
  const STORAGE_ACCENT_KEY = 'hans_portfolio_accent';
  const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789//_#';

  const state = {
    lang: 'en',
    theme: 'dark',
    accent: 'azure',
    canvasStyle: 'dot-matrix',
    activeFilter: 'all',
    mobileMenuOpen: false,
    lightboxOpen: false,
    cmdOpen: false,
    cmdActiveIndex: 0,
    cmdFilteredItems: [],
    revealObserver: null,
    lenis: null,
    toastTimer: null,
    scrollVelocity: 0,
    lastScrollY: 0
  };

  /* --------------------------------------------------------------------------
   * UTILITY HELPERS
   * -------------------------------------------------------------------------- */
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getNestedValue(obj, path) {
    if (!obj || !path) return undefined;
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  }

  function padIndex(num) {
    return num < 10 ? `0${num}` : String(num);
  }

  function prefersReducedMotion() {
    return Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function isFinePointer() {
    return Boolean(window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }

  function safeGetStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function safeSetStorage(key, val) {
    try {
      window.localStorage.setItem(key, val);
    } catch (e) {
      // Ignore storage errors
    }
  }

  function safeRemoveStorage(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      // Ignore storage errors
    }
  }

  /* --------------------------------------------------------------------------
   * HARDENED TEXT SCRAMBLE DECODER (ZERO RACE-CONDITION GUARANTEE)
   * Used ONLY on Section Headings during language switch & Hero boot reveal.
   * Never attached to Top Navigation Bar.
   * -------------------------------------------------------------------------- */
  function scrambleElement(el, finalText, durationMs = 380) {
    if (!el) return;
    const cleanTarget = String(finalText || '');
    el.setAttribute('data-true-text', cleanTarget);

    if (el._scrambleRaf) {
      cancelAnimationFrame(el._scrambleRaf);
      el._scrambleRaf = null;
    }

    if (prefersReducedMotion() || !cleanTarget) {
      el.textContent = cleanTarget;
      return;
    }

    const length = cleanTarget.length;
    const start = performance.now();

    const step = (now) => {
      // Always read locked data-true-text so rapid switches never corrupt text
      const lockedText = el.getAttribute('data-true-text') || cleanTarget;
      const progress = Math.min((now - start) / durationMs, 1);
      const revealCount = Math.floor(progress * lockedText.length);
      let output = '';

      for (let i = 0; i < lockedText.length; i++) {
        const ch = lockedText[i];
        if (ch === ' ' || ch === '\n') {
          output += ch;
        } else if (i < revealCount) {
          output += ch;
        } else {
          output += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }

      el.textContent = output;
      if (progress < 1 && iSafe(length)) {
        el._scrambleRaf = requestAnimationFrame(step);
      } else {
        el.textContent = lockedText;
        el._scrambleRaf = null;
      }
    };

    el._scrambleRaf = requestAnimationFrame(step);
  }

  function iSafe(len) {
    return len > 0;
  }

  /* --------------------------------------------------------------------------
   * FLOATING TOAST NOTIFICATION
   * -------------------------------------------------------------------------- */
  function showToast(message) {
    const banner = document.getElementById('toast-banner');
    const textEl = document.getElementById('toast-text');
    if (!banner || !textEl || !message) return;

    textEl.textContent = message;
    banner.classList.add('is-visible');
    banner.setAttribute('aria-hidden', 'false');

    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => {
      banner.classList.remove('is-visible');
      banner.setAttribute('aria-hidden', 'true');
    }, 2400);
  }

  /* --------------------------------------------------------------------------
   * ARCHITECTURAL CURTAIN BOOT INTRO (~0.6s)
   * -------------------------------------------------------------------------- */
  function initBootCurtain() {
    const curtain = document.getElementById('boot-curtain');
    const barFill = document.getElementById('boot-bar-fill');
    const counter = document.getElementById('boot-counter');
    const data = window.PORTFOLIO_DATA;
    const enableIntro = !(data && data.config && data.config.enableBootIntro === false);

    if (!curtain) {
      triggerHeroBootDecode();
      return;
    }

    if (!enableIntro || prefersReducedMotion()) {
      curtain.classList.add('is-done');
      triggerHeroBootDecode();
      return;
    }

    const duration = 580;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - t, 3);
      const pct = Math.round(eased * 100);

      if (barFill) barFill.style.transform = `scaleX(${eased.toFixed(3)})`;
      if (counter) counter.textContent = `${padIndex(pct)}%`;

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        curtain.classList.add('is-done');
        triggerHeroBootDecode();
      }
    };

    requestAnimationFrame(tick);
  }

  function triggerHeroBootDecode() {
    const firstEl = document.getElementById('hero-first-name');
    const lastEl = document.getElementById('hero-last-name');
    const eyebrowEl = document.getElementById('hero-eyebrow');
    if (firstEl) scrambleElement(firstEl, firstEl.getAttribute('data-true-text') || firstEl.textContent, 460);
    if (lastEl) scrambleElement(lastEl, lastEl.getAttribute('data-true-text') || lastEl.textContent, 560);
    if (eyebrowEl) scrambleElement(eyebrowEl, eyebrowEl.getAttribute('data-true-text') || eyebrowEl.textContent, 420);
  }

  /* --------------------------------------------------------------------------
   * SMART SVG BLUEPRINT GENERATORS (ZERO BROKEN IMAGES)
   * -------------------------------------------------------------------------- */
  function createFaviconDataUri(monogram) {
    const text = escapeHtml((monogram || 'HA').slice(0, 3));
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0B0B0B"/><rect x="3" y="3" width="58" height="58" rx="9" fill="none" stroke="#38BDF8" stroke-opacity="0.55" stroke-width="1.6"/><text x="32" y="39" text-anchor="middle" font-family="monospace" font-weight="700" font-size="22" fill="#F4F4F0">${text}</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  function createCroppedLogoFavicon(imgElement) {
    try {
      const size = 64;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const sw = imgElement.naturalWidth;
      const sh = imgElement.naturalHeight;
      const side = Math.min(sw, sh);
      const sx = (sw - side) * 0.5;
      const sy = sh > sw ? Math.min(sh - side, sh * 0.34) : (sh - side) * 0.5;

      const r = 13;
      ctx.beginPath();
      ctx.moveTo(r, 0);
      ctx.lineTo(size - r, 0);
      ctx.quadraticCurveTo(size, 0, size, r);
      ctx.lineTo(size, size - r);
      ctx.quadraticCurveTo(size, size, size - r, size);
      ctx.lineTo(r, size);
      ctx.quadraticCurveTo(0, size, 0, size - r);
      ctx.lineTo(0, r);
      ctx.quadraticCurveTo(0, 0, r, 0);
      ctx.closePath();
      ctx.clip();

      ctx.drawImage(imgElement, sx, sy, side, side, 0, 0, size, size);
      return canvas.toDataURL('image/png');
    } catch (e) {
      return null;
    }
  }

  function buildPortraitFallbackHtml(data, t) {
    const monogram = escapeHtml((data.config.branding && data.config.branding.monogram) || 'HA');
    const coords = escapeHtml(data.profile.coordinates || "07°58'S 112°37'E");
    const gpa = escapeHtml(data.profile.gpa || '3.78 / 4.00');

    return `
      <div class="portrait-blueprint">
        <div class="blueprint-topbar">
          <span class="mono-xs">ID // HANS.AUFA</span>
          <span class="mono-xs accent-text">GPA ${gpa}</span>
        </div>

        <div class="blueprint-emblem-wrap" aria-hidden="true">
          <svg class="blueprint-svg" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="130" cy="130" r="108" stroke="currentColor" stroke-opacity="0.12" stroke-width="1" />
            <circle cx="130" cy="130" r="82" stroke="currentColor" stroke-opacity="0.18" stroke-dasharray="4 4" stroke-width="1" />
            <circle cx="130" cy="130" r="56" class="blueprint-accent-ring" stroke-width="1.2" />
            <line x1="12" y1="130" x2="248" y2="130" stroke="currentColor" stroke-opacity="0.1" stroke-width="1" />
            <line x1="130" y1="12" x2="130" y2="248" stroke="currentColor" stroke-opacity="0.1" stroke-width="1" />
            <rect x="86" y="86" width="88" height="88" rx="8" fill="var(--bg-elevated)" stroke="currentColor" stroke-opacity="0.24" stroke-width="1.2" />
            <circle cx="130" cy="22" r="3" class="blueprint-accent-dot" />
            <circle cx="238" cy="130" r="3" class="blueprint-accent-dot" />
            <text x="130" y="141" text-anchor="middle" class="blueprint-monogram-svg">${monogram}</text>
          </svg>
        </div>

        <div class="blueprint-specs">
          <div class="blueprint-spec-row">
            <span class="spec-key">SPEC</span>
            <span class="spec-val">${escapeHtml(t.hero.portraitCaption)}</span>
          </div>
          <div class="blueprint-spec-row">
            <span class="spec-key">DEGREE</span>
            <span class="spec-val">${escapeHtml(t.hero.portraitDegree)}</span>
          </div>
          <div class="blueprint-spec-row">
            <span class="spec-key">COORDS</span>
            <span class="spec-val">${coords}</span>
          </div>
        </div>
      </div>
    `;
  }

  function buildProjectSchematicSvg(projectId, indexStr, category) {
    let motif = '';
    if (projectId === 'student-achievement-db') {
      motif = `
        <rect x="24" y="28" width="88" height="82" rx="5" class="svg-accent-stroke" stroke-width="1.4" />
        <line x1="24" y1="48" x2="112" y2="48" class="svg-accent-stroke" stroke-opacity="0.6" />
        <text x="34" y="41" fill="currentColor" fill-opacity="0.7" font-family="monospace" font-size="8.5">achievements</text>
        <rect x="34" y="57" width="56" height="6" rx="2" class="svg-accent-fill" fill-opacity="0.8" />
        <rect x="34" y="70" width="66" height="6" rx="2" fill="currentColor" fill-opacity="0.22" />
        <rect x="34" y="83" width="48" height="6" rx="2" fill="currentColor" fill-opacity="0.22" />
        <rect x="34" y="96" width="60" height="6" rx="2" fill="currentColor" fill-opacity="0.16" />

        <path d="M112 68 H148" class="svg-accent-stroke" stroke-dasharray="4 3" stroke-width="1.3" />
        <circle cx="148" cy="68" r="3" class="svg-accent-fill" />

        <rect x="148" y="34" width="88" height="68" rx="5" stroke="currentColor" stroke-opacity="0.32" stroke-width="1.2" />
        <line x1="148" y1="52" x2="236" y2="52" stroke="currentColor" stroke-opacity="0.22" />
        <text x="158" y="46" fill="currentColor" fill-opacity="0.65" font-family="monospace" font-size="8.5">students_mysql</text>
        <rect x="158" y="62" width="64" height="6" rx="2" fill="currentColor" fill-opacity="0.25" />
        <rect x="158" y="75" width="52" height="6" rx="2" fill="currentColor" fill-opacity="0.2" />
        <rect x="158" y="88" width="42" height="6" rx="2" class="svg-accent-fill" fill-opacity="0.55" />
      `;
    } else if (category === 'data') {
      motif = `
        <polyline points="28,98 68,78 106,86 146,52 186,60 228,34" fill="none" class="svg-accent-stroke" stroke-width="2" />
        <circle cx="68" cy="78" r="3.5" fill="currentColor" fill-opacity="0.5" />
        <circle cx="106" cy="86" r="3.5" fill="currentColor" fill-opacity="0.5" />
        <circle cx="146" cy="52" r="4" class="svg-accent-fill" />
        <circle cx="186" cy="60" r="3.5" fill="currentColor" fill-opacity="0.5" />
        <circle cx="228" cy="34" r="4.5" class="svg-accent-fill" />
        <line x1="26" y1="108" x2="234" y2="108" stroke="currentColor" stroke-opacity="0.2" />
        <line x1="26" y1="30" x2="26" y2="108" stroke="currentColor" stroke-opacity="0.2" />
      `;
    } else {
      motif = `
        <rect x="28" y="34" width="204" height="74" rx="5" stroke="currentColor" stroke-opacity="0.28" />
        <line x1="28" y1="52" x2="232" y2="52" stroke="currentColor" stroke-opacity="0.2" />
        <circle cx="42" cy="43" r="2.5" class="svg-accent-fill" />
        <circle cx="52" cy="43" r="2.5" fill="currentColor" fill-opacity="0.3" />
        <rect x="44" y="66" width="76" height="28" rx="3" class="svg-accent-stroke" />
        <rect x="134" y="66" width="82" height="10" rx="2" fill="currentColor" fill-opacity="0.22" />
        <rect x="134" y="84" width="58" height="10" rx="2" fill="currentColor" fill-opacity="0.16" />
      `;
    }

    return `
      <svg class="project-wireframe-svg" viewBox="0 0 260 144" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="grid-${escapeHtml(projectId)}" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" stroke-opacity="0.06" stroke-width="0.75" />
          </pattern>
        </defs>
        <rect width="260" height="144" fill="url(#grid-${escapeHtml(projectId)})" />
        ${motif}
        <text x="244" y="133" text-anchor="end" class="wireframe-idx-label">${escapeHtml(indexStr)} // LARAVEL CRUD</text>
      </svg>
    `;
  }

  /* --------------------------------------------------------------------------
   * BRANDING, ASSETS & CONTACTS INITIALIZATION
   * -------------------------------------------------------------------------- */
  function initBrandingAndLinks() {
    const data = window.PORTFOLIO_DATA;
    if (!data) return;

    const { branding, assets } = data.config;
    const p = data.profile;
    const faviconEl = document.getElementById('site-favicon');
    const brandMarkSlot = document.getElementById('brand-mark-slot');
    const brandNameSlot = document.getElementById('brand-name-slot');
    const bootLogoSlot = document.getElementById('boot-logo-slot');

    if (brandNameSlot && branding.shortName) {
      brandNameSlot.textContent = branding.shortName;
    }

    const fallbackMonogram = branding.monogram || 'HA';

    if (branding.logoImage && branding.logoImage.trim() !== '') {
      const logoSrc = branding.logoImage.trim();

      if (bootLogoSlot) {
        bootLogoSlot.innerHTML = `<img src="${escapeHtml(logoSrc)}" alt="" class="brand-logo-img" />`;
      }

      if (brandMarkSlot) {
        brandMarkSlot.innerHTML = '';
        const img = document.createElement('img');
        img.src = logoSrc;
        img.alt = p.fullName;
        img.className = 'brand-logo-img';
        img.onload = () => {
          if (faviconEl && branding.useLogoAsFavicon) {
            const croppedUri = createCroppedLogoFavicon(img);
            if (croppedUri) {
              faviconEl.type = 'image/png';
              faviconEl.href = croppedUri;
            }
          }
        };
        img.onerror = () => {
          brandMarkSlot.textContent = fallbackMonogram;
          if (bootLogoSlot) bootLogoSlot.textContent = fallbackMonogram;
          applyStandardFavicon(faviconEl, branding, fallbackMonogram);
        };
        brandMarkSlot.appendChild(img);
      }
      if (!branding.useLogoAsFavicon) {
        applyStandardFavicon(faviconEl, branding, fallbackMonogram);
      }
    } else {
      if (brandMarkSlot) brandMarkSlot.textContent = fallbackMonogram;
      if (bootLogoSlot) bootLogoSlot.textContent = fallbackMonogram;
      applyStandardFavicon(faviconEl, branding, fallbackMonogram);
    }

    const firstEl = document.getElementById('hero-first-name');
    const lastEl = document.getElementById('hero-last-name');
    if (firstEl && p.displayFirst) {
      firstEl.textContent = p.displayFirst;
      firstEl.setAttribute('data-true-text', p.displayFirst);
    }
    if (lastEl && p.displayLast) {
      lastEl.textContent = p.displayLast;
      lastEl.setAttribute('data-true-text', p.displayLast);
    }

    const coordsEl = document.getElementById('statusbar-coords');
    if (coordsEl && p.coordinates) coordsEl.textContent = p.coordinates;

    const cvHref = (assets && assets.cvPdf) || 'assets/docs/CV-Hans-Aufa.pdf';
    ['hero-cv-btn', 'contact-cv-btn', 'mobile-cv-link', 'dock-cv-link'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.setAttribute('href', cvHref);
    });

    const mailHref = `mailto:${p.email}`;
    ['hero-contact-btn', 'contact-email-address', 'contact-mailto-btn'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.setAttribute('href', mailHref);
    });
    const emailAddrText = document.getElementById('contact-email-address');
    if (emailAddrText) emailAddrText.textContent = p.email;

    ['hero-wa-link', 'contact-phone-value', 'contact-wa-btn'].forEach((id) => {
      const el = document.getElementById(id);
      if (el && p.whatsappUrl) el.setAttribute('href', p.whatsappUrl);
    });
    const phoneText = document.getElementById('contact-phone-value');
    if (phoneText && p.phoneDisplay) phoneText.textContent = p.phoneDisplay;

    ['hero-github-link', 'footer-github'].forEach((id) => {
      const el = document.getElementById(id);
      if (el && p.githubUrl) el.setAttribute('href', p.githubUrl);
    });

    ['hero-linkedin-link', 'footer-linkedin'].forEach((id) => {
      const el = document.getElementById(id);
      if (el && p.linkedinUrl) el.setAttribute('href', p.linkedinUrl);
    });

    const yearEl = document.getElementById('footer-year');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    // Set platform shortcut hint on Command Palette trigger
    const kbdEl = document.querySelector('#cmd-trigger .cmd-kbd');
    if (kbdEl) {
      const isMac = /Mac|iPhone|iPad|iPod/i.test(navigator.platform || '');
      kbdEl.textContent = isMac ? '⌘K' : 'Ctrl K';
    }
  }

  function applyStandardFavicon(faviconEl, branding, fallbackMonogram) {
    if (!faviconEl) return;
    if (branding.faviconPath && branding.faviconPath.trim() !== '') {
      const probe = new Image();
      probe.onload = () => {
        faviconEl.href = branding.faviconPath.trim();
      };
      probe.onerror = () => {
        faviconEl.href = createFaviconDataUri(fallbackMonogram);
      };
      probe.src = branding.faviconPath.trim();
    } else {
      faviconEl.href = createFaviconDataUri(fallbackMonogram);
    }
  }

  /* --------------------------------------------------------------------------
   * THEME & ACCENT CONTROLLER (CYBER AZURE DEFAULT + ROYAL COBALT OPTION)
   * -------------------------------------------------------------------------- */
  function initTheme() {
    const data = window.PORTFOLIO_DATA;
    const savedTheme = safeGetStorage(STORAGE_THEME_KEY);
    const savedAccent = safeGetStorage(STORAGE_ACCENT_KEY);
    const configAccent = (data && data.config && data.config.accentPreset) || 'azure';

    state.accent =
      savedAccent === 'azure' || savedAccent === 'cobalt' ? savedAccent : configAccent;
    document.documentElement.setAttribute('data-accent', state.accent);

    if (savedTheme === 'dark' || savedTheme === 'light') {
      state.theme = savedTheme;
    } else if (
      data &&
      data.config &&
      (data.config.defaultTheme === 'dark' || data.config.defaultTheme === 'light')
    ) {
      state.theme = data.config.defaultTheme;
    } else {
      const prefersLight =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      state.theme = prefersLight ? 'light' : 'dark';
    }

    applyTheme(state.theme, false);

    if (window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: light)');
      const onChange = (e) => {
        if (!safeGetStorage(STORAGE_THEME_KEY)) {
          applyTheme(e.matches ? 'light' : 'dark', false);
        }
      };
      if (mq.addEventListener) mq.addEventListener('change', onChange);
    }

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme, true);
      });
    }
  }

  function applyTheme(theme, persist) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);

    const metaTheme = document.getElementById('meta-theme-color');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'light' ? '#F5F5F3' : '#0B0B0B');
    }

    if (persist) {
      safeSetStorage(STORAGE_THEME_KEY, theme);
    }

    updateThemeToggleLabel();

    if (window.PortfolioCanvas && typeof window.PortfolioCanvas.refreshTheme === 'function') {
      window.PortfolioCanvas.refreshTheme();
    }
  }

  function applyAccentPreset(preset, notify) {
    if (preset !== 'azure' && preset !== 'cobalt') return;
    state.accent = preset;
    document.documentElement.setAttribute('data-accent', preset);
    safeSetStorage(STORAGE_ACCENT_KEY, preset);

    if (window.PortfolioCanvas && typeof window.PortfolioCanvas.refreshTheme === 'function') {
      window.PortfolioCanvas.refreshTheme();
    }

    if (notify) {
      const t = window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.i18n[state.lang];
      const prefix = (t && t.controls && t.controls.toastAccent) || 'Accent switched to';
      const label = preset === 'azure' ? 'Cyber Azure Blue' : 'Royal Electric Cobalt';
      showToast(`${prefix} ${label}`);
    }
  }

  function updateThemeToggleLabel() {
    const data = window.PORTFOLIO_DATA;
    const t = data && data.i18n && data.i18n[state.lang];
    if (!t) return;

    const labelEl = document.getElementById('theme-toggle-text');
    const btnEl = document.getElementById('theme-toggle');
    if (labelEl) {
      labelEl.textContent = state.theme === 'dark' ? t.controls.themeDark : t.controls.themeLight;
    }
    if (btnEl) {
      btnEl.setAttribute('aria-label', t.controls.toggleThemeLabel);
      btnEl.setAttribute('title', t.controls.toggleThemeLabel);
    }
  }

  /* --------------------------------------------------------------------------
   * LANGUAGE / i18n CONTROLLER — GUARANTEED ENGLISH ('en') DEFAULT LANDING
   * -------------------------------------------------------------------------- */
  function initLanguage() {
    const data = window.PORTFOLIO_DATA;
    const persistLang = Boolean(data && data.config && data.config.persistLanguage === true);
    const defaultLang = (data && data.config && data.config.defaultLang) || 'en';

    if (persistLang) {
      const saved = safeGetStorage(STORAGE_LANG_KEY);
      state.lang = saved && ['en', 'id', 'fr'].includes(saved) ? saved : defaultLang;
    } else {
      safeRemoveStorage(STORAGE_LANG_KEY);
      state.lang = defaultLang;
    }

    const switcher = document.getElementById('lang-switcher');
    if (switcher) {
      switcher.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-btn');
        if (!btn) return;
        const nextLang = btn.getAttribute('data-lang');
        if (nextLang && nextLang !== state.lang) {
          setLanguage(nextLang, persistLang, true);
        }
      });
    }

    setLanguage(state.lang, false, false);
  }

  function setLanguage(lang, persist, animateScramble) {
    const data = window.PORTFOLIO_DATA;
    if (!data || !data.i18n || !data.i18n[lang]) return;

    state.lang = lang;
    document.documentElement.setAttribute('lang', lang);

    if (persist) {
      safeSetStorage(STORAGE_LANG_KEY, lang);
    }

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isCurrent = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isCurrent);
      btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
    });

    const t = data.i18n[lang];

    if (t.metaTitle) document.title = t.metaTitle;
    const metaDesc = document.getElementById('meta-description');
    if (metaDesc && t.metaDescription) {
      metaDesc.setAttribute('content', t.metaDescription);
    }

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (el.id === 'mobile-menu-label') {
        el.textContent = state.mobileMenuOpen ? t.nav.close : t.nav.menu;
        return;
      }
      const val = getNestedValue(t, key);
      if (typeof val === 'string') {
        el.setAttribute('data-true-text', val);
        if (
          animateScramble &&
          (el.hasAttribute('data-scramble-lang') ||
            el.id === 'hero-role-tagline' ||
            el.id === 'hero-eyebrow')
        ) {
          scrambleElement(el, val, 360);
        } else {
          if (el._scrambleRaf) {
            cancelAnimationFrame(el._scrambleRaf);
            el._scrambleRaf = null;
          }
          el.textContent = val;
        }
      }
    });

    const langGroup = document.getElementById('lang-switcher');
    if (langGroup && t.controls && t.controls.langLabel) {
      langGroup.setAttribute('aria-label', t.controls.langLabel);
    }

    const cmdTrigger = document.getElementById('cmd-trigger');
    if (cmdTrigger && t.controls && t.controls.cmdLabel) {
      cmdTrigger.setAttribute('aria-label', t.controls.cmdLabel);
      cmdTrigger.setAttribute('title', `${t.controls.cmdLabel} (Ctrl+K)`);
    }

    const cmdInput = document.getElementById('cmd-input');
    if (cmdInput && t.controls && t.controls.cmdPlaceholder) {
      cmdInput.setAttribute('placeholder', t.controls.cmdPlaceholder);
    }

    const lbClose = document.getElementById('lightbox-close');
    if (lbClose && t.controls && t.controls.closeModal) {
      lbClose.setAttribute('aria-label', t.controls.closeModal);
    }

    updateThemeToggleLabel();
    renderAllDynamicSections();
    updateScrollStatus();
    updateLiveClock();
    if (state.cmdOpen) {
      renderCommandList(cmdInput ? cmdInput.value : '');
    }
  }

  /* --------------------------------------------------------------------------
   * VELOCITY-REACTIVE INFINITE KINETIC TECH TICKER
   * -------------------------------------------------------------------------- */
  function initTechMarquee() {
    const wrap = document.getElementById('tech-marquee-wrap');
    const track = document.getElementById('tech-marquee-track');
    if (!wrap || !track) return;

    const data = window.PORTFOLIO_DATA;
    const items =
      (data && data.config && Array.isArray(data.config.marqueeItems) && data.config.marqueeItems) || [
        'LARAVEL 12',
        'NEXT.JS',
        'EXPLAINABLE AI',
        'ISAPI BIOMETRICS',
        'ENTERPRISE MINI ERP',
        'DATA QA'
      ];

    const buildGroupHtml = () =>
      items
        .map(
          (item) => `
          <span class="marquee-item">
            <span class="marquee-text">${escapeHtml(item)}</span>
            <span class="marquee-star" aria-hidden="true">✦</span>
          </span>
        `
        )
        .join('');

    // Render 3 identical groups for seamless infinite loop on ultrawide monitors
    track.innerHTML = `
      <div class="marquee-group">${buildGroupHtml()}</div>
      <div class="marquee-group" aria-hidden="true">${buildGroupHtml()}</div>
      <div class="marquee-group" aria-hidden="true">${buildGroupHtml()}</div>
    `;

    if (prefersReducedMotion()) return;

    let offset = 0;
    let direction = -1;
    let hovered = false;

    wrap.addEventListener('pointerenter', () => {
      hovered = true;
    });
    wrap.addEventListener('pointerleave', () => {
      hovered = false;
    });

    const animateMarquee = () => {
      const firstGroup = track.firstElementChild;
      const groupWidth = firstGroup ? firstGroup.offsetWidth : 0;

      if (groupWidth > 0) {
        // Decay scroll velocity smoothly
        state.scrollVelocity *= 0.9;
        if (Math.abs(state.scrollVelocity) > 0.35) {
          direction = state.scrollVelocity > 0 ? -1 : 1;
        }

        const baseSpeed = hovered ? 0.25 : 0.68;
        const boost = Math.min(Math.abs(state.scrollVelocity) * 0.16, 4.2);
        offset += direction * (baseSpeed + boost);

        if (offset <= -groupWidth) {
          offset += groupWidth;
        } else if (offset > 0) {
          offset -= groupWidth;
        }

        track.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;
      }

      requestAnimationFrame(animateMarquee);
    };

    requestAnimationFrame(animateMarquee);
  }

  /* --------------------------------------------------------------------------
   * LIVE <canvas> MODE SWITCHER (STATUS BAR + COMMAND PALETTE)
   * -------------------------------------------------------------------------- */
  function initCanvasSwitcher() {
    const switcher = document.getElementById('canvas-switcher');
    const data = window.PORTFOLIO_DATA;
    state.canvasStyle =
      (data && data.config && data.config.background && data.config.background.canvasStyle) ||
      'dot-matrix';

    syncCanvasButtons();

    if (!switcher) return;
    switcher.addEventListener('click', (e) => {
      const btn = e.target.closest('.canvas-mode-btn');
      if (!btn) return;
      const nextStyle = btn.getAttribute('data-canvas-style');
      if (nextStyle) {
        switchCanvasMode(nextStyle, true);
      }
    });
  }

  function switchCanvasMode(style, notify) {
    if (!['dot-matrix', 'wave-grid', 'particles'].includes(style)) return;
    state.canvasStyle = style;
    syncCanvasButtons();

    if (window.PortfolioCanvas && typeof window.PortfolioCanvas.setStyle === 'function') {
      window.PortfolioCanvas.setStyle(style);
    }

    if (notify) {
      const t = window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.i18n[state.lang];
      const prefix = (t && t.controls && t.controls.toastCanvas) || 'Canvas mode switched to';
      const labelMap = {
        'dot-matrix': 'DOTS',
        'wave-grid': 'WAVES',
        particles: 'NODES'
      };
      showToast(`${prefix} ${labelMap[style] || style}`);
    }
  }

  function syncCanvasButtons() {
    document.querySelectorAll('.canvas-mode-btn').forEach((btn) => {
      const active = btn.getAttribute('data-canvas-style') === state.canvasStyle;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  /* --------------------------------------------------------------------------
   * RADIAL BORDER SPOTLIGHT TRACKING (LINEAR / VERCEL PRECISION GLOW)
   * -------------------------------------------------------------------------- */
  function initSpotlightTracking() {
    if (!isFinePointer() || prefersReducedMotion()) return;

    let pointerX = -9999;
    let pointerY = -9999;
    let rafPending = false;

    const updateCards = () => {
      rafPending = false;
      const cards = document.querySelectorAll('.spotlight-card');
      const vh = window.innerHeight;

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const rect = card.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > vh + 80) continue;

        const x = pointerX - rect.left;
        const y = pointerY - rect.top;
        card.style.setProperty('--spot-x', `${x.toFixed(0)}px`);
        card.style.setProperty('--spot-y', `${y.toFixed(0)}px`);
      }
    };

    window.addEventListener(
      'pointermove',
      (e) => {
        pointerX = e.clientX;
        pointerY = e.clientY;
        if (!rafPending) {
          rafPending = true;
          requestAnimationFrame(updateCards);
        }
      },
      { passive: true }
    );
  }

  /* --------------------------------------------------------------------------
   * DYNAMIC SECTION RENDERERS
   * -------------------------------------------------------------------------- */
  function renderAllDynamicSections() {
    const data = window.PORTFOLIO_DATA;
    if (!data) return;
    const t = data.i18n[state.lang];

    renderProfilePortrait(data, t);
    renderHeroMetrics(t);
    renderOverviewPillars(t);
    renderExperience(data, state.lang);
    renderProjectFilters(data, t);
    renderProjects(data, t, state.lang);
    renderEducation(data, t, state.lang);
    renderOrganizations(data, state.lang);
    renderSkills(data, state.lang);

    observeReveals();
    bindMagneticButtons();
    bindTiltCards();
  }

  function renderProfilePortrait(data, t) {
    const slot = document.getElementById('profile-media-slot');
    if (!slot) return;

    const imgPath =
      data.config && data.config.assets && data.config.assets.profileImage
        ? data.config.assets.profileImage.trim()
        : '';

    if (!imgPath) {
      slot.innerHTML = buildPortraitFallbackHtml(data, t);
      return;
    }

    slot.innerHTML = `
      <div
        class="portrait-photo-frame zoomable-media"
        role="button"
        tabindex="0"
        aria-label="${escapeHtml(t.controls.zoomHint)}"
        data-zoom-src="${escapeHtml(imgPath)}"
        data-zoom-title="${escapeHtml(data.profile.fullName)}"
        data-zoom-badge="PROFILE // ${escapeHtml(data.profile.gpa)}"
      >
        <div class="portrait-img-wrap">
          <img
            src="${escapeHtml(imgPath)}"
            alt="${escapeHtml(data.profile.fullName)}"
            class="portrait-photo-img"
            id="profile-photo-img"
          />
          <span class="zoom-corner-badge" aria-hidden="true">↗</span>
        </div>
        <div class="portrait-photo-caption">
          <span class="mono-xs">${escapeHtml(t.hero.portraitDegree)}</span>
          <span class="mono-xs accent-text">GPA ${escapeHtml(data.profile.gpa)}</span>
        </div>
      </div>
    `;

    const imgEl = document.getElementById('profile-photo-img');
    if (imgEl) {
      imgEl.onerror = () => {
        slot.innerHTML = buildPortraitFallbackHtml(data, t);
      };
    }

    const trigger = slot.querySelector('.zoomable-media');
    if (trigger) {
      bindZoomTrigger(trigger);
    }
  }

  function renderHeroMetrics(t) {
    const container = document.getElementById('hero-metrics');
    if (!container || !t.hero || !Array.isArray(t.hero.metrics)) return;

    container.innerHTML = t.hero.metrics
      .map(
        (m, idx) => `
        <div class="metric-cell spotlight-card">
          <span class="metric-idx">0${idx + 1}</span>
          <div class="metric-value-row">
            <span class="metric-value">${escapeHtml(m.value)}</span>
            <span class="metric-suffix">${escapeHtml(m.suffix)}</span>
          </div>
          <span class="metric-label">${escapeHtml(m.label)}</span>
        </div>
      `
      )
      .join('');
  }

  function renderOverviewPillars(t) {
    const container = document.getElementById('overview-pillars');
    if (!container || !t.overview || !Array.isArray(t.overview.pillars)) return;

    container.innerHTML = t.overview.pillars
      .map(
        (p) => `
        <article class="pillar-card tilt-card spotlight-card reveal">
          <div class="pillar-card-top">
            <span class="pillar-num">${escapeHtml(p.num)}</span>
            <span class="pillar-line"></span>
          </div>
          <h3 class="pillar-title">${escapeHtml(p.title)}</h3>
          <p class="pillar-desc">${escapeHtml(p.desc)}</p>
        </article>
      `
      )
      .join('');
  }

  function renderExperience(data, lang) {
    const container = document.getElementById('experience-list');
    if (!container || !Array.isArray(data.experience)) return;

    const visibleItems = data.experience.filter((item) => item.visible !== false);

    container.innerHTML = visibleItems
      .map((item, idx) => {
        const loc = item.i18n[lang] || item.i18n.en;
        const bulletsHtml = (loc.highlights || [])
          .map(
            (b) => `
            <li class="exp-bullet">
              <span class="exp-bullet-marker" aria-hidden="true"></span>
              <div>
                <strong class="exp-bullet-lead">${escapeHtml(b.lead)}:</strong>
                <span>${escapeHtml(b.text)}</span>
              </div>
            </li>
          `
          )
          .join('');

        return `
          <article class="exp-row reveal">
            <div class="exp-meta">
              <div class="exp-index-line">
                <span class="mono-idx">${padIndex(idx + 1)}</span>
                ${item.isCurrent ? '<span class="live-badge"><span class="status-dot"></span>ACTIVE</span>' : ''}
              </div>
              <p class="exp-period">${escapeHtml(loc.period)}</p>
              <p class="exp-company">${escapeHtml(item.company)}</p>
              <p class="exp-location">${escapeHtml(loc.location)}</p>
            </div>

            <div class="exp-body">
              <h3 class="exp-role">${escapeHtml(loc.role)}</h3>
              <ul class="exp-bullets">
                ${bulletsHtml}
              </ul>
            </div>
          </article>
        `;
      })
      .join('');
  }

  function renderProjectFilters(data, t) {
    const bar = document.getElementById('project-filters');
    if (!bar || !Array.isArray(data.projects)) return;

    const visibleProjects = data.projects.filter((p) => p.visible !== false);
    const counts = {
      all: visibleProjects.length,
      fullstack: visibleProjects.filter((p) => p.category === 'fullstack').length,
      data: visibleProjects.filter((p) => p.category === 'data').length
    };

    const filters = [
      { key: 'all', label: t.projectsSection.filters.all, count: counts.all },
      { key: 'fullstack', label: t.projectsSection.filters.fullstack, count: counts.fullstack },
      { key: 'data', label: t.projectsSection.filters.data, count: counts.data }
    ];

    bar.innerHTML = filters
      .map((f) => {
        const active = state.activeFilter === f.key;
        return `
          <button
            type="button"
            role="tab"
            aria-selected="${active ? 'true' : 'false'}"
            class="filter-btn ${active ? 'is-active' : ''}"
            data-filter="${f.key}"
          >
            <span>${escapeHtml(f.label)}</span>
            <span class="filter-count">[${padIndex(f.count)}]</span>
          </button>
        `;
      })
      .join('');

    bar.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextFilter = btn.getAttribute('data-filter') || 'all';
        if (nextFilter !== state.activeFilter) {
          state.activeFilter = nextFilter;
          renderProjectFilters(data, t);
          renderProjects(data, t, state.lang);
          observeReveals();
          bindMagneticButtons();
          bindTiltCards();
          if (state.lenis && typeof state.lenis.resize === 'function') {
            state.lenis.resize();
          }
        }
      });
    });
  }

  function buildBeforeAfterMediaHtml(proj, loc, t, indexStr) {
    const beforeSrc = escapeHtml(proj.beforeImage.trim());
    const afterSrc = escapeHtml(proj.afterImage.trim());
    const surfaceClass = proj.imageSurface === 'light' ? 'is-light-surface' : '';

    return `
      <div class="project-media qc-compare-card ${surfaceClass}" data-project-id="${escapeHtml(proj.id)}">
        <div class="qc-toolbar">
          <div class="qc-tabs" role="group" aria-label="Before and After Quality Control">
            <button type="button" class="qc-tab is-active" data-qc-mode="split">${escapeHtml(t.projectsSection.splitLabel)}</button>
            <button type="button" class="qc-tab" data-qc-mode="before">${escapeHtml(t.projectsSection.beforeLabel)}</button>
            <button type="button" class="qc-tab" data-qc-mode="after">${escapeHtml(t.projectsSection.afterLabel)}</button>
          </div>
          <button
            type="button"
            class="qc-expand-btn"
            aria-label="${escapeHtml(t.controls.zoomHint)}"
            title="${escapeHtml(t.controls.zoomHint)}"
          >
            <span>⛶</span>
          </button>
        </div>

        <div class="qc-split-stage" data-qc-stage style="--split-pos: 50%;">
          <img src="${afterSrc}" alt="${escapeHtml(loc.title)} — After QC" class="qc-img qc-img-after" loading="lazy" />
          <div class="qc-before-clip">
            <img src="${beforeSrc}" alt="${escapeHtml(loc.title)} — Before QC" class="qc-img qc-img-before" loading="lazy" />
          </div>
          <div class="qc-divider" aria-hidden="true">
            <span class="qc-handle">⇄</span>
          </div>
          <span class="qc-pill qc-pill-left">${escapeHtml(t.projectsSection.beforeLabel)}</span>
          <span class="qc-pill qc-pill-right">${escapeHtml(t.projectsSection.afterLabel)}</span>
        </div>

        <div class="qc-caption-bar">
          <span class="mono-xs">${indexStr} // ${escapeHtml(t.projectsSection.confidentialTag)}</span>
        </div>
      </div>
    `;
  }

  function renderProjects(data, t, lang) {
    const container = document.getElementById('projects-list');
    if (!container || !Array.isArray(data.projects)) return;

    const filtered = data.projects.filter((p) => {
      if (p.visible === false) return false;
      if (state.activeFilter === 'all') return true;
      return p.category === state.activeFilter;
    });

    container.innerHTML = filtered
      .map((proj, idx) => {
        const loc = proj.i18n[lang] || proj.i18n.en;
        const indexStr = padIndex(idx + 1);
        const hasBeforeAfter =
          proj.beforeImage && proj.beforeImage.trim() !== '' && proj.afterImage && proj.afterImage.trim() !== '';
        const hasImage = proj.image && proj.image.trim() !== '';
        const surfaceClass = proj.imageSurface === 'light' ? 'is-light-surface' : '';

        const highlightsHtml = (loc.highlights || [])
          .map((h) => `<li>${escapeHtml(h)}</li>`)
          .join('');

        const techHtml = (proj.tech || [])
          .map((tag) => `<span class="tech-tag">${escapeHtml(tag)}</span>`)
          .join('');

        const linksHtml = `
          ${
            proj.liveUrl
              ? `<a href="${escapeHtml(proj.liveUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs magnetic-btn">
                   <span>${escapeHtml(t.projectsSection.viewLive)}</span>
                   <span aria-hidden="true">↗</span>
                 </a>`
              : ''
          }
          ${
            proj.paperUrl
              ? `<a href="${escapeHtml(proj.paperUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs magnetic-btn">
                   <span>${escapeHtml(t.projectsSection.viewPaper)}</span>
                   <span aria-hidden="true">↗</span>
                 </a>`
              : ''
          }
          ${
            proj.repoUrl
              ? `<a href="${escapeHtml(proj.repoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-xs magnetic-btn">
                   <span>${escapeHtml(t.projectsSection.viewRepo)}</span>
                   <span aria-hidden="true">↗</span>
                 </a>`
              : ''
          }
        `;

        const fallbackWireframe = `
          <div class="project-wireframe">
            <div class="wireframe-head">
              <span class="mono-xs">${escapeHtml(t.projectsSection.previewFallbackTag)}</span>
              <span class="mono-xs">${escapeHtml(loc.categoryLabel)}</span>
            </div>
            ${buildProjectSchematicSvg(proj.id, indexStr, proj.category)}
          </div>
        `;

        let previewHtml = '';
        if (hasBeforeAfter) {
          previewHtml = buildBeforeAfterMediaHtml(proj, loc, t, indexStr);
        } else if (hasImage) {
          previewHtml = `
            <div
              class="project-media zoomable-media tilt-card ${surfaceClass}"
              role="button"
              tabindex="0"
              aria-label="${escapeHtml(t.controls.zoomHint)}: ${escapeHtml(loc.title)}"
              data-zoom-src="${escapeHtml(proj.image.trim())}"
              data-zoom-title="${escapeHtml(loc.title)}"
              data-zoom-badge="${indexStr} // ${escapeHtml(loc.categoryLabel)}"
              data-zoom-light="${proj.imageSurface === 'light' ? 'true' : 'false'}"
            >
              <div class="project-screenshot-stage">
                <img
                  src="${escapeHtml(proj.image.trim())}"
                  alt="${escapeHtml(loc.title)}"
                  loading="lazy"
                  class="project-screenshot"
                />
                <span class="zoom-corner-badge" aria-hidden="true">↗</span>
              </div>
              <template class="project-fallback-tpl">${fallbackWireframe}</template>
            </div>
          `;
        } else {
          previewHtml = `<div class="project-media tilt-card">${fallbackWireframe}</div>`;
        }

        return `
          <article class="project-card spotlight-card reveal">
            <div class="project-card-main">
              <div class="project-top-bar">
                <span class="project-idx">${indexStr}</span>
                <span class="project-date">${escapeHtml(loc.date)}</span>
                <span class="project-cat-pill">${escapeHtml(loc.categoryLabel)}</span>
                <span class="project-status-badge ${proj.isLive ? 'is-live' : ''}">
                  ${proj.isLive ? '<span class="status-dot"></span>' : ''}
                  <span>${escapeHtml(loc.statusBadge)}</span>
                </span>
              </div>

              <h3 class="project-title">${escapeHtml(loc.title)}</h3>
              <p class="project-role">${escapeHtml(loc.role)}</p>

              <ul class="project-highlights">
                ${highlightsHtml}
              </ul>

              <div class="project-footer-row">
                <div class="project-tech-list">
                  ${techHtml}
                </div>
                ${linksHtml.trim() ? `<div class="project-links">${linksHtml}</div>` : ''}
              </div>
            </div>

            <div class="project-card-visual">
              ${previewHtml}
            </div>
          </article>
        `;
      })
      .join('');

    container.querySelectorAll('.project-screenshot').forEach((img) => {
      img.addEventListener('error', () => {
        const wrapper = img.closest('.project-media');
        const tpl = wrapper && wrapper.querySelector('.project-fallback-tpl');
        if (wrapper && tpl) {
          wrapper.classList.remove('zoomable-media', 'is-light-surface');
          wrapper.removeAttribute('role');
          wrapper.removeAttribute('tabindex');
          wrapper.innerHTML = tpl.innerHTML;
        }
      });
    });

    container.querySelectorAll('.zoomable-media').forEach((el) => bindZoomTrigger(el));

    container.querySelectorAll('.qc-compare-card').forEach((card) => {
      const projId = card.getAttribute('data-project-id');
      const projObj = data.projects.find((p) => p.id === projId);
      if (projObj) {
        bindBeforeAfterCard(card, projObj, t, lang);
      }
    });
  }

  function bindBeforeAfterCard(card, proj, t, lang) {
    const stage = card.querySelector('[data-qc-stage]');
    const tabs = card.querySelectorAll('.qc-tab');
    const expandBtn = card.querySelector('.qc-expand-btn');
    const loc = proj.i18n[lang] || proj.i18n.en;
    let currentMode = 'split';

    const setMode = (mode) => {
      currentMode = mode;
      tabs.forEach((btn) => {
        btn.classList.toggle('is-active', btn.getAttribute('data-qc-mode') === mode);
      });
      stage.setAttribute('data-mode', mode);
      if (mode === 'before') {
        stage.style.setProperty('--split-pos', '100%');
      } else if (mode === 'after') {
        stage.style.setProperty('--split-pos', '0%');
      } else {
        stage.style.setProperty('--split-pos', '50%');
      }
    };

    tabs.forEach((btn) => {
      btn.addEventListener('click', () => {
        setMode(btn.getAttribute('data-qc-mode') || 'split');
      });
    });

    let dragging = false;
    const updateSplitFromPointer = (clientX) => {
      if (currentMode !== 'split') return;
      const rect = stage.getBoundingClientRect();
      if (!rect.width) return;
      const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 4), 96);
      stage.style.setProperty('--split-pos', `${pct.toFixed(1)}%`);
    };

    stage.addEventListener('pointerdown', (e) => {
      if (currentMode !== 'split') {
        openLightbox({
          src: currentMode === 'before' ? proj.beforeImage : proj.afterImage,
          title: loc.title,
          badge: currentMode === 'before' ? t.projectsSection.beforeLabel : t.projectsSection.afterLabel,
          lightSurface: true,
          beforeSrc: proj.beforeImage,
          afterSrc: proj.afterImage,
          beforeLabel: t.projectsSection.beforeLabel,
          afterLabel: t.projectsSection.afterLabel,
          initialSide: currentMode
        });
        return;
      }
      dragging = true;
      stage.setPointerCapture(e.pointerId);
      updateSplitFromPointer(e.clientX);
    });

    stage.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      updateSplitFromPointer(e.clientX);
    });

    const endDrag = () => {
      dragging = false;
    };
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);

    if (expandBtn) {
      expandBtn.addEventListener('click', () => {
        const startSide = currentMode === 'before' ? 'before' : 'after';
        openLightbox({
          src: startSide === 'before' ? proj.beforeImage : proj.afterImage,
          title: loc.title,
          badge: startSide === 'before' ? t.projectsSection.beforeLabel : t.projectsSection.afterLabel,
          lightSurface: true,
          beforeSrc: proj.beforeImage,
          afterSrc: proj.afterImage,
          beforeLabel: t.projectsSection.beforeLabel,
          afterLabel: t.projectsSection.afterLabel,
          initialSide: startSide
        });
      });
    }
  }

  function renderEducation(data, t, lang) {
    const container = document.getElementById('education-list');
    if (!container || !Array.isArray(data.education)) return;

    const visibleEdu = data.education.filter((e) => e.visible !== false);

    container.innerHTML = visibleEdu
      .map((edu) => {
        const loc = edu.i18n[lang] || edu.i18n.en;
        const courseworkHtml =
          Array.isArray(loc.coursework) && loc.coursework.length > 0
            ? `
              <div class="edu-coursework">
                <span class="edu-coursework-label">${escapeHtml(t.leadershipSection.courseworkLabel)}:</span>
                <div class="edu-coursework-tags">
                  ${loc.coursework.map((c) => `<span class="tech-tag">${escapeHtml(c)}</span>`).join('')}
                </div>
              </div>
            `
            : '';

        return `
          <article class="edu-card tilt-card spotlight-card">
            <div class="edu-card-top">
              <span class="mono-xs">${escapeHtml(loc.period)}</span>
              ${loc.gpaLabel ? `<span class="gpa-pill">${escapeHtml(loc.gpaLabel)}</span>` : ''}
            </div>
            <h4 class="edu-degree">${escapeHtml(loc.degree)}</h4>
            <p class="edu-inst">${escapeHtml(loc.institution)} — ${escapeHtml(loc.location)}</p>
            ${courseworkHtml}
          </article>
        `;
      })
      .join('');
  }

  function renderOrganizations(data, lang) {
    const container = document.getElementById('organization-list');
    if (!container || !Array.isArray(data.organizations)) return;

    const visibleOrgs = data.organizations.filter((o) => o.visible !== false);

    container.innerHTML = visibleOrgs
      .map((org, idx) => {
        const loc = org.i18n[lang] || org.i18n.en;
        return `
          <article class="org-item">
            <div class="org-item-meta">
              <span class="mono-idx">${padIndex(idx + 1)}</span>
              <span class="mono-xs">${escapeHtml(loc.period)}</span>
            </div>
            <h4 class="org-role">${escapeHtml(loc.role)}</h4>
            <p class="org-name">${escapeHtml(loc.organization)}</p>
            <p class="org-desc">${escapeHtml(loc.summary)}</p>
          </article>
        `;
      })
      .join('');
  }

  function renderSkills(data, lang) {
    const container = document.getElementById('skills-grid');
    if (!container || !data.skills) return;

    const groupsHtml = (data.skills.groups || [])
      .map((g) => {
        const title = g.i18n[lang] || g.i18n.en;
        const tags = (g.items || [])
          .map((skill) => `<span class="skill-chip">${escapeHtml(skill)}</span>`)
          .join('');

        return `
          <article class="skill-card tilt-card spotlight-card reveal">
            <div class="skill-card-head">
              <span class="mono-idx">${escapeHtml(g.code)}</span>
              <h3 class="skill-card-title">${escapeHtml(title)}</h3>
            </div>
            <div class="skill-chip-wrap">
              ${tags}
            </div>
          </article>
        `;
      })
      .join('');

    const spokenTitle =
      (data.skills.spokenHeading && data.skills.spokenHeading[lang]) || 'Spoken Languages';
    const spokenRows = (data.skills.spokenLanguages || [])
      .map((sp) => {
        const loc = sp.i18n[lang] || sp.i18n.en;
        return `
          <div class="spoken-row">
            <div class="spoken-row-top">
              <span class="spoken-name">
                <strong class="mono-prefix">${escapeHtml(sp.code)}</strong>
                ${escapeHtml(loc.name)}
              </span>
              <span class="spoken-level">${escapeHtml(loc.level)}</span>
            </div>
            <div class="spoken-bar-track" aria-hidden="true">
              <div class="spoken-bar-fill" style="width: ${Number(sp.levelPercent) || 50}%"></div>
            </div>
          </div>
        `;
      })
      .join('');

    const spokenCardHtml = `
      <article class="skill-card skill-card-wide spotlight-card reveal">
        <div class="skill-card-head">
          <span class="mono-idx">05</span>
          <h3 class="skill-card-title">${escapeHtml(spokenTitle)}</h3>
        </div>
        <div class="spoken-flex">
          ${spokenRows}
        </div>
      </article>
    `;

    container.innerHTML = groupsHtml + spokenCardHtml;
  }

  /* --------------------------------------------------------------------------
   * DEVELOPER QUICK COMMAND PALETTE (Ctrl+K / Cmd+K)
   * -------------------------------------------------------------------------- */
  function getCommandItems() {
    const data = window.PORTFOLIO_DATA;
    if (!data) return [];
    const t = data.i18n[state.lang] || data.i18n.en;
    const cp = t.commandPalette || {};
    const p = data.profile;
    const cvHref = (data.config.assets && data.config.assets.cvPdf) || 'assets/docs/CV-Hans-Aufa.pdf';

    return [
      {
        group: cp.groupNav || 'Navigation',
        code: '01',
        label: t.nav.overview,
        hint: '#overview',
        run: () => scrollToSection('#overview')
      },
      {
        group: cp.groupNav || 'Navigation',
        code: '02',
        label: t.nav.experience,
        hint: '#experience',
        run: () => scrollToSection('#experience')
      },
      {
        group: cp.groupNav || 'Navigation',
        code: '03',
        label: t.nav.projects,
        hint: '#projects',
        run: () => scrollToSection('#projects')
      },
      {
        group: cp.groupNav || 'Navigation',
        code: '04',
        label: t.nav.leadership,
        hint: '#leadership',
        run: () => scrollToSection('#leadership')
      },
      {
        group: cp.groupNav || 'Navigation',
        code: '05',
        label: t.nav.skills,
        hint: '#skills',
        run: () => scrollToSection('#skills')
      },
      {
        group: cp.groupNav || 'Navigation',
        code: '06',
        label: t.nav.contact,
        hint: '#contact',
        run: () => scrollToSection('#contact')
      },
      {
        group: cp.groupLinks || 'Links & Assets',
        code: '@',
        label: cp.copyEmail || 'Copy Email',
        hint: p.email,
        run: () => copyEmailToClipboard()
      },
      {
        group: cp.groupLinks || 'Links & Assets',
        code: 'PDF',
        label: cp.downloadCv || 'Download CV',
        hint: 'CV-Hans-Aufa.pdf',
        run: () => window.open(cvHref, '_blank', 'noopener')
      },
      {
        group: cp.groupLinks || 'Links & Assets',
        code: 'DOI',
        label: cp.openPaper || 'Published XAI Paper',
        hint: '10.33364/algoritma',
        run: () => window.open('https://doi.org/10.33364/algoritma/v.22-2.2925', '_blank', 'noopener,noreferrer')
      },
      {
        group: cp.groupLinks || 'Links & Assets',
        code: 'LIVE',
        label: cp.openHris || 'Open Live HRIS',
        hint: 'hris.omahvisual.com',
        run: () => window.open('https://hris.omahvisual.com', '_blank', 'noopener,noreferrer')
      },
      {
        group: cp.groupLinks || 'Links & Assets',
        code: 'GH',
        label: cp.openGithub || 'Open GitHub',
        hint: p.githubHandle,
        run: () => window.open(p.githubUrl, '_blank', 'noopener,noreferrer')
      },
      {
        group: cp.groupLinks || 'Links & Assets',
        code: 'IN',
        label: cp.openLinkedin || 'Open LinkedIn',
        hint: p.linkedinHandle,
        run: () => window.open(p.linkedinUrl, '_blank', 'noopener,noreferrer')
      },
      {
        group: cp.groupSystem || 'Interface & Canvas',
        code: 'UI',
        label: cp.switchTheme || 'Toggle Theme',
        hint: state.theme === 'dark' ? 'Dark → Light' : 'Light → Dark',
        run: () => applyTheme(state.theme === 'dark' ? 'light' : 'dark', true)
      },
      {
        group: cp.groupSystem || 'Interface & Canvas',
        code: 'HEX',
        label: cp.accentAzure || 'Accent: Cyber Azure Blue',
        hint: '#38BDF8',
        run: () => applyAccentPreset('azure', true)
      },
      {
        group: cp.groupSystem || 'Interface & Canvas',
        code: 'HEX',
        label: cp.accentCobalt || 'Accent: Royal Electric Cobalt',
        hint: '#4F8CFF',
        run: () => applyAccentPreset('cobalt', true)
      },
      {
        group: cp.groupSystem || 'Interface & Canvas',
        code: 'BG',
        label: cp.canvasDots || 'Canvas: Dots',
        hint: 'DOTS',
        run: () => switchCanvasMode('dot-matrix', true)
      },
      {
        group: cp.groupSystem || 'Interface & Canvas',
        code: 'BG',
        label: cp.canvasWaves || 'Canvas: Waves',
        hint: 'WAVES',
        run: () => switchCanvasMode('wave-grid', true)
      },
      {
        group: cp.groupSystem || 'Interface & Canvas',
        code: 'BG',
        label: cp.canvasNodes || 'Canvas: Nodes',
        hint: 'NODES',
        run: () => switchCanvasMode('particles', true)
      },
      {
        group: cp.groupSystem || 'Interface & Canvas',
        code: 'EN',
        label: cp.langEn || 'English',
        hint: 'EN',
        run: () => setLanguage('en', false, true)
      },
      {
        group: cp.groupSystem || 'Interface & Canvas',
        code: 'ID',
        label: cp.langId || 'Bahasa Indonesia',
        hint: 'ID',
        run: () => setLanguage('id', false, true)
      },
      {
        group: cp.groupSystem || 'Interface & Canvas',
        code: 'FR',
        label: cp.langFr || 'Français',
        hint: 'FR',
        run: () => setLanguage('fr', false, true)
      }
    ];
  }

  function renderCommandList(query) {
    const listEl = document.getElementById('cmd-list');
    if (!listEl) return;

    const q = String(query || '').trim().toLowerCase();
    const allItems = getCommandItems();
    state.cmdFilteredItems = q
      ? allItems.filter(
          (item) =>
            item.label.toLowerCase().includes(q) ||
            item.group.toLowerCase().includes(q) ||
            item.hint.toLowerCase().includes(q) ||
            item.code.toLowerCase().includes(q)
        )
      : allItems;

    if (state.cmdActiveIndex >= state.cmdFilteredItems.length) {
      state.cmdActiveIndex = 0;
    }

    if (state.cmdFilteredItems.length === 0) {
      const t = window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.i18n[state.lang];
      const emptyMsg = (t && t.controls && t.controls.cmdEmpty) || 'No matching commands found.';
      listEl.innerHTML = `<div class="cmd-empty">${escapeHtml(emptyMsg)}</div>`;
      return;
    }

    let currentGroup = '';
    let html = '';

    state.cmdFilteredItems.forEach((item, idx) => {
      if (item.group !== currentGroup) {
        currentGroup = item.group;
        html += `<div class="cmd-group-label">${escapeHtml(currentGroup)}</div>`;
      }
      const isSelected = idx === state.cmdActiveIndex;
      html += `
        <button
          type="button"
          role="option"
          aria-selected="${isSelected ? 'true' : 'false'}"
          class="cmd-item ${isSelected ? 'is-selected' : ''}"
          data-cmd-idx="${idx}"
        >
          <span class="cmd-item-left">
            <span class="cmd-item-code">${escapeHtml(item.code)}</span>
            <span class="cmd-item-label">${escapeHtml(item.label)}</span>
          </span>
          <span class="cmd-item-hint">${escapeHtml(item.hint)}</span>
        </button>
      `;
    });

    listEl.innerHTML = html;

    listEl.querySelectorAll('.cmd-item').forEach((btn) => {
      btn.addEventListener('pointerenter', () => {
        const idx = Number(btn.getAttribute('data-cmd-idx'));
        if (!Number.isNaN(idx)) {
          state.cmdActiveIndex = idx;
          listEl.querySelectorAll('.cmd-item').forEach((b, i) => {
            b.classList.toggle('is-selected', i === idx);
            b.setAttribute('aria-selected', i === idx ? 'true' : 'false');
          });
        }
      });

      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-cmd-idx'));
        const chosen = state.cmdFilteredItems[idx];
        closeCommandPalette();
        if (chosen && typeof chosen.run === 'function') {
          chosen.run();
        }
      });
    });
  }

  function openCommandPalette() {
    const modal = document.getElementById('cmd-modal');
    const input = document.getElementById('cmd-input');
    if (!modal) return;

    if (state.lightboxOpen) closeLightbox();
    if (state.mobileMenuOpen) closeMobileDrawerIfOpen();

    state.cmdOpen = true;
    state.cmdActiveIndex = 0;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-locked');
    if (state.lenis) state.lenis.stop();

    if (input) {
      input.value = '';
      renderCommandList('');
      setTimeout(() => input.focus(), 30);
    } else {
      renderCommandList('');
    }
    updateMobileQuickDock();
  }

  function closeCommandPalette() {
    const modal = document.getElementById('cmd-modal');
    if (!modal || !state.cmdOpen) return;

    state.cmdOpen = false;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (!state.lightboxOpen && !state.mobileMenuOpen) {
      document.body.classList.remove('menu-locked');
      if (state.lenis) state.lenis.start();
    }
    updateMobileQuickDock();
  }

  function initCommandPalette() {
    const trigger = document.getElementById('cmd-trigger');
    const closeBtn = document.getElementById('cmd-close');
    const backdrop = document.getElementById('cmd-backdrop');
    const input = document.getElementById('cmd-input');
    const listEl = document.getElementById('cmd-list');

    if (trigger) {
      trigger.addEventListener('click', () => {
        if (state.cmdOpen) closeCommandPalette();
        else openCommandPalette();
      });
    }
    if (closeBtn) closeBtn.addEventListener('click', closeCommandPalette);
    if (backdrop) backdrop.addEventListener('click', closeCommandPalette);

    if (input) {
      input.addEventListener('input', () => {
        state.cmdActiveIndex = 0;
        renderCommandList(input.value);
      });
    }

    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (state.cmdOpen) closeCommandPalette();
        else openCommandPalette();
        return;
      }

      if (!state.cmdOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closeCommandPalette();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (state.cmdFilteredItems.length > 0) {
          state.cmdActiveIndex = (state.cmdActiveIndex + 1) % state.cmdFilteredItems.length;
          renderCommandList(input ? input.value : '');
          scrollActiveCmdIntoView(listEl);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (state.cmdFilteredItems.length > 0) {
          state.cmdActiveIndex =
            (state.cmdActiveIndex - 1 + state.cmdFilteredItems.length) %
            state.cmdFilteredItems.length;
          renderCommandList(input ? input.value : '');
          scrollActiveCmdIntoView(listEl);
        }
      } else if (e.key === 'Enter') {
        const chosen = state.cmdFilteredItems[state.cmdActiveIndex];
        if (chosen && typeof chosen.run === 'function') {
          e.preventDefault();
          closeCommandPalette();
          chosen.run();
        }
      }
    });
  }

  function scrollActiveCmdIntoView(listEl) {
    if (!listEl) return;
    const selected = listEl.querySelector('.cmd-item.is-selected');
    if (selected && typeof selected.scrollIntoView === 'function') {
      selected.scrollIntoView({ block: 'nearest' });
    }
  }

  function scrollToSection(hash) {
    const target = document.querySelector(hash);
    if (!target) return;
    if (state.lenis) {
      state.lenis.scrollTo(target, { offset: -84, duration: 1.1 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /* --------------------------------------------------------------------------
   * ARCHITECTURAL LIGHTBOX PREVIEW MODAL
   * -------------------------------------------------------------------------- */
  function bindZoomTrigger(el) {
    const activate = () => {
      const src = el.getAttribute('data-zoom-src');
      if (!src) return;
      openLightbox({
        src,
        title: el.getAttribute('data-zoom-title') || '',
        badge: el.getAttribute('data-zoom-badge') || 'PREVIEW',
        lightSurface: el.getAttribute('data-zoom-light') === 'true'
      });
    };

    el.addEventListener('click', activate);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate();
      }
    });
  }

  function openLightbox(opts) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    const badgeEl = document.getElementById('lightbox-badge');
    const stageEl = document.getElementById('lightbox-stage');
    const switcherEl = document.getElementById('lightbox-switcher');
    if (!modal || !img) return;

    img.src = opts.src;
    img.alt = opts.title || 'Preview';
    if (titleEl) titleEl.textContent = opts.title || '';
    if (badgeEl) badgeEl.textContent = opts.badge || 'PREVIEW';
    if (stageEl) {
      stageEl.classList.toggle('is-light-surface', Boolean(opts.lightSurface));
    }

    if (switcherEl) {
      if (opts.beforeSrc && opts.afterSrc) {
        switcherEl.hidden = false;
        const activeSide = opts.initialSide === 'before' ? 'before' : 'after';
        switcherEl.innerHTML = `
          <button type="button" class="qc-tab ${activeSide === 'before' ? 'is-active' : ''}" data-lb-side="before">${escapeHtml(opts.beforeLabel || 'Before')}</button>
          <button type="button" class="qc-tab ${activeSide === 'after' ? 'is-active' : ''}" data-lb-side="after">${escapeHtml(opts.afterLabel || 'After')}</button>
        `;
        switcherEl.querySelectorAll('[data-lb-side]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const side = btn.getAttribute('data-lb-side');
            switcherEl.querySelectorAll('[data-lb-side]').forEach((b) => b.classList.toggle('is-active', b === btn));
            img.src = side === 'before' ? opts.beforeSrc : opts.afterSrc;
            if (badgeEl) {
              badgeEl.textContent = side === 'before' ? opts.beforeLabel : opts.afterLabel;
            }
          });
        });
      } else {
        switcherEl.hidden = true;
        switcherEl.innerHTML = '';
      }
    }

    state.lightboxOpen = true;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-locked');
    if (state.lenis) state.lenis.stop();
    updateMobileQuickDock();
  }

  function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal || !state.lightboxOpen) return;

    state.lightboxOpen = false;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if (!state.mobileMenuOpen && !state.cmdOpen) {
      document.body.classList.remove('menu-locked');
      if (state.lenis) state.lenis.start();
    }
    updateMobileQuickDock();
  }

  function initLightbox() {
    const closeBtn = document.getElementById('lightbox-close');
    const backdrop = document.getElementById('lightbox-backdrop');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.lightboxOpen) {
        closeLightbox();
      }
    });
  }

  /* --------------------------------------------------------------------------
   * LENIS BUTTER-SMOOTH SCROLL (DESKTOP FINE POINTER)
   * -------------------------------------------------------------------------- */
  function initLenisScroll() {
    if (prefersReducedMotion() || !isFinePointer() || typeof window.Lenis !== 'function') {
      return;
    }

    try {
      const lenis = new window.Lenis({
        lerp: 0.092,
        smoothWheel: true,
        wheelMultiplier: 0.96,
        touchMultiplier: 1
      });

      state.lenis = lenis;
      lenis.on('scroll', (e) => {
        if (e && typeof e.velocity === 'number') {
          state.scrollVelocity = e.velocity;
        }
        updateScrollStatus();
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          const hash = anchor.getAttribute('href');
          if (!hash || hash === '#') return;
          const target = document.querySelector(hash);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -84, duration: 1.15 });
          }
        });
      });
    } catch (e) {
      state.lenis = null;
    }
  }

  /* --------------------------------------------------------------------------
   * CUSTOM MAGNETIC DUAL CURSOR (DESKTOP ONLY)
   * -------------------------------------------------------------------------- */
  function initCustomCursor() {
    if (!isFinePointer() || prefersReducedMotion()) return;

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    const label = document.getElementById('cursor-label');
    if (!dot || !ring) return;

    document.documentElement.classList.add('has-custom-cursor');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let visible = false;

    window.addEventListener(
      'pointermove',
      (e) => {
        if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

        if (!visible) {
          visible = true;
          ringX = mouseX;
          ringY = mouseY;
          dot.classList.add('is-visible');
          ring.classList.add('is-visible');
        }

        const target = e.target;
        const zoomTarget = target && target.closest('.zoomable-media, .qc-split-stage');
        const interactiveTarget =
          target &&
          target.closest('a, button, [role="button"], .filter-btn, .lang-btn, .skill-chip, .canvas-mode-btn');

        if (zoomTarget) {
          ring.classList.add('is-zoom');
          ring.classList.remove('is-hover');
          if (label) {
            label.textContent = zoomTarget.classList.contains('qc-split-stage') ? '⇄' : '+';
          }
        } else if (interactiveTarget) {
          ring.classList.add('is-hover');
          ring.classList.remove('is-zoom');
          if (label) label.textContent = '';
        } else {
          ring.classList.remove('is-hover', 'is-zoom');
          if (label) label.textContent = '';
        }
      },
      { passive: true }
    );

    document.addEventListener('pointerleave', () => {
      visible = false;
      dot.classList.remove('is-visible');
      ring.classList.remove('is-visible');
    });

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX.toFixed(1)}px, ${ringY.toFixed(1)}px, 0)`;
      requestAnimationFrame(animateRing);
    };
    requestAnimationFrame(animateRing);
  }

  /* --------------------------------------------------------------------------
   * 3D CARD TILT & SPECULAR GLARE EFFECT (DESKTOP)
   * -------------------------------------------------------------------------- */
  function bindTiltCards() {
    if (!isFinePointer() || prefersReducedMotion()) return;

    document.querySelectorAll('.tilt-card:not([data-tilt-bound])').forEach((card) => {
      card.setAttribute('data-tilt-bound', 'true');

      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;

        const rotY = (px - 0.5) * 5.5;
        const rotX = (0.5 - py) * 5.5;

        card.style.setProperty('--glare-x', `${(px * 100).toFixed(1)}%`);
        card.style.setProperty('--glare-y', `${(py * 100).toFixed(1)}%`);
        card.style.transform = `perspective(1100px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(0)`;
      });

      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* --------------------------------------------------------------------------
   * MOBILE NAVIGATION DRAWER
   * -------------------------------------------------------------------------- */
  let closeMobileDrawerIfOpen = () => {};

  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    if (!toggleBtn || !drawer) return;

    const setOpen = (open) => {
      state.mobileMenuOpen = open;
      toggleBtn.classList.toggle('is-open', open);
      toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      drawer.classList.toggle('is-open', open);
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.classList.toggle('menu-locked', open || state.lightboxOpen || state.cmdOpen);

      if (state.lenis) {
        if (open) state.lenis.stop();
        else if (!state.lightboxOpen && !state.cmdOpen) state.lenis.start();
      }

      const labelEl = document.getElementById('mobile-menu-label');
      const t = window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.i18n[state.lang];
      if (labelEl && t) {
        labelEl.textContent = open ? t.nav.close : t.nav.menu;
      }
      updateMobileQuickDock();
    };

    closeMobileDrawerIfOpen = () => {
      if (state.mobileMenuOpen) setOpen(false);
    };

    toggleBtn.addEventListener('click', () => setOpen(!state.mobileMenuOpen));

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && state.mobileMenuOpen) {
        setOpen(false);
      }
    });

    window.addEventListener(
      'resize',
      () => {
        if (window.innerWidth >= 1120 && state.mobileMenuOpen) {
          setOpen(false);
        }
      },
      { passive: true }
    );
  }

  /* --------------------------------------------------------------------------
   * COPY EMAIL INTERACTION + FLOATING TOAST
   * -------------------------------------------------------------------------- */
  async function copyEmailToClipboard() {
    const email =
      (window.PORTFOLIO_DATA &&
        window.PORTFOLIO_DATA.profile &&
        window.PORTFOLIO_DATA.profile.email) ||
      'hans141203@gmail.com';
    const t = window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.i18n[state.lang];

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const temp = document.createElement('textarea');
        temp.value = email;
        temp.style.position = 'fixed';
        temp.style.opacity = '0';
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }

      const toastMsg =
        (t && t.controls && t.controls.toastCopied) || 'Email copied to clipboard';
      showToast(`${toastMsg}: ${email}`);
      return true;
    } catch (err) {
      window.location.href = `mailto:${email}`;
      return false;
    }
  }

  function initCopyEmail() {
    const btn = document.getElementById('copy-email-btn');
    const textSpan = document.getElementById('copy-email-text');
    if (!btn || !textSpan) return;

    let resetTimer = null;
    btn.addEventListener('click', async () => {
      const ok = await copyEmailToClipboard();
      if (!ok) return;

      const t = window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.i18n[state.lang];
      btn.classList.add('is-copied');
      if (t && t.contactSection) {
        textSpan.textContent = t.contactSection.copiedEmail;
      }

      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        btn.classList.remove('is-copied');
        const latestT = window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.i18n[state.lang];
        if (latestT && latestT.contactSection) {
          textSpan.textContent = latestT.contactSection.copyEmail;
        }
      }, 2200);
    });
  }

  /* --------------------------------------------------------------------------
   * SCROLL PROGRESS, PARALLAX WATERMARKS, MOBILE QUICK-DOCK & SECTION SPY
   * -------------------------------------------------------------------------- */
  function updateScrollStatus() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    if (!state.lenis) {
      state.scrollVelocity = (scrollTop - state.lastScrollY) * 0.25;
    }
    state.lastScrollY = scrollTop;

    const docHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const ratio = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
    const pct = Math.round(ratio * 100);

    const bar = document.getElementById('scroll-progress-bar');
    if (bar) {
      bar.style.transform = `scaleX(${ratio})`;
    }

    const readout = document.getElementById('scroll-readout');
    const t = window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.i18n[state.lang];
    const label = (t && t.controls && t.controls.scrollLabel) || 'SCROLL';
    if (readout) {
      readout.textContent = `${label} ${padIndex(pct)}%`;
    }

    updateSectionWatermarks();
    updateMobileQuickDock();
  }

  function updateSectionWatermarks() {
    if (prefersReducedMotion()) return;
    const vh = window.innerHeight || 800;
    const watermarks = document.querySelectorAll('.section-watermark');
    for (let i = 0; i < watermarks.length; i++) {
      const wm = watermarks[i];
      const parent = wm.parentElement;
      if (!parent) continue;
      const rect = parent.getBoundingClientRect();
      if (rect.bottom < -120 || rect.top > vh + 120) continue;
      const progress = (rect.top + rect.height * 0.5 - vh * 0.5) / (vh * 0.5);
      const shift = Math.max(Math.min(progress * -22, 26), -26);
      wm.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
    }
  }

  function updateMobileQuickDock() {
    const dock = document.getElementById('mobile-quick-dock');
    if (!dock) return;

    if (window.innerWidth >= 768 || state.mobileMenuOpen || state.lightboxOpen || state.cmdOpen) {
      dock.classList.remove('is-visible');
      return;
    }

    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const contactEl = document.getElementById('contact');
    let nearContact = false;
    if (contactEl) {
      const rect = contactEl.getBoundingClientRect();
      nearContact = rect.top < window.innerHeight * 0.65;
    }

    const shouldShow = scrollTop > 360 && !nearContact;
    dock.classList.toggle('is-visible', shouldShow);
  }

  function initScrollAndSpy() {
    updateScrollStatus();
    window.addEventListener('scroll', updateScrollStatus, { passive: true });
    window.addEventListener('resize', updateMobileQuickDock, { passive: true });

    const sectionIds = ['overview', 'experience', 'projects', 'leadership', 'skills', 'contact'];
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

    if ('IntersectionObserver' in window) {
      const spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id;
              navLinks.forEach((link) => {
                link.classList.toggle('is-active', link.getAttribute('data-section') === id);
              });
            }
          });
        },
        { rootMargin: '-32% 0px -55% 0px', threshold: 0 }
      );

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) spy.observe(el);
      });
    }
  }

  function updateLiveClock() {
    const clockEl = document.getElementById('live-clock');
    if (!clockEl) return;
    const data = window.PORTFOLIO_DATA;
    const t = data && data.i18n && data.i18n[state.lang];
    const city = (t && t.controls && t.controls.localTimeLabel) || 'MALANG, ID';

    try {
      const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: (data && data.profile && data.profile.timezone) || 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      clockEl.textContent = `${city} — ${formatter.format(new Date())} WIB`;
    } catch (e) {
      clockEl.textContent = `${city} — UTC+7`;
    }
  }

  /* --------------------------------------------------------------------------
   * REVEAL ANIMATIONS & MAGNETIC BUTTONS
   * -------------------------------------------------------------------------- */
  function observeReveals() {
    const items = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!items.length) return;

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    if (!state.revealObserver) {
      state.revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              state.revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -36px 0px' }
      );
    }

    items.forEach((el) => state.revealObserver.observe(el));
  }

  function bindMagneticButtons() {
    if (!isFinePointer() || prefersReducedMotion()) return;

    document.querySelectorAll('.magnetic-btn:not([data-magnetic-bound])').forEach((btn) => {
      btn.setAttribute('data-magnetic-bound', 'true');
      btn.addEventListener('pointermove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.24;
        btn.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      });
      btn.addEventListener('pointerleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* --------------------------------------------------------------------------
   * BOOTSTRAP
   * -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initBrandingAndLinks();
    initTheme();
    initMobileMenu();
    initLightbox();
    initCommandPalette();
    initCanvasSwitcher();
    initLanguage();
    initTechMarquee();
    initSpotlightTracking();
    initCopyEmail();
    initScrollAndSpy();
    initLenisScroll();
    initCustomCursor();

    if (window.PortfolioCanvas && typeof window.PortfolioCanvas.init === 'function') {
      window.PortfolioCanvas.init();
    }

    initBootCurtain();

    updateLiveClock();
    setInterval(updateLiveClock, 15000);
  });
})();
