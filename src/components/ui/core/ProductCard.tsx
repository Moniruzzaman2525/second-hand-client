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
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: IProduct }) => {

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

                <div className="flex items-center justify-between my-2">
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">$ {product?.price}</span>
                    </p>

                    <div className="flex items-center justify-center gap-1">
                        <span className="text-sm font-medium text-gray-700">
                            {product?.category}
                        </span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="block p-0">
                <div className="flex gap-2 items-center justify-between">


                    <div className="flex gap-5">
                        <Button
                            disabled={product?.status === 'sold'}
                            variant="outline"
                            size="sm"
                            className="w-8 h-8 p-0 flex items-center justify-center rounded-full"
                        >
                            <Eye />
                        </Button>
                        <Button
                            disabled={product?.status === 'sold'}
                            variant="outline"
                            size="sm"
                            className="w-8 h-8 p-0 flex items-center justify-center rounded-full"
                        >
                            <Heart />
                        </Button>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-sm font-medium text-gray-700">
                            <span className="font-bold">condition:</span> {product?.condition}
                        </span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
