"use client";

import { categories } from "@/constant";
import { ChevronDown, Lightbulb, List, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeroSectionFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Category");
    const [searchTerm, setSearchTerm] = useState("");
    const [categorySearch, setCategorySearch] = useState("");
    const router = useRouter();

    const filteredCategories = categories.filter((category) =>
        category.name.toLowerCase().includes(categorySearch.toLowerCase())
    );

    const handleSearch = () => {
        let url = "/products";
        const queryParams: string[] = [];

        if (searchTerm) queryParams.push(`search=${searchTerm}`);
        if (selectedCategory !== "Category") queryParams.push(`category=${selectedCategory}`);

        if (queryParams.length > 0) {
            url += `?${queryParams.join("&")}`;
        }

        router.push(url);
    };

    return (
        <div>
            <div className="mt-6 bg-[#f4f4f6] p-3 md:p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-4 w-[100%] mx-auto md:w-full">

                <div className="flex items-center border bg-[#fdfdfe] px-3 py-2 rounded-lg flex-1">
                    <div className="bg-[#D5E3EE] p-1 rounded">
                        <Lightbulb />
                    </div>
                    <input
                        type="text"
                        placeholder="I'm looking for..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 px-4 py-2 outline-none bg-transparent placeholder-gray-700"
                    />
                </div>

                <div className="relative w-full !ml-[-1px]">
                    <div
                        className="flex md:w-[350px] justify-between items-center border bg-[#fdfdfe] gap-2 px-3 py-3 rounded-lg cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="flex items-center gap-5">
                            <div className="bg-[#D5E3EE] p-1 rounded">
                                <List />
                            </div>
                            <span>{selectedCategory}</span>
                        </div>
                        <ChevronDown className="" />
                    </div>

                    {isOpen && (
                        <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden z-20">
                            <div className="p-5">
                                <input
                                    type="text"
                                    placeholder="Search Category..."
                                    value={categorySearch}
                                    onChange={(e) => setCategorySearch(e.target.value)}
                                    className="w-full p-2 border-b outline-none"
                                />
                            </div>
                            <ul className="max-h-60 overflow-y-auto">
                                {filteredCategories.length > 0 ? (
                                    filteredCategories.map((category, index) => (
                                        <li
                                            key={index}
                                            className="flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => {
                                                setSelectedCategory(category.value);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {category.name}
                                        </li>
                                    ))
                                ) : (
                                    <li className="px-4 py-2 text-gray-500">No category found</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={handleSearch}
                        className="text-white bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] flex items-center justify-between gap-10 px-8 md:px-4 py-4 rounded-sm shadow-md"
                    >
                        <span className="block md:hidden">Search</span> <Search size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionFilter;
