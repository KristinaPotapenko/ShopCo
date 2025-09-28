interface ProductAttributeProps {
  label: string;
  children: React.ReactNode;
}

export const ProductAttribute = ({
  label,
  children,
}: ProductAttributeProps) => {
  return (
    <p className="font-normal">
      <span className="text-black">{label}</span>
      {children}
    </p>
  );
};
