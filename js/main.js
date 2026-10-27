/**
 * ============================================================================
 * MAIN APPLICATION CONTROLLER
 * Handles DOM Rendering, EN/ID/FR i18n, Dark/Light Theme, Smart Fallbacks,
 * Project Category Filtering, Scroll Spy, and Kinetic Micro-Interactions.
 * ============================================================================
 */

(function () {
  'use strict';

  const STORAGE_THEME_KEY = 'hans_portfolio_theme';
  const STORAGE_LANG_KEY = 'hans_portfolio_lang';

  const state = {
    lang: 'en',
    theme: 'dark',
    activeFilter: 'all',
    mobileMenuOpen: false,
    revealObserver: null
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

  /* --------------------------------------------------------------------------
   * SMART SVG BLUEPRINT GENERATORS (ZERO BROKEN IMAGES)
   * -------------------------------------------------------------------------- */
  function createFaviconDataUri(monogram) {
    const text = escapeHtml((monogram || 'HA').slice(0, 3));
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0B0B0B"/><rect x="3" y="3" width="58" height="58" rx="9" fill="none" stroke="#D2FF00" stroke-opacity="0.45" stroke-width="1.5"/><text x="32" y="39" text-anchor="middle" font-family="monospace" font-weight="700" font-size="22" fill="#F4F4F0">${text}</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
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
    // Distinct minimalist architectural SVG schematics per project type
    let motif = '';
    if (projectId === 'hris-attendance') {
      motif = `
        <rect x="24" y="34" width="96" height="68" rx="4" stroke="currentColor" stroke-opacity="0.26" />
        <line x1="24" y1="50" x2="120" y2="50" stroke="currentColor" stroke-opacity="0.2" />
        <rect x="34" y="60" width="44" height="8" rx="2" class="svg-accent-fill" fill-opacity="0.85" />
        <rect x="34" y="75" width="72" height="6" rx="2" fill="currentColor" fill-opacity="0.2" />
        <rect x="34" y="87" width="56" height="6" rx="2" fill="currentColor" fill-opacity="0.2" />
        <circle cx="196" cy="68" r="30" class="svg-accent-stroke" stroke-width="1.4" />
        <circle cx="196" cy="68" r="18" stroke="currentColor" stroke-opacity="0.3" stroke-dasharray="3 3" />
        <circle cx="196" cy="68" r="5" class="svg-accent-fill" />
        <path d="M120 68 H166" class="svg-accent-stroke" stroke-dasharray="4 3" />
      `;
    } else if (projectId === 'operational-management') {
      motif = `
        <rect x="26" y="36" width="60" height="28" rx="4" stroke="currentColor" stroke-opacity="0.3" />
        <rect x="100" y="36" width="60" height="28" rx="4" class="svg-accent-stroke" stroke-width="1.4" />
        <rect x="174" y="36" width="60" height="28" rx="4" stroke="currentColor" stroke-opacity="0.3" />
        <rect x="63" y="84" width="134" height="28" rx="4" stroke="currentColor" stroke-opacity="0.26" />
        <path d="M56 64 V84 M130 64 V84 M204 64 V84" stroke="currentColor" stroke-opacity="0.28" />
        <circle cx="130" cy="50" r="4" class="svg-accent-fill" />
      `;
    } else if (projectId === 'mini-erp-appsheet') {
      motif = `
        <rect x="24" y="34" width="74" height="76" rx="4" stroke="currentColor" stroke-opacity="0.26" />
        <line x1="24" y1="52" x2="98" y2="52" stroke="currentColor" stroke-opacity="0.2" />
        <line x1="24" y1="70" x2="98" y2="70" stroke="currentColor" stroke-opacity="0.2" />
        <line x1="24" y1="88" x2="98" y2="88" stroke="currentColor" stroke-opacity="0.2" />
        <path d="M98 62 H142" class="svg-accent-stroke" stroke-width="1.4" />
        <rect x="142" y="34" width="92" height="32" rx="4" class="svg-accent-stroke" stroke-width="1.4" />
        <rect x="142" y="78" width="92" height="32" rx="4" stroke="currentColor" stroke-opacity="0.28" />
        <path d="M188 66 V78" class="svg-accent-stroke" />
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
        <rect x="28" y="34" width="204" height="74" rx="5" stroke="currentColor" stroke-opacity="0.26" />
        <line x1="28" y1="52" x2="232" y2="52" stroke="currentColor" stroke-opacity="0.2" />
        <circle cx="42" cy="43" r="2.5" class="svg-accent-fill" />
        <circle cx="52" cy="43" r="2.5" fill="currentColor" fill-opacity="0.3" />
        <rect x="44" y="66" width="76" height="28" rx="3" class="svg-accent-stroke" />
        <rect x="134" y="66" width="82" height="10" rx="2" fill="currentColor" fill-opacity="0.2" />
        <rect x="134" y="84" width="58" height="10" rx="2" fill="currentColor" fill-opacity="0.14" />
      `;
    }

    return `
      <svg class="project-wireframe-svg" viewBox="0 0 260 136" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="grid-${escapeHtml(projectId)}" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" stroke-opacity="0.06" stroke-width="0.75" />
          </pattern>
        </defs>
        <rect width="260" height="136" fill="url(#grid-${escapeHtml(projectId)})" />
        ${motif}
        <text x="244" y="126" text-anchor="end" class="wireframe-idx-label">${escapeHtml(indexStr)}</text>
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

    // 1. Smart Favicon with automatic inline SVG fallback
    const faviconEl = document.getElementById('site-favicon');
    if (faviconEl) {
      if (branding.faviconPath && branding.faviconPath.trim() !== '') {
        const probe = new Image();
        probe.onload = () => {
          faviconEl.href = branding.faviconPath.trim();
        };
        probe.onerror = () => {
          faviconEl.href = createFaviconDataUri(branding.monogram);
        };
        probe.src = branding.faviconPath.trim();
      } else {
        faviconEl.href = createFaviconDataUri(branding.monogram);
      }
    }

    // 2. Smart Header Logo / Geometric Monogram Fallback
    const brandMarkSlot = document.getElementById('brand-mark-slot');
    const brandNameSlot = document.getElementById('brand-name-slot');
    if (brandNameSlot && branding.shortName) {
      brandNameSlot.textContent = branding.shortName;
    }
    if (brandMarkSlot) {
      const fallbackText = branding.monogram || 'HA';
      if (branding.logoImage && branding.logoImage.trim() !== '') {
        brandMarkSlot.innerHTML = '';
        const img = document.createElement('img');
        img.src = branding.logoImage.trim();
        img.alt = p.fullName;
        img.className = 'brand-logo-img';
        img.onerror = () => {
          brandMarkSlot.textContent = fallbackText;
        };
        brandMarkSlot.appendChild(img);
      } else {
        brandMarkSlot.textContent = fallbackText;
      }
    }

    // 3. Personal Name & Coordinates
    const firstEl = document.getElementById('hero-first-name');
    const lastEl = document.getElementById('hero-last-name');
    if (firstEl && p.displayFirst) firstEl.textContent = p.displayFirst;
    if (lastEl && p.displayLast) lastEl.textContent = p.displayLast;

    const coordsEl = document.getElementById('statusbar-coords');
    if (coordsEl && p.coordinates) coordsEl.textContent = p.coordinates;

    // 4. Sync Contact & CV URLs from single source of truth
    const cvHref = (assets && assets.cvPdf) || 'assets/docs/CV-Hans-Aufa.pdf';
    ['hero-cv-btn', 'contact-cv-btn', 'mobile-cv-link'].forEach((id) => {
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
  }

  /* --------------------------------------------------------------------------
   * THEME CONTROLLER (DARK / LIGHT MODE)
   * -------------------------------------------------------------------------- */
  function initTheme() {
    const data = window.PORTFOLIO_DATA;
    const saved = safeGetStorage(STORAGE_THEME_KEY);

    if (saved === 'dark' || saved === 'light') {
      state.theme = saved;
    } else if (data && data.config && (data.config.defaultTheme === 'dark' || data.config.defaultTheme === 'light')) {
      state.theme = data.config.defaultTheme;
    } else {
      const prefersLight =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      state.theme = prefersLight ? 'light' : 'dark';
    }

    applyTheme(state.theme, false);

    // Listen to OS preference changes if user hasn't manually pinned a theme
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
   * LANGUAGE / i18n CONTROLLER (EN | ID | FR)
   * -------------------------------------------------------------------------- */
  function initLanguage() {
    const data = window.PORTFOLIO_DATA;
    const saved = safeGetStorage(STORAGE_LANG_KEY);
    const fallback = (data && data.config && data.config.defaultLang) || 'en';

    state.lang = saved && ['en', 'id', 'fr'].includes(saved) ? saved : fallback;

    const switcher = document.getElementById('lang-switcher');
    if (switcher) {
      switcher.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-btn');
        if (!btn) return;
        const nextLang = btn.getAttribute('data-lang');
        if (nextLang && nextLang !== state.lang) {
          setLanguage(nextLang, true);
        }
      });
    }

    setLanguage(state.lang, false);
  }

  function setLanguage(lang, persist) {
    const data = window.PORTFOLIO_DATA;
    if (!data || !data.i18n || !data.i18n[lang]) return;

    state.lang = lang;
    document.documentElement.setAttribute('lang', lang);

    if (persist) {
      safeSetStorage(STORAGE_LANG_KEY, lang);
    }

    // Update active state on language buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isCurrent = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isCurrent);
      btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
    });

    const t = data.i18n[lang];

    // Update document title & meta description
    if (t.metaTitle) document.title = t.metaTitle;
    const metaDesc = document.getElementById('meta-description');
    if (metaDesc && t.metaDescription) {
      metaDesc.setAttribute('content', t.metaDescription);
    }

    // Update static elements bearing data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      // Keep mobile menu label synced with open/close state
      if (el.id === 'mobile-menu-label') {
        el.textContent = state.mobileMenuOpen ? t.nav.close : t.nav.menu;
        return;
      }
      const val = getNestedValue(t, key);
      if (typeof val === 'string') {
        el.textContent = val;
      }
    });

    const langGroup = document.getElementById('lang-switcher');
    if (langGroup && t.controls && t.controls.langLabel) {
      langGroup.setAttribute('aria-label', t.controls.langLabel);
    }

    updateThemeToggleLabel();
    renderAllDynamicSections();
    updateScrollStatus();
    updateLiveClock();
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
      <div class="portrait-photo-frame">
        <img
          src="${escapeHtml(imgPath)}"
          alt="${escapeHtml(data.profile.fullName)}"
          class="portrait-photo-img"
          id="profile-photo-img"
        />
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
  }

  function renderHeroMetrics(t) {
    const container = document.getElementById('hero-metrics');
    if (!container || !t.hero || !Array.isArray(t.hero.metrics)) return;

    container.innerHTML = t.hero.metrics
      .map(
        (m, idx) => `
        <div class="metric-cell">
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
        <article class="pillar-card reveal">
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
        }
      });
    });
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
        const hasImage = proj.image && proj.image.trim() !== '';

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

        const previewHtml = hasImage
          ? `
            <div class="project-media" data-project-id="${escapeHtml(proj.id)}">
              <img
                src="${escapeHtml(proj.image.trim())}"
                alt="${escapeHtml(loc.title)}"
                loading="lazy"
                class="project-screenshot"
              />
              <template class="project-fallback-tpl">${fallbackWireframe}</template>
            </div>
          `
          : `<div class="project-media">${fallbackWireframe}</div>`;

        return `
          <article class="project-card reveal">
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

    // Attach smart image fallback handler for custom project screenshots
    container.querySelectorAll('.project-screenshot').forEach((img) => {
      img.addEventListener('error', () => {
        const wrapper = img.closest('.project-media');
        const tpl = wrapper && wrapper.querySelector('.project-fallback-tpl');
        if (wrapper && tpl) {
          wrapper.innerHTML = tpl.innerHTML;
        }
      });
    });
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
          <article class="edu-card">
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
          <article class="skill-card reveal">
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
      <article class="skill-card skill-card-wide reveal">
        <div class="skill-card-head">
          <span class="mono-idx">05</span>
          <h3 class="skill-card-title">${escapeHtml(spokenTitle)}</h3>
        </div>
        <div class="spoken-grid">
          ${spokenRows}
        </div>
      </article>
    `;

    container.innerHTML = groupsHtml + spokenCardHtml;
  }

  /* --------------------------------------------------------------------------
   * MOBILE NAVIGATION DRAWER
   * -------------------------------------------------------------------------- */
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
      document.body.classList.toggle('menu-locked', open);

      const labelEl = document.getElementById('mobile-menu-label');
      const t = window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.i18n[state.lang];
      if (labelEl && t) {
        labelEl.textContent = open ? t.nav.close : t.nav.menu;
      }
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
        if (window.innerWidth >= 1024 && state.mobileMenuOpen) {
          setOpen(false);
        }
      },
      { passive: true }
    );
  }

  /* --------------------------------------------------------------------------
   * COPY EMAIL INTERACTION
   * -------------------------------------------------------------------------- */
  function initCopyEmail() {
    const btn = document.getElementById('copy-email-btn');
    const textSpan = document.getElementById('copy-email-text');
    if (!btn || !textSpan) return;

    let resetTimer = null;
    btn.addEventListener('click', async () => {
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
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  /* --------------------------------------------------------------------------
   * SCROLL PROGRESS, SECTION SPY & LIVE MALANG CLOCK
   * -------------------------------------------------------------------------- */
  function updateScrollStatus() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
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
  }

  function initScrollAndSpy() {
    updateScrollStatus();
    window.addEventListener('scroll', updateScrollStatus, { passive: true });

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
   * REVEAL ANIMATIONS & MAGNETIC BUTTONS (LANDO NORRIS KINETIC FEEL)
   * -------------------------------------------------------------------------- */
  function observeReveals() {
    const items = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!items.length) return;

    const reduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
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
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );
    }

    items.forEach((el) => state.revealObserver.observe(el));
  }

  function bindMagneticButtons() {
    const canHover =
      window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reduced) return;

    document.querySelectorAll('.magnetic-btn:not([data-magnetic-bound])').forEach((btn) => {
      btn.setAttribute('data-magnetic-bound', 'true');
      btn.addEventListener('pointermove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.22;
        btn.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      });
      btn.addEventListener('pointerleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* --------------------------------------------------------------------------
   * SAFE LOCALSTORAGE WRAPPERS
   * -------------------------------------------------------------------------- */
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
      // Ignore private browsing quota errors
    }
  }

  /* --------------------------------------------------------------------------
   * BOOTSTRAP
   * -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initBrandingAndLinks();
    initTheme();
    initMobileMenu();
    initLanguage();
    initCopyEmail();
    initScrollAndSpy();

    if (window.PortfolioCanvas && typeof window.PortfolioCanvas.init === 'function') {
      window.PortfolioCanvas.init();
    }

    updateLiveClock();
    setInterval(updateLiveClock, 15000);
  });
})();

