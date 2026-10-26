import type { ImageMetadata } from "astro";
import pizzeriaImg from "../assets/projects/pizzeria.jpg";
import climateDashboardImg from "../assets/projects/climate-dashboard.png";
import reservasImg from "../assets/projects/reservas-dashboard.png";
import nicommerceImg from "../assets/projects/nicommerce.png";
import jobPulseImg from "../assets/projects/job-pulse.png";
import solarSystemImg from "../assets/projects/learning-threejs.jpg";
import astroblogImg from "../assets/projects/astroblog.png";

export interface Localized {
  es: string;
  en: string;
}

export type IconName =
  | "cart"
  | "calendar"
  | "chip"
  | "chart"
  | "sparkles"
  | "sun"
  | "gauge";

export interface Project {
  slug: string;
  /** Nombre visible. Puede diferir del nombre del repo. */
  title: string;
  featured: boolean;
  inProgress?: boolean;
  description: Localized;
  /** Puntos técnicos profundos. Solo para destacados. */
  highlights: Localized[];
  tech: string[];
  repo: string;
  demo?: string;
  demoNote?: Localized;
  demoLogin?: { email: string; password: string };
  image?: ImageMetadata;
  icon: IconName;
}

export const projects: Project[] = [
  {
    slug: "pizzeria",
    title: "Pizzeriapp",
    featured: true,
    description: {
      es: "Sistema de pedidos online para una pizzería local. Catálogo configurable con grupos de opciones, cotización de precios siempre en el backend, compra anónima con snapshot de precios y panel de administración.",
      en: "Online ordering system for a local pizzeria. Configurable catalog with option groups, prices always quoted on the backend, anonymous checkout with price snapshots and an admin panel.",
    },
    highlights: [
      {
        es: "El precio nunca se calcula en el cliente. `POST /api/orders/quote` valida producto, opciones y pertenencia en el backend, y recalcula todo antes de crear la orden.",
        en: "Price is never computed on the client. `POST /api/orders/quote` validates product, options and ownership on the backend and recalculates everything before creating the order.",
      },
      {
        es: "Cada línea de pedido guarda snapshot de `product_name`, `unit_price` y opciones en JSONB: si mañana cambia el precio, los pedidos históricos no cambian. El insert de `orders` + `order_items` ocurre en una transacción.",
        en: "Each order line stores a snapshot of `product_name`, `unit_price` and options as JSONB: if the price changes tomorrow, past orders do not. The insert of `orders` + `order_items` runs inside a transaction.",
      },
      {
        es: "8 suites de test con Vitest + Supertest. `app.ts` va separado de `index.ts` para testear la API sin abrir un puerto. SQL crudo con `node-pg-migrate` y capa `repositories/` en vez de un ORM.",
        en: "8 test suites with Vitest + Supertest. `app.ts` is split from `index.ts` so the API can be tested without binding a port. Raw SQL with `node-pg-migrate` and a `repositories/` layer instead of an ORM.",
      },
    ],
    tech: [
      "TypeScript",
      "React 19",
      "Express 5",
      "PostgreSQL",
      "Zod",
      "Vitest",
      "Supertest",
      "Docker",
    ],
    repo: "https://github.com/hmoreirar/pizzeria",
    demo: "https://pizzeria-zn6y.onrender.com/",
    demoNote: {
      es: "Tras inactividad, la primera carga puede tardar ~20–30 s (Render Free).",
      en: "After inactivity, the first load may take ~20–30s (Render Free).",
    },
    image: pizzeriaImg,
    icon: "cart",
  },

  {
    slug: "job-pulse",
    title: "Job Pulse",
    featured: true,
    description: {
      es: "Inteligencia de mercado laboral desplegada: recolecta ofertas técnicas con Playwright, las normaliza en PostgreSQL y las expone en un dashboard con estadísticas por fuente, experiencia, tipo de contrato y salario.",
      en: "Deployed job-market intelligence: collects technical listings with Playwright, normalizes them in PostgreSQL and surfaces them in a dashboard with stats by source, seniority, contract type and salary.",
    },
    highlights: [
      {
        es: "FastAPI con patrón de repositorios: el SQL queda encapsulado fuera de las rutas, así la API se testea de punta a punta sin tocar la base de datos real.",
        en: "FastAPI with a repository pattern: SQL is encapsulated outside the routes, so the API can be tested end to end without touching the real database.",
      },
      {
        es: "Backend con 6 archivos de test y frontend con 10 suites sobre stats, filtros, detalle y paginación. El scraper corre en modo loop y filtra por país; la SPA la sirve el propio FastAPI.",
        en: "Backend covered by 6 test files and frontend by 10 suites over stats, filters, detail and pagination. The scraper runs in loop mode and filters by country; FastAPI serves the SPA itself.",
      },
      {
        es: "Migraciones con Alembic y CI en GitHub Actions con workflows separados para backend, frontend, scraper, scrape programado, backup y health check.",
        en: "Alembic migrations and GitHub Actions CI with separate workflows for backend, frontend, scraper, scheduled scrape, backup and health check.",
      },
    ],
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Playwright",
      "React",
      "TypeScript",
      "Docker",
      "GitHub Actions",
    ],
    repo: "https://github.com/hmoreirar/job-pulse",
    demo: "https://job-pulse-1dn9.onrender.com",
    demoNote: {
      es: "Tras inactividad, la primera carga puede tardar ~40 s (Render Free).",
      en: "After inactivity, the first load may take ~40s (Render Free).",
    },
    image: jobPulseImg,
    icon: "chart",
  },

  {
    slug: "nicommerce",
    title: "Nicommerce",
    featured: true,
    description: {
      es: "E-commerce completo orientado a una experiencia de compra clara: catálogo administrable, carrito persistente y checkout multi-paso con confirmación.",
      en: "Full e-commerce platform built around a clear buying experience: manageable catalog, persistent cart and multi-step checkout with confirmation.",
    },
    highlights: [
      {
        es: "Checkout transaccional en PostgreSQL: la orden y la actualización de inventario se escriben en la misma transacción, así no queda stock desincronizado si algo falla.",
        en: "Transactional checkout in PostgreSQL: the order and the inventory update are written in the same transaction, so stock never desyncs if something fails.",
      },
      {
        es: "Catálogo público sin login, con búsqueda, categorías, etiquetas y rango de precios. La sesión solo se pide para comprar, ver historial y administrar.",
        en: "Public catalog without login, with search, categories, tags and price range. Sign-in is only required to buy, view history and administer.",
      },
      {
        es: "Hardening del backend: Helmet, rate limiting, validación de entradas y JWT con bcrypt. Panel de administración para productos, usuarios y órdenes.",
        en: "Backend hardening: Helmet, rate limiting, input validation and JWT with bcrypt. Admin panel for products, users and orders.",
      },
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
    repo: "https://github.com/hmoreirar/ecommerce-fullstack-react-node",
    demo: "https://ecommerce-fullstack-react-node.vercel.app",
    demoNote: {
      es: "La página abre rápido; el catálogo puede tardar ~20–30 s si la API estuvo inactiva (Render Free).",
      en: "The page opens quickly; the catalog may take ~20–30s if the API was idle (Render Free).",
    },
    demoLogin: {
      email: "demo@nicommerce.dev",
      password: "demo1234",
    },
    image: nicommerceImg,
    icon: "cart",
  },

  {
    slug: "climate-dashboard",
    title: "Climate Dashboard",
    featured: true,
    description: {
      es: "Monitoreo ambiental en tiempo real con sensores ESP32. Del sensor al dashboard: ingest por API key, Postgres en la nube y visualización con gráficos históricos.",
      en: "Real-time environmental monitoring with ESP32 sensors. From sensor to dashboard: API-key ingestion, cloud Postgres and historical charts.",
    },
    highlights: [
      {
        es: "El dato viaja completo: el firmware ESP32 + SHT3X hace `POST /api/ingest` con API key hacia Neon, y Next.js lo lee para pintar el dashboard. El firmware vive en `firmware/esp32-sht3x`, dentro del mismo repo.",
        en: "The full data path: the ESP32 + SHT3X firmware does `POST /api/ingest` with an API key into Neon, and Next.js reads it to render the dashboard. Firmware lives in `firmware/esp32-sht3x`, inside the same repo.",
      },
      {
        es: "El dispositivo mide cada 5 min pero sube en lotes cada 30: Neon suspende el compute a los ~5 min de inactividad, así que escribir cada 5 min quemaba la cuota gratuita de 100 CU-horas en ~16 días. Con lotes baja a ~33 CU-h/mes.",
        en: "The device samples every 5 min but uploads in batches every 30: Neon suspends compute after ~5 min idle, so writing every 5 min burned the 100 free CU-hours in ~16 days. Batching brings it down to ~33 CU-h/month.",
      },
      {
        es: "Datos crudos retenidos 30 días y consultas históricas por agregados horarios. Gráficos con líneas de umbral, comparación hoy vs ayer y widgets de clima y calidad del aire vía Open-Meteo.",
        en: "Raw data kept for 30 days with older history served from hourly aggregates. Charts with threshold lines, today-vs-yesterday comparison and weather / air-quality widgets via Open-Meteo.",
      },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Recharts",
      "Framer Motion",
    ],
    repo: "https://github.com/hmoreirar/climate-dashboard",
    demo: "https://climate-dashboard-one.vercel.app/",
    image: climateDashboardImg,
    icon: "gauge",
  },

  {
    slug: "reservas-saas",
    title: "Reservas SaaS",
    featured: false,
    description: {
      es: "Plataforma de agendamiento de turnos tipo Calendly. Los proveedores gestionan servicios y horarios desde un dashboard; los clientes reservan por un link público sin registrarse.",
      en: "Calendly-style booking platform. Providers manage services and schedules from a dashboard; clients book through a public link without signing up.",
    },
    highlights: [],
    tech: [
      "React 19",
      "TypeScript",
      "Express 5",
      "PostgreSQL",
      "JWT",
      "Tailwind CSS",
    ],
    repo: "https://github.com/hmoreirar/reservas-saas",
    demo: "https://reservas-saas-bwa7.onrender.com/",
    demoNote: {
      es: "Tras inactividad, la primera carga puede tardar ~20–30 s (Render Free).",
      en: "After inactivity, the first load may take ~20–30s (Render Free).",
    },
    demoLogin: {
      email: "demo@reservas-saas.dev",
      password: "demo1234",
    },
    image: reservasImg,
    icon: "calendar",
  },

  {
    slug: "job-tracker",
    title: "Job Tracker",
    featured: false,
    description: {
      es: "Gestor de postulaciones laborales pensado para organizar una búsqueda de empleo remoto: autenticación, CRUD completo y un dashboard con el progreso.",
      en: "Job application tracker designed to organise a remote job hunt: authentication, full CRUD and a dashboard showing progress.",
    },
    highlights: [],
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    repo: "https://github.com/hmoreirar/job-tracker",
    demo: "https://job-tracker-beige-three.vercel.app/",
    icon: "chart",
  },

  {
    slug: "solar-system",
    title: "Solar System 3D",
    featured: false,
    description: {
      es: "Simulador interactivo del sistema solar con Three.js: shaders GLSL personalizados, sistema de partículas, bloom post-processing y selección de planetas en tiempo real.",
      en: "Interactive solar system built with Three.js: custom GLSL shaders, particle system, bloom post-processing and real-time planet selection.",
    },
    highlights: [],
    tech: ["Three.js", "GLSL", "JavaScript", "Vite"],
    repo: "https://github.com/hmoreirar/learning-threejs",
    demo: "https://hmoreirar.github.io/learning-threejs/",
    image: solarSystemImg,
    icon: "sparkles",
  },

  {
    slug: "astroblog",
    title: "Astroblog",
    featured: false,
    description: {
      es: "Fanzine digital estático sobre arte, poesía, tecnología y hacktivismo. Estética dark, tipografía monospace y deploy en GitHub Pages.",
      en: "Static digital zine about art, poetry, technology and hacktivism. Dark aesthetic, monospace typography, deployed on GitHub Pages.",
    },
    highlights: [],
    tech: ["Astro", "TypeScript", "Markdown", "GitHub Pages"],
    repo: "https://github.com/hmoreirar/astroblog",
    demo: "https://hmoreirar.github.io/astroblog",
    image: astroblogImg,
    icon: "sparkles",
  },

  {
    slug: "climate-monitor",
    title: "Climate Monitor (Firmware)",
    featured: false,
    description: {
      es: "Firmware en C++ para ESP32 con sensor SHT3X. Muestrea cada 5 minutos, sincroniza por NTP y sube lecturas en lote cada 30 minutos para no mantener despierta la base. OTA deshabilitado: la API key va compilada en el binario.",
      en: "C++ firmware for ESP32 with an SHT3X sensor. Samples every 5 minutes, syncs over NTP and uploads readings in batches every 30 minutes so the database can idle. OTA is disabled because the ingest key is compiled into the binary.",
    },
    highlights: [],
    tech: ["C++", "PlatformIO", "ESP32", "HTTP", "NTP"],
    repo: "https://github.com/hmoreirar/climate-dashboard/tree/main/firmware/esp32-sht3x",
    icon: "chip",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
