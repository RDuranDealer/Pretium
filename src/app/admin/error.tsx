"use client";

import { useEffect } from "react";
import { reloadOnceForStaleBuild } from "@/lib/stale-build";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    reloadOnceForStaleBuild(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-brand-50/60 px-6 text-center">
      <h1 className="text-xl font-bold text-brand-900">No se pudo cargar el panel</h1>
      <p className="max-w-sm text-sm text-brand-900/60">
        Ocurrió un error al cargar el panel de noticias. Puede deberse a una
        actualización reciente del sitio o a un problema temporal de conexión.
      </p>
      <button onClick={() => reset()} className="btn-primary">
        Reintentar
      </button>
    </main>
  );
}
