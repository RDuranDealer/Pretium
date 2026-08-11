import { Icon } from "./Icons";
import { site, stats } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-900 pt-32 lg:pt-40">
      <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
      <div
        className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-500/25 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-52 -left-32 h-[30rem] w-[30rem] rounded-full bg-brand-400/15 blur-3xl"
        aria-hidden
      />

      <div className="container-px relative">
        <div className="grid items-center gap-14 pb-20 lg:grid-cols-12 lg:pb-28">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              Consultores senior SAP HCM · SuccessFactors · S/4HANA
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              La gestión de personas,{" "}
              <span className="text-brand-300">funcionando de verdad</span> en SAP.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Implementamos, sostenemos y evolucionamos tus plataformas SAP HCM con
              un equipo especialista que se integra a tu operación. Sin intermediarios,
              sin curvas de aprendizaje a tu costo.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contacto" className="btn bg-white text-brand-800 hover:bg-brand-50">
                Conversemos tu proyecto <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href="#servicios"
                className="btn border border-white/25 text-white hover:bg-white/10"
              >
                Ver nuestros servicios
              </a>
            </div>

            <p className="mt-8 text-sm text-white/45">
              Confían en nosotros equipos de retail, minería, educación y consumo masivo.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/15 bg-white/[0.07] p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-bold text-white lg:text-4xl">{s.value}</div>
                    <div className="mt-1.5 text-xs leading-snug text-white/55">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <Icon name="whatsapp" className="h-4.5 w-4.5" />
                  </span>
                  Escríbenos por WhatsApp — respondemos el mismo día
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="block w-full text-white"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path fill="currentColor" d="M0 60V26c240 26 480 34 720 22S1200 8 1440 0v60H0Z" />
      </svg>
    </section>
  );
}
