"use client";

import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/contants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const FilterSidebar = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500000);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleSearchQuery = (query: string, value: string | number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(query, value.toString());
        router.push(`${pathname}?${params.toString()}`, {
            scroll: false,
        });
    };

    const availability = ["Available", "Sold"];
    const conditionType = ["New", "Old"];

    return (
        <Card className="p-4 rounded-2xl shadow-md w-72">
            <CardContent>
                <h2 className="text-lg font-semibold mb-4">Filter By Price</h2>

                {/* Min Price Slider */}
                <h3 className="text-sm font-semibold mb-2">Min Price</h3>
                <Slider
                    min={0}
                    max={500000}
                    step={1}
                    value={[minPrice]}
                    onValueChange={(value) => {
                        setMinPrice(value[0]);
                        handleSearchQuery("minPrice", value[0]);
                    }}
                    className="w-full mb-4"
                />
                <p className="mt-2">${minPrice}</p>

                {/* Max Price Slider */}
                <h3 className="text-sm font-semibold mb-2 mt-4">Max Price</h3>
                <Slider
                    min={0}
                    max={500000}
                    step={1}
                    value={[maxPrice]}
                    onValueChange={(value) => {
                        setMaxPrice(value[0]);
                        handleSearchQuery("maxPrice", value[0]);
                    }}
                    className="w-full"
                />
                <p className="mt-2">${maxPrice}</p>

                <h2 className="text-lg font-semibold mt-6">Product Category</h2>
                <div className="mb-6">
                    <RadioGroup className="space-y-2">
                        {categories?.map((category) => (
                            <div key={category.name} className="flex items-center space-x-2">
                                <RadioGroupItem
                                    onClick={() => handleSearchQuery("category", category.value)}
                                    value={category.name}
                                    id={category.value}
                                />
                                <Label
                                    htmlFor={category.name}
                                    className="text-gray-500 font-light"
                                >
                                    {category.name}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>

                <h2 className="text-lg font-semibold mt-6">Condition</h2>
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
