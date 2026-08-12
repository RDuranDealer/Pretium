import Reveal from "./Reveal";
import { clients } from "@/lib/site";

export default function Clients() {
  // La lista se duplica para que el desplazamiento continuo no muestre huecos.
  const row = [...clients, ...clients];

  return (
    <section id="clientes" className="section">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Nuestros clientes</span>
          <h2 className="h2">Organizaciones que confían en nosotros</h2>
          <p className="lead mt-5">
            Empresas de retail, consumo masivo, minería, agroindustria y educación
            superior.
          </p>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="relative mt-12 overflow-hidden py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="flex w-max animate-marquee gap-4">
            {row.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="group flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl border border-brand-100 bg-white px-7"
              >
                {c.logo ? (
                  // Escala de grises por defecto para que las marcas convivan
                  // sin competir entre sí ni con el azul corporativo.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.logo}
                    alt={`Logotipo de ${c.name}`}
                    loading="lazy"
                    className="max-h-12 w-auto max-w-full object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                ) : (
                  <span className="text-center text-base font-semibold tracking-tight text-brand-900/45">
                    {c.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="container-px">
        <Reveal delay={160}>
          <p className="mt-8 text-center text-xs text-brand-900/40">
            Marcas y logotipos son propiedad de sus respectivos titulares. Se muestran
            con fines referenciales de experiencia de proyectos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
