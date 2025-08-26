import Image from "next/image";

const brands = [
  { id: 1, src: "/brands/versace.svg", alt: "Versace logo" },
  { id: 2, src: "/brands/zara.svg", alt: "Zara logo" },
  { id: 3, src: "/brands/gucci.svg", alt: "Gucci logo" },
  { id: 4, src: "/brands/prada.svg", alt: "Prada logo" },
  { id: 5, src: "/brands/calvin-klein.svg", alt: "Calvin Klein logo" },
];
export default function Partners() {
  return (
    <div className="py-10 bg-black ">
      <section className="container px-4 mx-auto">
        <ul className="flex items-center justify-center lg:justify-between flex-wrap gap-8">
          {brands.map(({ id, src, alt }) => {
            return (
              <li
                key={id}
                className="flex items-center justify-center h-6 md:h-8"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={120}
                  height={60}
                  className="h-full w-auto object-contain"
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
