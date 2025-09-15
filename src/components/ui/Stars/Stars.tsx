import Star from "../Star/Star";

interface StarsProps {
  rating: number;
  className?: string;
}

export default function Stars({ rating, className }: StarsProps) {
  const fullStars = Math.floor(rating);
  const hasFraction = rating % 1 !== 0;
  const fraction = +(rating % 1).toFixed(1);
  const totalStars = 5;

  return (
    <ul className={"flex items-center gap-1.5 " + className}>
      {Array.from({ length: totalStars }).map((_, index) => {
        if (index < fullStars) {
          return (
            <li key={index}>
              <Star />
            </li>
          );
        } else if (index === fullStars && hasFraction) {
          return (
            <li key={index} className="relative w-6 h-6">
              <Star isGray={true} />
              <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: `${fraction * 100}%` }}
              >
                <Star />
              </div>
            </li>
          );
        } else {
          return (
            <li key={index}>
              <Star isGray={true} />
            </li>
          );
        }
      })}
    </ul>
  );
}
