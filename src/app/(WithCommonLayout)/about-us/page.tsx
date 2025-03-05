import AboutUs from "@/components/modules/about";
import HowWorksSection from "@/components/modules/home/HeroSection/HowWorksSection";
import SellersLoveUs from "@/components/modules/home/HeroSection/StatsCardSection";

const AboutUsPage = () => {
    return (
        <div>
            <AboutUs />
            <SellersLoveUs />
            <div className="py-20">
                <HowWorksSection />
            </div>
        </div>
    );
};

export default AboutUsPage;
