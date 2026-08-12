import Reveal from "./Reveal";
import { values } from "@/lib/site";

export default function Values() {
  return (
    <section id="valores" className="section">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Nuestros valores</span>
          <h2 className="h2">Cómo trabajamos</h2>
          <p className="lead mt-5">
            Lo que nuestros clientes reconocen cuando terminan un proyecto con nosotros.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-brand-100 bg-brand-100 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <div className="h-full bg-white p-8 transition-colors hover:bg-brand-50/70">
                <div className="mb-5 h-1 w-10 rounded-full bg-brand-gradient" />
                <h3 className="text-base font-semibold text-brand-900">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-900/60">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
