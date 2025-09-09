import HomeContent from "@/components/pages/HomeContent";
import ReduxProvider from "@/components/Providers/ReduxProvider";

export default function Home() {
  return (
    <ReduxProvider>
      <HomeContent />
    </ReduxProvider>
  );
}
