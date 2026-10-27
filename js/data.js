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
    defaultLang: 'en',        // Pilihan: 'en' | 'id' | 'fr'
    defaultTheme: 'system',   // Pilihan: 'system' | 'dark' | 'light'

    branding: {
      monogram: 'HA',         // Teks fallback logo geometris jika logoImage kosong
      shortName: 'HANS AUFA',
      faviconPath: 'assets/icons/favicon.svg',
      logoImage: ''           // Contoh: 'assets/icons/logo.svg' (kosongkan "" untuk monogram "HA")
    },

    background: {
      mode: 'canvas',         // Pilihan: 'canvas' (animasi interaktif) | 'image' (gambar statis)
      canvasStyle: 'dot-matrix', // Pilihan: 'dot-matrix' | 'wave-grid' | 'particles'
      imagePath: '',          // Contoh: 'assets/images/bg/custom-bg.jpg' (dipakai saat mode: 'image')
      imageOpacity: 0.16,     // Transparansi gambar background (0.05 - 0.5)
      interactive: true       // Respons terhadap pergerakan kursor/sentuhan
    },

    assets: {
      // Kosongkan "" untuk menampilkan kartu arsitektural monogram "HA" otomatis
      profileImage: '',       // Contoh: 'assets/images/profile/hans-profile.jpg'
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
      metaTitle: 'Hans Adiyatma Putra Aufa — Full-Stack Developer & Data / AI Engineer',
      metaDescription: 'Portfolio of Hans Adiyatma Putra Aufa — Informatics graduate (3.78 GPA) specializing in Full-Stack Web Development, Enterprise Systems, Data QA, and Explainable AI.',
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
        localTimeLabel: 'MALANG, ID'
      },
      hero: {
        eyebrow: 'PORTFOLIO ARCHIVE // EDITION 2026',
        availability: 'Available for Full-Stack, System & Data/AI Roles',
        roleTagline: 'Full-Stack Developer & Data / AI Engineer',
        location: 'Malang, Indonesia',
        almaMater: 'University of Muhammadiyah Malang — B.Sc. Informatics (GPA 3.78 / 4.00)',
        summary: 'Dedicated Informatics (Computer Science) graduate with a 3.78/4.00 GPA, combining strong expertise in Full-Stack Web Development, enterprise system integration, and Data Science / Explainable AI. Proven track record in building production-ready internal platforms (HRIS, Operational Management, Mini ERP), integrating hardware biometric APIs (ISAPI), and designing reliable data pipelines. Demonstrated leadership as former Vice President of the Data Science Club.',
        ctaProjects: 'View Projects',
        ctaDownloadCv: 'Download CV',
        ctaContact: 'Get in Touch',
        portraitCaption: 'ARCHITECTURAL PROFILE // SYSTEM & AI ENGINEER',
        portraitDegree: 'B.Sc. Informatics — UMM',
        metrics: [
          { value: '3.78', suffix: '/ 4.00', label: 'Cumulative GPA' },
          { value: '07+', suffix: 'Systems', label: 'Production & AI Builds' },
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
            title: 'Data Pipelines & Quality Assurance',
            desc: 'Transforming complex raw flat-files (123+ columns) into normalized relational schemas, stress-testing automated scripts, and enforcing 100% zero-duplication data integrity.'
          },
          {
            num: '03',
            title: 'Data Science & Explainable AI (XAI)',
            desc: 'Building interpretable classification and recommendation models where predictions remain transparent, auditable, and actionable for real-world decision-making.'
          }
        ]
      },
      experienceSection: {
        index: '02',
        kicker: 'CAREER TRAJECTORY',
        title: 'Work Experience',
        subtitle: 'Delivering enterprise software, automated pipelines, and verified datasets across private and public institutions.'
      },
      projectsSection: {
        index: '03',
        kicker: 'SELECTED WORKS',
        title: 'Featured Projects',
        subtitle: 'Production systems, relational architectures, and analytical models engineered for reliability and clarity.',
        filters: {
          all: 'All Works',
          fullstack: 'Full-Stack & Systems',
          data: 'Data, AI & QA'
        },
        viewLive: 'Live System',
        viewRepo: 'GitHub Repo',
        expandDetails: 'Inspect Architecture',
        collapseDetails: 'Hide Details',
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
      metaTitle: 'Hans Adiyatma Putra Aufa — Full-Stack Developer & Data / AI Engineer',
      metaDescription: 'Portofolio Hans Adiyatma Putra Aufa — Lulusan S1 Informatika (IPK 3.78) dengan spesialisasi Full-Stack Web Development, Integrasi Sistem Enterprise, Data QA, dan Explainable AI.',
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
        localTimeLabel: 'MALANG, ID'
      },
      hero: {
        eyebrow: 'ARSIP PORTOFOLIO // EDISI 2026',
        availability: 'Terbuka untuk Peluang Kerja Full-Stack, Sistem & Data/AI',
        roleTagline: 'Full-Stack Developer & Data / AI Engineer',
        location: 'Malang, Indonesia',
        almaMater: 'Universitas Muhammadiyah Malang — S1 Informatika (IPK 3.78 / 4.00)',
        summary: 'Lulusan S1 Informatika dengan IPK 3.78/4.00 yang memadukan keahlian dalam pengembangan web Full-Stack, integrasi sistem enterprise, serta Data Science dan Explainable AI. Berpengalaman membangun platform internal siap produksi (HRIS, Sistem Manajemen Operasional, Mini ERP), mengintegrasikan API perangkat biometrik (ISAPI), dan merancang pipeline data yang andal. Memiliki rekam jejak kepemimpinan sebagai Wakil Presiden Data Science Club.',
        ctaProjects: 'Lihat Proyek',
        ctaDownloadCv: 'Unduh CV',
        ctaContact: 'Hubungi Saya',
        portraitCaption: 'PROFIL ARSITEKTURAL // ENGINEER SISTEM & AI',
        portraitDegree: 'S1 Informatika — UMM',
        metrics: [
          { value: '3.78', suffix: '/ 4.00', label: 'IPK Kumulatif' },
          { value: '07+', suffix: 'Sistem', label: 'Sistem Produksi & AI' },
          { value: '100%', suffix: 'Integritas', label: 'Standar Data QA' },
          { value: '03', suffix: 'Bahasa', label: 'ID · EN · FR' }
        ]
      },
      overview: {
        index: '01',
        kicker: 'ARSITEKTUR INTI',
        title: 'Membangun Sistem Andal & Kecerdasan yang Transparan',
        subtitle: 'Menjembatani rekayasa perangkat lunak operasional, penjaminan mutu data ketat, dan model machine learning yang dapat dijelaskan.',
        pillars: [
          {
            num: '01',
            title: 'Full-Stack & Integrasi Enterprise',
            desc: 'Merancang platform internal end-to-end (HRIS, Manajemen Operasional, Mini ERP), RESTful API, keamanan RBAC, serta sinkronisasi biometrik perangkat keras via Hikvision ISAPI.'
          },
          {
            num: '02',
            title: 'Pipeline Data & Quality Assurance',
            desc: 'Mentransformasi data mentah kompleks (123+ kolom) menjadi skema relasional terstruktur, menguji ketahanan skrip otomatis, dan menjaga 100% integritas data tanpa duplikasi.'
          },
          {
            num: '03',
            title: 'Data Science & Explainable AI (XAI)',
            desc: 'Mengembangkan model klasifikasi dan rekomendasi yang transparan, mudah diaudit, serta memberikan dasar pengambilan keputusan yang akurat.'
          }
        ]
      },
      experienceSection: {
        index: '02',
        kicker: 'REKAM JEJAK KARIER',
        title: 'Pengalaman Kerja',
        subtitle: 'Mengembangkan solusi perangkat lunak internal, pipeline data real-time, dan validasi basis data pada sektor swasta maupun instansi pemerintah.'
      },
      projectsSection: {
        index: '03',
        kicker: 'KARYA TERPILIH',
        title: 'Proyek Unggulan',
        subtitle: 'Sistem siap produksi, arsitektur basis data relasional, dan model analitik yang dirancang untuk keandalan tinggi.',
        filters: {
          all: 'Semua Proyek',
          fullstack: 'Full-Stack & Sistem',
          data: 'Data, AI & QA'
        },
        viewLive: 'Sistem Live',
        viewRepo: 'Repo GitHub',
        expandDetails: 'Lihat Detail Arsitektur',
        collapseDetails: 'Tutup Detail',
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
      metaTitle: 'Hans Adiyatma Putra Aufa — Développeur Full-Stack & Ingénieur Data / IA',
      metaDescription: 'Portfolio de Hans Adiyatma Putra Aufa — Diplômé en Informatique (GPA 3.78) spécialisé en Développement Full-Stack, Systèmes d’Entreprise, Data QA et IA Explicable.',
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
        localTimeLabel: 'MALANG, ID'
      },
      hero: {
        eyebrow: 'ARCHIVE PORTFOLIO // ÉDITION 2026',
        availability: 'Disponible — Postes Full-Stack, Systèmes & Data/IA',
        roleTagline: 'Développeur Full-Stack & Ingénieur Data / IA',
        location: 'Malang, Indonésie',
        almaMater: 'Université Muhammadiyah de Malang — Licence d’Informatique (GPA 3.78 / 4.00)',
        summary: 'Diplômé en Informatique (GPA 3.78/4.00) spécialisé dans le développement Full-Stack, l’intégration de systèmes d’entreprise, la Science des Données et l’IA Explicable (XAI). Expérience avérée dans la conception de plateformes internes en production (SIRH/HRIS, Gestion Opérationnelle, Mini ERP), l’intégration d’API biométriques matérielles (ISAPI) et l’architecture de pipelines de données fiables. Ancien Vice-Président du Data Science Club.',
        ctaProjects: 'Voir les Projets',
        ctaDownloadCv: 'Télécharger le CV',
        ctaContact: 'Me Contacter',
        portraitCaption: 'PROFIL ARCHITECTURAL // INGÉNIEUR SYSTÈMES & IA',
        portraitDegree: 'Licence Informatique — UMM',
        metrics: [
          { value: '3.78', suffix: '/ 4.00', label: 'GPA Cumulatif' },
          { value: '07+', suffix: 'Systèmes', label: 'Plateformes & Modèles IA' },
          { value: '100%', suffix: 'Intégrité', label: 'Standard Qualité Data' },
          { value: '03', suffix: 'Langues', label: 'ID · EN · FR' }
        ]
      },
      overview: {
        index: '01',
        kicker: 'ARCHITECTURE FONDAMENTALE',
        title: 'Concevoir des Systèmes Fiables & une IA Interprétable',
        subtitle: 'Alliance entre ingénierie logicielle opérationnelle, assurance qualité des données et transparence algorithmique.',
        pillars: [
          {
            num: '01',
            title: 'Full-Stack & Intégration d’Entreprise',
            desc: 'Conception de plateformes internes complètes (SIRH/HRIS, Gestion Opérationnelle, Mini ERP), API REST, contrôle d’accès RBAC et synchronisation biométrique matérielle via Hikvision ISAPI.'
          },
          {
            num: '02',
            title: 'Pipelines de Données & Assurance Qualité',
            desc: 'Restructuration de fichiers plats complexes (123+ colonnes) en bases relationnelles normalisées, tests de charge automatisés et garantie de 100 % d’intégrité sans doublons.'
          },
          {
            num: '03',
            title: 'Science des Données & IA Explicable (XAI)',
            desc: 'Développement de systèmes de classification et de recommandation transparents, interprétables et directement exploitables.'
          }
        ]
      },
      experienceSection: {
        index: '02',
        kicker: 'PARCOURS PROFESSIONNEL',
        title: 'Expérience Professionnelle',
        subtitle: 'Développement logiciel interne, ingénierie de flux de données et validation rigoureuse en entreprise et secteur public.'
      },
      projectsSection: {
        index: '03',
        kicker: 'RÉALISATIONS SÉLECTIONNÉES',
        title: 'Projets Phares',
        subtitle: 'Applications en production, architectures relationnelles et modèles analytiques conçus pour la performance.',
        filters: {
          all: 'Tous les Projets',
          fullstack: 'Full-Stack & Systèmes',
          data: 'Données, IA & QA'
        },
        viewLive: 'Voir en Ligne',
        viewRepo: 'Dépôt GitHub',
        expandDetails: 'Inspecter l’Architecture',
        collapseDetails: 'Masquer les Détails',
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
   *    Set `visible: false` on any item to hide it cleanly from the UI.
   * -------------------------------------------------------------------------- */
  projects: [
    {
      id: 'hris-attendance',
      visible: true,
      category: 'fullstack',
      image: '', // Contoh: 'assets/images/projects/hris-preview.png'
      liveUrl: 'https://hris.omahvisual.com',
      liveDomain: 'hris.omahvisual.com',
      repoUrl: '',
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
            'Engineered a full-stack internal HRIS handling employee administration, dynamic attendance records, and role-based access control (RBAC).',
            'Integrated physical Hikvision biometric devices via ISAPI endpoints to automate real-time synchronization of employee attendance logs.',
            'Developed ~80% of frontend interfaces (dashboards, employee tracking, and admin controls) connected seamlessly to custom backend REST APIs.',
            'Implemented secure database schemas ensuring transactional integrity across user profiles, logs, and system access levels.'
          ]
        },
        id: {
          title: 'Human Resource Information System (HRIS) & Integrasi Presensi',
          date: 'September 2026',
          role: 'Full-Stack Developer',
          categoryLabel: 'Full-Stack & Sistem',
          statusBadge: 'Produksi Live — hris.omahvisual.com',
          highlights: [
            'Membangun platform HRIS internal full-stack yang menangani administrasi karyawan, pencatatan presensi dinamis, dan kontrol akses berbasis peran (RBAC).',
            'Mengintegrasikan perangkat biometrik fisik Hikvision melalui endpoint ISAPI untuk mengotomatisasi sinkronisasi log kehadiran karyawan secara real-time.',
            'Mengembangkan ~80% antarmuka frontend (dashboard, pelacakan karyawan, dan kontrol admin) yang terhubung mulus ke REST API backend kustom.',
            'Mengimplementasikan skema database aman yang menjamin integritas transaksional di seluruh profil pengguna, log, dan level akses sistem.'
          ]
        },
        fr: {
          title: 'Système d’Information RH (SIRH / HRIS) & Intégration Biométrique',
          date: 'Septembre 2026',
          role: 'Développeur Full-Stack',
          categoryLabel: 'Full-Stack & Systèmes',
          statusBadge: 'En Production — hris.omahvisual.com',
          highlights: [
            'Ingénierie d’un SIRH interne complet gérant l’administration du personnel, le suivi dynamique des présences et le contrôle d’accès basé sur les rôles (RBAC).',
            'Intégration de terminaux biométriques physiques Hikvision via les endpoints ISAPI pour synchroniser automatiquement les pointages en temps réel.',
            'Développement d’environ 80 % des interfaces frontend (tableaux de bord, suivi des employés, administration) connectées aux API REST backend.',
            'Implémentation de schémas de base de données sécurisés garantissant l’intégrité transactionnelle des profils, journaux et permissions.'
          ]
        }
      }
    },
    {
      id: 'operational-management',
      visible: true,
      category: 'fullstack',
      image: '',
      liveUrl: '',
      liveDomain: '',
      repoUrl: 'https://github.com/hazehans', // Ubah ke URL repo spesifik jika sudah dipublikasikan
      isLive: false,
      tech: ['Full-Stack Architecture', 'REST API', 'Relational DB', 'Modular Backend'],
      i18n: {
        en: {
          title: 'Operational Management System',
          date: 'September 2026',
          role: 'Full-Stack Developer',
          categoryLabel: 'Full-Stack & Systems',
          statusBadge: 'In Development / Ready for Deployment',
          highlights: [
            'Designed and built an end-to-end operational management platform to streamline internal task workflows and operational resource tracking.',
            'Architected scalable backend services with relational database models to prevent data bottlenecks and maintain high system availability.',
            'Implemented structured API endpoints and modular application logic for real-time monitoring of operational activities.'
          ]
        },
        id: {
          title: 'Sistem Manajemen Operasional',
          date: 'September 2026',
          role: 'Full-Stack Developer',
          categoryLabel: 'Full-Stack & Sistem',
          statusBadge: 'Dalam Pengembangan / Siap Deploy',
          highlights: [
            'Merancang dan membangun platform manajemen operasional end-to-end untuk menyederhanakan alur tugas internal serta pelacakan sumber daya operasional.',
            'Merancang layanan backend yang skalabel dengan model database relasional guna mencegah bottleneck data dan menjaga ketersediaan sistem.',
            'Mengimplementasikan endpoint API terstruktur dan logika aplikasi modular untuk pemantauan aktivitas operasional secara real-time.'
          ]
        },
        fr: {
          title: 'Système de Gestion Opérationnelle',
          date: 'Septembre 2026',
          role: 'Développeur Full-Stack',
          categoryLabel: 'Full-Stack & Systèmes',
          statusBadge: 'En Développement / Prêt au Déploiement',
          highlights: [
            'Conception et développement d’une plateforme de gestion opérationnelle de bout en bout optimisant les flux de tâches internes et le suivi des ressources.',
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
      image: '',
      liveUrl: '',
      liveDomain: '',
      repoUrl: '',
      isLive: false,
      tech: ['AppSheet', 'Relational Schema', 'System Analysis', 'CRUD UI/UX', 'Performance QA'],
      i18n: {
        en: {
          title: 'Transaction & Inventory Management App (Mini ERP)',
          date: 'June 2026',
          role: 'System Analyst',
          categoryLabel: 'Full-Stack & Systems',
          statusBadge: 'Internal Enterprise App',
          highlights: [
            'Designed a relational database architecture from 123 columns of raw flat-file data into structured Parent-Child tables.',
            'Developed an AppSheet application with a 7-tab UI/UX for Admins to perform CRUD (Create, Read, Update, Delete) operations.',
            'Conducted functional testing on Auto-Increment IDs, dynamic cascading dropdowns, and search optimization to ensure smooth performance under heavy data loads.'
          ]
        },
        id: {
          title: 'Aplikasi Manajemen Transaksi & Inventaris (Mini ERP)',
          date: 'Juni 2026',
          role: 'System Analyst',
          categoryLabel: 'Full-Stack & Sistem',
          statusBadge: 'Aplikasi Internal Enterprise',
          highlights: [
            'Merancang arsitektur database relasional dari 123 kolom data mentah flat-file menjadi tabel Parent-Child yang terstruktur.',
            'Mengembangkan aplikasi AppSheet dengan antarmuka 7-tab bagi Admin untuk menjalankan operasi CRUD secara efisien.',
            'Melaksanakan pengujian fungsional pada Auto-Increment ID, cascading dropdown dinamis, serta optimasi pencarian agar tetap responsif pada beban data besar.'
          ]
        },
        fr: {
          title: 'Application de Gestion des Transactions & Stocks (Mini ERP)',
          date: 'Juin 2026',
          role: 'Analyste Système',
          categoryLabel: 'Full-Stack & Systèmes',
          statusBadge: 'Application Interne d’Entreprise',
          highlights: [
            'Conception d’une architecture relationnelle normalisée à partir d’un fichier plat brut de 123 colonnes vers des tables Parent-Enfant structurées.',
            'Développement d’une application AppSheet dotée d’une interface à 7 onglets permettant aux administrateurs d’exécuter toutes les opérations CRUD.',
            'Réalisation de tests fonctionnels sur les identifiants auto-incrémentés, menus déroulants en cascade et indexation de recherche sous forte charge.'
          ]
        }
      }
    },
    {
      id: 'database-migration-qa',
      visible: true,
      category: 'data',
      image: '',
      liveUrl: '',
      liveDomain: '',
      repoUrl: '',
      isLive: false,
      tech: ['ETL Migration', 'Data QA', 'Relational Modeling', 'Quality Control', 'Google Sheets'],
      i18n: {
        en: {
          title: 'Database Migration & Data Quality Assurance',
          date: 'June 2026',
          role: 'Data QA Lead & System Analyst',
          categoryLabel: 'Data, AI & QA',
          statusBadge: '100% Data Integrity Verified',
          highlights: [
            'Managed and supervised the entire data migration process of legacy inventory and customer data into a newly structured relational database.',
            'Directed a Data Entry intern to clean raw data while serving as the primary Quality Control (QC) checker to ensure 100% data integrity.',
            'Conducted rigorous Data Quality checks to identify anomalies, eliminate duplicated entries, and verify correct data types before ERP integration.'
          ]
        },
        id: {
          title: 'Migrasi Basis Data & Data Quality Assurance',
          date: 'Juni 2026',
          role: 'Data QA Lead & System Analyst',
          categoryLabel: 'Data, AI & QA',
          statusBadge: '100% Integritas Data Terverifikasi',
          highlights: [
            'Mengelola dan mensupervisi seluruh proses migrasi data inventaris serta pelanggan lama ke dalam struktur basis data relasional baru.',
            'Mengarahkan staf magang Data Entry dalam pembersihan data mentah sekaligus bertindak sebagai pemeriksa utama Quality Control (QC) demi menjamin 100% integritas data.',
            'Melakukan pemeriksaan kualitas data menyeluruh untuk mendeteksi anomali, menghapus duplikasi entri, dan memverifikasi tipe data sebelum integrasi ke sistem ERP.'
          ]
        },
        fr: {
          title: 'Migration de Base de Données & Assurance Qualité (Data QA)',
          date: 'Juin 2026',
          role: 'Responsable Data QA & Analyste Système',
          categoryLabel: 'Données, IA & QA',
          statusBadge: 'Intégrité des Données Vérifiée à 100 %',
          highlights: [
            'Supervision complète du processus de migration des données historiques de stocks et clients vers une nouvelle base de données relationnelle.',
            'Encadrement d’un stagiaire en nettoyage de données tout en assurant le contrôle qualité (QC) principal pour garantir 100 % d’intégrité.',
            'Exécution d’audits rigoureux de qualité des données afin d’identifier les anomalies, éliminer les doublons et valider le typage avant l’intégration ERP.'
          ]
        }
      }
    },
    {
      id: 'mini-hr-pipeline-dashboard',
      visible: true,
      category: 'fullstack',
      image: '',
      liveUrl: '',
      liveDomain: '',
      repoUrl: '',
      isLive: false,
      tech: ['JavaScript Fetch API', 'Google Apps Script', 'HTML5 / CSS3', 'Realtime Pipeline', 'QA Audit'],
      i18n: {
        en: {
          title: 'Mini HR Data Pipeline & Realtime Operations Dashboard',
          date: 'June 2026',
          role: 'System Integrator & QA Tester',
          categoryLabel: 'Full-Stack & Systems',
          statusBadge: 'Realtime Pipeline & Dashboard',
          highlights: [
            'Developed a secure data entry pipeline for field crews using Google Forms synced to a centralized database using IMPORTRANGE.',
            'Created a responsive web dashboard using HTML/JS to monitor project status (Booking/Running/Done) with dynamic UI color badges.',
            'Tested API endpoints using JS Fetch API and audited Google Apps Script triggers (On Form Submit) with strict conditional logic to prevent data collisions.'
          ]
        },
        id: {
          title: 'Pipeline Data Mini HR & Dashboard Operasional Real-Time',
          date: 'Juni 2026',
          role: 'System Integrator & QA Tester',
          categoryLabel: 'Full-Stack & Sistem',
          statusBadge: 'Pipeline & Dashboard Real-Time',
          highlights: [
            'Mengembangkan pipeline entri data aman bagi kru lapangan menggunakan Google Forms yang tersinkronisasi ke database terpusat via IMPORTRANGE.',
            'Membangun dashboard web responsif berbasis HTML/JS untuk memantau status proyek (Booking/Running/Done) dengan indikator warna dinamis.',
            'Menguji endpoint menggunakan JS Fetch API serta mengaudit trigger Google Apps Script (On Form Submit) dengan logika kondisional ketat guna mencegah bentrokan data.'
          ]
        },
        fr: {
          title: 'Pipeline de Données Mini RH & Tableau de Bord Temps Réel',
          date: 'Juin 2026',
          role: 'Intégrateur Système & Testeur QA',
          categoryLabel: 'Full-Stack & Systèmes',
          statusBadge: 'Pipeline & Monitoring Temps Réel',
          highlights: [
            'Développement d’un pipeline sécurisé de collecte terrain via Google Forms synchronisé avec une base centrale par IMPORTRANGE.',
            'Création d’un tableau de bord web responsive en HTML/JS permettant de suivre l’état des projets (Booking/Running/Done) avec badges dynamiques.',
            'Validation des endpoints via Fetch API et audit des déclencheurs Google Apps Script (On Form Submit) pour prévenir toute collision entre données d’équipes et clients.'
          ]
        }
      }
    },
    {
      id: 'mental-health-xai',
      visible: true,
      category: 'data',
      image: '',
      liveUrl: '',
      liveDomain: '',
      repoUrl: '',
      isLive: false,
      tech: ['Python', 'Machine Learning', 'Explainable AI (XAI)', 'Classification', 'Model Interpretability'],
      i18n: {
        en: {
          title: 'Mental Health Classification (Explainable AI)',
          date: 'September 2025',
          role: 'Data Analyst',
          categoryLabel: 'Data, AI & QA',
          statusBadge: 'Explainable AI Research',
          highlights: [
            'Developed a classification system for mental health disorders using Machine Learning.',
            'Implemented Explainable AI (XAI) methods to ensure model transparency and interpretability.'
          ]
        },
        id: {
          title: 'Klasifikasi Kesehatan Mental (Explainable AI)',
          date: 'September 2025',
          role: 'Data Analyst',
          categoryLabel: 'Data, AI & QA',
          statusBadge: 'Riset Explainable AI',
          highlights: [
            'Mengembangkan sistem klasifikasi gangguan kesehatan mental menggunakan algoritma Machine Learning.',
            'Mengimplementasikan metode Explainable AI (XAI) untuk memastikan transparansi dan kemudahan interpretasi pada prediksi model.'
          ]
        },
        fr: {
          title: 'Classification de la Santé Mentale (IA Explicable / XAI)',
          date: 'Septembre 2025',
          role: 'Data Analyst',
          categoryLabel: 'Données, IA & QA',
          statusBadge: 'Recherche en IA Explicable',
          highlights: [
            'Développement d’un système de classification des troubles de santé mentale basé sur le Machine Learning.',
            'Implémentation de méthodes d’IA Explicable (XAI) garantissant la transparence et l’interprétabilité des décisions du modèle.'
          ]
        }
      }
    },
    {
      // OPTIONAL TOGGLE: Ubah `visible: false` jika ingin menyembunyikan proyek Spotify ini
      id: 'spotify-song-analysis',
      visible: true,
      category: 'data',
      image: '',
      liveUrl: '',
      liveDomain: '',
      repoUrl: '',
      isLive: false,
      tech: ['Python', 'Data Analysis', 'Recommendation System', 'Behavioral Clustering'],
      i18n: {
        en: {
          title: 'Spotify Application Song Analysis',
          date: 'January 2025',
          role: 'Data Analyst',
          categoryLabel: 'Data, AI & QA',
          statusBadge: 'Recommendation Analytics',
          highlights: [
            'Analyzed song datasets extracted from Spotify to identify patterns in listener behavior and engineered a recommendation system focusing on the "Underrated Chill and Calm" category.'
          ]
        },
        id: {
          title: 'Analisis Lagu Aplikasi Spotify',
          date: 'Januari 2025',
          role: 'Data Analyst',
          categoryLabel: 'Data, AI & QA',
          statusBadge: 'Analitik Sistem Rekomendasi',
          highlights: [
            'Menganalisis dataset lagu dari Spotify untuk mengidentifikasi pola perilaku pendengar serta merancang sistem rekomendasi yang berfokus pada kategori "Underrated Chill and Calm".'
          ]
        },
        fr: {
          title: 'Analyse Musicale & Système de Recommandation Spotify',
          date: 'Janvier 2025',
          role: 'Data Analyst',
          categoryLabel: 'Données, IA & QA',
          statusBadge: 'Analytique & Recommandation',
          highlights: [
            'Analyse de jeux de données musicaux extraits de Spotify pour identifier les habitudes d’écoute et concevoir un moteur de recommandation dédié à la catégorie « Underrated Chill and Calm ».'
          ]
        }
      }
    },
    {
      id: 'student-achievement-db',
      visible: true,
      category: 'fullstack',
      image: '',
      liveUrl: '',
      liveDomain: '',
      repoUrl: '',
      isLive: false,
      tech: ['Backend Development', 'MySQL', 'CRUD Architecture', 'Web Application'],
      i18n: {
        en: {
          title: 'Student Achievement Database Website',
          date: 'December 2023',
          role: 'Backend Developer',
          categoryLabel: 'Full-Stack & Systems',
          statusBadge: 'Academic Web System',
          highlights: [
            'Built a web-based application featuring full CRUD functionality and managed data architecture using MySQL as the primary database system.'
          ]
        },
        id: {
          title: 'Website Basis Data Prestasi Mahasiswa',
          date: 'Desember 2023',
          role: 'Backend Developer',
          categoryLabel: 'Full-Stack & Sistem',
          statusBadge: 'Sistem Web Akademik',
          highlights: [
            'Membangun aplikasi berbasis web dengan fungsionalitas CRUD penuh serta mengelola arsitektur dan penyimpanan data menggunakan MySQL sebagai sistem database utama.'
          ]
        },
        fr: {
          title: 'Plateforme Web des Réussites Étudiantes',
          date: 'Décembre 2023',
          role: 'Développeur Backend',
          categoryLabel: 'Full-Stack & Systèmes',
          statusBadge: 'Système Web Académique',
          highlights: [
            'Développement d’une application web dotée de fonctionnalités CRUD complètes et gestion de l’architecture de données sous MySQL.'
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
          degree: 'Bachelor of Informatics (Computer Science)',
          gpaLabel: 'GPA: 3.78 / 4.00',
          coursework: ['Data Science', 'Machine Learning', 'Database Management', 'Backend Development']
        },
        id: {
          institution: 'Universitas Muhammadiyah Malang',
          location: 'Malang, Indonesia',
          period: 'Sept 2021 – Feb 2026',
          degree: 'Sarjana Informatika (S1)',
          gpaLabel: 'IPK: 3.78 / 4.00',
          coursework: ['Sains Data', 'Machine Learning', 'Manajemen Basis Data', 'Pengembangan Backend']
        },
        fr: {
          institution: 'Université Muhammadiyah de Malang',
          location: 'Malang, Indonésie',
          period: 'Sept 2021 – Fév 2026',
          degree: 'Licence en Informatique (Bachelor of Informatics)',
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

