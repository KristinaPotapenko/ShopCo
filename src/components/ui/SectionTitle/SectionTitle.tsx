interface SectionTitleProps {
  isCentered?: boolean;
  hasMargin?: boolean;
  isLight?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function SectionTitle({
  isCentered = true,
  hasMargin = true,
  isLight = false,
  className,
  children,
}: SectionTitleProps) {
  return (
    <h2
      className={`font-montserrat font-extrabold text-3xl md:text-5xl uppercase
        ${isCentered ? "text-center" : ""}
        ${hasMargin ? "mb-8 md:mb-14" : ""}
        ${isLight ? "text-white" : "text-black"}
        ${className}
      `}
    >
      {children}
    </h2>
  );
}
