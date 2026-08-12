# Pretium Consulting — Sitio web

Sitio corporativo de Pretium Consulting (consultoría SAP HCM / SuccessFactors), construido con **Next.js 15 + TypeScript + Tailwind CSS**, listo para desplegar en **Railway** vía Docker.

## Stack

- Next.js 15 (App Router, `output: standalone`)
- React 19
- Tailwind CSS 3
- Sin base de datos ni backend: contacto vía `mailto:` y WhatsApp
- SEO: metadata, Open Graph, JSON-LD (`ProfessionalService`), `robots.txt` y `sitemap.xml` automáticos

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

Build de producción:

```bash
npm run build
npm start
```

## Estructura

```
src/
  app/
    layout.tsx      metadata, fuentes, JSON-LD
    page.tsx        composición de secciones
    globals.css     tokens y utilidades Tailwind
    robots.ts / sitemap.ts
  components/       Header, Hero, About, Services, Values,
                    Management, Clients, Faq, Contact, Footer,
                    WhatsAppFab, Reveal, Icons
  lib/site.ts       ⬅ TODO EL CONTENIDO EDITABLE
```

**Para cambiar textos, servicios, valores, clientes, teléfono o correo: edita únicamente `src/lib/site.ts`.** No hace falta tocar los componentes.

## Identidad corporativa

Los colores y el logotipo salen del original de Illustrator del manual de marca
(`Logo Pretium.ai`), no de una aproximación.

### Colores (definidos en `tailwind.config.ts`)

| Token | HEX | Uso |
|---|---|---|
| `brand-500` | `#0280F9` | Azul Pretium oficial. Iconos, bordes, gráficos y texto grande. |
| `brand-600` | `#0169D6` | Enlaces y texto pequeño sobre blanco (5.3:1, cumple WCAG AA). |
| `brand-900` | `#0B1B33` | Texto principal y fondos oscuros. |
| `deep-500` | `#193FEA` | Azul profundo: extremo superior del degradado del isotipo. |
| `bg-brand-gradient` | `#193FEA → #0280F9` | Degradado corporativo: botones primarios y detalles. |

> **Regla de accesibilidad:** el azul puro `#0280F9` sólo alcanza 3.85:1 sobre
> blanco. Para textos pequeños se usa siempre `brand-600`. Sobre fondo oscuro
> (`brand-900`) el azul puro sí cumple (4.48:1).

### Logotipos (`public/img/`)

| Archivo | Cuándo se usa |
|---|---|
| `logo-pretium.svg` | Logotipo "Personas & Tecnología" sobre fondo claro |
| `logo-pretium-light.svg` | El mismo con texto blanco, para fondo oscuro |
| `logo-pretium-consulting.svg` | Variante "Consulting", fondo claro |
| `logo-pretium-consulting-light.svg` | Variante "Consulting", fondo oscuro |
| `isotipo-pretium.svg` | Sólo el símbolo: favicon, avatar, redes |

Para cambiar de variante en toda la web basta con editar las rutas `src` y
`srcLight` del objeto `logo` en `src/lib/site.ts`. El favicon es
`src/app/icon.svg` (copia del isotipo).

### Tipografía

Montserrat, la misma del logotipo. Va **autoalojada** en
`src/app/fonts/Montserrat.woff2` (variable, 100–900, subconjunto latino, 77 KB)
y se carga con `next/font/local`: no depende de Google Fonts, carga más rápido
y evita enviar datos de los visitantes a terceros.

## Despliegue en Railway

1. Sube este proyecto a un repositorio de GitHub.
2. En Railway: **New Project → Deploy from GitHub repo** y selecciona el repo.
3. Railway detecta el `Dockerfile` y el `railway.json` automáticamente. No requiere configuración adicional.
4. En **Settings → Networking → Generate Domain** obtienes una URL pública de prueba.
5. Para el dominio propio: **Add Custom Domain** → `prtconsulting.cl` y `www.prtconsulting.cl`, y crea en tu proveedor DNS los registros `CNAME` que indique Railway.

### Variables de entorno

Ninguna es obligatoria. Railway inyecta `PORT` automáticamente y el contenedor lo respeta.

### Alternativa sin Docker

Si prefieres el builder Nixpacks, borra `railway.json` y `Dockerfile`; Railway usará `npm run build` + `npm start`.

## Pendientes sugeridos para la siguiente iteración

- Reemplazar los nombres de clientes por sus logotipos reales (`public/img/clientes/`) con autorización de uso.
- Fotografías propias del equipo y de las oficinas.
- Casos de éxito con métricas concretas (2–3 fichas).
- Formulario de contacto con envío real (Resend / SMTP) si se decide dejar de usar solo WhatsApp y correo.
- Imagen `public/og.jpg` (1200×630) para compartir en redes.
- Analítica (Google Analytics 4 o Plausible).
