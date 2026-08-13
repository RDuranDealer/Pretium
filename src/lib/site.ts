export const site = {
  name: "Pretium Consulting",
  shortName: "Pretium",
  url: "https://prtconsulting.cl",
  tagline: "Consultoría especializada en SAP HCM y SuccessFactors",
  description:
    "Consultores senior en SAP HCM, SuccessFactors y S/4HANA. Implementación, soporte productivo, gestión del cambio y capacitación para empresas en Chile y Latinoamérica.",
  email: "cristina.ordenes@prtconsulting.cl",
  phone: "+56 9 9475 5573",
  phoneRaw: "+56994755573",
  whatsapp: "56994755573",
  address:
    "Av. Nueva Providencia 1945, Oficina 502, Providencia, Santiago, Chile",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Avenida+Nueva+Providencia+1945+Providencia+Santiago",
  linkedin: "https://www.linkedin.com/company/prt-cons",
};

/**
 * LOGO DE LA EMPRESA
 * ------------------
 * Los archivos vectoriales oficiales están en  public/img/  y salen del
 * original de Illustrator ("Logo Pretium.ai"), así que se ven nítidos en
 * cualquier tamaño y pesan poco.
 *
 * Archivos disponibles:
 *   /img/logo-pretium.svg                    Logotipo "Personas & Tecnología" (fondo claro)
 *   /img/logo-pretium-light.svg              El mismo, con texto blanco (fondo oscuro)
 *   /img/logo-pretium-consulting.svg         Variante "Consulting" (fondo claro)
 *   /img/logo-pretium-consulting-light.svg   Variante "Consulting" (fondo oscuro)
 *   /img/isotipo-pretium.svg                 Solo el símbolo (favicon, redes, avatar)
 *
 * Para cambiar de variante basta con editar las dos rutas de abajo.
 * `height` controla el alto en píxeles; el ancho se ajusta solo.
 */
export const logo = {
  src: "/img/logo-pretium.svg",
  srcLight: "/img/logo-pretium-light.svg",
  isotipo: "/img/isotipo-pretium.svg",
  height: 38,
  alt: "Pretium — Personas & Tecnología",
};

/**
 * COLORES CORPORATIVOS (referencia rápida)
 * Se definen en tailwind.config.ts; esta constante es solo documentación
 * y se usa para el color del navegador en móviles.
 */
export const brandColors = {
  azul: "#0280f9", // Azul Pretium — isotipo y logotipo
  azulProfundo: "#193fea", // Extremo superior del degradado
  negro: "#000000", // Texto del logotipo
  tinta: "#0b1b33", // Texto de la web
};

export const nav = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Valores", href: "#valores" },
  { label: "Gestión", href: "#gestion" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

export const services = [
  {
    n: "01",
    title: "Implementación de soluciones SAP",
    text: "Puesta en marcha bajo estándares internacionales en entornos On-Premise y Cloud: SAP HCM, S/4HANA y SuccessFactors.",
    icon: "layers",
  },
  {
    n: "02",
    title: "Desarrollo e innovación",
    text: "Soluciones a medida que optimizan procesos, automatizan la operación y potencian la toma de decisiones con analítica avanzada.",
    icon: "spark",
  },
  {
    n: "03",
    title: "Soporte productivo y outsourcing",
    text: "Continuidad operativa con soporte especializado enfocado en estabilidad, mejora continua y rápida resolución de incidencias.",
    icon: "shield",
  },
  {
    n: "04",
    title: "Gestión del cambio organizacional",
    text: "Estrategias de adopción que fortalecen el compromiso de los usuarios y aseguran una transición exitosa.",
    icon: "users",
  },
  {
    n: "05",
    title: "Capacitación y transferencia",
    text: "Programas de formación funcional y técnica orientados a maximizar el valor de tus soluciones SAP.",
    icon: "book",
  },
  {
    n: "06",
    title: "Nómina y cumplimiento normativo",
    text: "Payroll SAP alineado a la legislación local, con controles de calidad y cierres mensuales sin sobresaltos.",
    icon: "check",
  },
];

export const values = [
  { title: "Partners de nuestros clientes", text: "Trabajamos dentro del equipo, no desde afuera." },
  { title: "Equipo senior especializado", text: "Consultores con experiencia real en cada submódulo SAP HCM." },
  { title: "Servicio personalizado", text: "Cada organización tiene su propia realidad y la respetamos." },
  { title: "Compromiso con la calidad", text: "Resultados medibles y acuerdos de servicio que se cumplen." },
  { title: "Profesionales cercanos", text: "Proactivos, disponibles y fáciles de trabajar." },
  { title: "Acompañamiento estratégico", text: "Apoyo en la toma de decisiones, más allá del ticket." },
];

export const management = [
  {
    step: "01",
    title: "Presentación",
    text: "Introducimos a la organización en el uso y aprovechamiento de las soluciones SAP.",
  },
  {
    step: "02",
    title: "Innovación",
    text: "Investigamos, desarrollamos e implementamos nuevas tecnologías orientadas a la mejora continua.",
  },
  {
    step: "03",
    title: "Maximización",
    text: "Optimizamos los recursos disponibles para potenciar la toma de decisiones.",
  },
  {
    step: "04",
    title: "Autonomía",
    text: "Capacitamos al personal para desenvolverse con independencia y confianza dentro del sistema.",
  },
];

export const differentiators = [
  "Enfoque 100% especializado en SAP HCM y SuccessFactors",
  "Experiencia en proyectos multi-país y entornos híbridos",
  "Metodologías probadas alineadas a mejores prácticas",
  "Acompañamiento cercano y orientación a resultados",
  "Compromiso con la adopción y la mejora permanente",
];

/**
 * CLIENTES
 * --------
 * `logo` es la ruta al archivo dentro de public/img/clientes/.
 * Si se deja vacío, la tarjeta muestra el nombre en texto, así que se puede
 * agregar un cliente nuevo aunque todavía no se tenga su logotipo.
 *
 * Formato recomendado: SVG. Si sólo hay mapa de bits, PNG con fondo
 * transparente de ~400 px de ancho y menos de 30 KB.
 */
export const clients = [
  { name: "Walmart", logo: "/img/clientes/walmart.png" },
  { name: "Coca-Cola Embonor", logo: "/img/clientes/coca-cola-embonor.png" },
  { name: "Cemin", logo: "/img/clientes/cemin.png" },
  { name: "Concha y Toro", logo: "/img/clientes/concha-y-toro.png" },
  { name: "Sugal Chile", logo: "/img/clientes/sugal-chile.png" },
  { name: "Masisa", logo: "/img/clientes/masisa.png" },
  {
    name: "Universidad de los Andes",
    logo: "/img/clientes/universidad-de-los-andes.png",
  },
  { name: "Universidad Mayor", logo: "/img/clientes/universidad-mayor.png" },
];

export const stats = [
  { value: "8+", label: "Años de experiencia en el mercado" },
  { value: "87%", label: "Índice de recomendación y lealtad del clientes NPS, superando ampliamente el promedio de nuestra industria." },
  { value: "95%", label: "Retención de clientes, relaciones de largo plazo basadas en confianza" },
  { value: "24/7", label: "Soporte y continuidad operacional" },
];

export const modules = [
  "Administración de Personal (PA)",
  "Organización y Planificación (OM)",
  "Nómina / Payroll (PY)",
  "Gestión de Tiempos (PT)",
  "Portal ESS / MSS",
  "SuccessFactors Employee Central",
  "Reclutamiento y Onboarding",
  "Reporting y analítica de personas",
];

export const faqs = [
  {
    q: "¿Trabajan con SAP HCM On-Premise y con SuccessFactors?",
    a: "Sí. Cubrimos ambos mundos y también escenarios híbridos, incluyendo la integración entre SuccessFactors y SAP HCM/S4HANA.",
  },
  {
    q: "¿Ofrecen soporte continuo además de proyectos?",
    a: "Sí. Contamos con modelos de soporte productivo y outsourcing con niveles de servicio acordados, mensualizados por bolsa de horas o por dedicación.",
  },
  {
    q: "¿Pueden hacerse cargo de la nómina completa?",
    a: "Podemos asumir el ciclo de nómina en SAP, desde la preparación y validación hasta el cierre y la generación de archivos legales.",
  },
  {
    q: "¿Cómo empieza un proyecto con Pretium?",
    a: "Con una reunión de diagnóstico sin costo donde revisamos tu situación actual, definimos alcance y te entregamos una propuesta con plazos y equipo asignado.",
  },
];
