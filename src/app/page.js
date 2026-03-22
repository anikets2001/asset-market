import CommunityHighlights from "@/components/CommunityHighlights/CommunityHighlights";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import PopularGames from "@/components/PopularGames/PopularGames";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
          <HeroSection />
          <PopularGames />
          <CommunityHighlights />
        </main>
        <SocialSidebar />
      </div>
    </div>
  );
}
