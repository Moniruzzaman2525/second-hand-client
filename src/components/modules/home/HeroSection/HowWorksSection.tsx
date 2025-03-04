import Image from 'next/image';
import postAdsImg from '../../../../app/assets/postAdds.png';
import shareImg from '../../../../app/assets/shareAds.png';
import buyerCnImg from '../../../../app/assets/buyerCn.png';
import SHContainer from '@/components/ui/core/SHContainer';
import { ChevronRightCircle } from 'lucide-react';

const HowWorksSection = () => {
    return (
        <SHContainer>
            <div className="flex justify-between items-center">

                <div className="flex justify-between w-full space-x-10">
                    <div className="flex flex-col justify-center w-full items-center">
                        <Image src={postAdsImg} alt="Post ad" className="w-16 h-16" />
                    </div>
                    <div className="flex flex-col justify-center w-full items-center">
                        <Image src={shareImg} alt="Share ad" className="w-16 h-16" />
                    </div>
                    <div className="flex flex-col justify-center w-full items-center">
                        <Image src={buyerCnImg} alt="Buyer contact" className="w-16 h-16" />
                    </div>
                </div>
            </div>

            <div className="flex items-center mt-4">
                <div className="w-8 h-8 ml-[179px] rounded-full border-2 border-[#537cd9]"></div>
                <div className="w-[179px] h-0.5  border-t-2 border-dashed border-[#537cd9]"></div>
                <ChevronRightCircle className='text-[#537cd9]' />
                <div className="w-[179px] h-0.5  border-t-2 border-dashed border-[#537cd9]"></div>
                <div className="w-8 h-8 rounded-full border-2 border-[#537cd9]"></div>
                <div className="w-[179px] h-0.5  border-t-2 border-dashed border-[#537cd9]"></div>
                <ChevronRightCircle className='text-[#537cd9]' />
                <div className="w-[179px] h-0.5  border-t-2 border-dashed border-[#537cd9]"></div>
                <div className="w-8 h-8 rounded-full border-2 border-[#537cd9]"></div>
            </div>

            <div className="flex justify-between items-center mt-4 space-x-10 text-center">
                <div className="flex flex-col items-center">
                    <h4 className="text-lg font-semibold">Click ‘Post ad’ add description and photo</h4>
                    <p className="text-gray-500 text-sm mt-2">Write product details and take good pics of the product you are selling</p>
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="text-lg font-semibold">Share your ad in the marketplace</h4>
                    <p className="text-gray-500 text-sm mt-2">Sell your product fast and easily with the right detail, price, picture and location</p>
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="text-lg font-semibold">Buyers contact you directly</h4>
                    <p className="text-gray-500 text-sm mt-2">You can go to the buyer or he/she can come to you directly.</p>
                </div>
            </div>
        </SHContainer>
    );
};

export default HowWorksSection;
