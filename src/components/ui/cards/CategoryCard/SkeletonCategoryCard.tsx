interface SkeletonCategoryCardProps {
  isBigCol: boolean;
}

export const SkeletonCategoryCard = ({
  isBigCol,
}: SkeletonCategoryCardProps) => {
  return (
    <div
      className={`relative ${
        isBigCol && "col-span-2"
      } aspect-[3/2] w-full h-full max-h-[300px] bg-white rounded-3xl`}
    >
      <div className="absolute w-2/5 h-8 top-4 lg:top-6 left-6 lg:left-9 z-2 bg-gray-200 rounded-md overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-super-glow-shimmer bg-gradient-to-r from-transparent via-white/40 via-60% to-transparent super-glow-effect" />
      </div>
      <div className="absolute bottom-4 right-4 w-3/4 h-3/4 lg:h-3/5 object-contain bg-gray-200 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-super-glow-shimmer bg-gradient-to-r from-transparent via-white/40 via-60% to-transparent super-glow-effect" />
      </div>
    </div>
  );
};
