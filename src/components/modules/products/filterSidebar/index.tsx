"use client";

import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const FilterSidebar = () => {
    const [price, setPrice] = useState(50);

    const productTypes = [
        "Electronics",
        "Mobile",
        "Vehicles",
        "Others",
        "Laptop PC",
        "Fashion",
        "Home Appliance",
        "Gadget Accessories",
        "Health & Beauty",
        "Services",
        "For Kids",
        "Hobbies Sports",
        "Video Game Consoles",
    ];

    const availability = ["Available", "Sold"];
    const conditionType = ["New", "Old"];

    return (
        <Card className="p-4 rounded-2xl shadow-md w-72">
            <CardContent>
                <h2 className="text-lg font-semibold mb-4">Filter By Price</h2>
                <div className="flex gap-2 mb-2">
                    <input
                        type="text"
                        placeholder="Min"
                        className="border rounded px-2 py-1 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Max"
                        className="border rounded px-2 py-1 w-full"
                    />
                </div>
                <Slider
                    defaultValue={[price]}
                    max={100}
                    onValueChange={(val) => setPrice(val[0])}
                />
                <p className="mt-2">${price}</p>

                <h2 className="text-lg font-semibold mt-6">Product Category</h2>
                <ul className="space-y-2 mt-2">
                    {productTypes.map((type, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <Checkbox />
                            <span>{type}</span>
                        </li>
                    ))}
                </ul>

                <h2 className="text-lg font-semibold mt-6">condition</h2>
                <ul className="space-y-2 mt-2">
                    {conditionType.map((status, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <Checkbox />
                            <span>{status}</span>
                        </li>
                    ))}
                </ul>

                <h2 className="text-lg font-semibold mt-6">Availability</h2>
                <ul className="space-y-2 mt-2">
                    {availability.map((status, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <Checkbox />
                            <span>{status}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default FilterSidebar;
