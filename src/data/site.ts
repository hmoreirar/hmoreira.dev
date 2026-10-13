import type { Localized } from "./projects";

export const person = {
  name: "Héctor Moreira",
  handle: "hmoreira",
  email: "contacto@hmoreira.dev",
  github: "https://github.com/hmoreirar",
  linkedin: "https://linkedin.com/in/hmoreirar",
  location: "Chile",
  timezone: "UTC-3 / UTC-4",
} as const;

export interface SkillGroup {
  title: Localized;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: {
      es: "Frontend",
      en: "Frontend",
    },
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Astro",
      "Tailwind CSS",
      "Three.js",
    ],
  },
  {
    title: {
      es: "Backend",
      en: "Backend",
    },
    items: ["Node.js", "Express", "PostgreSQL", "Supabase", "Python", "FastAPI"],
  },
  {
    title: {
      es: "Herramientas",
      en: "Tooling",
    },
    items: ["Docker", "Git", "Linux", "Vitest", "Playwright", "GitHub Actions"],
  },
  {
    title: {
      es: "Hardware",
      en: "Hardware",
    },
    items: ["C++", "ESP32", "ESP8266", "PlatformIO", "I2C", "IoT"],
  },
];
