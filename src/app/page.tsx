import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/home/HeroBanner";
import GenreSection from "@/components/home/GenreSection";
import NewArrivals from "@/components/home/NewArrivals";
import RecommendationSection from "@/components/home/RecommendationSection";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#FFFCF3]">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Scrollable Content */}
      <section className="ml-[230px] flex-1">
        <Header />

        <div className="px-8 pt-8 pb-10">
          <HeroBanner />

          <GenreSection />

          <NewArrivals />

          <RecommendationSection />
        </div>
      </section>
    </main>
  );
}