import { login } from "../actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const { error, next } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-50/60 px-6">
      <div className="w-full max-w-sm rounded-2xl border border-brand-100 bg-white p-8 shadow-xl shadow-brand-500/5">
        <h1 className="text-xl font-bold text-brand-900">Panel de noticias</h1>
        <p className="mt-1 text-sm text-brand-900/60">
          Acceso restringido al equipo de Pretium.
        </p>

        <form action={login} className="mt-6 space-y-4">
          <input type="hidden" name="next" value={next ?? "/admin/noticias"} />
          <div>
            <label htmlFor="password" className="text-sm font-medium text-brand-900">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="mt-1.5 w-full rounded-lg border border-brand-200 px-3.5 py-2.5 text-sm text-brand-900 outline-none focus:border-brand-500"
            />
          </div>

          {error && (
            <p className="text-sm font-medium text-red-600">
              Contraseña incorrecta. Intenta de nuevo.
            </p>
          )}

          <button type="submit" className="btn-primary w-full">
            Ingresar
          </button>
        </form>
      </div>
    </main>
  );
}
