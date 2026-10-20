export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const langMeta: Record<
  Lang,
  { locale: string; htmlLang: string; name: string; label: string }
> = {
  es: {
    locale: "es_ES",
    htmlLang: "es",
    name: "Español",
    label: "ES",
  },
  en: {
    locale: "en_US",
    htmlLang: "en",
    name: "English",
    label: "EN",
  },
};

export const ui = {
  es: {
    "meta.title": "Héctor Moreira — Desarrollador Full Stack (React / Node.js)",
    "meta.description":
      "Portafolio de Héctor Moreira, desarrollador full stack en Chile. React, TypeScript, Node.js y PostgreSQL. Disponible para trabajo remoto.",

    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.cv": "CV",
    "nav.contact": "Contacto",
    "nav.lang": "Cambiar idioma",
    "nav.theme": "Cambiar tema",
    "nav.menu": "Abrir menú",

    "hero.role": "Desarrollador Full Stack · React / Node.js",
    "hero.desc":
      "Construyo aplicaciones web de punta a punta: React y TypeScript en el frontend, Node.js y PostgreSQL en el backend. Cuido el detalle, escribo tests y documento las decisiones. Busco trabajo remoto donde aportar desde el primer día.",
    "hero.ctaProjects": "Ver proyectos",
    "hero.ctaCv": "Descargar CV",
    "hero.ctaContact": "Escríbeme",

    "availability.availabilityLabel": "Disponibilidad",
    "availability.availability": "Inmediata",
    "availability.timezoneLabel": "Zona horaria",
    "availability.timezone": "Chile · UTC-3 / UTC-4",
    "availability.timezoneNote": "Cómodo trabajando con equipos en EE.UU. y Europa",
    "availability.englishLabel": "Inglés",
    "availability.english": "Técnico · escrito fluido",
    "availability.englishNote":
      "Lectura de documentación y comunicación escrita fluida",
    "availability.modeLabel": "Modalidad",
    "availability.mode": "Remoto · Full-time",

    "projects.title": "Proyectos",
    "projects.lead":
      "Cuatro proyectos principales con contexto técnico real. El resto, más abajo.",
    "projects.featured": "Destacado",
    "projects.inProgress": "En desarrollo",
    "projects.demo": "Demo",
    "projects.code": "Código",
    "projects.more": "Otros proyectos",
    "projects.decisions": "Decisiones técnicas",
    "projects.demoAccess": "Acceso demo",

    "about.title": "Sobre mí",
    "about.p1":
      "Trabajo en todo el stack y me interesa especialmente la parte que nadie ve: la validación en el backend, las transacciones que evitan datos a medias, los tests que te dejan dormir tranquilo.",
    "about.p2":
      "Vengo del mundo del hardware — programo firmware para ESP32 y ESP8266 con sensores ambientales — y eso me enseñó a depurar cuando no hay consola que te salve. En la web me dedico a construir herramientas simples, útiles y que carguen rápido.",
    "about.p3":
      "Busco un equipo remoto donde crecer como desarrollador y aportar código cuidado desde el primer día.",
    "about.skillsTitle": "Tecnologías con las que trabajo",
    "about.skillsExploring": "Explorando",

    "contact.title": "Contacto",
    "contact.text":
      "Estoy abierto a oportunidades laborales y colaboraciones. Si tienes un proyecto en mente, escríbeme y respondo el mismo día.",
    "contact.emailLabel": "Correo",

    "cv.title": "Currículum — Héctor Moreira",
    "cv.role": "Desarrollador Full Stack · React / Node.js",
    "cv.print": "Imprimir / Guardar PDF",
    "cv.summaryTitle": "Perfil",
    "cv.summary":
      "Desarrollador full stack enfocado en aplicaciones web modernas y herramientas prácticas. Construyo productos completos: base de datos, API, tests y frontend. Busco trabajo remoto.",
    "cv.experienceTitle": "Proyectos destacados",
    "cv.skillsTitle": "Tecnologías",
    "cv.educationTitle": "Formación",
    "cv.education":
      "Formación autodidacta continua a través de proyectos reales y documentación oficial.",
    "cv.languagesTitle": "Idiomas",
    "cv.langEs": "Español — nativo",
    "cv.langEn": "Inglés técnico — lectura, documentación y comunicación escrita",
    "cv.contactTitle": "Contacto",
    "cv.backToSite": "Volver al portafolio",
    "cv.footnote":
      "Generado desde hmoreira.dev. Versión actualizada disponible en línea.",

    "footer.built": "Hecho con",
    "footer.by": "Héctor Moreira",

    "notFound.title": "404",
    "notFound.text": "Esa página no existe.",
    "notFound.back": "Volver al inicio",

    "a11y.skip": "Saltar al contenido",
  },

  en: {
    "meta.title": "Héctor Moreira — Full Stack Developer (React / Node.js)",
    "meta.description":
      "Portfolio of Héctor Moreira, full stack developer based in Chile. React, TypeScript, Node.js and PostgreSQL. Available for remote work.",

    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.cv": "Résumé",
    "nav.contact": "Contact",
    "nav.lang": "Switch language",
    "nav.theme": "Switch theme",
    "nav.menu": "Open menu",

    "hero.role": "Full Stack Developer · React / Node.js",
    "hero.desc":
      "I build web apps end to end: React and TypeScript on the frontend, Node.js and PostgreSQL on the backend. I sweat the details, write tests and document my decisions. Looking for remote work where I can contribute from day one.",
    "hero.ctaProjects": "See projects",
    "hero.ctaCv": "Get résumé",
    "hero.ctaContact": "Get in touch",

    "availability.availabilityLabel": "Availability",
    "availability.availability": "Immediately",
    "availability.timezoneLabel": "Timezone",
    "availability.timezone": "Chile · UTC-3 / UTC-4",
    "availability.timezoneNote": "Comfortable working with teams in the US and Europe",
    "availability.englishLabel": "English",
    "availability.english": "Technical · fluent written",
    "availability.englishNote":
      "Documentation and fluent written communication",
    "availability.modeLabel": "Mode",
    "availability.mode": "Remote · Full-time",

    "projects.title": "Projects",
    "projects.lead":
      "Four main projects with real technical context. The rest, further down.",
    "projects.featured": "Featured",
    "projects.inProgress": "In progress",
    "projects.demo": "Live demo",
    "projects.code": "Code",
    "projects.more": "More projects",
    "projects.decisions": "Technical decisions",
    "projects.demoAccess": "Demo access",

    "about.title": "About",
    "about.p1":
      "I work across the stack and I care most about the part nobody sees: backend validation, the transactions that prevent half-written records, the tests that let you sleep at night.",
    "about.p2":
      "I come from the hardware side — I write firmware for ESP32 and ESP8266 with environmental sensors — and that taught me how to debug when there is no console to save you. On the web I focus on building simple, useful tools that load fast.",
    "about.p3":
      "I am looking for a remote team where I can grow as a developer and ship careful code from day one.",
    "about.skillsTitle": "Technologies I work with",
    "about.skillsExploring": "Exploring",

    "contact.title": "Contact",
    "contact.text":
      "I am open to job opportunities and collaborations. If you have a project in mind, write to me and I will reply the same day.",
    "contact.emailLabel": "Email",

    "cv.title": "Résumé — Héctor Moreira",
    "cv.role": "Full Stack Developer · React / Node.js",
    "cv.print": "Print / Save as PDF",
    "cv.summaryTitle": "Summary",
    "cv.summary":
      "Full stack developer focused on modern web apps and practical tools. I ship complete products: database, API, tests and frontend. Looking for remote work.",
    "cv.experienceTitle": "Selected projects",
    "cv.skillsTitle": "Technologies",
    "cv.educationTitle": "Education",
    "cv.education":
      "Continuous self-teaching through real projects and official documentation.",
    "cv.languagesTitle": "Languages",
    "cv.langEs": "Spanish — native",
    "cv.langEn": "Technical English — documentation and fluent written communication",
    "cv.contactTitle": "Contact",
    "cv.backToSite": "Back to portfolio",
    "cv.footnote":
      "Generated from hmoreira.dev. An up-to-date version is available online.",

    "footer.built": "Built with",
    "footer.by": "Héctor Moreira",

    "notFound.title": "404",
    "notFound.text": "That page does not exist.",
    "notFound.back": "Back to home",

    "a11y.skip": "Skip to content",
  },
} as const;

export type UIKey = keyof (typeof ui)["es"];
