interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="mb-8 md:text-5xl md:mb-14 font-montserrat font-extrabold text-3xl text-center uppercase">
      {children}
    </h2>
  );
}
