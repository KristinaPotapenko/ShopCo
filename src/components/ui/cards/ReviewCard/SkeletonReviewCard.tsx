export const SkeletonReviewCard = () => {
  return (
    <div className="relative min-w-full lg:min-w-[auto] lg:flex-[0_0_calc(33.333%_-_16px)] p-6 lg:py-7 lg:px-8 bg-gray-50 rounded-3xl">
      <div className="relative overflow-hidden w-1/3 h-5 mb-3 lg:mb-3.5 rounded-md bg-gray-200">
        <div className="absolute inset-0 -translate-x-full animate-super-glow-shimmer bg-gradient-to-r from-transparent via-white/40 via-60% to-transparent super-glow-effect" />
      </div>
      <div className="flex gap-2">
        <div className="relative overflow-hidden w-3/5 h-4 lg:mb-3 rounded-md bg-gray-200">
          <div className="absolute inset-0 -translate-x-full animate-super-glow-shimmer bg-gradient-to-r from-transparent via-white/40 via-60% to-transparent super-glow-effect" />
        </div>
        <div className="relative overflow-hidden w-4 h-4 lg:mb-3 rounded-md bg-gray-200">
          <div className="absolute inset-0 -translate-x-full animate-super-glow-shimmer bg-gradient-to-r from-transparent via-white/40 via-60% to-transparent super-glow-effect" />
        </div>
      </div>
      <div className="relative overflow-hidden w-full h-6 lg:mb-3 rounded-md bg-gray-200">
        <div className="absolute inset-0 -translate-x-full animate-super-glow-shimmer bg-gradient-to-r from-transparent via-white/40 via-60% to-transparent super-glow-effect" />
      </div>
    </div>
  );
};
