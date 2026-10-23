
const menuToggle = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('#nav-menu');
const languageSelect = document.querySelector('#language-select');

// Menú móvil
menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');

  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Cerrar menú' : 'Abrir menú'
  );
});

// Cerrar menú al seleccionar una sección
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Textos en español, catalán e inglés
const translations = {
  es: {
    navHome: 'Inicio',
    navProjects: 'Proyectos',
    navAbout: 'Sobre mí',
    navServices: 'Servicios',
    navContact: 'Contacto',
    eyebrow: 'CREATIVIDAD · CÓDIGO · PERSONAS',
    role: 'Desarrolladora web junior',
    intro: 'Creo experiencias digitales funcionales y accesibles, mientras sigo aprendiendo y creciendo en el mundo web.',
    viewProjects: 'Ver mis proyectos',
    contactMe: 'Contactar',
    projectsTitle: 'Proyectos seleccionados',
    projectsIntro: 'Una selección de proyectos personales y prácticas.',
    projectOne: 'Web de negocio',
    projectOneDesc: 'Diseño responsive para un pequeño negocio.',
    projectTwo: 'Aplicación interactiva',
    projectTwoDesc: 'Un proyecto para practicar JavaScript.',
    projectThree: 'Web con WordPress',
    projectThreeDesc: 'Práctica de creación y gestión de contenidos.',
    projectDetails: 'Ver detalles',
    aboutEyebrow: 'UN POCO SOBRE MÍ',
    aboutTitle: 'Aprendiendo, creando y mejorando.',
    aboutText: 'He completado formación en desarrollo de aplicaciones web. Me interesa crear páginas útiles, accesibles y atractivas.',
    contactEyebrow: '¿HABLAMOS?',
    contactTitle: 'Construyamos algo interesante.',
    contactText: 'Estoy abierta a oportunidades junior y pequeños proyectos web.',
    emailMe: 'Escríbeme'
  },

  ca: {
    navHome: 'Inici',
    navProjects: 'Projectes',
    navAbout: 'Sobre mi',
    navServices: 'Serveis',
    navContact: 'Contacte',
    eyebrow: 'CREATIVITAT · CODI · PERSONES',
    role: 'Desenvolupadora web júnior',
    intro: 'Creo experiències digitals funcionals i accessibles mentre continuo aprenent i creixent en el món web.',
    viewProjects: 'Veure projectes',
    contactMe: 'Contactar',
    projectsTitle: 'Projectes seleccionats',
    projectsIntro: 'Una selecció de projectes personals i pràctiques.',
    projectOne: 'Web de negoci',
    projectOneDesc: 'Disseny responsive per a un petit negoci.',
    projectTwo: 'Aplicació interactiva',
    projectTwoDesc: 'Un projecte per practicar JavaScript.',
    projectThree: 'Web amb WordPress',
    projectThreeDesc: 'Pràctica de creació i gestió de continguts.',
    projectDetails: 'Veure detalls',
    aboutEyebrow: 'UNA MICA SOBRE MI',
    aboutTitle: 'Aprenent, creant i millorant.',
    aboutText: 'He completat formació en desenvolupament d’aplicacions web. M’interessa crear pàgines útils, accessibles i atractives.',
    contactEyebrow: 'EN PARLEM?',
    contactTitle: 'Creem alguna cosa interessant.',
    contactText: 'Estic oberta a oportunitats júnior i petits projectes web.',
    emailMe: 'Escriu-me'
  },

  en: {
    navHome: 'Home',
    navProjects: 'Projects',
    navAbout: 'About me',
    navServices: 'Services',
    navContact: 'Contact',
    eyebrow: 'CREATIVITY · CODE · PEOPLE',
    role: 'Junior web developer',
    intro: 'I create functional and accessible digital experiences while learning and growing in web development.',
    viewProjects: 'View my projects',
    contactMe: 'Contact me',
    projectsTitle: 'Selected projects',
    projectsIntro: 'A selection of personal projects and practice work.',
    projectOne: 'Business website',
    projectOneDesc: 'Responsive design for a small business.',
    projectTwo: 'Interactive application',
    projectTwoDesc: 'A project to practise JavaScript.',
    projectThree: 'WordPress website',
    projectThreeDesc: 'Practice creating and managing content.',
    projectDetails: 'View details',
    aboutEyebrow: 'A LITTLE ABOUT ME',
    aboutTitle: 'Learning, creating and improving.',
    aboutText: 'I have completed training in web application development. I enjoy building useful, accessible and attractive websites.',
    contactEyebrow: 'LET’S TALK',
    contactTitle: 'Let’s build something interesting.',
    contactText: 'I am open to junior opportunities and small web projects.',
    emailMe: 'Email me'
  }
};

function setLanguage(language) {
  const dictionary = translations[language];

  if (!dictionary) return;

  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageSelect.value = language;

  try {
    localStorage.setItem('portfolio-language', language);
  } catch (error) {
    // La web seguirá funcionando si el almacenamiento está bloqueado.
  }
}

// Recuperar el idioma guardado
let initialLanguage = 'es';

try {
  const savedLanguage = localStorage.getItem('portfolio-language');

  if (savedLanguage && translations[savedLanguage]) {
    initialLanguage = savedLanguage;
  }
} catch (error) {
  // Se mantiene el idioma predeterminado.
}

setLanguage(initialLanguage);

languageSelect.addEventListener('change', (event) => {
  setLanguage(event.target.value);
});

// Año automático en el footer
document.querySelector('#year').textContent =
  new Date().getFullYear();
