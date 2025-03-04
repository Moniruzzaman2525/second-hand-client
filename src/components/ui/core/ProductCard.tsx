"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { ISingleProduct } from "@/types";
import { Eye, Heart, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TransactionModal from "./SHModel/TransactionModal";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import LoginModal from "./SHModel/LoginModal";
import WishlistModal from "./SHModel/WishlistModal";

const ProductCard = ({ product }: { product: ISingleProduct }) => {
    const [isPurchaseOpen, setIsPurchaseOpen] = useState<boolean>(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
    const { user } = useUser()
    const handlePurchaseProduct = () => {
        setIsPurchaseOpen(true);
    };
    const handleWishListProduct = () => {
        setIsWishlistOpen(true);
    };
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

                    <div className="flex flex-col items-center justify-center gap-1">
                        <span className="text-sm font-medium text-gray-700">
                            {product?.category}
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                            <span className="font-bold">condition:</span> {product?.condition}
                        </span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="block p-0">
                <div className="flex gap-2 items-center justify-between">


                    <div className="flex gap-5">
                        <Link href={`/products/${product?._id}`} >
                            <Button
                                disabled={product?.status === 'sold'}
                                variant="outline"
                                size="sm"
                                title="View"
                                className="w-8 h-8 p-0 flex items-center justify-center rounded-full"
                            >
                                <Eye />
                            </Button>
                        </Link>
                        <Button
                            disabled={product?.status === 'sold'}
                            variant="outline"
                            onClick={handleWishListProduct}
                            size="sm"
                            title="whitelist"
                            className="w-8 h-8 p-0 flex items-center justify-center rounded-full"
                        >
                            <Heart />
                        </Button>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <Button
                            disabled={product.userID._id === user?.userId || product?.status === 'sold'}
                            onClick={handlePurchaseProduct}
                            size="sm"
                            className="w-32 bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] text-white hover:text-white"
                        >
                            <ShoppingBagIcon size={20} /> Buy Now
                        </Button>
                    </div>
                </div>
            </CardFooter>
            {user ? <TransactionModal
                isOpen={isPurchaseOpen}
                onClose={() => setIsPurchaseOpen(false)}
                user={product}
            /> :
                <LoginModal
                    isOpen={isPurchaseOpen}
                    onClose={() => setIsPurchaseOpen(false)}
                />}
            {user ? <WishlistModal
                isOpen={isWishlistOpen}
                onClose={() => setIsWishlistOpen(false)}
                user={product}
            /> :
                <LoginModal
                    isOpen={isWishlistOpen}
                    onClose={() => setIsWishlistOpen(false)}
                />}
        </Card>
    );
};

export default ProductCard;
