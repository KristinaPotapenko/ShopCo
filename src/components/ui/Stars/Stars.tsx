import Star from "../Star/Star";

interface StarsProps {
  className?: string;
}

export default function Stars({ className }: StarsProps) {
  return (
    <ul className={"flex items-center gap-1.5 " + className}>
      <li>
        <Star />
      </li>
      <li>
        <Star />
      </li>
      <li>
        <Star />
      </li>
      <li>
        <Star />
      </li>
      <li>
        <Star />
      </li>
    </ul>
  );
}
