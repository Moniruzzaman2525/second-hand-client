import { Lightbulb, List, Search } from 'lucide-react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <div
            className={`${styles.banner} relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center`}
        >
            <div className="absolute inset-0 bg-[#374B5C] bg-opacity-50 backdrop-blur-sm"></div>

            <div className="relative z-10">
                <h1 className="text-white text-5xl md:text-6xl font-bold">
                    Second Hand <br /> <span className="text-yellow-400">Bangladesh</span>.
                </h1>

                <div className="mt-6 bg-[#fdfdfe] p-3 md:p-4 rounded-lg shadow-lg flex items-center space-x-2 w-[100%]">
                    <div className="flex items-center border bg-[#fdfdfe] bg-opacity-40 px-3 py-2 rounded-lg">
                        <Lightbulb />
                        <input
                            type="text"
                            placeholder="I'm looking for..."
                            className="flex-1 px-4 py-2 outline-none bg-transparent placeholder-gray-700"
                        />
                    </div>
                    <div className="flex border items-center bg-[#fdfdfe] bg-opacity-40 px-3 py-2 rounded-lg">

                        <List />
                        <select className="px-2 py-2 border-none outline-none bg-transparent">
                            <option>Category</option>
                            <option>Category</option>
                            <option>Category</option>
                        </select>
                    </div>
                    <button className="bg-[#537cd9] text-white hover:bg-[#3a5eb4] px-4 py-4 rounded-sm shadow-md flex items-center">
                        <Search size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

