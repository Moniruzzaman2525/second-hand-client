"use client";

import { useState } from "react";
import { Menu, X, User, PlusIcon } from "lucide-react";
import logo from "../../app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("");

    return (
        <nav className="bg-yellow-400 border-b w-full sticky top-0 z-10">
            <div className="container mx-auto px-6 md:px-20 py-3 flex justify-between items-center">

                <div className="md:hidden border rounded-full p-2 flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black text-2xl">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                <div className="flex items-center">
                    <span className="text-2xl font-bold text-black flex items-center">
                        <Image src={logo} alt="Logo" width={200} height={200} className="mr-2" />
                    </span>
                </div>

                <div className="hidden md:flex space-x-10">
                    {['Home', 'About', 'Contact', 'FAQ'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className={`relative text-[#374B5C] font-medium text-lg transition-colors ${active === item ? 'text-red-600' : ''}`}
                            onMouseEnter={() => setActive(item)}
                            onMouseLeave={() => setActive("")}
                        >
                            <span className={`absolute -left-5 top-1/2 transform -translate-y-1/2 text-blue-500 transition-all duration-300 ease-in-out ${active === item ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-2'}`}>•</span>
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <Link className="flex gap-4" href='/login'>
                        <span className="border rounded-full p-2">
                            <User className="text-black " />
                        </span>
                        <button className="hidden md:block text-[#374B5C] font-medium text-lg hover:text-[#536C88]">Log In</button>
                    </Link>
                    <button className="hidden md:flex items-center gap-2 bg-[#537cd9] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#3a5eb4]">
                        Post Your Ad <PlusIcon />
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full py-4 px-6 space-y-4">
                    {['Home', 'About', 'Contact', 'FAQ'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className={`block text-[#374B5C] font-medium text-lg transition-colors ${active === item ? 'text-red-600' : ''}`}
                            onMouseEnter={() => setActive(item)}
                            onMouseLeave={() => setActive("Home")}
                        >
                            <span className={`mr-2 text-blue-500 transition-all duration-300 ease-in-out ${active === item ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-2'}`}>•</span>
                            {item}
                        </a>
                    ))}
                    <div className="border-t border-gray-200 pt-4">
                        <p className="text-yellow-500 font-semibold">Call Support</p>
                        <p className="text-gray-700">+880 1925-716395</p>
                        <p className="text-yellow-500 font-semibold mt-2">Email Address</p>
                        <p className="text-gray-700">web.moniruzzaman1@gmail.com</p>
                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="text-xl text-[#374B5C] hover:text-[#536C88]"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-xl text-[#374B5C] hover:text-[#536C88]"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-xl text-[#374B5C] hover:text-[#536C88]"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
