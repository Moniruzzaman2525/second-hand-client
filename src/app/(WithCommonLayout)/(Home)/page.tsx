import CategorySection from "@/components/modules/home/HeroSection/CategorySection";
import StatsCard from "@/components/modules/home/HeroSection/StatsCardSection";
import HeroSection from "@/components/modules/home/HeroSection/HeroSection";
import HowWorksSection from "@/components/modules/home/HeroSection/HowWorksSection";
import TestHomePage from "@/components/modules/home/HeroSection/Testimonial";
import FeatureProduct from "@/components/modules/home/HeroSection/FeatureProduct";
import { getAllProducts } from "@/services/Product";


const HomePage =async () => {
  const {data: products } = await getAllProducts();

  return (
    <div className="">
      <HeroSection />
      <CategorySection />
      <FeatureProduct products={products} />
      <HowWorksSection />
      <StatsCard />
      <TestHomePage />
    </div>
  );
};

export default HomePage;
