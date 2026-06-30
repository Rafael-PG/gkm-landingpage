export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-brand-light">
      <div className="w-12 h-12 border-4 border-brand-red/20 border-t-brand-red rounded-full animate-spin mb-4" />
      <p className="text-sm text-brand-gray font-semibold tracking-wide">Cargando...</p>
    </div>
  );
}
