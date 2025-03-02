"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { IProduct } from "@/types";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {

console.log(product)
    return (
        <Card className="p-3">
            <CardHeader className="relative p-0 h-48">
                <Image
                    src={
                        product?.images[0] ||
                        "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
                    }
                    width={500}
                    height={500}
                    alt="product image"
                    className="rounded-sm h-48 object-cover"
                />
                {product?.status === 'sold' && (
                    <div className="absolute left-2 top-0 bg-red-500 text-white px-2 rounded-full">
                        Out of Stock
                    </div>
                )}
            </CardHeader>

            <CardContent className=" p-0 mt-2">
                <Link href={`/products/${product?._id}`} passHref>
                    <CardTitle
                        title={product?.title}
                        className="font-semibold cursor-pointer text-sm"
                    >
                        {product?.title.length > 30
                            ? product?.title?.slice(0, 30) + "..."
                            : product?.title}
                    </CardTitle>
                </Link>


            </CardContent>

            <CardFooter className="block p-0">
                <div className="flex gap-2 items-center justify-between">
                    <Button
                        disabled={product?.status === 'available'}
                        size="sm"
                        variant="outline"
                        className="w-32"
                    >
                        Buy Now
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0 flex items-center justify-center rounded-full"
                    >
                        <ShoppingCart />
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-8 h-8 p-0 flex items-center justify-center rounded-full"
                    >
                        <Heart />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
