import Link from "next/link";

export default function HeroInfo() {
  return (
    <>
      <h1 className="font-montserrat text-3xl md:text-6xl font-extrabold">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>
      <p className="font-normal text-black/60">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <Link
        className="flex items-center justify-center py-4 px-16 md:mb-6 text-white font-semibold bg-black rounded-[60px]"
        href="/"
      >
        Shop Now
      </Link>
    </>
  );
}
