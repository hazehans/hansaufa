/**
 * ============================================================================
 * CENTRAL DATA & CONFIGURATION (SINGLE SOURCE OF TRUTH)
 * Portfolio — Hans Adiyatma Putra Aufa
 * ============================================================================
 * Edit this file to update personal info, links, assets, project visibility,
 * background settings, and multi-language translations (EN, ID, FR).
 */

window.PORTFOLIO_DATA = {
  /* --------------------------------------------------------------------------
   * 1. GLOBAL SITE CONFIGURATION & ASSET PATHS
   * -------------------------------------------------------------------------- */
  config: {
    defaultLang: 'en',          // Pilihan: 'en' | 'id' | 'fr' (Default landing SELALU Bahasa Inggris)
    persistLanguage: false,     // false = setiap buka/refresh selalu kembali ke defaultLang ('en')
    defaultTheme: 'system',     // Pilihan: 'system' | 'dark' | 'light'
    accentPreset: 'azure',      // Pilihan: 'azure' (Opsi A Cyber Azure) | 'cobalt' (Opsi B Royal Cobalt)
    enableBootIntro: true,      // true = tampilkan Architectural Curtain Intro dengan quote bergantian

    bootQuotes: [
      { text: 'Simplicity is prerequisite for reliability.', author: 'Edsger W. Dijkstra' },
      { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
      { text: 'Good design is as little design as possible.', author: 'Dieter Rams' },
      { text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
      { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
      { text: 'Details are not the details. They make the design.', author: 'Charles Eames' }
    ],

    branding: {
      monogram: 'HA',           // Teks fallback logo geometris jika logoImage dikosongkan
      shortName: 'HANS AUFA',
      faviconPath: 'assets/icons/favicon.svg',
      logoImage: 'assets/icons/logo.webp', // Kosongkan "" jika ingin kembali ke monogram "HA"
      useLogoAsFavicon: true    // Otomatis memotong logoImage menjadi favicon persegi tajam
    },

    background: {
      mode: 'canvas',           // Pilihan: 'canvas' (animasi interaktif) | 'image' (gambar statis)
      canvasStyle: 'dot-matrix', // Pilihan: 'dot-matrix' | 'wave-grid' | 'particles'
      imagePath: '',            // Contoh: 'assets/images/bg/custom-bg.jpg' (dipakai saat mode: 'image')
      imageOpacity: 0.16,
      interactive: true
    },

    marqueeItems: [
      'LARAVEL 12',
      'NEXT.JS',
      'EXPLAINABLE AI (XAI)',
      'TABULARBERT + PCA',
      'HIKVISION ISAPI BIOMETRICS',
      'ENTERPRISE MINI ERP',
      'RELATIONAL DATA QA',
      'PUBLISHED DOI RESEARCH',
      'MYSQL & POSTGRESQL'
    ],

    assets: {
      // Kosongkan "" untuk menampilkan kartu arsitektural monogram "HA" otomatis
      profileImage: 'assets/images/profile/hans-profile.jpg',
      cvPdf: 'assets/docs/CV-Hans-Aufa.pdf'
    }
  },

  /* --------------------------------------------------------------------------
   * 2. PERSONAL IDENTITY & CONTACT LINKS
   * -------------------------------------------------------------------------- */
  profile: {
    fullName: 'Hans Adiyatma Putra Aufa',
    displayFirst: 'HANS ADIYATMA',
    displayLast: 'PUTRA AUFA',
    coordinates: "07°58'S 112°37'E",
    timezone: 'Asia/Jakarta',
    gpa: '3.78 / 4.00',
    email: 'hans141203@gmail.com',
    phoneDisplay: '+62 812 3026 7897',
    whatsappUrl: 'https://wa.me/6281230267897',
    linkedinUrl: 'https://www.linkedin.com/in/hans-aufa',
    linkedinHandle: 'linkedin.com/in/hans-aufa',
    githubUrl: 'https://github.com/hazehans',
    githubHandle: 'github.com/hazehans'
  },

  /* --------------------------------------------------------------------------
   * 3. UI & SECTION TRANSLATIONS (i18n: EN | ID | FR)
   * -------------------------------------------------------------------------- */
  i18n: {
    en: {
      metaTitle: 'Hans Aufa',
      metaDescription: 'Portfolio of Hans Adiyatma Putra Aufa (S.Kom) — Informatics graduate (3.78 GPA) specializing in Full-Stack Web Development, Enterprise Systems, Data QA, and Explainable AI.',
      nav: {
        overview: 'Overview',
        experience: 'Experience',
        projects: 'Projects',
        leadership: 'Leadership',
        skills: 'Capabilities',
        contact: 'Contact',
        menu: 'Menu',
        close: 'Close'
      },
      controls: {
        themeDark: 'Dark',
        themeLight: 'Light',
        toggleThemeLabel: 'Switch color theme',
        langLabel: 'Select language',
        scrollLabel: 'SCROLL',
        localTimeLabel: 'MALANG, ID',
        zoomHint: 'Click to inspect full preview',
        closeModal: 'Close preview',
        cmdLabel: 'Quick Command Palette',
        cmdPlaceholder: 'Type a command or jump to section...',
        cmdEmpty: 'No matching commands found.',
        canvasDots: 'DOTS',
        canvasWaves: 'WAVES',
        canvasNodes: 'NODES',
        toastCopied: 'Email copied to clipboard',
        toastCanvas: 'Canvas mode switched to',
        dockCv: 'CV ↓',
        dockTop: 'Top ↑'
      },
      commandPalette: {
        groupNav: 'Navigation',
        groupLinks: 'Featured Links & Assets',
        groupSystem: 'Interface & Canvas',
        copyEmail: 'Copy Direct Email Address',
        downloadCv: 'Download Curriculum Vitae (PDF)',
        openPaper: 'Read Published XAI Paper (DOI)',
        openHris: 'Open Live HRIS Platform',
        openGithub: 'Open GitHub Profile (@hazehans)',
        openLinkedin: 'Open LinkedIn Profile',
        switchTheme: 'Toggle Dark / Light Theme',
        canvasDots: 'Canvas: Architectural Dot Matrix',
        canvasWaves: 'Canvas: Kinetic Wave Grid',
        canvasNodes: 'Canvas: Neural Particle Network',
        langEn: 'Language: English (EN)',
        langId: 'Language: Bahasa Indonesia (ID)',
        langFr: 'Language: Français (FR)'
      },
      hero: {
        eyebrow: 'PORTFOLIO ARCHIVE // EDITION 2026',
        availability: 'Available for Full-Stack, System & Data/AI Roles',
        roleTagline: 'Full-Stack Developer & Data / AI Engineer',
        location: 'Malang, Indonesia',
        almaMater: 'University of Muhammadiyah Malang — B.Comp.Sc. (S.Kom), Informatics (GPA 3.78 / 4.00)',
        summary: 'Dedicated Informatics (Computer Science) graduate with a 3.78/4.00 GPA, combining strong expertise in Full-Stack Web Development, enterprise system integration, and Data Science / Explainable AI. Proven track record in building production-ready internal platforms (HRIS, Operational Management, Mini ERP), integrating hardware biometric APIs (ISAPI), and designing reliable data architectures. Demonstrated leadership as former Vice President of the Data Science Club.',
        ctaProjects: 'View Projects',
        ctaDownloadCv: 'Download CV',
        ctaContact: 'Get in Touch',
        portraitCaption: 'ARCHITECTURAL PROFILE // SYSTEM & AI ENGINEER',
        portraitDegree: 'S.Kom (Informatics) — UMM',
        metrics: [
          { value: '3.78', suffix: '/ 4.00', label: 'Cumulative GPA' },
          { value: '08', suffix: 'Systems', label: 'Production & AI Builds' },
          { value: '100%', suffix: 'Integrity', label: 'Data QA Standard' },
          { value: '03', suffix: 'Languages', label: 'ID · EN · FR' }
        ]
      },
      overview: {
        index: '01',
        kicker: 'CORE ARCHITECTURE',
        title: 'Engineering Reliable Systems & Interpretable Intelligence',
        subtitle: 'Bridging operational software engineering, strict data quality assurance, and transparent machine learning models.',
        pillars: [
          {
            num: '01',
            title: 'Full-Stack & Enterprise Integration',
            desc: 'Architecting end-to-end internal platforms (HRIS, Operational Management, Mini ERP), RESTful APIs, RBAC security, and direct hardware biometric synchronization via Hikvision ISAPI.'
          },
          {
            num: '02',
            title: 'Relational Schema & Data QA',
            desc: 'Transforming complex raw spreadsheets (123+ columns and merged cells) into normalized relational Parent-Child architectures with 100% zero-duplication integrity.'
          },
          {
            num: '03',
            title: 'Data Science & Explainable AI (XAI)',
            desc: 'Building peer-reviewed classification and recommendation models (TabularBERT + PCA) where predictions remain transparent, auditable, and actionable.'
          }
        ]
      },
      experienceSection: {
        index: '02',
        kicker: 'CAREER TRAJECTORY',
        title: 'Work Experience',
        subtitle: 'Delivering enterprise software, automated workflows, and verified relational datasets across private and public institutions.'
      },
      projectsSection: {
        index: '03',
        kicker: 'SELECTED WORKS',
        title: 'Featured Projects',
        subtitle: 'Production systems, normalized relational architectures, and published AI research engineered for reliability and clarity.',
        filters: {
          all: 'All Works',
          fullstack: 'Full-Stack & Systems',
          data: 'Data, AI & QA'
        },
        viewLive: 'Live System',
        viewRepo: 'GitHub Repo',
        viewPaper: 'Published Paper (DOI)',
        beforeLabel: 'Before QC',
        afterLabel: 'After QC',
        splitLabel: 'Split Compare',
        confidentialTag: 'Sanitized Enterprise Sample',
        previewFallbackTag: 'SYSTEM BLUEPRINT'
      },
      leadershipSection: {
        index: '04',
        kicker: 'ACADEMIC & COMMUNITY',
        title: 'Education & Leadership',
        subtitle: 'Academic excellence paired with executive leadership in technical student organizations.',
        educationHeading: 'Academic Foundation',
        courseworkLabel: 'Key Coursework',
        orgHeading: 'Organizational Leadership'
      },
      skillsSection: {
        index: '05',
        kicker: 'TECHNICAL MATRIX',
        title: 'Skills & Languages',
        subtitle: 'Core languages, frameworks, relational databases, developer tooling, and multilingual communication.'
      },
      contactSection: {
        index: '06',
        kicker: 'INITIATE DIALOGUE',
        title: 'Let’s Build Resilient Digital Systems Together.',
        subtitle: 'Open for Full-Stack Engineering, System Analysis, Data Engineering, and AI/ML opportunities — remote or on-site.',
        emailLabel: 'Direct Email',
        copyEmail: 'Copy Address',
        copiedEmail: 'Copied!',
        sendEmail: 'Send Email',
        whatsappLabel: 'WhatsApp / Phone',
        chatWhatsapp: 'Message on WhatsApp',
        downloadCvLabel: 'Curriculum Vitae',
        downloadCvBtn: 'Download PDF Resume'
      },
      footer: {
        rights: 'All rights reserved.',
        crafted: 'Minimalist Kinetic Architecture — Hosted on GitHub Pages.',
        backToTop: 'Back to Top ↑'
      }
    },

    id: {
      metaTitle: 'Hans Aufa',
      metaDescription: 'Portofolio Hans Adiyatma Putra Aufa, S.Kom — Lulusan S1 Informatika (IPK 3.78) dengan spesialisasi Full-Stack Web Development, Integrasi Sistem Enterprise, Data QA, dan Explainable AI.',
      nav: {
        overview: 'Ringkasan',
        experience: 'Pengalaman',
        projects: 'Proyek',
        leadership: 'Organisasi',
        skills: 'Keahlian',
        contact: 'Kontak',
        menu: 'Menu',
        close: 'Tutup'
      },
      controls: {
        themeDark: 'Gelap',
        themeLight: 'Terang',
        toggleThemeLabel: 'Ganti tema warna',
        langLabel: 'Pilih bahasa',
        scrollLabel: 'GULIR',
        localTimeLabel: 'MALANG, ID',
        zoomHint: 'Klik untuk memperbesar gambar',
        closeModal: 'Tutup pratinjau',
        cmdLabel: 'Panel Perintah Cepat',
        cmdPlaceholder: 'Ketik perintah atau lompat ke bagian...',
        cmdEmpty: 'Perintah tidak ditemukan.',
        canvasDots: 'DOTS',
        canvasWaves: 'WAVES',
        canvasNodes: 'NODES',
        toastCopied: 'Alamat email berhasil disalin',
        toastCanvas: 'Mode kanvas diubah ke',
        dockCv: 'CV ↓',
        dockTop: 'Atas ↑'
      },
      commandPalette: {
        groupNav: 'Navigasi Halaman',
        groupLinks: 'Tautan & Dokumen Utama',
        groupSystem: 'Tampilan & Kanvas',
        copyEmail: 'Salin Alamat Email Langsung',
        downloadCv: 'Unduh Curriculum Vitae (PDF)',
        openPaper: 'Buka Jurnal Publikasi XAI (DOI)',
        openHris: 'Buka Sistem Live HRIS',
        openGithub: 'Buka Profil GitHub (@hazehans)',
        openLinkedin: 'Buka Profil LinkedIn',
        switchTheme: 'Ganti Tema Gelap / Terang',
        canvasDots: 'Kanvas: Matriks Titik Arsitektural',
        canvasWaves: 'Kanvas: Jaring Gelombang Kinetik',
        canvasNodes: 'Kanvas: Jaringan Partikel Neural',
        langEn: 'Bahasa: English (EN)',
        langId: 'Bahasa: Bahasa Indonesia (ID)',
        langFr: 'Bahasa: Français (FR)'
      },
      hero: {
        eyebrow: 'ARSIP PORTOFOLIO // EDISI 2026',
        availability: 'Terbuka untuk Peluang Kerja Full-Stack, Sistem & Data/AI',
        roleTagline: 'Full-Stack Developer & Data / AI Engineer',
        location: 'Malang, Indonesia',
        almaMater: 'Universitas Muhammadiyah Malang — Sarjana Komputer (S.Kom), S1 Informatika (IPK 3.78 / 4.00)',
        summary: 'Lulusan S1 Informatika (S.Kom) dengan IPK 3.78/4.00 yang memadukan keahlian dalam pengembangan web Full-Stack, integrasi sistem enterprise, serta Data Science dan Explainable AI. Berpengalaman membangun platform internal siap produksi (HRIS, Sistem Manajemen Operasional, Mini ERP), mengintegrasikan API perangkat biometrik (ISAPI), dan merancang arsitektur data relasional yang andal. Memiliki rekam jejak kepemimpinan sebagai Wakil Presiden Data Science Club.',
        ctaProjects: 'Lihat Proyek',
        ctaDownloadCv: 'Unduh CV',
        ctaContact: 'Hubungi Saya',
        portraitCaption: 'PROFIL ARSITEKTURAL // ENGINEER SISTEM & AI',
        portraitDegree: 'S.Kom (S1 Informatika) — UMM',
        metrics: [
          { value: '3.78', suffix: '/ 4.00', label: 'IPK Kumulatif' },
          { value: '08', suffix: 'Sistem', label: 'Sistem Produksi & AI' },
          { value: '100%', suffix: 'Integritas', label: 'Standar Data QA' },
          { value: '03', suffix: 'Bahasa', label: 'ID · EN · FR' }
        ]
      },
      overview: {
        index: '01',
        kicker: 'ARSITEKTUR INTI',
        title: 'Membangun Sistem Andal & Kecerdasan yang Transparan',
        subtitle: 'Menjembatani rekayasa perangkat lunak operasional, penjaminan mutu data ketat, dan model machine learning yang terpublikasi.',
        pillars: [
          {
            num: '01',
            title: 'Full-Stack & Integrasi Enterprise',
            desc: 'Merancang platform internal end-to-end (HRIS, Manajemen Operasional, Mini ERP), RESTful API, keamanan RBAC, serta sinkronisasi biometrik perangkat keras via Hikvision ISAPI.'
          },
          {
            num: '02',
            title: 'Skema Relasional & Data QA',
            desc: 'Mentransformasi data mentah kompleks (123+ kolom & sel tergabung) menjadi arsitektur tabel Parent-Child ternormalisasi dengan jaminan 100% integritas tanpa duplikasi.'
          },
          {
            num: '03',
            title: 'Data Science & Explainable AI (XAI)',
            desc: 'Mengembangkan model klasifikasi ilmiah terpublikasi (TabularBERT + PCA) dan sistem rekomendasi yang transparan, terukur, serta mudah diaudit.'
          }
        ]
      },
      experienceSection: {
        index: '02',
        kicker: 'REKAM JEJAK KARIER',
        title: 'Pengalaman Kerja',
        subtitle: 'Mengembangkan solusi perangkat lunak internal, otomasi alur kerja, dan validasi basis data pada sektor swasta maupun instansi pemerintah.'
      },
      projectsSection: {
        index: '03',
        kicker: 'KARYA TERPILIH',
        title: 'Proyek Unggulan',
        subtitle: 'Sistem siap produksi, arsitektur basis data relasional, dan riset AI terpublikasi yang dirancang untuk keandalan tinggi.',
        filters: {
          all: 'Semua Proyek',
          fullstack: 'Full-Stack & Sistem',
          data: 'Data, AI & QA'
        },
        viewLive: 'Sistem Live',
        viewRepo: 'Repo GitHub',
        viewPaper: 'Jurnal Publikasi (DOI)',
        beforeLabel: 'Sebelum QC',
        afterLabel: 'Sesudah QC',
        splitLabel: 'Bandingkan',
        confidentialTag: 'Sampel Data Tersanitasi',
        previewFallbackTag: 'CETAK BIRU SISTEM'
      },
      leadershipSection: {
        index: '04',
        kicker: 'AKADEMIK & KOMUNITAS',
        title: 'Pendidikan & Kepemimpinan',
        subtitle: 'Fondasi akademik yang kuat dipadukan dengan pengalaman kepemimpinan strategis di komunitas teknologi mahasiswa.',
        educationHeading: 'Pendidikan Akademik',
        courseworkLabel: 'Mata Kuliah Utama',
        orgHeading: 'Pengalaman Organisasi'
      },
      skillsSection: {
        index: '05',
        kicker: 'MATRIKS TEKNIS',
        title: 'Keahlian & Bahasa',
        subtitle: 'Bahasa pemrograman, kerangka kerja modern, manajemen basis data, perangkat pengembang, serta kemampuan bahasa.'
      },
      contactSection: {
        index: '06',
        kicker: 'MULAI KOLABORASI',
        title: 'Mari Bangun Sistem Digital yang Tangguh Bersama.',
        subtitle: 'Terbuka untuk peluang karier di bidang Full-Stack Development, System Analysis, Data Engineering, maupun AI/ML — remote maupun on-site.',
        emailLabel: 'Email Langsung',
        copyEmail: 'Salin Email',
        copiedEmail: 'Tersalin!',
        sendEmail: 'Kirim Email',
        whatsappLabel: 'WhatsApp / Telepon',
        chatWhatsapp: 'Hubungi via WhatsApp',
        downloadCvLabel: 'Curriculum Vitae',
        downloadCvBtn: 'Unduh CV (PDF)'
      },
      footer: {
        rights: 'Seluruh hak cipta dilindungi.',
        crafted: 'Arsitektur Kinetik Minimalis — Dihosting di GitHub Pages.',
        backToTop: 'Kembali ke Atas ↑'
      }
    },

    fr: {
      metaTitle: 'Hans Aufa',
      metaDescription: 'Portfolio de Hans Adiyatma Putra Aufa (S.Kom) — Diplômé en Informatique (GPA 3.78) spécialisé en Développement Full-Stack, Systèmes d’Entreprise, Data QA et IA Explicable.',
      nav: {
        overview: 'Aperçu',
        experience: 'Expérience',
        projects: 'Projets',
        leadership: 'Leadership',
        skills: 'Compétences',
        contact: 'Contact',
        menu: 'Menu',
        close: 'Fermer'
      },
      controls: {
        themeDark: 'Sombre',
        themeLight: 'Clair',
        toggleThemeLabel: 'Changer le thème de couleur',
        langLabel: 'Choisir la langue',
        scrollLabel: 'DÉFILER',
        localTimeLabel: 'MALANG, ID',
        zoomHint: 'Cliquer pour agrandir l’aperçu',
        closeModal: 'Fermer l’aperçu',
        cmdLabel: 'Palette de commandes',
        cmdPlaceholder: 'Tapez une commande ou allez à une section...',
        cmdEmpty: 'Aucune commande correspondante.',
        canvasDots: 'DOTS',
        canvasWaves: 'WAVES',
        canvasNodes: 'NODES',
        toastCopied: 'Adresse email copiée',
        toastCanvas: 'Mode canevas changé en',
        dockCv: 'CV ↓',
        dockTop: 'Haut ↑'
      },
      commandPalette: {
        groupNav: 'Navigation',
        groupLinks: 'Liens & Documents Clés',
        groupSystem: 'Interface & Canevas',
        copyEmail: 'Copier l’adresse email directe',
        downloadCv: 'Télécharger le Curriculum Vitae (PDF)',
        openPaper: 'Lire l’article publié XAI (DOI)',
        openHris: 'Ouvrir le système SIRH/HRIS en ligne',
        openGithub: 'Ouvrir le profil GitHub (@hazehans)',
        openLinkedin: 'Ouvrir le profil LinkedIn',
        switchTheme: 'Basculer le thème Sombre / Clair',
        canvasDots: 'Canevas : Matrice de Points',
        canvasWaves: 'Canevas : Grille d’Ondes Cinétiques',
        canvasNodes: 'Canevas : Réseau de Particules',
        langEn: 'Langue : English (EN)',
        langId: 'Langue : Bahasa Indonesia (ID)',
        langFr: 'Langue : Français (FR)'
      },
      hero: {
        eyebrow: 'ARCHIVE PORTFOLIO // ÉDITION 2026',
        availability: 'Disponible — Postes Full-Stack, Systèmes & Data/IA',
        roleTagline: 'Développeur Full-Stack & Ingénieur Data / IA',
        location: 'Malang, Indonésie',
        almaMater: 'Université Muhammadiyah de Malang — Licence d’Informatique, S.Kom (GPA 3.78 / 4.00)',
        summary: 'Diplômé en Informatique (S.Kom, GPA 3.78/4.00) spécialisé dans le développement Full-Stack, l’intégration de systèmes d’entreprise, la Science des Données et l’IA Explicable (XAI). Expérience avérée dans la conception de plateformes internes en production (SIRH/HRIS, Gestion Opérationnelle, Mini ERP), l’intégration d’API biométriques matérielles (ISAPI) et l’architecture relationnelle de données. Ancien Vice-Président du Data Science Club.',
        ctaProjects: 'Voir les Projets',
        ctaDownloadCv: 'Télécharger le CV',
        ctaContact: 'Me Contacter',
        portraitCaption: 'PROFIL ARCHITECTURAL // INGÉNIEUR SYSTÈMES & IA',
        portraitDegree: 'S.Kom (Informatique) — UMM',
        metrics: [
          { value: '3.78', suffix: '/ 4.00', label: 'GPA Cumulatif' },
          { value: '08', suffix: 'Systèmes', label: 'Plateformes & Modèles IA' },
          { value: '100%', suffix: 'Intégrité', label: 'Standard Qualité Data' },
          { value: '03', suffix: 'Langues', label: 'ID · EN · FR' }
        ]
      },
      overview: {
        index: '01',
        kicker: 'ARCHITECTURE FONDAMENTALE',
        title: 'Concevoir des Systèmes Fiables & une IA Interprétable',
        subtitle: 'Alliance entre ingénierie logicielle opérationnelle, assurance qualité des données et recherche publiée en apprentissage automatique.',
        pillars: [
          {
            num: '01',
            title: 'Full-Stack & Intégration d’Entreprise',
            desc: 'Conception de plateformes internes complètes (SIRH/HRIS, Gestion Opérationnelle, Mini ERP), API REST, contrôle d’accès RBAC et synchronisation biométrique matérielle via Hikvision ISAPI.'
          },
          {
            num: '02',
            title: 'Modélisation Relationnelle & Data QA',
            desc: 'Restructuration de feuilles complexes (123+ colonnes et cellules fusionnées) en schémas Parent-Enfant normalisés garantissant 100 % d’intégrité sans doublons.'
          },
          {
            num: '03',
            title: 'Science des Données & IA Explicable (XAI)',
            desc: 'Développement de modèles publiés (TabularBERT + PCA) et systèmes de recommandation transparents, interprétables et directement exploitables.'
          }
        ]
      },
      experienceSection: {
        index: '02',
        kicker: 'PARCOURS PROFESSIONNEL',
        title: 'Expérience Professionnelle',
        subtitle: 'Développement logiciel interne, automatisation des processus et validation rigoureuse en entreprise et secteur public.'
      },
      projectsSection: {
        index: '03',
        kicker: 'RÉALISATIONS SÉLECTIONNÉES',
        title: 'Projets Phares',
        subtitle: 'Applications en production, architectures relationnelles et recherches IA publiées conçues pour la performance.',
        filters: {
          all: 'Tous les Projets',
          fullstack: 'Full-Stack & Systèmes',
          data: 'Données, IA & QA'
        },
        viewLive: 'Voir en Ligne',
        viewRepo: 'Dépôt GitHub',
        viewPaper: 'Article Publié (DOI)',
        beforeLabel: 'Avant QA',
        afterLabel: 'Après QA',
        splitLabel: 'Comparer',
        confidentialTag: 'Échantillon Anonymisé',
        previewFallbackTag: 'SCHÉMA SYSTÈME'
      },
      leadershipSection: {
        index: '04',
        kicker: 'PARCOURS ACADÉMIQUE & ASSOCIATIF',
        title: 'Formation & Leadership',
        subtitle: 'Excellence universitaire combinée à des responsabilités exécutives au sein de communautés technologiques étudiantes.',
        educationHeading: 'Formation Académique',
        courseworkLabel: 'Cours Clés',
        orgHeading: 'Expérience Associative'
      },
      skillsSection: {
        index: '05',
        kicker: 'MATRICE TECHNIQUE',
        title: 'Compétences & Langues',
        subtitle: 'Langages de programmation, frameworks, bases de données relationnelles, outils de développement et maîtrise linguistique.'
      },
      contactSection: {
        index: '06',
        kicker: 'ENTRER EN CONTACT',
        title: 'Construisons Ensemble des Systèmes Numériques Performants.',
        subtitle: 'Ouvert aux opportunités en Développement Full-Stack, Analyse Système, Ingénierie des Données et IA/ML — en présentiel ou à distance.',
        emailLabel: 'Courriel Direct',
        copyEmail: 'Copier l’Email',
        copiedEmail: 'Copié !',
        sendEmail: 'Envoyer un Email',
        whatsappLabel: 'WhatsApp / Téléphone',
        chatWhatsapp: 'Écrire sur WhatsApp',
        downloadCvLabel: 'Curriculum Vitae',
        downloadCvBtn: 'Télécharger le CV (PDF)'
      },
      footer: {
        rights: 'Tous droits réservés.',
        crafted: 'Architecture Cinétique Minimaliste — Hébergé sur GitHub Pages.',
        backToTop: 'Haut de page ↑'
      }
    }
  },

  /* --------------------------------------------------------------------------
   * 4. WORK EXPERIENCE (EN | ID | FR)
   * -------------------------------------------------------------------------- */
  experience: [
    {
      id: 'han-media-dev',
      visible: true,
      company: 'CV Han Media Tekindo',
      isCurrent: true,
      i18n: {
        en: {
          role: 'IT Developer',
          location: 'Malang, Indonesia',
          period: 'Sept 2026 – Present',
          highlights: [
            {
              lead: 'Internal System Development',
              text: 'Develop and maintain internal software solutions to support business operations, improve workflow efficiency, and centralize organizational data.'
            },
            {
              lead: 'IT System Analysis & Development',
              text: 'Analyze business requirements, identify opportunities for process improvement, and translate operational needs into practical technology solutions.'
            },
            {
              lead: 'System Maintenance & Troubleshooting',
              text: 'Perform system maintenance, debugging, troubleshooting, and technical improvements to ensure the reliability and usability of internal applications.'
            },
            {
              lead: 'Technical Documentation',
              text: 'Create and maintain technical documentation, system workflows, and implementation references to support system development and future maintenance.'
            }
          ]
        },
        id: {
          role: 'IT Developer',
          location: 'Malang, Indonesia',
          period: 'Sept 2026 – Sekarang',
          highlights: [
            {
              lead: 'Pengembangan Sistem Internal',
              text: 'Mengembangkan dan memelihara solusi perangkat lunak internal untuk mendukung operasional bisnis, meningkatkan efisiensi alur kerja, dan memusatkan data organisasi.'
            },
            {
              lead: 'Analisis & Pengembangan Sistem TI',
              text: 'Menganalisis kebutuhan bisnis, mengidentifikasi peluang peningkatan proses, dan menerjemahkan kebutuhan operasional menjadi solusi teknologi yang praktis.'
            },
            {
              lead: 'Pemeliharaan Sistem & Troubleshooting',
              text: 'Melakukan pemeliharaan sistem, debugging, penanganan kendala teknis, serta peningkatan performa demi menjamin keandalan aplikasi internal.'
            },
            {
              lead: 'Dokumentasi Teknis',
              text: 'Menyusun dan memperbarui dokumentasi teknis, alur kerja sistem, serta referensi implementasi untuk mendukung pengembangan berkelanjutan.'
            }
          ]
        },
        fr: {
          role: 'Développeur IT',
          location: 'Malang, Indonésie',
          period: 'Sept 2026 – Présent',
          highlights: [
            {
              lead: 'Développement de Systèmes Internes',
              text: 'Conception et maintenance de solutions logicielles internes pour soutenir les opérations métier, optimiser les flux de travail et centraliser les données organisationnelles.'
            },
            {
              lead: 'Analyse & Ingénierie des Besoins',
              text: 'Analyse des besoins opérationnels, identification d’axes d’amélioration des processus et traduction en solutions technologiques concrètes.'
            },
            {
              lead: 'Maintenance & Dépannage Système',
              text: 'Maintenance préventive et corrective, débogage et optimisations techniques garantissant la fiabilité et l’ergonomie des applications internes.'
            },
            {
              lead: 'Documentation Technique',
              text: 'Rédaction et mise à jour des documentations d’architecture, flux fonctionnels et guides d’implémentation pour assurer la pérennité des systèmes.'
            }
          ]
        }
      }
    },
    {
      id: 'han-media-intern',
      visible: true,
      company: 'CV Han Media Tekindo',
      isCurrent: false,
      i18n: {
        en: {
          role: 'System Information Intern',
          location: 'Malang, Indonesia',
          period: 'June 2026 – Sept 2026',
          highlights: [
            {
              lead: 'Database Migration & ETL Testing',
              text: 'Led and validated the migration of hundreds of legacy inventory and customer records into a structured relational database (Google Sheets), conducting rigorous Data QA testing to ensure 100% data integrity with zero duplications.'
            },
            {
              lead: 'Functional & UI/UX Testing (AppSheet)',
              text: 'Designed a Mini ERP application architecture for operations management and performed comprehensive functional testing on CRUD features, cascading dropdowns, and search optimization to ensure a seamless, lag-free user experience.'
            },
            {
              lead: 'Logic Verification & Load Testing (Apps Script)',
              text: 'Developed and executed stress tests on Google Apps Script for an automated PDF payroll system, implementing robust error handling (try-catch blocks) to guarantee script resilience against internet connection dropouts.'
            },
            {
              lead: 'System Integration & Data Pipeline Validation',
              text: 'Built and tested the reliability of real-time data pipelines integrating Google Forms, the main database, and an HTML/JavaScript (Fetch API) monitoring dashboard to successfully prevent any data collisions.'
            }
          ]
        },
        id: {
          role: 'System Information Intern',
          location: 'Malang, Indonesia',
          period: 'Juni 2026 – Sept 2026',
          highlights: [
            {
              lead: 'Migrasi Database & Pengujian ETL',
              text: 'Memimpin dan memvalidasi migrasi ratusan data inventaris serta pelanggan lama ke basis data relasional terstruktur (Google Sheets), dengan pengujian Data QA ketat untuk menjamin 100% integritas data tanpa duplikasi.'
            },
            {
              lead: 'Pengujian Fungsional & UI/UX (AppSheet)',
              text: 'Merancang arsitektur aplikasi Mini ERP untuk manajemen operasional serta menguji fitur CRUD, cascading dropdown, dan optimasi pencarian agar bebas lag.'
            },
            {
              lead: 'Verifikasi Logika & Uji Beban (Apps Script)',
              text: 'Menyusun dan menjalankan stress test pada Google Apps Script untuk sistem penggajian PDF otomatis dengan penanganan error (try-catch) agar tahan terhadap gangguan koneksi internet.'
            },
            {
              lead: 'Integrasi Sistem & Validasi Pipeline Data',
              text: 'Membangun dan menguji keandalan pipeline data real-time yang menghubungkan Google Forms, database utama, dan dashboard monitoring HTML/JavaScript (Fetch API) tanpa bentrokan data.'
            }
          ]
        },
        fr: {
          role: 'Stagiaire Systèmes d’Information',
          location: 'Malang, Indonésie',
          period: 'Juin 2026 – Sept 2026',
          highlights: [
            {
              lead: 'Migration de Données & Tests ETL',
              text: 'Pilotage et validation de la migration de centaines d’enregistrements clients et stocks vers une base relationnelle structurée (Google Sheets), avec contrôles QA garantissant 100 % d’intégrité et zéro doublon.'
            },
            {
              lead: 'Tests Fonctionnels & UI/UX (AppSheet)',
              text: 'Conception de l’architecture d’un Mini ERP opérationnel et validation exhaustive des opérations CRUD, listes déroulantes dynamiques et performances de recherche sans latence.'
            },
            {
              lead: 'Vérification Logique & Tests de Charge (Apps Script)',
              text: 'Exécution de tests de résistance sur Google Apps Script pour la génération automatisée de fiches de paie PDF, intégrant une gestion d’erreurs robuste (try-catch) face aux coupures réseau.'
            },
            {
              lead: 'Intégration Système & Validation de Pipelines',
              text: 'Développement et fiabilisation de pipelines temps réel reliant Google Forms, la base centrale et un tableau de bord HTML/JavaScript (Fetch API) évitant toute collision de données.'
            }
          ]
        }
      }
    },
    {
      id: 'dinsos-batu',
      visible: true,
      company: 'Dinas Sosial Kota Batu',
      isCurrent: false,
      i18n: {
        en: {
          role: 'Data Entry Intern',
          location: 'Batu, East Java, Indonesia',
          period: 'Aug 2024 – Sept 2024',
          highlights: [
            {
              lead: 'Archive Digital Transformation',
              text: 'Spearheaded the digital transformation of physical archives by categorizing and migrating document data from 2017 to 2018 into centralized spreadsheets, improving data accessibility.'
            },
            {
              lead: 'Cross-Database Validation',
              text: 'Performed rigorous data validation by cross-checking physical files against digital databases and managing the sorting and data entry for 2016 inactive archives.'
            },
            {
              lead: 'SIKS-NG Data Classification',
              text: 'Classified verification data from the Sistem Informasi Kesejahteraan Sosial-Next Generation (SIKS-NG) application.'
            },
            {
              lead: 'Program Records Aggregation',
              text: 'Aggregated distribution records for the 2024 staple food assistance program and inputted departmental planning data to support internal operations.'
            }
          ]
        },
        id: {
          role: 'Data Entry Intern',
          location: 'Kota Batu, Jawa Timur, Indonesia',
          period: 'Agu 2024 – Sept 2024',
          highlights: [
            {
              lead: 'Transformasi Digital Arsip',
              text: 'Memelopori digitalisasi arsip fisik dengan mengategorikan dan memigrasikan dokumen tahun 2017–2018 ke dalam spreadsheet terpusat guna meningkatkan aksesibilitas data.'
            },
            {
              lead: 'Validasi Silang Basis Data',
              text: 'Melakukan validasi ketat melalui pencocokan berkas fisik terhadap database digital serta mengelola penyortiran dan entri arsip inaktif tahun 2016.'
            },
            {
              lead: 'Klasifikasi Data SIKS-NG',
              text: 'Mengklasifikasikan data verifikasi dari aplikasi Sistem Informasi Kesejahteraan Sosial-Next Generation (SIKS-NG).'
            },
            {
              lead: 'Agregasi Data Program Bantuan',
              text: 'Mengagregasi catatan penyaluran program bantuan pangan pokok tahun 2024 serta menginput data perencanaan dinas untuk mendukung operasional internal.'
            }
          ]
        },
        fr: {
          role: 'Stagiaire Opérateur de Saisie & Données',
          location: 'Batu, Java Oriental, Indonésie',
          period: 'Août 2024 – Sept 2024',
          highlights: [
            {
              lead: 'Numérisation des Archives',
              text: 'Pilotage de la transformation numérique des archives physiques (2017–2018) par catégorisation et migration vers des tableurs centralisés, optimisant l’accès aux informations.'
            },
            {
              lead: 'Validation Croisée des Données',
              text: 'Contrôle rigoureux de cohérence entre dossiers physiques et bases numériques, accompagné du tri et de la saisie des archives inactives de 2016.'
            },
            {
              lead: 'Classification SIKS-NG',
              text: 'Classification des données de vérification issues du Système d’Information sur la Protection Sociale (SIKS-NG).'
            },
            {
              lead: 'Agrégation des Programmes Sociaux',
              text: 'Consolidation des registres de distribution du programme d’aide alimentaire 2024 et saisie des données de planification départementale.'
            }
          ]
        }
      }
    }
  ],

  /* --------------------------------------------------------------------------
   * 5. FEATURED PROJECTS (Categories: 'fullstack' | 'data')
   * -------------------------------------------------------------------------- */
  projects: [
    {
      id: 'hris-attendance',
      visible: true,
      category: 'fullstack',
      image: 'assets/images/projects/hris-omahvisual.jpg',
      imageSurface: 'dark',
      liveUrl: 'https://hris.omahvisual.com',
      repoUrl: 'https://github.com/hazehans/hris-omahvisual',
      paperUrl: '',
      isLive: true,
      tech: ['Full-Stack Web', 'REST APIs', 'Hikvision ISAPI', 'RBAC', 'Relational DB'],
      i18n: {
        en: {
          title: 'Human Resource Information System (HRIS) & Attendance Integration',
          date: 'September 2026',
          role: 'Full-Stack Developer',
          categoryLabel: 'Full-Stack & Systems',
          statusBadge: 'Live Production — hris.omahvisual.com',
          highlights: [
            'Engineered a full-stack internal HRIS handling employee administration, contract reminders, KPI tracking, dynamic attendance records, and role-based access control (RBAC).',
            'Integrated physical Hikvision biometric devices via ISAPI endpoints to automate real-time synchronization of employee attendance logs.',
            'Developed ~80% of frontend interfaces (superuser command center, employee tracking, and admin controls) connected seamlessly to custom backend REST APIs.',
            'Implemented secure database schemas ensuring transactional integrity across user profiles, audit logs, and system access levels.'
          ]
        },
        id: {
          title: 'Human Resource Information System (HRIS) & Integrasi Presensi',
          date: 'September 2026',
          role: 'Full-Stack Developer',
          categoryLabel: 'Full-Stack & Sistem',
          statusBadge: 'Produksi Live — hris.omahvisual.com',
          highlights: [
            'Membangun platform HRIS internal full-stack yang menangani administrasi karyawan, pengingat kontrak/PKWT, evaluasi KPI, presensi dinamis, dan kontrol akses berbasis peran (RBAC).',
            'Mengintegrasikan perangkat biometrik fisik Hikvision melalui endpoint ISAPI untuk mengotomatisasi sinkronisasi log kehadiran karyawan secara real-time.',
            'Mengembangkan ~80% antarmuka frontend (command center superuser, pelacakan karyawan, dan kontrol admin) yang terhubung mulus ke REST API backend kustom.',
            'Mengimplementasikan skema database aman yang menjamin integritas transaksional di seluruh profil pengguna, audit log, dan level akses sistem.'
          ]
        },
        fr: {
          title: 'Système d’Information RH (SIRH / HRIS) & Intégration Biométrique',
          date: 'Septembre 2026',
          role: 'Développeur Full-Stack',
          categoryLabel: 'Full-Stack & Systèmes',
          statusBadge: 'En Production — hris.omahvisual.com',
          highlights: [
            'Ingénierie d’un SIRH interne complet gérant l’administration du personnel, le suivi des contrats/KPI, les présences dynamiques et le contrôle d’accès basé sur les rôles (RBAC).',
            'Intégration de terminaux biométriques physiques Hikvision via les endpoints ISAPI pour synchroniser automatiquement les pointages en temps réel.',
            'Développement d’environ 80 % des interfaces frontend (centre de commande superuser, suivi des employés, administration) connectées aux API REST backend.',
            'Implémentation de schémas de base de données sécurisés garantissant l’intégrité transactionnelle des profils, journaux d’audit et permissions.'
          ]
        }
      }
    },
    {
      id: 'operational-management',
      visible: true,
      category: 'fullstack',
      image: 'assets/images/projects/operational-management.png',
      imageSurface: 'dark',
      liveUrl: '',
      repoUrl: 'https://github.com/hazehans/operational-omahvisual',
      paperUrl: '',
      isLive: false,
      tech: ['Full-Stack Architecture', 'REST API', 'Inventory & Fleet', 'Relational DB'],
      i18n: {
        en: {
          title: 'Operational & Warehouse Management System',
          date: 'September 2026',
          role: 'Full-Stack Developer',
          categoryLabel: 'Full-Stack & Systems',
          statusBadge: 'Ready for Deployment',
          highlights: [
            'Designed and built an end-to-end operational & warehouse platform managing videotron cabinets, Novastar processors, fleet dispatch, crew payroll, and stock mutations.',
            'Architected scalable backend services with relational database models to prevent data bottlenecks and maintain high system availability.',
            'Implemented structured API endpoints, SOP workflows, and modular application logic for real-time monitoring of operational activities.'
          ]
        },
        id: {
          title: 'Sistem Manajemen Operasional & Gudang',
          date: 'September 2026',
          role: 'Full-Stack Developer',
          categoryLabel: 'Full-Stack & Sistem',
          statusBadge: 'Siap Deploy',
          highlights: [
            'Merancang dan membangun platform operasional & gudang end-to-end untuk mengelola ketersediaan kabinet videotron, prosesor Novastar, armada kendaraan, honor kru, dan mutasi stok.',
            'Merancang layanan backend yang skalabel dengan model database relasional guna mencegah bottleneck data dan menjaga ketersediaan sistem.',
            'Mengimplementasikan endpoint API terstruktur, alur kerja SOP, dan logika aplikasi modular untuk pemantauan aktivitas operasional secara real-time.'
          ]
        },
        fr: {
          title: 'Système de Gestion Opérationnelle & Entrepôt',
          date: 'Septembre 2026',
          role: 'Développeur Full-Stack',
          categoryLabel: 'Full-Stack & Systèmes',
          statusBadge: 'Prêt au Déploiement',
          highlights: [
            'Conception et développement d’une plateforme opérationnelle de bout en bout gérant les stocks LED/videotron, la flotte de véhicules, la paie des équipes et les mouvements d’entrepôt.',
            'Architecture de services backend évolutifs avec modèles relationnels prévenant les goulets d’étranglement et assurant une haute disponibilité.',
            'Implémentation d’endpoints API structurés et d’une logique applicative modulaire pour la supervision opérationnelle en temps réel.'
          ]
        }
      }
    },
    {
      id: 'mini-erp-appsheet',
      visible: true,
      category: 'fullstack',
      image: 'assets/images/projects/mini-erp-appsheet.png',
      imageSurface: 'light',
      liveUrl: '',
      repoUrl: '',
      paperUrl: '',
      isLive: false,
      tech: ['AppSheet', 'Relational Schema', 'Automated Invoice & SPK', 'CRUD UI/UX', 'Performance QA'],
      i18n: {
        en: {
          title: 'Transaction & Inventory Management App (Mini ERP)',
          date: 'June 2026',
          role: 'System Analyst',
          categoryLabel: 'Full-Stack & Systems',
          statusBadge: 'Internal Enterprise AppSheet',
          highlights: [
            'Designed a relational database architecture from 123 columns of raw flat-file data into structured Parent-Child tables.',
            'Developed an internal AppSheet ERP interface featuring multi-module navigation (Fleet History, Payments, All Transactions, Unpaid Receivables, Crew, Customers, and Automated Invoice/SPK Downloads).',
            'Conducted functional testing on Auto-Increment IDs, dynamic cascading dropdowns, and search optimization to ensure lag-free performance under heavy data loads.'
          ]
        },
        id: {
          title: 'Aplikasi Manajemen Transaksi & Inventaris (Mini ERP)',
          date: 'Juni 2026',
          role: 'System Analyst',
          categoryLabel: 'Full-Stack & Sistem',
          statusBadge: 'Aplikasi Internal AppSheet',
          highlights: [
            'Merancang arsitektur database relasional dari 123 kolom data mentah flat-file menjadi tabel Parent-Child yang terstruktur.',
            'Mengembangkan aplikasi internal AppSheet bermodul lengkap (Histori Armada, Histori Bayar, Semua Transaksi, Belum Lunas, Katalog Barang, Kru, Customer, serta unduh Invoice/SPK otomatis).',
            'Melaksanakan pengujian fungsional pada Auto-Increment ID, cascading dropdown dinamis, serta optimasi pencarian agar tetap responsif pada beban data besar.'
          ]
        },
        fr: {
          title: 'Application de Gestion des Transactions & Stocks (Mini ERP)',
          date: 'Juin 2026',
          role: 'Analyste Système',
          categoryLabel: 'Full-Stack & Systèmes',
          statusBadge: 'Application Interne AppSheet',
          highlights: [
            'Conception d’une architecture relationnelle normalisée à partir d’un fichier plat brut de 123 colonnes vers des tables Parent-Enfant structurées.',
            'Développement d’un Mini ERP interne sur AppSheet intégrant le suivi des transactions, créances impayées, flotte, équipes, stocks et téléchargement automatisé de factures/SPK.',
            'Réalisation de tests fonctionnels sur les identifiants auto-incrémentés, menus déroulants en cascade et indexation de recherche sous forte charge.'
          ]
        }
      }
    },
    {
      id: 'database-migration-qa',
      visible: true,
      category: 'data',
      image: 'assets/images/projects/data-qc-after.png',
      beforeImage: 'assets/images/projects/data-qc-before.png',
      afterImage: 'assets/images/projects/data-qc-after.png',
      imageSurface: 'light',
      liveUrl: '',
      repoUrl: '',
      paperUrl: '',
      isLive: false,
      tech: ['ETL Migration', 'Data Normalization', 'Data QA / QC', 'Zero-Duplication', 'Google Sheets'],
      i18n: {
        en: {
          title: 'Database Migration & Data Quality Assurance (Before / After QC)',
          date: 'June 2026',
          role: 'Data QA Lead & System Analyst',
          categoryLabel: 'Data, AI & QA',
          statusBadge: '100% Data Integrity — Confidential Dataset',
          highlights: [
            'Restructured unnormalized legacy stock-opname spreadsheets containing nested merged cells and ambiguous descriptions into atomic, normalized relational columns (Category, Sub-Category, Brand/Series, Item Name, Spec, Qty, Unit, Condition).',
            'Directed a Data Entry intern to clean raw records while serving as the primary Quality Control (QC) lead to guarantee 100% data integrity.',
            'Conducted rigorous Data QA checks to eliminate duplicated entries, resolve unit anomalies, and validate strict data types prior to main ERP ingestion.'
          ]
        },
        id: {
          title: 'Migrasi Basis Data & Data Quality Assurance (Before / After QC)',
          date: 'Juni 2026',
          role: 'Data QA Lead & System Analyst',
          categoryLabel: 'Data, AI & QA',
          statusBadge: '100% Integritas Data — Dataset Internal',
          highlights: [
            'Merestrukturisasi spreadsheet stok opname lama yang penuh sel tergabung (merged cells) dan format tidak seragam menjadi kolom relasional atomik terstandarisasi (Kategori Utama, Sub-Kategori, Merk/Seri, Nama Spesifik, Ukuran, Qty, Satuan, Kondisi).',
            'Mengarahkan staf magang Data Entry dalam pembersihan data mentah sekaligus bertindak sebagai pemeriksa utama Quality Control (QC) demi menjamin 100% integritas data.',
            'Melakukan audit kualitas data menyeluruh untuk menghapus duplikasi entri, menyeragamkan satuan, dan memvalidasi tipe data sebelum diintegrasikan ke sistem ERP utama.'
          ]
        },
        fr: {
          title: 'Migration de Base de Données & Assurance Qualité (Avant / Après QA)',
          date: 'Juin 2026',
          role: 'Responsable Data QA & Analyste Système',
          categoryLabel: 'Données, IA & QA',
          statusBadge: 'Intégrité 100 % — Données Confidentielles',
          highlights: [
            'Normalisation complète d’anciens tableurs d’inventaire comportant des cellules fusionnées complexes vers un schéma relationnel atomique (Catégorie, Sous-Catégorie, Marque, Spécification, Quantité, Unité, État).',
            'Encadrement d’un stagiaire en nettoyage de données tout en assurant le contrôle qualité (QC) principal pour garantir 100 % d’intégrité.',
            'Exécution d’audits rigoureux afin d’éliminer les doublons, corriger les anomalies et valider le typage strict avant l’importation dans l’ERP.'
          ]
        }
      }
    },
    {
      id: 'appsheet-relational-architecture',
      visible: true,
      category: 'fullstack',
      image: 'assets/images/projects/appsheet-data-structure.png',
      imageSurface: 'light',
      liveUrl: '',
      repoUrl: '',
      paperUrl: '',
      isLive: false,
      tech: ['Entity-Relationship Modeling', 'AppSheet Architecture', 'Data Visualization', 'Foreign-Key Schema'],
      i18n: {
        en: {
          title: 'Enterprise Relational Data Graph & AppSheet Admin Architecture',
          date: 'June 2026',
          role: 'System Analyst & Database Architect',
          categoryLabel: 'Full-Stack & Systems',
          statusBadge: 'Relational Schema Visualization',
          highlights: [
            'Engineered a hub-and-spoke relational schema centered on Primary Transactions (TRANSAKSI Utama) interconnected with Master Customer, Master Crew, Master Vehicle, and Master Inventory tables.',
            'Modeled one-to-many foreign-key pipelines powering Crew Assignments, Fleet Dispatch logs, LED Order Details, Payment Histories, and Automated Invoicing.',
            'Configured specialized operational data slices and role-filtered views (including Unpaid Receivables tracking and Crew Position views) for real-time administrative visibility.'
          ]
        },
        id: {
          title: 'Visualisasi Arsitektur Relasional & Struktur Data Admin AppSheet',
          date: 'Juni 2026',
          role: 'System Analyst & Database Architect',
          categoryLabel: 'Full-Stack & Sistem',
          statusBadge: 'Arsitektur Skema Relasional',
          highlights: [
            'Merancang arsitektur relasional terpusat pada tabel TRANSAKSI Utama yang terhubung secara referensial dengan tabel MASTER Customer, MASTER Crew, MASTER Vehicle, dan MASTER Barang.',
            'Memodelkan relasi one-to-many (Parent-Child) untuk mendukung modul Detail Penugasan Kru, Penugasan Kendaraan, Detail Pesanan LED, Histori Pembayaran, dan Data Invoice.',
            'Mengonfigurasi data slice dan tampilan terfilter ( seperti pemantauan Transaksi Belum Lunas serta View berdasarkan Jabatan Kru) untuk visibilitas operasional admin.'
          ]
        },
        fr: {
          title: 'Graphe de Données Relationnelles & Architecture Admin AppSheet',
          date: 'Juin 2026',
          role: 'Analyste Système & Architecte Base de Données',
          categoryLabel: 'Full-Stack & Systèmes',
          statusBadge: 'Visualisation de Schéma Relationnel',
          highlights: [
            'Conception d’un graphe relationnel centré sur les transactions principales (TRANSAKSI Utama) reliées aux tables maîtresses Clients, Équipes, Véhicules et Équipements.',
            'Modélisation des relations un-à-plusieurs orchestrant l’affectation des équipes et de la flotte, le détail des commandes LED, l’historique des paiements et la facturation.',
            'Configuration de vues filtrées et segments opérationnels (suivi des créances impayées et vues par poste) optimisant le pilotage administratif.'
          ]
        }
      }
    },
    {
      id: 'mental-health-xai',
      visible: true,
      category: 'data',
      image: 'assets/images/projects/mental-health-xai.png',
      imageSurface: 'light',
      liveUrl: '',
      repoUrl: '',
      paperUrl: 'https://doi.org/10.33364/algoritma/v.22-2.2925',
      isLive: true,
      tech: ['Python', 'TabularBERT + PCA', 'Explainable AI (XAI)', 'Machine Learning', 'Published Journal'],
      i18n: {
        en: {
          title: 'Mental Health Classification with Explainable AI (Published Research)',
          date: 'September 2025',
          role: 'Data & AI Researcher',
          categoryLabel: 'Data, AI & QA',
          statusBadge: 'Published in Jurnal Algoritma (DOI)',
          highlights: [
            'Developed a deep tabular classification pipeline for mental health disorder detection combining TabularBERT with Principal Component Analysis (PCA) feature selection, achieving 95% Accuracy, 95% Precision, 96% Recall, and 95% F1-Score.',
            'Implemented Explainable AI (XAI) techniques to guarantee model transparency, clinical interpretability, and auditable feature attributions, published in Jurnal Algoritma (Vol. 22 No. 2).'
          ]
        },
        id: {
          title: 'Klasifikasi Kesehatan Mental Berbasis Explainable AI (Riset Terpublikasi)',
          date: 'September 2025',
          role: 'Data & AI Researcher',
          categoryLabel: 'Data, AI & QA',
          statusBadge: 'Terbit di Jurnal Algoritma (DOI)',
          highlights: [
            'Mengembangkan sistem klasifikasi gangguan kesehatan mental menggunakan arsitektur TabularBERT dengan seleksi fitur PCA yang meraih 95% Accuracy, 95% Precision, 96% Recall, dan 95% F1-Score.',
            'Mengimplementasikan metode Explainable AI (XAI) demi menjamin transparansi serta interpretabilitas prediksi model, dan telah dipublikasikan secara ilmiah di Jurnal Algoritma (Vol. 22 No. 2).'
          ]
        },
        fr: {
          title: 'Classification de la Santé Mentale par IA Explicable (Recherche Publiée)',
          date: 'Septembre 2025',
          role: 'Chercheur Data & IA',
          categoryLabel: 'Données, IA & QA',
          statusBadge: 'Publié dans Jurnal Algoritma (DOI)',
          highlights: [
            'Développement d’un modèle de classification des troubles de santé mentale combinant TabularBERT et sélection de variables par ACP (PCA), atteignant 95 % d’Accuracy, 95 % de Précision, 96 % de Rappel et 95 % de F1-Score.',
            'Intégration de méthodes d’IA Explicable (XAI) assurant la transparence et l’interprétabilité du modèle ; travaux publiés dans la revue scientifique Jurnal Algoritma (Vol. 22 No. 2).'
          ]
        }
      }
    },
    {
      id: 'spotify-song-analysis',
      visible: true,
      category: 'data',
      image: 'assets/images/projects/spotify-song-analysis.png',
      imageSurface: 'light',
      liveUrl: '',
      repoUrl: 'https://github.com/hazehans/spotify-songs-analysis',
      paperUrl: '',
      isLive: false,
      tech: ['Python', 'Data Analysis', 'Recommendation System', 'Genre Distribution'],
      i18n: {
        en: {
          title: 'Spotify Application Song Analysis & Recommendation Engine',
          date: 'January 2025',
          role: 'Data Analyst',
          categoryLabel: 'Data, AI & QA',
          statusBadge: ' Exploratory Analytics & Recommender',
          highlights: [
            'Analyzed multi-genre song datasets extracted from Spotify (mapping distributions across R&B Neo Soul, Indie Poptimism, Urban Contemporary, and Chill subgenres) to uncover listener behavior patterns.',
            'Engineered a targeted music recommendation system focusing on discovering tracks within the "Underrated Chill and Calm" category.'
          ]
        },
        id: {
          title: 'Analisis Lagu Aplikasi Spotify & Sistem Rekomendasi',
          date: 'Januari 2025',
          role: 'Data Analyst',
          categoryLabel: 'Data, AI & QA',
          statusBadge: 'Analitik Data & Sistem Rekomendasi',
          highlights: [
            'Menganalisis distribusi genre dan fitur audio dataset lagu Spotify (mencakup R&B Neo Soul, Indie Poptimism, Urban Contemporary, hingga subgenre Chill) guna mengidentifikasi pola perilaku pendengar.',
            'Merancang sistem rekomendasi musik yang berfokus pada penemuan lagu-lagu potensial di kategori "Underrated Chill and Calm".'
          ]
        },
        fr: {
          title: 'Analyse Musicale Spotify & Moteur de Recommandation',
          date: 'Janvier 2025',
          role: 'Data Analyst',
          categoryLabel: 'Données, IA & QA',
          statusBadge: 'Analytique & Recommandation',
          highlights: [
            'Analyse exploratoire de jeux de données musicaux Spotify (distribution des genres R&B Neo Soul, Indie Poptimism, Urban Contemporary) afin d’identifier les habitudes d’écoute.',
            'Conception d’un système de recommandation ciblant la découverte de titres dans la catégorie « Underrated Chill and Calm ».'
          ]
        }
      }
    },
    {
      id: 'student-achievement-db',
      visible: true,
      category: 'fullstack',
      image: '', // Menggunakan desain skema Blueprint SVG Minimalis otomatis
      imageSurface: 'dark',
      liveUrl: '',
      repoUrl: 'https://github.com/FearZen/TugasBesarLaravel',
      paperUrl: '',
      isLive: false,
      tech: ['Laravel', 'PHP', 'MySQL', 'Backend CRUD Architecture'],
      i18n: {
        en: {
          title: 'Student Achievement Database Website',
          date: 'December 2023',
          role: 'Backend Developer',
          categoryLabel: 'Full-Stack & Systems',
          statusBadge: 'Laravel & MySQL System',
          highlights: [
            'Built a Laravel web-based application featuring complete CRUD (Create, Read, Update, Delete) functionality for managing student academic and non-academic achievements.',
            'Designed and managed the relational database architecture and storage layer using MySQL as the primary database engine.'
          ]
        },
        id: {
          title: 'Website Basis Data Prestasi Mahasiswa',
          date: 'Desember 2023',
          role: 'Backend Developer',
          categoryLabel: 'Full-Stack & Sistem',
          statusBadge: 'Sistem Web Laravel & MySQL',
          highlights: [
            'Membangun aplikasi web berbasis Laravel dengan fungsionalitas CRUD penuh untuk pencatatan dan pengelolaan prestasi mahasiswa.',
            'Merancang serta mengelola arsitektur basis data relasional dan penyimpanan utama menggunakan MySQL.'
          ]
        },
        fr: {
          title: 'Plateforme Web des Réussites Étudiantes',
          date: 'Décembre 2023',
          role: 'Développeur Backend',
          categoryLabel: 'Full-Stack & Systèmes',
          statusBadge: 'Système Web Laravel & MySQL',
          highlights: [
            'Développement d’une application web sous Laravel dotée de fonctionnalités CRUD complètes pour la gestion des distinctions étudiantes.',
            'Conception et administration de l’architecture relationnelle sous MySQL.'
          ]
        }
      }
    }
  ],

  /* --------------------------------------------------------------------------
   * 6. EDUCATION & ORGANIZATIONAL LEADERSHIP
   * -------------------------------------------------------------------------- */
  education: [
    {
      id: 'umm-informatics',
      visible: true,
      gpa: '3.78 / 4.00',
      i18n: {
        en: {
          institution: 'University of Muhammadiyah Malang',
          location: 'Malang, Indonesia',
          period: 'Sept 2021 – Feb 2026',
          degree: 'Bachelor of Computer Science (S.Kom) — Informatics',
          gpaLabel: 'GPA: 3.78 / 4.00',
          coursework: ['Data Science', 'Machine Learning', 'Database Management', 'Backend Development']
        },
        id: {
          institution: 'Universitas Muhammadiyah Malang',
          location: 'Malang, Indonesia',
          period: 'Sept 2021 – Feb 2026',
          degree: 'Sarjana Komputer (S.Kom) — S1 Informatika',
          gpaLabel: 'IPK: 3.78 / 4.00',
          coursework: ['Sains Data', 'Machine Learning', 'Manajemen Basis Data', 'Pengembangan Backend']
        },
        fr: {
          institution: 'Université Muhammadiyah de Malang',
          location: 'Malang, Indonésie',
          period: 'Sept 2021 – Fév 2026',
          degree: 'Licence d’Informatique (S.Kom — Bachelor of Computer Science)',
          gpaLabel: 'GPA : 3.78 / 4.00',
          coursework: ['Science des Données', 'Machine Learning', 'Gestion de Bases de Données', 'Développement Backend']
        }
      }
    },
    {
      // OPTIONAL TOGGLE: Disembunyikan secara default agar layout tetap minimalis.
      // Ubah `visible: true` jika ingin menampilkan riwayat SMA/MA.
      id: 'man-2-kudus',
      visible: false,
      gpa: '',
      i18n: {
        en: {
          institution: 'MAN 2 Kudus',
          location: 'Kudus, Indonesia',
          period: 'July 2018 – July 2021',
          degree: 'High School Diploma in Mathematics and Natural Sciences',
          gpaLabel: '',
          coursework: []
        },
        id: {
          institution: 'MAN 2 Kudus',
          location: 'Kudus, Indonesia',
          period: 'Juli 2018 – Juli 2021',
          degree: 'Jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA)',
          gpaLabel: '',
          coursework: []
        },
        fr: {
          institution: 'Lycée MAN 2 Kudus',
          location: 'Kudus, Indonésie',
          period: 'Juil 2018 – Juil 2021',
          degree: 'Diplôme d’Études Secondaires — Mathématiques et Sciences Naturelles',
          gpaLabel: '',
          coursework: []
        }
      }
    }
  ],

  organizations: [
    {
      id: 'dsc-vp',
      visible: true,
      i18n: {
        en: {
          role: 'Vice President',
          organization: 'Data Science Club (DSC), UMM',
          period: 'Oct 2024 – Sept 2025',
          summary: 'Led internal community management, oversaw organizational stability, and coordinated technical workshops and member engagement initiatives.'
        },
        id: {
          role: 'Wakil Presiden (Vice President)',
          organization: 'Data Science Club (DSC), UMM',
          period: 'Okt 2024 – Sept 2025',
          summary: 'Memimpin manajemen internal komunitas, menjaga stabilitas organisasi, serta mengoordinasikan lokakarya teknis dan inisiatif keterlibatan anggota.'
        },
        fr: {
          role: 'Vice-Président',
          organization: 'Data Science Club (DSC), UMM',
          period: 'Oct 2024 – Sept 2025',
          summary: 'Direction de la gestion interne de la communauté, supervision de la stabilité organisationnelle et coordination d’ateliers techniques.'
        }
      }
    },
    {
      id: 'hmif-academic',
      visible: true,
      i18n: {
        en: {
          role: 'Academic Department Member',
          organization: 'Informatics Student Association (HMIF), UMM',
          period: 'Sept 2023 – Sept 2024',
          summary: 'Contributed to the planning and execution of academic-focused events and competitions.'
        },
        id: {
          role: 'Anggota Departemen Akademik',
          organization: 'Himpunan Mahasiswa Informatika (HMIF), UMM',
          period: 'Sept 2023 – Sept 2024',
          summary: 'Berkontribusi dalam perencanaan dan pelaksanaan kegiatan serta kompetisi yang berfokus pada pengembangan akademik.'
        },
        fr: {
          role: 'Membre du Département Académique',
          organization: 'Association des Étudiants en Informatique (HMIF), UMM',
          period: 'Sept 2023 – Sept 2024',
          summary: 'Contribution à la planification et à l’organisation d’événements et de compétitions académiques.'
        }
      }
    },
    {
      id: 'hmif-hrd-head',
      visible: true,
      i18n: {
        en: {
          role: 'Head of Human Resources Development Department (HRD)',
          organization: 'Informatics Student Association (HMIF), UMM',
          period: 'Sept 2022 – Sept 2023',
          summary: 'Responsible for member stability, execution of all department programs, conflict resolution, and internal team building.'
        },
        id: {
          role: 'Kepala Departemen Pengembangan Sumber Daya Manusia (PSDM / HRD)',
          organization: 'Himpunan Mahasiswa Informatika (HMIF), UMM',
          period: 'Sept 2022 – Sept 2023',
          summary: 'Bertanggung jawab atas stabilitas pengurus, keberhasilan seluruh program departemen, resolusi konflik, dan penguatan tim internal himpunan.'
        },
        fr: {
          role: 'Responsable du Département Développement des Ressources Humaines (DRH)',
          organization: 'Association des Étudiants en Informatique (HMIF), UMM',
          period: 'Sept 2022 – Sept 2023',
          summary: 'Responsable de la cohésion des membres, du déploiement des programmes du département, de la médiation et du renforcement d’équipe.'
        }
      }
    },
    {
      id: 'hmif-talent-staff',
      visible: true,
      i18n: {
        en: {
          role: 'Staff of Interest and Talent Department',
          organization: 'Informatics Student Association (HMIF), UMM',
          period: 'May 2022 – July 2022',
          summary: 'Contributed to the planning and execution of department-focused events and competitions.'
        },
        id: {
          role: 'Staf Departemen Minat dan Bakat',
          organization: 'Himpunan Mahasiswa Informatika (HMIF), UMM',
          period: 'Mei 2022 – Juli 2022',
          summary: 'Berkontribusi dalam perencanaan dan penyelenggaraan acara serta kompetisi minat dan bakat mahasiswa.'
        },
        fr: {
          role: 'Membre du Département Intérêts et Talents',
          organization: 'Association des Étudiants en Informatique (HMIF), UMM',
          period: 'Mai 2022 – Juil 2022',
          summary: 'Participation à la préparation et à l’exécution des événements et compétitions du département.'
        }
      }
    }
  ],

  /* --------------------------------------------------------------------------
   * 7. TECHNICAL SKILLS & SPOKEN LANGUAGES
   * -------------------------------------------------------------------------- */
  skills: {
    groups: [
      {
        id: 'programming',
        code: '01',
        items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'HTML5', 'CSS3'],
        i18n: {
          en: 'Programming Languages',
          id: 'Bahasa Pemrograman',
          fr: 'Langages de Programmation'
        }
      },
      {
        id: 'frameworks',
        code: '02',
        items: ['React', 'Laravel', 'Node.js'],
        i18n: {
          en: 'Frameworks & Libraries',
          id: 'Framework & Library',
          fr: 'Frameworks & Bibliothèques'
        }
      },
      {
        id: 'databases',
        code: '03',
        items: ['PostgreSQL', 'MySQL', 'Google Sheets'],
        i18n: {
          en: 'Databases & Storage',
          id: 'Basis Data & Penyimpanan',
          fr: 'Bases de Données'
        }
      },
      {
        id: 'tools-ai',
        code: '04',
        items: ['Git', 'GitHub', 'Postman', 'VSCode', 'AI Prompting (ChatGPT, Gemini, Claude)'],
        i18n: {
          en: 'Developer Tools & AI',
          id: 'Perangkat Pengembang & AI',
          fr: 'Outils de Développement & IA'
        }
      }
    ],

    spokenLanguages: [
      {
        code: 'ID',
        levelPercent: 100,
        i18n: {
          en: { name: 'Indonesian', level: 'Native' },
          id: { name: 'Bahasa Indonesia', level: 'Bahasa Ibu (Native)' },
          fr: { name: 'Indonésien', level: 'Langue maternelle' }
        }
      },
      {
        code: 'EN',
        levelPercent: 88,
        i18n: {
          en: { name: 'English', level: 'C1 / Professional' },
          id: { name: 'Bahasa Inggris', level: 'C1 / Profesional' },
          fr: { name: 'Anglais', level: 'C1 / Professionnel' }
        }
      },
      {
        code: 'FR',
        levelPercent: 35,
        i18n: {
          en: { name: 'French', level: 'Basic' },
          id: { name: 'Bahasa Prancis', level: 'Dasar (Basic)' },
          fr: { name: 'Français', level: 'Notions élémentaires' }
        }
      }
    ],

    spokenHeading: {
      en: 'Spoken Languages',
      id: 'Kemampuan Bahasa',
      fr: 'Langues Parlées'
    }
  }
};
