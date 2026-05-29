// =====================
// CUSTOM CURSOR (desktop only)
// =====================
const isTouchDevice = () => window.matchMedia('(hover: none) and (pointer: coarse)').matches;

const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

if (!isTouchDevice()) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
  });

  function animateRing() {
    rx += (mx - rx - 19) * 0.12;
    ry += (my - ry - 19) * 0.12;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Universal hover: every element triggers cursor-hover
  document.addEventListener('mouseover', e => {
    const el = e.target;
    const isInteractive = el.closest('a, button, [role="button"], .skill-badge, .project-card, .service-card, .timeline-item, .cert-item, .contact-link, .about-stat, .lang-option, .lang-btn, .hero-social, .footer-link');
    if (isInteractive) {
      document.body.classList.add('cursor-hover');
    } else {
      document.body.classList.remove('cursor-hover');
    }
  });
}

// =====================
// MOBILE MENU
// =====================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose.addEventListener('click', closeMobile);

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// =====================
// SCROLL FADE-IN ANIMATIONS
// =====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// =====================
// ACTIVE NAV LINK ON SCROLL
// =====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// =====================
// LANGUAGE SWITCHER
// =====================
const translations = {
  es: {
    'nav-home': 'Inicio',
    'nav-about': 'Sobre mí',
    'nav-services': 'Servicios',
    'nav-projects': 'Proyectos',
    'nav-contact': 'Contactar',
    'hero-badge': 'Disponible para proyectos',
    'hero-desc': 'Co-fundador de <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" class="nuviadev-link">NuviaDev</a>. Apasionado por crear experiencias digitales modernas, eficientes y visualmente impactantes. Estudiante de DAM en Barcelona.',
    'hero-btn-projects': 'Ver proyectos',
    'stat-projects': 'Proyectos activos',
    'stat-company': 'Empresa fundada',
    'about-tag': 'Sobre mí',
    'about-title': 'Quién soy',
    'about-p1': 'Soy Derek Posadas Saucedo, desarrollador frontend y de software con sede en Vilanova del Camí, Barcelona. Co-fundador de <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" class="nuviadev-link">NuviaDev</a>, una empresa creada junto a compañeros de DAM para ofrecer soluciones web modernas y personalizadas a clientes.',
    'about-p2': 'Actualmente cursando el Grado Superior de Desarrollo de Aplicaciones Multiplataforma (DAM), con una base sólida en sistemas y redes gracias a mis estudios previos de SMR.',
    'about-p3': 'Me apasiona la tecnología, la seguridad informática y el desarrollo de software que combina funcionalidad con diseño de calidad.',
    'stat-exp': 'Años de experiencia',
    'stat-completed': 'Proyectos completados',
    'stat-certs': 'Certificaciones',
    'stat-cofounded': 'Empresa cofundada',
    'timeline-tag': 'Formación & Trayectoria',
    'tl1-year': '2025 – Actualidad',
    'tl1-title': 'Desarrollo de Aplicaciones Multiplataforma',
    'tl1-org': 'Grado Superior (DAM)',
    'tl1-desc': 'Formación avanzada en desarrollo de aplicaciones multiplataforma, programación orientada a objetos, bases de datos y servicios.',
    'tl2-year': '2024 – Actualidad',
    'tl2-title': 'Co-fundador & Developer',
    'tl2-desc': 'Empresa fundada con compañeros de DAM. Desarrollamos webs modernas y personalizadas para clientes con un enfoque premium.',
    'tl3-title': 'Prácticas SMR',
    'tl3-desc': 'Soporte técnico, reparación y mantenimiento de equipos, configuración de sistemas y colaboración en instalación de cámaras de seguridad.',
    'tl4-title': 'Sistemas Microinformáticos y Redes',
    'tl4-org': 'SMR – Grado Medio',
    'tl4-desc': 'Base sólida en redes, sistemas operativos, seguridad y hardware informático.',
    'certs-tag': 'Certificaciones',
    'cert1-name': 'SQL desde Cero',
    'cert2-name': 'Python desde Cero',
    'services-tag': 'Servicios',
    'services-title': 'Qué ofrezco',
    'services-sub': 'Soluciones digitales modernas y personalizadas para cada necesidad.',
    'svc1-title': 'Desarrollo Web Personalizado',
    'svc1-desc': 'Webs modernas, rápidas y responsivas diseñadas a medida desde <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" class="nuviadev-link">NuviaDev</a>. Cada proyecto es único, optimizado y adaptado a los objetivos del cliente.',
    'svc1-t1': 'Diseño a medida',
    'svc1-t3': 'Optimización',
    'svc2-title': 'Aplicaciones de Escritorio',
    'svc2-desc': 'Desarrollo de aplicaciones de escritorio robustas y eficientes utilizando Java y C, adaptadas a las necesidades operacionales de empresas y proyectos.',
    'svc2-t3': 'Multiplataforma',
    'svc3-title': 'Gestión de Bases de Datos',
    'svc3-desc': 'Diseño, implementación y optimización de bases de datos relacionales y NoSQL. Desde modelado de datos hasta consultas complejas y mantenimiento.',
    'svc4-title': 'Soporte Técnico & Sistemas',
    'svc4-desc': 'Configuración, mantenimiento y soporte de sistemas informáticos, redes y servidores. Experiencia real con entornos corporativos y educativos.',
    'svc4-t3': 'Redes',
    'svc4-t4': 'Servidores',
    'skills-tag': 'Tecnologías',
    'skills-title': 'Mi stack',
    'skills-sub': 'Herramientas y tecnologías con las que trabajo día a día.',
    'skills-g1': 'Lenguajes de Programación',
    'skills-g2': 'Bases de Datos',
    'skills-g3': 'Sistemas & Redes',
    'skills-g4': 'Herramientas',
    'skill-redes': 'Redes',
    'skill-security': 'Seguridad informática',
    'skill-servers': 'Servidores',
    'projects-tag': 'Proyectos',
    'projects-title': 'Mi trabajo',
    'projects-sub': 'Proyectos diseñados y desarrollados con atención al detalle y calidad premium.',
    'proj-view': 'Ver proyecto',
    'proj-more': 'Ver más',
    'proj1-type': 'Web Corporativa',
    'proj1-desc': 'Web corporativa moderna para <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" class="nuviadev-link">NuviaDev</a> con diseño minimalista oscuro, animaciones premium y secciones de servicios y contacto optimizadas.',
    'proj2-type': 'Sistema de Gestión',
    'proj2-desc': 'Aplicación web de gestión de inventario y ventas con panel de administración, reportes en tiempo real y sistema de usuarios con roles.',
    'proj3-type': 'App de Escritorio',
    'proj3-desc': 'Aplicación de escritorio en Java con interfaz gráfica moderna para gestión de proyectos, tareas y equipos de trabajo con persistencia en BD.',
    'proj4-type': 'Portfolio Premium',
    'proj4-name': 'Portfolio Personal',
    'proj4-desc': 'Mi portfolio personal: un espacio donde me presento como desarrollador y muestro algunos de los proyectos en los que he trabajado. Diseñado para reflejar mi estilo y forma de entender el desarrollo web.',
    'contact-tag': 'Contacto',
    'contact-h3a': 'Trabajemos',
    'contact-h3b': 'juntos',
    'contact-p': '¿Tienes un proyecto en mente? Estoy disponible para colaboraciones, proyectos freelance y nuevas oportunidades. No dudes en contactarme.',
    'contact-loc-label': 'UBICACIÓN',
    'contact-loc-val': 'Vilanova del Camí, Barcelona 🇪🇸',
    'cta-title': '¿Listo para empezar?',
    'cta-desc': 'Cuéntame tu idea y construimos algo increíble juntos. Respondo en menos de 24h.',
    'cta-btn': 'Enviar mensaje',
    'also-on': 'TAMBIÉN EN',
    'footer-text': '© 2025 <strong>Derek Posadas Saucedo</strong> — Hecho por mí · <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" style="color:var(--accent); text-decoration:none; font-weight:600;">NuviaDev</a>',
  },
  ca: {
    'nav-home': 'Inici',
    'nav-about': 'Sobre mi',
    'nav-services': 'Serveis',
    'nav-projects': 'Projectes',
    'nav-contact': 'Contactar',
    'hero-badge': 'Disponible per a projectes',
    'hero-desc': 'Co-fundador de <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" class="nuviadev-link">NuviaDev</a>. Apassionat per crear experiències digitals modernes, eficients i visualment impactants. Estudiant de DAM a Barcelona.',
    'hero-btn-projects': 'Veure projectes',
    'stat-projects': 'Projectes actius',
    'stat-company': 'Empresa fundada',
    'about-tag': 'Sobre mi',
    'about-title': 'Qui soc',
    'about-p1': 'Soc Derek Posadas Saucedo, desenvolupador frontend i de programari amb seu a Vilanova del Camí, Barcelona. Co-fundador de <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" class="nuviadev-link">NuviaDev</a>, una empresa creada amb companys de DAM per oferir solucions web modernes i personalitzades als clients.',
    'about-p2': 'Actualment cursant el Grau Superior de Desenvolupament d\'Aplicacions Multiplataforma (DAM), amb una base sòlida en sistemes i xarxes gràcies als meus estudis previs de SMR.',
    'about-p3': 'M\'apassiona la tecnologia, la seguretat informàtica i el desenvolupament de programari que combina funcionalitat amb disseny de qualitat.',
    'stat-exp': 'Anys d\'experiència',
    'stat-completed': 'Projectes completats',
    'stat-certs': 'Certificacions',
    'stat-cofounded': 'Empresa co-fundada',
    'timeline-tag': 'Formació & Trajectòria',
    'tl1-year': '2025 – Actualitat',
    'tl1-title': 'Desenvolupament d\'Aplicacions Multiplataforma',
    'tl1-org': 'Grau Superior (DAM)',
    'tl1-desc': 'Formació avançada en desenvolupament d\'aplicacions multiplataforma, programació orientada a objectes, bases de dades i serveis.',
    'tl2-year': '2024 – Actualitat',
    'tl2-title': 'Co-fundador & Developer',
    'tl2-desc': 'Empresa fundada amb companys de DAM. Desenvolupem webs modernes i personalitzades per a clients amb un enfocament premium.',
    'tl3-title': 'Pràctiques SMR',
    'tl3-desc': 'Suport tècnic, reparació i manteniment d\'equips, configuració de sistemes i col·laboració en la instal·lació de càmeres de seguretat.',
    'tl4-title': 'Sistemes Microinformàtics i Xarxes',
    'tl4-org': 'SMR – Grau Mitjà',
    'tl4-desc': 'Base sòlida en xarxes, sistemes operatius, seguretat i maquinari informàtic.',
    'certs-tag': 'Certificacions',
    'cert1-name': 'SQL des de Zero',
    'cert2-name': 'Python des de Zero',
    'services-tag': 'Serveis',
    'services-title': 'Què ofereixo',
    'services-sub': 'Solucions digitals modernes i personalitzades per a cada necessitat.',
    'svc1-title': 'Desenvolupament Web Personalitzat',
    'svc1-desc': 'Webs modernes, ràpides i responsives dissenyades a mida des de <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" class="nuviadev-link">NuviaDev</a>. Cada projecte és únic, optimitzat i adaptat als objectius del client.',
    'svc1-t1': 'Disseny a mida',
    'svc1-t3': 'Optimització',
    'svc2-title': 'Aplicacions d\'Escriptori',
    'svc2-desc': 'Desenvolupament d\'aplicacions d\'escriptori robustes i eficients utilitzant Java i C, adaptades a les necessitats operacionals d\'empreses i projectes.',
    'svc2-t3': 'Multiplataforma',
    'svc3-title': 'Gestió de Bases de Dades',
    'svc3-desc': 'Disseny, implementació i optimització de bases de dades relacionals i NoSQL. Des del modelatge de dades fins a consultes complexes i manteniment.',
    'svc4-title': 'Suport Tècnic & Sistemes',
    'svc4-desc': 'Configuració, manteniment i suport de sistemes informàtics, xarxes i servidors. Experiència real amb entorns corporatius i educatius.',
    'svc4-t3': 'Xarxes',
    'svc4-t4': 'Servidors',
    'skills-tag': 'Tecnologies',
    'skills-title': 'El meu stack',
    'skills-sub': 'Eines i tecnologies amb les quals treballo dia a dia.',
    'skills-g1': 'Llenguatges de Programació',
    'skills-g2': 'Bases de Dades',
    'skills-g3': 'Sistemes & Xarxes',
    'skills-g4': 'Eines',
    'skill-redes': 'Xarxes',
    'skill-security': 'Seguretat informàtica',
    'skill-servers': 'Servidors',
    'projects-tag': 'Projectes',
    'projects-title': 'El meu treball',
    'projects-sub': 'Projectes dissenyats i desenvolupats amb atenció al detall i qualitat premium.',
    'proj-view': 'Veure projecte',
    'proj-more': 'Veure més',
    'proj1-type': 'Web Corporativa',
    'proj1-desc': 'Web corporativa moderna per a <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" class="nuviadev-link">NuviaDev</a> amb disseny minimalista fosc, animacions premium i seccions de serveis i contacte optimitzades.',
    'proj2-type': 'Sistema de Gestió',
    'proj2-desc': 'Aplicació web de gestió d\'inventari i vendes amb panell d\'administració, informes en temps real i sistema d\'usuaris amb rols.',
    'proj3-type': 'App d\'Escriptori',
    'proj3-desc': 'Aplicació d\'escriptori en Java amb interfície gràfica moderna per a la gestió de projectes, tasques i equips de treball amb persistència a BD.',
    'proj4-type': 'Portfolio Premium',
    'proj4-name': 'Portfolio Personal',
    'proj4-desc': 'El meu portfolio personal: un espai on em presento com a desenvolupador i mostro alguns dels projectes en els quals he treballat. Dissenyat per reflectir el meu estil i manera d\'entendre el desenvolupament web.',
    'contact-tag': 'Contacte',
    'contact-h3a': 'Treballem',
    'contact-h3b': 'junts',
    'contact-p': 'Tens un projecte en ment? Estic disponible per a col·laboracions, projectes freelance i noves oportunitats. No dubtis a contactar-me.',
    'contact-loc-label': 'UBICACIÓ',
    'contact-loc-val': 'Vilanova del Camí, Barcelona 🇪🇸',
    'cta-title': 'Llest per començar?',
    'cta-desc': 'Explica\'m la teva idea i construïm alguna cosa increïble junts. Responc en menys de 24h.',
    'cta-btn': 'Enviar missatge',
    'also-on': 'TAMBÉ A',
    'footer-text': '© 2025 <strong>Derek Posadas Saucedo</strong> — Fet per mi · <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" style="color:var(--accent); text-decoration:none; font-weight:600;">NuviaDev</a>',
  },
  en: {
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-services': 'Services',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    'hero-badge': 'Available for projects',
    'hero-desc': 'Co-founder of <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" class="nuviadev-link">NuviaDev</a>. Passionate about building modern, efficient, and visually impactful digital experiences. DAM student in Barcelona.',
    'hero-btn-projects': 'View projects',
    'stat-projects': 'Active projects',
    'stat-company': 'Company founded',
    'about-tag': 'About me',
    'about-title': 'Who I am',
    'about-p1': 'I\'m Derek Posadas Saucedo, a frontend and software developer based in Vilanova del Camí, Barcelona. Co-founder of <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" class="nuviadev-link">NuviaDev</a>, a company built alongside DAM classmates to deliver modern and tailored web solutions to clients.',
    'about-p2': 'Currently studying for a Higher Degree in Cross-Platform Application Development (DAM), with a solid foundation in systems and networking from my previous SMR studies.',
    'about-p3': 'I\'m passionate about technology, cybersecurity, and software development that blends functionality with quality design.',
    'stat-exp': 'Years of experience',
    'stat-completed': 'Completed projects',
    'stat-certs': 'Certifications',
    'stat-cofounded': 'Company co-founded',
    'timeline-tag': 'Education & Career',
    'tl1-year': '2025 – Present',
    'tl1-title': 'Cross-Platform Application Development',
    'tl1-org': 'Higher Degree (DAM)',
    'tl1-desc': 'Advanced training in cross-platform application development, object-oriented programming, databases, and services.',
    'tl2-year': '2024 – Present',
    'tl2-title': 'Co-founder & Developer',
    'tl2-desc': 'Company founded with DAM classmates. We build modern, custom websites for clients with a premium approach.',
    'tl3-title': 'SMR Internship',
    'tl3-desc': 'Technical support, equipment repair and maintenance, system configuration, and collaboration on security camera installation.',
    'tl4-title': 'Microcomputer Systems and Networks',
    'tl4-org': 'SMR – Intermediate Degree',
    'tl4-desc': 'Solid foundation in networking, operating systems, security, and computer hardware.',
    'certs-tag': 'Certifications',
    'cert1-name': 'SQL from Scratch',
    'cert2-name': 'Python from Scratch',
    'services-tag': 'Services',
    'services-title': 'What I offer',
    'services-sub': 'Modern, tailored digital solutions for every need.',
    'svc1-title': 'Custom Web Development',
    'svc1-desc': 'Modern, fast, and responsive websites built to measure from <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" class="nuviadev-link">NuviaDev</a>. Every project is unique, optimized, and adapted to the client\'s goals.',
    'svc1-t1': 'Custom design',
    'svc1-t3': 'Optimization',
    'svc2-title': 'Desktop Applications',
    'svc2-desc': 'Development of robust and efficient desktop applications using Java and C, adapted to the operational needs of companies and projects.',
    'svc2-t3': 'Cross-platform',
    'svc3-title': 'Database Management',
    'svc3-desc': 'Design, implementation, and optimization of relational and NoSQL databases. From data modeling to complex queries and maintenance.',
    'svc4-title': 'Technical Support & Systems',
    'svc4-desc': 'Configuration, maintenance, and support for computer systems, networks, and servers. Real-world experience with corporate and educational environments.',
    'svc4-t3': 'Networks',
    'svc4-t4': 'Servers',
    'skills-tag': 'Technologies',
    'skills-title': 'My stack',
    'skills-sub': 'Tools and technologies I work with every day.',
    'skills-g1': 'Programming Languages',
    'skills-g2': 'Databases',
    'skills-g3': 'Systems & Networks',
    'skills-g4': 'Tools',
    'skill-redes': 'Networks',
    'skill-security': 'Cybersecurity',
    'skill-servers': 'Servers',
    'projects-tag': 'Projects',
    'projects-title': 'My work',
    'projects-sub': 'Projects designed and developed with attention to detail and premium quality.',
    'proj-view': 'View project',
    'proj-more': 'See more',
    'proj1-type': 'Corporate Website',
    'proj1-desc': 'Modern corporate website for <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" class="nuviadev-link">NuviaDev</a> with dark minimalist design, premium animations, and optimized service and contact sections.',
    'proj2-type': 'Management System',
    'proj2-desc': 'Web-based inventory and sales management app with admin panel, real-time reports, and a role-based user system.',
    'proj3-type': 'Desktop App',
    'proj3-desc': 'Java desktop application with a modern GUI for managing projects, tasks, and teams with database persistence.',
    'proj4-type': 'Premium Portfolio',
    'proj4-name': 'Personal Portfolio',
    'proj4-desc': 'My personal portfolio: a space where I introduce myself as a developer and showcase some of the projects I\'ve worked on. Designed to reflect my style and approach to web development.',
    'contact-tag': 'Contact',
    'contact-h3a': 'Let\'s work',
    'contact-h3b': 'together',
    'contact-p': 'Have a project in mind? I\'m available for collaborations, freelance projects, and new opportunities. Feel free to reach out.',
    'contact-loc-label': 'LOCATION',
    'contact-loc-val': 'Vilanova del Camí, Barcelona 🇪🇸',
    'cta-title': 'Ready to get started?',
    'cta-desc': 'Tell me your idea and let\'s build something amazing together. I reply within 24h.',
    'cta-btn': 'Send message',
    'also-on': 'ALSO ON',
    'footer-text': '© 2025 <strong>Derek Posadas Saucedo</strong> — Made by me · <a href="https://nuviadev.vercel.app" target="_blank" rel="noopener" style="color:var(--accent); text-decoration:none; font-weight:600;">NuviaDev</a>',
  }
};

const langLabels = { es: 'ES', ca: 'CA', en: 'EN' };

let currentLang = localStorage.getItem('lang') || 'es';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.getElementById('langCurrent').textContent = langLabels[lang];

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

// Lang switcher toggle
const langSwitcher = document.getElementById('langSwitcher');
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');

langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langSwitcher.classList.toggle('open');
});

document.addEventListener('click', () => langSwitcher.classList.remove('open'));
langDropdown.addEventListener('click', e => e.stopPropagation());

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLang(btn.getAttribute('data-lang'));
    langSwitcher.classList.remove('open');
  });
});

// Init language
applyLang(currentLang);
