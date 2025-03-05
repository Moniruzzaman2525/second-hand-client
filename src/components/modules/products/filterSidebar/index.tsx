"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { categories, conditionOptions } from "@/constant";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const FilterSidebar = () => {
    const [minPrice, setMinPrice] = useState<number | string>("");
    const [maxPrice, setMaxPrice] = useState<number | string>("");
    const [selectCategory, setSelectCategory] = useState("");
    const [location, setLocation] = useState("");
    const [selectCondition, setSelectCondition] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSearchQuery = (query: string, value: string | number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(query, value.toString());
        } else {
            params.delete(query);
        }
        router.push(`${window.location.pathname}?${params.toString()}`, {
            scroll: false,
        });
    };

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        setMinPrice(params.get("minPrice") || "");
        setMaxPrice(params.get("maxPrice") || "");
        setSelectCategory(params.get("category") || "");
        setLocation(params.get("location") || "");
        setSelectCondition(params.get("condition") || "");
    }, [searchParams]);

    const hasActiveFilters =
        minPrice || maxPrice || selectCategory || location || selectCondition;

    const handleClearFilters = () => {
        setMinPrice("");
        setMaxPrice("");
        setSelectCategory("");
        setLocation("");
        setSelectCondition("");

        const params = new URLSearchParams();
        router.push(`${window.location.pathname}?${params.toString()}`, {
            scroll: false,
        });
    };
    return (
        <Card className="p-4 rounded-2xl shadow-md w-72">
            <CardContent>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Filter</h2>
                    {hasActiveFilters && (
                        <Button onClick={handleClearFilters} size="sm" className="ml-5">
                            Clear Filters
                        </Button>
                    )}
                </div>

                <h3 className="text-sm font-semibold mb-2">Min Price</h3>
                <input
                    type="number"
                    value={minPrice}
                    placeholder="Min Price"
                    onChange={(e) => {
                        const value = e.target.value;
                        setMinPrice(value);
                        handleSearchQuery("minPrice", value);
                    }}
                    className="w-full p-2 border rounded-md mb-4"
                    min="0"
                />

                <h3 className="text-sm font-semibold mb-2 mt-4">Max Price</h3>
                <input
                    type="number"
                    value={maxPrice}
                    placeholder="Max Price"
                    onChange={(e) => {
                        const value = e.target.value;
                        setMaxPrice(value);
                        handleSearchQuery("maxPrice", value);
                    }}
                    className="w-full p-2 border rounded-md"
                    min="0"
                />

                <h2 className="text-lg font-semibold mt-6">Product Category</h2>
                <div className="mb-6">
                    <RadioGroup
                        className="space-y-2"
                        value={selectCategory}
                        onValueChange={(value) => {
                            setSelectCategory(value);
                            handleSearchQuery("category", value);
                        }}
                    >
                        {categories?.map((category) => (
                            <div key={category.name} className="flex items-center space-x-2">
                                <RadioGroupItem value={category.value} id={category.value} />
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
                
                <h3 className="text-sm font-semibold mb-2">Location</h3>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => {
                        const value = e.target.value;
                        setLocation(value);
                        handleSearchQuery("location", value);
                    }}
                    className="w-full p-2 border rounded-md mb-4"
                    placeholder="Enter location"
                />

                <h2 className="text-lg font-semibold mt-6">Condition</h2>
                <div className="mb-6">
                    <RadioGroup
                        className="space-y-2"
                        value={selectCondition}
                        onValueChange={(value) => {
                            setSelectCondition(value);
                            handleSearchQuery("condition", value);
                        }}
                    >
                        {conditionOptions?.map((status) => (
                            <div key={status.label} className="flex items-center space-x-2">
                                <RadioGroupItem value={status.value} id={status.value} />
                                <Label htmlFor={status.value} className="text-gray-500 font-light">
                                    {status.label}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
            </CardContent>
        </Card>
    );
};

export default FilterSidebar;
