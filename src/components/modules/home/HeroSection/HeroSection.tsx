"use client"

import { Lightbulb, List, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import styles from "./HeroSection.module.css";
import { categories } from "@/contants";

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
            <div className="absolute inset-0 bg-[#374B5C] bg-opacity-50 backdrop-blur-[5px]"></div>

            <div className="relative z-10">
                <h1 className="text-white text-5xl md:text-6xl font-bold">
                    Second Hand <br /> <span className="text-yellow-400">Bangladesh</span>.
                </h1>

                <div className="mt-6 bg-[#f4f4f6] p-3 md:p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-4 w-[100%] mx-auto md:w-full">
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

                    <div className="relative w-full !ml-[-1px]">
                        <div
                            className="flex md:w-[350px] justify-between items-center border bg-[#fdfdfe] gap-2 px-3 py-3 rounded-lg cursor-pointer "
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className="flex items-center gap-5">
                                <div className="bg-[#D5E3EE] p-1 rounded">
                                    <List />
                                </div>
                                <span className="">{selectedCategory}</span>
                            </div>
                            <ChevronDown className="" />
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
                        <button className="text-white bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] flex items-center justify-between gap-10 px-8 md:px-4 py-4 rounded-sm shadow-md ">
                            <span className="block md:hidden">Search</span> <Search size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
