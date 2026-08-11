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
