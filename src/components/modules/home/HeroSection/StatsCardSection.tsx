import React from "react";
import { ArrowRight } from "lucide-react";
import SHContainer from "@/components/ui/core/SHContainer";

const SellersLoveUs = () => {
    return (
        <div className="w-full h-full md:h-[500px] md:bg-[#677785] my-20 flex items-end justify-center">
            <SHContainer>
                <div className="w-full bg-[#f7f7f7] py-14 rounded-lg shadow-sm md:shadow-xl flex flex-col items-center justify-end text-center">
                    <button className="bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] px-6 py-2 rounded-lg text-[14px] font-semibold mb-6 sm:text-[16px]">
                        What our sellers say
                    </button>
                    <h2 className="text-[48px] font-semibold text-[#374b5c] mb-4 sm:text-[40px] md:text-[36px]">
                        Why <span className="font-bold">they love us</span>
                    </h2>
                    <p className="text-[#73818c] text-[16px] mb-6 sm:text-[14px]">
                        #1 Second Hand Platform in Bangladesh
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between px-10 sm:px-48 w-full gap-10 mb-6">
                        <div className="flex items-center justify-start md:justify-center">
                            <p className="text-[32px] font-bold text-[#374b5c] sm:text-[28px]">
                                1m <span className="text-yellow-500">|</span>
                            </p>
                            <p className="text-[#537cd9] text-[16px] sm:text-[14px]">Ads added</p>
                        </div>

                        <div className="flex items-center justify-start md:justify-center">
                            <p className="text-[32px] font-bold text-[#374b5c] sm:text-[28px]">
                                1K <span className="text-yellow-500">|</span>
                            </p>
                            <p className="text-[#537cd9] text-[16px] sm:text-[14px]">Daily Searches</p>
                        </div>

                        <div className="flex items-center justify-start md:justify-center">
                            <p className="text-[32px] font-bold text-[#374b5c] sm:text-[28px]">
                                1K <span className="text-yellow-500">|</span>
                            </p>
                            <p className="text-[#537cd9] text-[16px] sm:text-[14px]">Registered Users</p>
                        </div>
                    </div>
                    <button className="bg-yellow-500 text-[#374b5c] px-8 py-3 mt-5 rounded-lg font-semibold flex items-center mx-auto hover:bg-yellow-600 transition sm:px-6 sm:py-2 sm:text-[14px]">
                        Explore listings <ArrowRight className="ml-2" size={20} />
                    </button>
                </div>
            </SHContainer>
        </div>
    );
};

export default SellersLoveUs;
