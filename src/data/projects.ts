import type { ImageMetadata } from "astro";
import pizzeriaImg from "../assets/projects/pizzeria.jpg";
import climateDashboardImg from "../assets/projects/climate-dashboard.png";
import reservasImg from "../assets/projects/reservas-dashboard.png";
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
    image: pizzeriaImg,
    icon: "cart",
  },

  {
    slug: "job-pulse",
    title: "Job Pulse",
    featured: true,
    inProgress: true,
    description: {
      es: "Inteligencia de mercado laboral: recolectar, analizar y visualizar ofertas de empleo en tecnología para detectar tendencias de salario, skills demandadas y cambios del mercado.",
      en: "Job market intelligence: collect, analyze and visualize IT job listings to spot salary trends, in-demand skills and market shifts.",
    },
    highlights: [
      {
        es: "FastAPI con patrón de repositorios: el SQL queda encapsulado fuera de las rutas, así la API se testea de punta a punta sin tocar la base de datos real.",
        en: "FastAPI with a repository pattern: SQL is encapsulated outside the routes, so the API can be tested end to end without touching the real database.",
      },
      {
        es: "Migraciones con Alembic, Docker Compose para levantar todo el entorno, y CI con GitHub Actions con un workflow independiente para backend, frontend y scraper.",
        en: "Alembic migrations, Docker Compose to spin up the whole environment, and CI with GitHub Actions running a separate workflow for backend, frontend and scraper.",
      },
      {
        es: "Backend cubierto por 6 archivos de test (`test_api`, `test_database`, `test_jobs`, `test_repositories`, `test_health`, `test_scrapers`). El scraper con Playwright sigue en desarrollo.",
        en: "Backend covered by 6 test files (`test_api`, `test_database`, `test_jobs`, `test_repositories`, `test_health`, `test_scrapers`). The Playwright scraper is still under development.",
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
        es: "El dato viaja completo: ESP32 + sensor SHT3X hace `POST /api/ingest` con API key hacia Neon (Postgres), y Next.js lo lee para pintar el dashboard. Firmware aparte, en el repo `climate-monitor-system`.",
        en: "The full data path: ESP32 + SHT3X sensor does `POST /api/ingest` with an API key into Neon (Postgres), and Next.js reads it to render the dashboard. Firmware lives separately in the `climate-monitor-system` repo.",
      },
      {
        es: "Gráficos con líneas de umbral y comparación entre hoy y ayer, más widgets de clima exterior y calidad del aire vía Open-Meteo con selector de ubicación.",
        en: "Charts with threshold lines and today-vs-yesterday comparison, plus outdoor weather and air quality widgets via Open-Meteo with a location picker.",
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
      es: "Firmware en C++ para ESP32 y ESP8266 con sensores SHT3X y BME280. Lectura ambiental, conectividad WiFi y envío de datos por HTTP.",
      en: "C++ firmware for ESP32 and ESP8266 with SHT3X and BME280 sensors. Environmental readings, WiFi connectivity and HTTP data submission.",
    },
    highlights: [],
    tech: ["C++", "PlatformIO", "ESP32", "ESP8266", "HTTP"],
    repo: "https://github.com/hmoreirar/climate-monitor-system",
    icon: "chip",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
