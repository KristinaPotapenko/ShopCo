import Image from "next/image";

interface StyleCardProps {
  title: string;
  src: string;
  alt: string;
  isBigCol: boolean;
}

export default function StyleCard({
  title,
  src,
  alt,
  isBigCol,
}: StyleCardProps) {
  return (
    <li
      className={`relative ${
        isBigCol && "col-span-2"
      } aspect-[3/2] w-full h-full max-h-[300px] rounded-3xl`}
    >
      <h3 className="absolute top-4 lg:top-6 left-6 lg:left-9 z-2 text-2xl lg:text-4xl font-semibold">
        {title}
      </h3>
      <Image src={src} alt={alt} fill className="object-cover rounded-3xl" />
    </li>
  );
}
