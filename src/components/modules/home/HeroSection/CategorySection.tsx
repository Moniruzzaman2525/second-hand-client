import Image from 'next/image'; // Importing next/image
import { ArrowRight } from 'lucide-react'; // Importing the arrow icon from lucide-react
import laptop from '../../../../app/assets/laptop-pc.png'
import mobile from '../../../../app/assets/mobile.png'
import electronic from '../../../../app/assets/electronics.jpg'
import gadget from '../../../../app/assets/gadget.png'
import homeApplication from '../../../../app/assets/home-application.png'
import videoGames from '../../../../app/assets/game.png'
import vihicles from '../../../../app/assets/vehicles.png'
import fashion from '../../../../app/assets/fashion.png'
import kids from '../../../../app/assets/kids.png'
import sports from '../../../../app/assets/sports.png'
import healtsAndBeauty from '../../../../app/assets/health-beauty.png'
import SHContainer from '@/components/ui/core/SHContainer'

const CategorySection = () => {
    const categories = [
        { img: laptop, label: "Laptop PC" },
        { img: mobile, label: "Mobile" },
        { img: electronic, label: "Electronics" },
        { img: gadget, label: "Gadget Accessories" },
        { img: homeApplication, label: "Home Appliance" },
        { img: videoGames, label: "Video Game Consoles" },
        { img: vihicles, label: "Vehicles" },
        { img: fashion, label: "Fashion" },
        { img: kids, label: "For Kids" },
        { img: sports, label: "Hobbies Sports" },
        { img: healtsAndBeauty, label: "Health & Beauty" },
    ];

    return (
        <SHContainer>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="relative group p-4 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl"
                    >
                        <Image
                            src={category.img}
                            alt={category.label}
                            layout="responsive"
                            width={300}
                            height={200} 
                            className="rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <ArrowRight className="text-white text-4xl" />
                        </div>
                        <div className="flex py-5 items-center justify-center text-black font-semibold text-lg">
                            {category.label}
                        </div>
                    </div>
                ))}
            </div>
        </SHContainer>
    );
};

export default CategorySection;
