"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import HeroBanner from "@/components/home/HeroBanner";
import GenreSection from "@/components/home/GenreSection";
import NewArrivals from "@/components/home/NewArrivals";
import RecommendationSection from "@/components/home/RecommendationSection";
import BestSellerSection from "@/components/home/BestSellerSection";
import AuthorSection from "@/components/home/AuthorSection";
import CrimeFictionSection from "@/components/home/CrimeFictionSection";
import NonFictionSection from "@/components/home/NonFictionSection";
import FamousAuthorsSection from "@/components/home/FamousAuthorsSection";
import AcademicSection from "@/components/home/AcademicSection";
import BusinessSection from "@/components/home/BusinessSection";
import TechBooksSection from "@/components/home/TechBooksSection";
import ClassicsSection from "@/components/home/ClassicsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFFCF3] lg:flex">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <section className="w-full lg:ml-[230px]">
        <div className="mx-auto w-full max-w-[1366px] px-4 py-6 sm:px-6 lg:px-8">
          <Header
            setSidebarOpen={setSidebarOpen}
          />

          <HeroBanner />

          <GenreSection />

          <NewArrivals />

          <RecommendationSection />

          <BestSellerSection />

          <AuthorSection />

          <CrimeFictionSection />

          <NonFictionSection />

          <FamousAuthorsSection />

          <AcademicSection />

          <BusinessSection />

          <TechBooksSection />

          <ClassicsSection />
        </div>

        <Footer />
      </section>
    </main>
  );
}