import StyleCard from "@/components/ui/cards/StyleCard/StyleCard";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";

const styles = [
  { id: 1, title: "Casual", src: "/styles/style_01.jpg", alt: "Casual style" },
  { id: 2, title: "Formal", src: "/styles/style_02.jpg", alt: "Formal style" },
  { id: 3, title: "Party", src: "/styles/style_03.jpg", alt: "Party style" },
  { id: 4, title: "Gym", src: "/styles/style_04.jpg", alt: "Gym style" },
];

export default function Styles() {
  return (
    <section className="container flex flex-col mx-auto px-4 py-16">
      <div className="px-6 py-10 lg:py-20 lg:px-16 bg-[#F0F0F0] rounded-[40px]">
        <SectionTitle>BROWSE BY dress STYLE</SectionTitle>
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          {styles.map((style, i) => {
            const rowIndex = Math.floor(i / 2);
            const isEvenRow = rowIndex % 2 === 0;
            const isEvenCol = i % 2 === 0;

            const isBigCol =
              (isEvenCol && !isEvenRow) || (!isEvenCol && isEvenRow);

            return (
              <StyleCard
                key={style.id}
                title={style.title}
                src={style.src}
                alt={style.alt}
                isBigCol={isBigCol}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
