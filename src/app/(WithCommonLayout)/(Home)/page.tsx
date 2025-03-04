import CategorySection from "@/components/modules/home/HeroSection/CategorySection";
import StatsCard from "@/components/modules/home/HeroSection/StatsCardSection";
import HeroSection from "@/components/modules/home/HeroSection/HeroSection";
import HowWorksSection from "@/components/modules/home/HeroSection/HowWorksSection";
import TestHomePage from "@/components/modules/home/HeroSection/Testimonial";


const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <CategorySection />
      <HowWorksSection />
      <StatsCard />
      <TestHomePage />
    </div>
  );
};

export default HomePage;
