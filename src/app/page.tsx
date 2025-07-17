import Footer from "@/components/footer/footer";
import { Header } from "./_components/header";
import { HeroSection } from "./_components/HeroSection";
import { SupportSection } from "./_components/SupportSection";
import { CustomerStorySection } from "./_components/CustomerStorySection ";
import { FeatureSection } from "./_components/feature-section";

export default function Home() {

  return (
    <div className="flex flex-col gap-20">
      <Header />
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <Footer />

    </div>
  );
}
