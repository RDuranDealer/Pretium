import Reveal from "./Reveal";
import { management } from "@/lib/site";

const commitments = [
  "Respuesta oportuna a cada requerimiento",
  "Definición clara de necesidades y expectativas",
  "Escucha activa y mejora continua con evaluación y feedback",
];

export default function Management() {
  return (
    <section id="gestion" className="section bg-brand-900">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            Nuestra gestión
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Un rol activo dentro de tu organización
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/65">
            Impulsamos la eficiencia, la innovación y la autonomía de los equipos en
            cuatro frentes permanentes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {management.map((m, i) => (
            <Reveal key={m.step} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-7 transition-colors hover:border-white/25 hover:bg-white/[0.09]">
                <span className="text-sm font-bold tracking-widest text-brand-300">
                  {m.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-12 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-3">
            {commitments.map((c) => (
              <div key={c} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                <p className="text-sm leading-relaxed text-white/70">{c}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
