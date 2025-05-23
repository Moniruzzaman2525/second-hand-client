"use client"

import { Eye, Heart, RefreshCw, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductListingSkeleton() {
    const categories = [
        "Electronics",
        "Fashion",
        "For Kids",
        "Gadget Accessories",
        "Health & Beauty",
        "Home Appliance",
        "Laptop PC",
        "Mobile",
        "Video Game Consoles",
        "Others",
        "Vehicles",
        "Services",
        "Hobbies Sports",
    ]

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="mb-8 relative">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type="text" placeholder="I'm looking for..." className="pl-10 pr-4 py-6 h-12 bg-background" disabled />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-[280px] shrink-0">
                    <Card className="overflow-hidden">
                        <CardContent className="p-4">
                            <h2 className="text-xl font-medium mb-4">Filter</h2>

                            <div className="space-y-4 mb-6">
                                <div>
                                    <Label className="text-sm font-medium mb-2">Min Price</Label>
                                    <Input type="text" placeholder="Min Price" className="mt-1" disabled />
                                </div>

                                <div>
                                    <Label className="text-sm font-medium mb-2">Max Price</Label>
                                    <Input type="text" placeholder="Max Price" className="mt-1" disabled />
                                </div>
                            </div>

                            <Separator className="my-4" />

                            <div>
                                <h3 className="text-base font-medium mb-3">Product Category</h3>
                                <div className="space-y-2">
                                    <RadioGroup defaultValue="electronics">
                                        {categories.map((category) => (
                                            <div key={category} className="flex items-center space-x-2">
                                                <RadioGroupItem value={category.toLowerCase()} id={category.toLowerCase()} disabled />
                                                <Label
                                                    htmlFor={category.toLowerCase()}
                                                    className="text-sm text-muted-foreground cursor-not-allowed"
                                                >
                                                    {category}
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <ProductCardSkeleton key={index} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProductCardSkeleton({ index }: { index: number }) {
    const titleWidth = 65 + Math.floor(Math.random() * 20)
    const priceWidth = 30 + Math.floor(Math.random() * 15)

    return (
        <Card className="overflow-hidden h-full flex flex-col">
            <div className="relative">
                <Skeleton className="w-full aspect-[4/3]" />
                <div className="absolute top-2 right-2">
                    <Skeleton className="h-6 w-14 rounded-full" />
                </div>
            </div>
            <CardContent className="p-4 flex-1">
                <Skeleton className={`h-5 w-[${titleWidth}%] mb-2`} />
                <Skeleton className={`h-6 w-[${priceWidth}%] mb-3`} />
                <div className="flex gap-2 mt-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-20" />
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between border-t">
                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
                        <Eye size={16} className="text-muted-foreground" />
                    </Button>
                    <span className="text-xs text-muted-foreground">
                        {index % 3 === 0 ? "104" : index % 3 === 1 ? "0" : "1"} Views
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
                        <RefreshCw size={16} className="text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
                        <Heart
                            size={16}
                            className={index === 2 || index === 5 ? "fill-primary text-primary" : "text-muted-foreground"}
                        />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
