export const ProfileSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-2">{children}</div>
    </div>
  );
};
