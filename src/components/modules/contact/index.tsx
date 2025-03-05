"use client"

import SHContainer from "@/components/ui/core/SHContainer";
import { Facebook, Instagram, MoveRight, Twitter } from "lucide-react";
import React, { useState } from "react";

const ContactForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const redirectFunction = (item: string) => {
        const facebook = "https://www.facebook.com/moniruzzaman255/";
        const instagram = "https://www.instagram.com/monir_2525/?hl=en";
        const twitter = "https://x.com/Monir8699";
        let link = '';
        switch (item.toLowerCase()) {
            case 'facebook':
                link = facebook;
                break;
            case 'instagram':
                link = instagram;
                break;
            case 'twitter':
                link = twitter;
                break;
            default:
                console.log('Unknown platform');
                return;
        }
        window.open(link, '_blank');
    }
    return (
        <div className="bg-gray-200 min-h-screen p-6 md:p-10 flex items-center justify-center">
            <SHContainer className="flex flex-col md:flex-row w-full max-w-5xl">
                <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-yellow-500">Contact</span> us
                    </h2>
                    <h2 className="mt-4 inline-block px-4 py-2 bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] rounded-lg text-sm">
                        How Can We Help?
                    </h2>
                    <h3 className="mt-6 text-xl md:text-2xl font-semibold">We Are Ready to Help</h3>
                    <p className="mt-2 text-[#374b5c] text-sm md:text-base">
                        Check our Q&A guidelines to see if your question has already been
                        answered. If not, please contact us and we will get back to you as
                        soon as possible.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start space-x-4">
                        <button onClick={() => redirectFunction('facebook')} className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                            <Facebook />
                        </button>
                        <button onClick={() => redirectFunction('instagram')} className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                            <Instagram />
                        </button>
                        <button onClick={() => redirectFunction('twitter')} className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                            <Twitter />
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-[#f2f4f8] p-6 md:p-10 rounded-lg shadow-lg">
                    <h3 className="text-center text-lg md:text-xl font-semibold text-[#374b5c]">
                        Did not find the answer? <br className="hidden md:block" />
                        Ask us questions directly
                    </h3>
                    <form className="mt-6 space-y-4">
                        <input
                            type="text"
                            required
                            placeholder="Name *"
                            className="w-full p-3 border border-[#e1e7f1] rounded-lg text-sm md:text-base"
                        />
                        <input
                            type="email"
                            required
                            placeholder="Email *"
                            className="w-full p-3 border border-[#e1e7f1] rounded-lg text-sm md:text-base"
                        />
                        <input
                            type="tel"
                            required
                            placeholder="Phone"
                            className="w-full p-3 border border-[#e1e7f1] rounded-lg text-sm md:text-base"
                        />
                        <textarea
                            placeholder="Message *"
                            required
                            className="w-full resize-none p-3 border border-[#e1e7f1] rounded-lg h-24 md:h-32 text-sm md:text-base"
                        ></textarea>
                        <div className="flex items-center text-xs md:text-sm">
                            <input
                                type="checkbox"
                                required
                                id="privacy"
                                className="mr-2"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <label htmlFor="privacy" className="text-gray-600">
                                I accept the <span className="text-[#537cd9]">privacy</span> <span className="text-[#6d90df]">policy</span>
                            </label>
                        </div>
                        <div className="w-full flex justify-center">
                            <button
                                type="submit"
                                className="w-full md:w-1/3 flex justify-center items-center gap-3 bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] py-3 rounded-lg text-lg"
                            >
                                <span>Send</span> <MoveRight />
                            </button>
                        </div>
                    </form>
                </div>
            </SHContainer>
        </div>
    );
};

export default ContactForm;
