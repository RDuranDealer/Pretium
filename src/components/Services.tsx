import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section id="servicios" className="section bg-brand-50/60">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Nuestros servicios</span>
          <h2 className="h2">Todo el ciclo de vida de tu plataforma SAP</h2>
          <p className="lead mt-5">
            Desde la implementación hasta la evolución continua, con calidad,
            confiabilidad y resultados medibles.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <article className="card group h-full">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white transition-colors group-hover:bg-brand-700">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold tracking-widest text-brand-200">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-snug text-brand-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-900/65">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 overflow-hidden rounded-3xl bg-brand-900 p-9 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.6fr_1fr]">
              <div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Nuestra propuesta de valor
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
                  Combinamos experiencia, especialización y cercanía para entregar
                  soluciones SAP que generan impacto real en el negocio. Acompañamos a
                  nuestros clientes en todo el ciclo de vida de sus plataformas,
                  asegurando calidad, continuidad y resultados medibles.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <a href="#contacto" className="btn bg-white text-brand-800 hover:bg-brand-50">
                  Solicitar una propuesta <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
