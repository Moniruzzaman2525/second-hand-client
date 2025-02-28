"use client"

import { Lightbulb, List, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import styles from "./HeroSection.module.css";

const categories = [
    { name: "Electronics", count: 163 },
    { name: "Fashion", count: 30 },
    { name: "For Kids", count: 8 },
    { name: "Gadget Accessories", count: 12 },
    { name: "Health & Beauty", count: 9 },
    { name: "Hobbies Sports", count: 7 },
    { name: "Home Appliance", count: 24 },
    { name: "Laptop PC", count: 46 },
    { name: "Mobile", count: 68 },
    { name: "Others", count: 55 },
];

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Category");
    const [search, setSearch] = useState("");

    const filteredCategories = categories.filter((category) =>
        category.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            className={`${styles.banner} relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center`}
        >
            <div className="absolute inset-0 bg-[#374B5C] bg-opacity-50 backdrop-blur-[3px]"></div>

            <div className="relative z-10">
                <h1 className="text-white text-5xl md:text-6xl font-bold">
                    Second Hand <br /> <span className="text-yellow-400">Bangladesh</span>.
                </h1>

                <div className="mt-6 bg-[#f4f4f6] p-3 md:p-4 rounded-lg shadow-lg md:flex items-center space-x-2 w-full max-w-2xl">
                    <div className="flex items-center border bg-[#fdfdfe]  px-3 py-2 rounded-lg flex-1">
                        <div className="bg-[#D5E3EE] p-1 rounded">
                            <Lightbulb />
                       </div>
                        <input
                            type="text"
                            placeholder="I'm looking for..."
                            className="flex-1 px-4 py-2 outline-none bg-transparent placeholder-gray-700"
                        />
                    </div>

                    <div className="relative">
                        <div
                            className="flex items-center border bg-[#fdfdfe]  px-3 py-4 rounded-lg cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className="bg-[#D5E3EE] p-1 rounded">
                                <List />
                          </div>
                            <span className="px-14">{selectedCategory}</span>
                            <ChevronDown />
                        </div>

                        {isOpen && (
                            <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden z-20">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full p-2 border-b outline-none"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <ul className="max-h-60 overflow-y-auto">
                                    {filteredCategories.map((category, index) => (
                                        <li
                                            key={index}
                                            className="flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setSelectedCategory(category.name);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {category.name}
                                            <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
                                                {category.count}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-[#537cd9]  text-white hover:bg-[#3a5eb4] flex items-center justify-between gap-2 px-4 py-4 rounded-sm shadow-md ">
                            <span className="block md:hidden">Search</span> <Search size={20} />
                        </button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
