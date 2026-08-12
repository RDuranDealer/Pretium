import type { Config } from "tailwindcss";

/**
 * PALETA CORPORATIVA PRETIUM
 * --------------------------
 * Colores tomados del manual de marca (carpeta "Logo Pretium"):
 *   Azul Pretium   #0280F9  -> brand-500  (color exacto del isotipo y del logotipo)
 *   Azul profundo  #193FEA  -> deep-500   (extremo superior del degradado del isotipo)
 *   Negro          #000000  -> ink        (texto del logotipo)
 *
 * Regla de accesibilidad (WCAG AA):
 *   - brand-500 (#0280F9) tiene 3.85:1 sobre blanco -> SOLO para gráficos,
 *     bordes, iconos y texto grande. Nunca para texto pequeño sobre blanco.
 *   - brand-600 (#0169D6) tiene 5.26:1 sobre blanco -> texto pequeño y enlaces.
 *   - brand-900 (#0B1B33) tiene 17.2:1 sobre blanco -> texto principal.
 *   - brand-500 sobre brand-900 tiene 4.48:1 -> válido sobre fondo oscuro.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#8ecbfe",
          400: "#4ba5fb",
          500: "#0280f9", // Azul Pretium oficial
          600: "#0169d6",
          700: "#0b52b4",
          800: "#123f8c",
          900: "#0b1b33",
          950: "#050b16",
        },
        deep: {
          400: "#3b5ef0",
          500: "#193fea", // Azul profundo del degradado corporativo
          600: "#1433c4",
        },
        ink: {
          DEFAULT: "#000000",
          soft: "#0b1b33",
        },
      },
      backgroundImage: {
        // Degradado del isotipo: azul profundo -> azul Pretium
        "brand-gradient": "linear-gradient(135deg, #193fea 0%, #0280f9 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(25,63,234,0.12) 0%, rgba(2,128,249,0.12) 100%)",
      },
      fontFamily: {
        // Montserrat es la tipografía del logotipo (ver "Logo Pretium Informe.txt")
        sans: ["var(--font-montserrat)", "Montserrat", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp .7s ease-out both",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
