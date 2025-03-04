import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import laptop from '../../../../app/assets/laptop-pc.png'
import mobile from '../../../../app/assets/mobile.png'
import electronic from '../../../../app/assets/electronics.jpg'
import gadget from '../../../../app/assets/gadget.png'
import homeApplication from '../../../../app/assets/home-application.png'
import videoGames from '../../../../app/assets/game.png'
import vehicles from '../../../../app/assets/vehicles.png'
import fashion from '../../../../app/assets/fashion.png'
import kids from '../../../../app/assets/kids.png'
import sports from '../../../../app/assets/sports.png'
import healthAndBeauty from '../../../../app/assets/health-beauty.png'
import SHContainer from '@/components/ui/core/SHContainer'

const CategorySection = () => {
    const categories = [
        { img: laptop, label: "Laptop PC" },
        { img: mobile, label: "Mobile" },
        { img: electronic, label: "Electronics" },
        { img: gadget, label: "Gadget Accessories" },
        { img: homeApplication, label: "Home Appliance" },
        { img: videoGames, label: "Video Game Consoles" },
        { img: vehicles, label: "Vehicles" },
        { img: fashion, label: "Fashion" },
        { img: kids, label: "For Kids" },
        { img: sports, label: "Hobbies Sports" },
        { img: healthAndBeauty, label: "Health & Beauty" },
    ];

    return (
        <SHContainer>
            <div className='py-20'>
                <div>
                    <div className='flex justify-center '>
                        <h1 className='bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] px-2 py-1 rounded text-[14px]'>Buy and Sell Easily</h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="relative !border-[0.1px] group cursor-pointer pb-9 bg-white rounded shadow-sm transition-all duration-300"
                        >
                            <div className="relative overflow-hidden rounded">
                                <Image
                                    src={category.img}
                                    alt={category.label}
                                    layout="responsive"
                                    width={300}
                                    height={200}
                                    className="transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:bg-[#818b95]"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bottom-[55%] group-hover:translate-y-0 transition-all duration-500">
                                <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#FFB300] rounded-full'>
                                    <ArrowRight className="text-black text-4xl" />
                                </div>
                            </div>
                            <div className="flex py-5 items-center justify-center text-black font-semibold text-lg">
                                {category.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SHContainer>
    );
};

export default CategorySection;
