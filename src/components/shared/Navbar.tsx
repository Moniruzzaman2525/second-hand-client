"use client"

import { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-yellow-400 border-b w-full sticky top-0 z-10">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-black flex items-center">
                        😊 Second BD
                    </span>
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="text-black font-medium hover:text-gray-700">Home</a>
                    <a href="#" className="text-black font-medium hover:text-gray-700">About</a>
                    <a href="#" className="text-black font-medium hover:text-gray-700">Contact</a>
                    <a href="#" className="text-black font-medium hover:text-gray-700">FAQ</a>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <UserCircle className="text-black text-2xl" />
                    <a href="#" className="text-black font-medium hover:text-gray-700">Log In</a>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
                        Post Your Ad
                    </button>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black text-2xl">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full py-4 px-6 space-y-4">
                    <a href="#" className="block text-black font-medium hover:text-gray-700">Home</a>
                    <a href="#" className="block text-black font-medium hover:text-gray-700">About</a>
                    <a href="#" className="block text-black font-medium hover:text-gray-700">Contact</a>
                    <a href="#" className="block text-black font-medium hover:text-gray-700">FAQ</a>
                    <div className="border-t border-gray-200 pt-4">
                        <p className="text-yellow-500 font-semibold">Call Support</p>
                        <p className="text-gray-700">+880 1777-037916</p>
                        <p className="text-yellow-500 font-semibold mt-2">Email Address</p>
                        <p className="text-gray-700">hi@secondbd.com</p>
                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="text-black text-xl"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-black text-xl"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-black text-xl"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
