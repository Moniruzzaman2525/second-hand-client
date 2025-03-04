import CategorySection from "@/components/modules/home/HeroSection/CategorySection";
import StatsCard from "@/components/modules/home/HeroSection/StatsCardSection";
import HeroSection from "@/components/modules/home/HeroSection/HeroSection";
import HowWorksSection from "@/components/modules/home/HeroSection/HowWorksSection";


const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <CategorySection />
      <HowWorksSection />
      <StatsCard />
      <div>
        Hello
      </div>
    </div>
  );
};

export default HomePage;
