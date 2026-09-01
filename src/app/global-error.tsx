"use client";

import { useEffect } from "react";
import { reloadOnceForStaleBuild } from "@/lib/stale-build";

export default function GlobalError({
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
    <html lang="es-CL">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-brand-50/60 px-6 text-center">
          <h1 className="text-xl font-bold text-brand-900">Algo salió mal</h1>
          <p className="max-w-sm text-sm text-brand-900/60">
            Ocurrió un error inesperado. Si acabas de recibir una actualización del
            sitio, recarga la página para obtener la última versión.
          </p>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.reload();
              } else {
                reset();
              }
            }}
            className="btn-primary"
          >
            Recargar página
          </button>
        </main>
      </body>
    </html>
  );
}
