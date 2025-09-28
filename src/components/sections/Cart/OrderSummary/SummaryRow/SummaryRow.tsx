interface SummaryRowProps {
  label: string;
  value: string;
  wrapperClass?: string;
  valueClass?: string;
}

export const SummaryRow = ({
  label,
  value,
  wrapperClass,
  valueClass,
}: SummaryRowProps) => {
  return (
    <div
      className={`flex items-center justify-between flex-wrap gap-4 mb-4 lg:mb-5 text-xl text-semibold text-zinc-500 ${wrapperClass}`}
    >
      <p>{label}</p>
      <p className={`font-bold ${valueClass}`}>{value}</p>
    </div>
  );
};
