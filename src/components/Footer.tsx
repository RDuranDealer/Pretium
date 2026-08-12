import { Logo, Icon } from "./Icons";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-50/50">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-900/60">
              {site.tagline}. Impulsamos la gestión de personas con soluciones
              eficientes y a la medida.
            </p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 text-brand-600 transition-colors hover:border-brand-400 hover:text-brand-700"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brand-900">Navegación</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-brand-900/60 transition-colors hover:text-brand-600"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-brand-900">Contacto</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-brand-900/60">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brand-600">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneRaw}`} className="hover:text-brand-600">
                  {site.phone}
                </a>
              </li>
              <li className="leading-relaxed">{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand-100 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-brand-900/45">
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-brand-900/45">
            SAP, SAP HCM, S/4HANA y SuccessFactors son marcas registradas de SAP SE.
          </p>
        </div>
      </div>
    </footer>
  );
}
