export const ProfileInfo = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <div className="flex justify-between border-b border-gray-100 py-2">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-800 text-right">
        {value}
      </span>
    </div>
  );
};
