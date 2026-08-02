import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/home/HeroBanner";
import GenreSection from "@/components/home/GenreSection";
import NewArrivals from "@/components/home/NewArrivals";

export default function Home() {
  return (
    <main className="bg-[#FFFCF3]">
      <Sidebar />

      <section className="ml-[220px] min-h-screen">
        <Header />

        <div className="px-8 pt-8">
          <HeroBanner />

          <GenreSection />

          <NewArrivals />
        </div>
      </section>
    </main>
  );
}