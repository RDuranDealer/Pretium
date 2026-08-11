import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { differentiators, modules } from "@/lib/site";

export default function About() {
  return (
    <section id="nosotros" className="section">
      <div className="container-px">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="eyebrow">Quiénes somos</span>
            <h2 className="h2">
              Un equipo senior, especializado y{" "}
              <span className="text-brand-500">cerca de tu operación</span>
            </h2>
            <p className="lead mt-6">
              Somos consultores con amplia experiencia en cada submódulo del ecosistema
              SAP HCM. Nuestra misión es entregar soluciones efectivas, adaptadas a la
              realidad de cada organización, con resultados medibles y acompañamiento
              constante.
            </p>
            <p className="lead mt-4">
              No trabajamos con perfiles junior aprendiendo en tu proyecto. Cada persona
              que asignamos ya resolvió antes el problema que tienes hoy.
            </p>

            <ul className="mt-8 space-y-3.5">
              {differentiators.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <Icon name="arrow" className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-brand-900/75">{d}</span>
                </li>
              ))}
            </ul>

            <a href="#contacto" className="btn-primary mt-9">
              Contáctanos <Icon name="arrow" className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl bg-brand-50 p-8 lg:p-10">
              <h3 className="text-lg font-semibold text-brand-900">
                Cobertura funcional y técnica
              </h3>
              <p className="mt-2 text-sm text-brand-900/60">
                Módulos y frentes en los que trabajamos día a día.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {modules.map((m) => (
                  <div
                    key={m}
                    className="rounded-xl border border-brand-100 bg-white px-4 py-3.5 text-sm font-medium text-brand-800"
                  >
                    {m}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-brand-200 bg-white p-6">
                <p className="text-sm leading-relaxed text-brand-900/70">
                  ¿Tu escenario es híbrido entre SuccessFactors y SAP HCM On-Premise?
                  Es exactamente donde más valor aportamos.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
