# ---------- deps ----------
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ---------- builder ----------
FROM node:22-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules

# Se copian las rutas de forma explícita: si alguna falta en el repositorio,
# el build falla aquí con un mensaje claro en vez de un error confuso de Next.js.
COPY package.json ./
COPY next.config.mjs postcss.config.mjs tailwind.config.ts tsconfig.json ./
COPY src ./src
COPY public ./public

# Verificación temprana del contexto de build.
RUN test -f src/app/page.tsx || (echo "ERROR: falta src/app/page.tsx. El repositorio no incluye la carpeta src/." && exit 1)

RUN npm run build

# ---------- runner ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
