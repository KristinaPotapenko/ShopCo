import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

export const ProfileActions = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <PrimaryButton variant="outline" href="/">
        Back to Home
      </PrimaryButton>
      <PrimaryButton onClick={onLogout}>Logout</PrimaryButton>
    </div>
  );
};
