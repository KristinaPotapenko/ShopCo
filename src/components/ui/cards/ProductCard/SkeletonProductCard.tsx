export default function SkeletonProductCard() {
  return (
    <div className="w-[280px] flex-shrink-0 space-y-5 p-4 bg-gray-50 rounded-3xl">
      <div className="relative overflow-hidden h-48 rounded-xl bg-gray-200">
        <div className="absolute inset-0 -translate-x-full animate-super-glow-shimmer bg-gradient-to-r from-transparent via-white/40 via-60% to-transparent super-glow-effect" />
      </div>
      <div className="space-y-3">
        <div className="relative overflow-hidden w-4/5 h-5 rounded-md bg-gray-200">
          <div className="absolute inset-0 -translate-x-full animate-super-glow-shimmer bg-gradient-to-r from-transparent via-white/40 via-60% to-transparent super-glow-effect" />
        </div>
        <div className="relative overflow-hidden w-3/5 h-4 rounded-md bg-gray-200">
          <div className="absolute inset-0 -translate-x-full animate-super-glow-shimmer bg-gradient-to-r from-transparent via-white/40 via-60% to-transparent super-glow-effect" />
        </div>
        <div className="relative overflow-hidden w-2/5 h-6 rounded-md bg-gray-300">
          <div className="absolute inset-0 -translate-x-full animate-super-glow-shimmer bg-gradient-to-r from-transparent via-white/40 via-60% to-transparent super-glow-effect" />
        </div>
      </div>
    </div>
  );
}
