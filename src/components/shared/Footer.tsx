"use client"
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import SHContainer from "../ui/core/SHContainer";
import { useState } from "react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import googleImg from '../../app/assets/google.png'
import logo from '../../app/assets/footerLogo.png'
const navbarItem = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Products',
        href: '/products'
    },
    {
        name: 'About',
        href: '/about-us'
    },
    {
        name: 'Contact',
        href: '/contact-us'
    },
    {
        name: 'FAQ',
        href: '/faq'
    },
    {
        name: 'Register',
        href: '/login'
    },
]
const Footer = () => {
    const [active, setActive] = useState("");
    const { user } = useUser();
    const redirectFunction = (item: string) => {
        const google = 'https://play.google.com/store/games';
        const facebook = "https://www.facebook.com/moniruzzaman255/";
        const instagram = "https://www.instagram.com/monir_2525/?hl=en";
        const twitter = "https://x.com/Monir8699";
        let link = '';
        switch (item.toLowerCase()) {
            case 'google':
                link = google;
                break;
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
        <div className="">
            <div className="bg-[#374b5c] text-white">
                <SHContainer>
                    <div className="flex flex-col sm:flex-row justify-between py-8 items-start sm:items-center">
                        <div className="flex flex-col w-full items-center md:items-start mb-6 sm:mb-0">
                            <div className="text-2xl font-bold">
                                <Link href='/' className="text-2xl font-bold text-black flex items-center">
                                    <Image
                                        src={logo}
                                        alt="Logo"
                                        width={200}
                                        height={200}
                                        className="mr-2 sm:w-auto sm:h-auto max-w-[150px] md:max-w-[200px]"
                                    />
                                </Link>
                            </div>
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
                                <button onClick={() => redirectFunction('facebook')}  className="mr-4">
                                    <Facebook />
                                </button>
                                <button onClick={() => redirectFunction('instagram')}  className="mr-4">
                                    <Instagram />
                                </button>
                                <button onClick={() => redirectFunction('Twitter')} >
                                    <Twitter />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center w-full">
                            <div className="text-center sm:text-right mb-6 sm:mb-0">
                                <div className="text-lg font-semibold">Useful Links</div>
                                {navbarItem.map((item) => (
                                    <div key={item.name}>
                                        <Link
                                            href={item.href === '/login' ? user ? "/dashboard/listing" : '/login' : item.href}
                                            className={`relative text-white font-medium text-lg transition-colors ${active === item.name ? 'text-yellow-400' : ''}`}
                                            onMouseEnter={() => setActive(item.name)}
                                            onMouseLeave={() => setActive("")}
                                        >
                                            <span className={`absolute -left-5 top-1/2 transform -translate-y-1/2 text-yellow-400 transition-all duration-300 ease-in-out ${active === item.name ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-2'}`}>•</span>
                                            {item.name}
                                        </Link>
                                   </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-[50%] justify-end">
                            <div className="mt-6 sm:mt-0 text-center sm:text-left">
                                <span className="ml-2">Get it on Google Play</span>
                                <Image className="cursor-pointer" onClick={() => redirectFunction('google')} src={googleImg} alt="No Ads" width={300} height={300} />
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
