import Image from 'next/image';
import about from '../../../app/assets/about.jpg';
import SHContainer from '@/components/ui/core/SHContainer';
import { MoveRight } from 'lucide-react';

const AboutUs = () => {
    return (
        <SHContainer>
            <div className="flex flex-col md:flex-row items-center justify-better gap-5 py-12">
                <div className="md:w-1/2">
                    <Image src={about} alt="About Us" className="rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0 text-[#374b5c]">
                    <button className="bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] px-4 py-1 rounded-md text-sm">About Us</button>
                    <h2 className="text-3xl font-bold mt-4">Second hand marketplace in Bangladesh</h2>
                    <p className="mt-4 text-lg">
                        Second BD is a Bangladeshi second-hand marketplace where sellers can sell their old products in an easy way and buyers have more options.
                    </p>
                    <p className="mt-3 text-lg">
                        Our platform focuses on second-hand goods. Our goal is to give second-hand products a second life rather than being disposed of and let second-hand product buyers have better options.
                    </p>
                    <p className="mt-3 text-lg">
                        Our goal is to empower people to create value for their old products and sell them easily rather than opting for a landfill.
                    </p>
                    <p className="mt-3 text-lg">
                        Our vision is to reduce E-Waste and generate a healthy, sustainable marketplace.
                    </p>
                    <button className="mt-6 bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] px-6 py-2 gap-5 rounded-lg flex items-center hover:from-[#3a5eb4] hover:to-[#537cd9]">
                        <span>Explore listings</span> <MoveRight />
                    </button>
                </div>
            </div>
        </SHContainer>
    );
};

export default AboutUs;
