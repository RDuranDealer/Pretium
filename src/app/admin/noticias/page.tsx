import { getAllNews, type NewsRow, type NewsStatus } from "@/lib/db";
import { logout, removeNews, updateNewsStatus } from "../actions";

export const dynamic = "force-dynamic";

const dateFormatter = new Intl.DateTimeFormat("es-CL", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const statusLabel: Record<NewsStatus, string> = {
  pending: "Pendiente",
  approved: "Aprobada",
  rejected: "Rechazada",
};

const statusStyle: Record<NewsStatus, string> = {
  pending: "bg-amber-100 text-amber-800",
  approved: "bg-emerald-100 text-emerald-800",
  rejected: "bg-red-100 text-red-700",
};

function NewsCard({ item }: { item: NewsRow }) {
  const approve = updateNewsStatus.bind(null, item.id, "approved");
  const reject = updateNewsStatus.bind(null, item.id, "rejected");
  const remove = removeNews.bind(null, item.id);

  return (
    <article className="rounded-2xl border border-brand-100 bg-white p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyle[item.status]}`}
        >
          {statusLabel[item.status]}
        </span>
        {item.tag && (
          <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
            {item.tag}
          </span>
        )}
        {item.source_name && (
          <span className="text-xs text-brand-900/50">{item.source_name}</span>
        )}
        <span className="ml-auto text-xs text-brand-900/40">
          {dateFormatter.format(new Date(item.scraped_at))}
        </span>
      </div>

      <h3 className="mt-3 text-base font-semibold leading-snug text-brand-900">
        {item.title}
      </h3>
      {item.excerpt && (
        <p className="mt-2 text-sm leading-relaxed text-brand-900/65">{item.excerpt}</p>
      )}
      {item.source_url && (
        <a
          href={item.source_url}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-xs font-medium text-brand-600 hover:underline"
        >
          Ver fuente original ↗
        </a>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {item.status !== "approved" && (
          <form action={approve}>
            <button className="rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700">
              Aprobar
            </button>
          </form>
        )}
        {item.status !== "rejected" && (
          <form action={reject}>
            <button className="rounded-full bg-red-50 px-4 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100">
              Rechazar
            </button>
          </form>
        )}
        <form action={remove}>
          <button className="rounded-full border border-brand-200 px-4 py-1.5 text-xs font-semibold text-brand-900/60 hover:border-brand-400">
            Eliminar
          </button>
        </form>
      </div>
    </article>
  );
}

export default async function AdminNoticiasPage() {
  const news = await getAllNews();
  const pending = news.filter((n) => n.status === "pending");
  const approved = news.filter((n) => n.status === "approved");
  const rejected = news.filter((n) => n.status === "rejected");

  return (
    <main className="min-h-screen bg-brand-50/40 px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-brand-900">Noticias</h1>
            <p className="mt-1 text-sm text-brand-900/60">
              Aprueba, rechaza o elimina las noticias detectadas por el scraper.
            </p>
          </div>
          <form action={logout}>
            <button className="btn-ghost">Salir</button>
          </form>
        </div>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-900/50">
            Pendientes ({pending.length})
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {pending.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
            {pending.length === 0 && (
              <p className="text-sm text-brand-900/50">No hay noticias pendientes.</p>
            )}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-900/50">
            Aprobadas ({approved.length})
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {approved.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
            {approved.length === 0 && (
              <p className="text-sm text-brand-900/50">Todavía no hay noticias aprobadas.</p>
            )}
          </div>
        </section>

        {rejected.length > 0 && (
          <section className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-900/50">
              Rechazadas ({rejected.length})
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {rejected.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
