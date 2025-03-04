import React from "react";
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import SHContainer from "../ui/core/SHContainer";

const Footer = () => {
    return (
        <div className="">
            <div className="bg-[#374b5c] text-white">
                <SHContainer>
                    <div className="flex flex-col sm:flex-row justify-between py-8 items-start sm:items-center">
                        <div className="flex flex-col w-full items-center md:items-start mb-6 sm:mb-0">
                            <div className="text-2xl font-bold">Second BD</div>
                            <div className="mt-2 flex items-center">
                                <Phone className="mr-2" />
                                <span>+880 01925-716295</span>
                            </div>
                            <div className="mt-2 flex items-center">
                                <MapPin className="mr-2" />
                                <span>Sherpur - 2100, Nymensingh - 2200, Bangladesh</span>
                            </div>
                            <div className="mt-2 flex items-center">
                                <Mail className="mr-2" />
                                <span>web.moniruzzaman1@gmail.com</span>
                            </div>
                            <div className="mt-2 flex">
                                <a href="https://www.facebook.com/moniruzzaman255/" className="mr-4">
                                    <Facebook />
                                </a>
                                <a href="https://www.instagram.com/monir_2525/?hl=en" className="mr-4">
                                    <Instagram />
                                </a>
                                <a href="https://x.com/Monir8699">
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center w-full">
                            <div className="text-center sm:text-right mb-6 sm:mb-0">
                                <div className="text-lg font-semibold">Useful Links</div>
                                <ul className="mt-4 space-y-2">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Register</a></li>
                                </ul>
                            </div>
                       </div>

                        <div className="w-full md:w-[50%] justify-end">
                            <div className="mt-6 sm:mt-0 text-center sm:text-left">
                                <a href="https://play.google.com" className="inline-block">
                                    <span className="ml-2">Get it on Google Play</span>
                                </a>
                            </div>
                      </div>
                    </div>
                </SHContainer>
            </div>

            <div className="bg-[#314352] text-center py-5 text-sm">
                <span className="text-white">Copyright © 2025 Second BD All Rights Reserved</span>
            </div>
        </div>
    );
};

export default Footer;
