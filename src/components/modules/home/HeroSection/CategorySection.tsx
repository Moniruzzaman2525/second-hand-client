"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import laptop from '../../../../app/assets/laptop-pc.png';
import mobile from '../../../../app/assets/mobile.png';
import electronic from '../../../../app/assets/electronics.jpg';
import gadget from '../../../../app/assets/gadget.png';
import homeApplication from '../../../../app/assets/home-application.png';
import videoGames from '../../../../app/assets/game.png';
import vehicles from '../../../../app/assets/vehicles.png';
import fashion from '../../../../app/assets/fashion.png';
import kids from '../../../../app/assets/kids.png';
import sports from '../../../../app/assets/sports.png';
import healthAndBeauty from '../../../../app/assets/health-beauty.png';
import SHContainer from '@/components/ui/core/SHContainer';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const CategorySection = () => {
    const categories = [
        { img: laptop, label: "Laptop PC", value: "laptop pc" },
        { img: mobile, label: "Mobile", value: "mobile" },
        { img: electronic, label: "Electronics", value: "electronics" },
        { img: gadget, label: "Gadget Accessories", value: "gadget accessories" },
        { img: homeApplication, label: "Home Appliance", value: "home appliance" },
        { img: videoGames, label: "Video Game Consoles", value: "video game consoles" },
        { img: vehicles, label: "Vehicles", value: "vehicles" },
        { img: fashion, label: "Fashion", value: "fashion" },
        { img: kids, label: "For Kids", value: "for kids" },
        { img: sports, label: "Hobbies Sports", value: "hobbies sports" },
        { img: healthAndBeauty, label: "Health & Beauty", value: "health and beauty" },
    ];

    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSearch = (selectedCategory: string) => {
        let url = "/products";
        const queryParams: string[] = [];

        if (selectedCategory !== "Category") queryParams.push(`category=${selectedCategory}`);

        if (queryParams.length > 0) {
            url += `?${queryParams.join("&")}`;
        }

        router.push(url);
    };
    return (
        <SHContainer>
            <div className="py-20">
                <div>
                    <div className="flex justify-center">
                        <h1 className="bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] px-2 py-1 rounded text-[14px]">
                            Buy and Sell Easily
                        </h1>
                    </div>
                    <div className="flex justify-center pt-5 pb-14 font-semibold">
                        <h1 className="text-[#374b5c] text-[24px] md:text-[36px] font-bold">Everything Second Hand</h1>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {categories.slice(0, isMobile ? 10 : 11).map((category, index) => (
                        <div
                            key={index}
                            onClick={() => handleSearch(category.value)}
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
                                <div className="w-[60px] h-[60px] flex items-center justify-center bg-[#FFB300] rounded-full">
                                    <ArrowRight className="text-[#374b5c] text-4xl" />
                                </div>
                            </div>
                            <div className="flex py-5 text-[14px] items-center justify-center text-[#374b5c] font-semibold md:text-[16px]">
                                {category.label}
                            </div>

                        </div>
                    ))}
                    <div
                        className="!border-[0.1px] hidden bg-[#f2f4f8] md:flex justify-center pb-10 items-center group cursor-pointer pb-9 rounded shadow-sm transition-all duration-300"
                    >
                        <div className='mb-[-50px]'>
                            <h1 className='text-[24px] text-[#374b5c] font-bold mb-5'>Explore All Ads</h1>
                            <div className='w-full flex justify-center'>
                                <Button onClick={() => router.push('/products')} className='bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] transition-all'>View All</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='block md:hidden mt-[30px] h-[250px]'>
                    <div
                        className="!border-[0.1px] h-full bg-[#f2f4f8] flex justify-center pb-10 items-center group cursor-pointer pb-9 rounded shadow-sm transition-all duration-300"
                    >
                        <div className='mb-[-50px]'>
                            <h1 className='text-[24px] text-[#374b5c] font-bold mb-5'>Explore All Ads</h1>
                            <div className='w-full flex justify-center'>
                                <Button onClick={() => router.push('/products')} className='bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] transition-all'>View All</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SHContainer>
    );
};

export default CategorySection;
