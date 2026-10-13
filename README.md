# hmoreira.dev

Portfolio personal de **Héctor Moreira** — desarrollador full stack (React / Node.js) en Chile.

Sitio estático bilingüe (español / inglés) construido con [Astro](https://astro.build), pensado para leerse en 2 minutos y para compartirse bien en LinkedIn.

**→ [hmoreira.dev](https://hmoreira.dev)**

---

## Por qué está construido así

Cada decisión busca algo concreto para quien evalúa este repo:

| Decisión | Motivo |
| --- | --- |
| **Estático, cero JS de hidratación** | El sitio es contenido. Astro lo renderiza en build y el HTML llega listo. |
| **Bilingüe con rutas reales** (`/` y `/en/`) | `hreflang`, `canonical` y `og:locale` por idioma. No es un toggle de client-side. |
| **`src/data/projects.ts` tipado** | Los proyectos viven en un solo array con copy en `es` / `en`. Tipos estrictos, sin CMS. |
| **Contraste verificado a ≥4.5:1** | Los tokens `--accent` (texto) y `--accent-solid` (fondo con texto blanco) están separados porque ninguna tinta satisface ambas restricciones. |
| **Imágenes vía `astro:assets`** | WebP, `srcset`, `width`/`height` y `loading="lazy"` automáticos. Sin CLS. |
| **`docs/decisiones.md` dentro de los proyectos** | El código importa menos que saber por qué se escribió así. |
| **Tests en los proyectos destacados** | Pizzeriapp y Job Pulse traen suites de test reales. |

## Estructura

```
src/
├── i18n/            # Strings UI ES/EN + helpers de idioma
├── data/
│   ├── projects.ts  # Proyectos, copy bilingüe y metadata
│   └── site.ts      # Datos personales y grupos de skills
├── components/      # Nav, Hero, Projects, About, Contact, Cv, Footer
├── layouts/         # <head> con SEO completo, JSON-LD y tema
├── pages/
│   ├── index.astro      # /
│   ├── en/index.astro   # /en/
│   ├── cv.astro         # /cv   (imprimible)
│   ├── en/cv.astro      # /en/cv
│   └── 404.astro
└── styles/global.css
```

## Comandos

```bash
npm install
npm run dev        # servidor de desarrollo
npm run build      # build estático a dist/
npm run preview    # previsualizar el build
npx astro check    # tipos + diagnóstico de componentes Astro
```

Requiere Node.js 22+.

## Accesibilidad

- Contraste AA verificado en ambos temas (texto, tags, botones).
- `prefers-reduced-motion` respetado: sin scroll animado ni transiciones.
- Skip link, landmarks semánticos y `aria-*` en el nav móvil y el toggle de tema.
- Foco visible con `:focus-visible` en toda la web.

## Licencia

Código bajo [MIT](./LICENSE). El contenido, los textos y las capturas son propios.
