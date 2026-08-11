import Reveal from "./Reveal";
import { faqs } from "@/lib/site";

export default function Faq() {
  return (
    <section className="section bg-brand-50/60">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="h2">Lo que suelen preguntarnos</h2>
            <p className="lead mt-5">
              ¿Tu caso no está aquí? Escríbenos y te respondemos sin compromiso.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="divide-y divide-brand-100 overflow-hidden rounded-2xl border border-brand-100 bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group px-7 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-brand-900 marker:hidden">
                    {f.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-200 text-brand-500 transition-transform duration-300 group-open:rotate-45">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 pr-12 text-sm leading-relaxed text-brand-900/65">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
