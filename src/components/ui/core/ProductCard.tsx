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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip";
import RemoveWishlistModal from "./SHModel/RemoveWishlistModal";
import SuccessModal from "./SHModel/SuccessMessage";

const ProductCard = ({ product }: { product: ISingleProduct }) => {
    const [isPurchaseOpen, setIsPurchaseOpen] = useState<boolean>(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
    const [isRemoveWishlistOpen, setIsRemoveWishlistOpen] = useState<boolean>(false);
    const [isConfirmOpenWishlist, setIsConfirmOpenWishlist] = useState(false);
    const [isConfirmOpenRemoveWishlist, setIsConfirmOpenRemoveWishlist] = useState(false);
    const [isConfirmOpenTransaction, setIsConfirmOpenTransaction] = useState(false);
    const [modalContent, setModalContent] = useState("")
    const [modalState, setModalState] = useState("")
    const { user } = useUser()
    const handlePurchaseProduct = () => {
        setIsPurchaseOpen(true);
    };
    const handleWishListProduct = () => {
        if (product.wishlist) {
            setIsRemoveWishlistOpen(true)
        } else {
            setIsWishlistOpen(true);
        }
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
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-8 h-8 p-0 flex hover:text-[#537cd9] hover:border-[#537cd9] hover:bg-white items-center justify-center rounded-full"
                                        >
                                            <Eye />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Quick View</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Link>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        disabled={product?.status === 'sold'}
                                        variant="outline"
                                        onClick={handleWishListProduct}
                                        size="sm"
                                        className={`w-8 h-8 p-0 flex items-center justify-center rounded-full
                                        ${product?.wishlist ? "bg-[#537cd9] text-white hover:bg-[#537cd9] hover:text-white" : "hover:text-[#537cd9] hover:border-[#537cd9] hover:bg-white"} `}
                                    >
                                        <Heart />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{product?.wishlist ? 'Remove to favorite' : 'Add to favorite'}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <Button
                            onClick={handlePurchaseProduct}
                            size="sm"
                            className="w-32 bg-gradient-to-r from-[#537cd9] to-[#6d90df]  hover:from-[#3a5eb4] hover:to-[#537cd9] text-white hover:text-white"
                        >
                            <ShoppingBagIcon size={20} /> Buy Now
                        </Button>
                    </div>
                </div>
            </CardFooter>
            {user ? <TransactionModal
                isOpen={isPurchaseOpen}
                onClose={() => setIsPurchaseOpen(false)}
                product={product}
                setIsConfirmOpen={setIsConfirmOpenTransaction}
                setModalContent={setModalContent}
                setModalState={setModalState}
            /> :
                <LoginModal
                    isOpen={isPurchaseOpen}
                    onClose={() => setIsPurchaseOpen(false)}
                />}
            {user ? <WishlistModal
                isOpen={isWishlistOpen}
                onClose={() => setIsWishlistOpen(false)}
                user={product}
                setIsConfirmOpen={setIsConfirmOpenWishlist}
                setModalContent={setModalContent}
                setModalState={setModalState}
            /> :
                <LoginModal
                    isOpen={isWishlistOpen}
                    onClose={() => setIsWishlistOpen(false)}
                />}
            <RemoveWishlistModal
                isOpen={isRemoveWishlistOpen}
                onClose={() => setIsRemoveWishlistOpen(false)}
                user={product}
                setIsConfirmOpen={setIsConfirmOpenRemoveWishlist}
                setModalContent={setModalContent}
                setModalState={setModalState}
            />
            <SuccessModal
                isOpen={isConfirmOpenRemoveWishlist}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmOpenRemoveWishlist(false)}
            />
            <SuccessModal
                isOpen={isConfirmOpenWishlist}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmOpenWishlist(false)}
            />
            <SuccessModal
                isOpen={isConfirmOpenTransaction}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmOpenTransaction(false)}
            />
        </Card>
    );
};

export default ProductCard;
