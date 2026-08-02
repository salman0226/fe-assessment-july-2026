import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/home/HeroBanner";
import { genres } from "@/constants/genres";
import GenreSection from "@/components/home/GenreSection";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#FFFCF3]">
      <Sidebar />

      <section className="flex-1">
        <Header />

        <div className="px-8 pt-8">
          <HeroBanner />
        <GenreSection />
        </div>
      </section>
    </main>
  );
}