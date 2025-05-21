import styles from "./HeroSection.module.css";
import HeroSectionFilter from "./HeroSectionFilter";

const HeroSection = () => {


    return (
        <div className={`${styles.banner} relative w-full h-full flex flex-col items-center justify-center text-center bg-cover bg-center`}>

            <div className="absolute inset-0 bg-[#374B5C] bg-opacity-50 backdrop-blur-[5px]"></div>

            <div className="relative z-10">
                <h1 className="text-white text-5xl md:text-6xl font-bold">
                    Second Hand <br /> <span className="text-yellow-400">Bangladesh</span>.
                </h1>

                <div>
                    <HeroSectionFilter />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
