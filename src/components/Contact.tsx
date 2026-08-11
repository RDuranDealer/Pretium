import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { site } from "@/lib/site";

const items = [
  {
    icon: "mail",
    label: "Correo",
    value: site.email,
    href: `mailto:${site.email}?subject=Consulta%20desde%20el%20sitio%20web`,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: site.phone,
    href: `https://wa.me/${site.whatsapp}?text=Hola%2C%20quisiera%20conversar%20sobre%20un%20proyecto%20SAP%20HCM.`,
  },
  {
    icon: "phone",
    label: "Teléfono",
    value: site.phone,
    href: `tel:${site.phoneRaw}`,
  },
  {
    icon: "pin",
    label: "Oficina",
    value: site.address,
    href: site.mapsUrl,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="container-px">
        <div className="overflow-hidden rounded-3xl bg-brand-900">
          <div className="grid lg:grid-cols-2">
            <div className="relative p-9 sm:p-12 lg:p-14">
              <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
              <div className="relative">
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                  Contacto
                </span>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  Conversemos sobre tu proyecto
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-white/65">
                  Cuéntanos qué necesitas resolver en SAP HCM y coordinamos una reunión
                  de diagnóstico sin costo. Respondemos el mismo día hábil.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`https://wa.me/${site.whatsapp}?text=Hola%2C%20quisiera%20conversar%20sobre%20un%20proyecto%20SAP%20HCM.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-brand-800 hover:bg-brand-50"
                  >
                    <Icon name="whatsapp" className="h-4 w-4" /> Escribir por WhatsApp
                  </a>
                  <a
                    href={`mailto:${site.email}?subject=Consulta%20desde%20el%20sitio%20web`}
                    className="btn border border-white/25 text-white hover:bg-white/10"
                  >
                    <Icon name="mail" className="h-4 w-4" /> Enviar un correo
                  </a>
                </div>

                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <Icon name="linkedin" className="h-4.5 w-4.5" /> Síguenos en LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-white/[0.04] p-9 sm:p-12 lg:p-14">
              <div className="space-y-2">
                {items.map((it) => (
                  <Reveal key={it.label}>
                    <a
                      href={it.href}
                      target={it.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 rounded-2xl px-4 py-4 transition-colors hover:bg-white/[0.06]"
                    >
                      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                        <Icon name={it.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-widest text-white/40">
                          {it.label}
                        </span>
                        <span className="mt-1 block text-sm font-medium leading-relaxed text-white">
                          {it.value}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 p-6">
                <p className="text-sm leading-relaxed text-white/55">
                  Horario de atención comercial: lunes a viernes, 9:00 a 18:30 h (GMT-4).
                  Los modelos de soporte productivo pueden incluir cobertura extendida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
