import Reveal from "./Reveal";
import { Icon } from "./Icons";
import { getApprovedNews } from "@/lib/db";

const dateFormatter = new Intl.DateTimeFormat("es-CL", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function News() {
  const news = await getApprovedNews();

  if (news.length === 0) return null;

  return (
    <section id="noticias" className="section">
      <div className="container-px">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Noticias</span>
          <h2 className="h2">Novedades de Pretium</h2>
          <p className="lead mt-5">
            Proyectos, alianzas y actividades de nuestro equipo de consultoría
            SAP HCM y SuccessFactors.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, i) => {
            const date = item.published_at ?? item.scraped_at;
            const Wrapper = item.source_url ? "a" : "div";
            return (
              <Reveal key={item.id} delay={i * 70}>
                <Wrapper
                  {...(item.source_url
                    ? { href: item.source_url, target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="card group flex h-full flex-col"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      <Icon name="news" className="h-3.5 w-3.5" />
                      {item.tag ?? "Noticia"}
                    </span>
                    <time
                      dateTime={new Date(date).toISOString()}
                      className="text-xs font-medium text-brand-900/50"
                    >
                      {dateFormatter.format(new Date(date))}
                    </time>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-brand-900">
                    {item.title}
                  </h3>
                  {item.excerpt && (
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-900/65">
                      {item.excerpt}
                    </p>
                  )}
                  {item.source_url && (
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700">
                      Leer más <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  )}
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
