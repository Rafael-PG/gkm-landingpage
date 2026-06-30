"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-brand-light px-4">
      <div className="max-w-md text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto">
          <span className="text-3xl text-brand-red font-bold">!</span>
        </div>
        <h1 className="font-display font-extrabold text-2xl text-brand-dark">
          Algo salió mal
        </h1>
        <p className="text-sm text-brand-gray leading-relaxed">
          Ocurrió un error inesperado. Nuestro equipo ha sido notificado.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-brand-red hover:bg-brand-red/90 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
