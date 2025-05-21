"use client"

import type { ISingleProduct } from "@/types"
import Image from "next/image"
import { useEffect, useState } from "react"
import {
    ArrowLeft,
    ArrowRight,
    Clock,
    Eye,
    Facebook,
    Flag,
    GitCompareArrows,
    Heart,
    Maximize2,
    MessageSquare,
    Phone,
    Twitter,
} from "lucide-react"
import MessageModal from "@/components/ui/core/SHModel/MessageModal"
import { useUser } from "@/context/UserContext"
import PurchaseModal from "@/components/ui/core/SHModel/TransactionModal"
import LoginModal from "@/components/ui/core/SHModel/LoginModal"
import SuccessModal from "@/components/ui/core/SHModel/SuccessMessage"
import { formatDistanceToNow } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import RemoveWishlistModal from "@/components/ui/core/SHModel/RemoveWishlistModal"
import WishlistModal from "@/components/ui/core/SHModel/WishlistModal"
import CompareMode from "@/components/ui/core/SHModel/CompareMode"

const SingleProductView = ({ product }: { product: ISingleProduct }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [isPurchaseOpen, setIsPurchaseOpen] = useState<boolean>(false)
    const [isConfirmOpenMessage, setIsConfirmOpenMessage] = useState(false)
    const [isConfirmOpenPurchase, setIsConfirmOpenMessagePurchase] = useState(false)
    const [modalContent, setModalContent] = useState("")
    const [shareUrl, setShareUrl] = useState("")
    const [isRemoveWishlistOpen, setIsRemoveWishlistOpen] = useState<boolean>(false);
    const [modalState, setModalState] = useState("")
    const { user } = useUser()
    const [showFullPhone, setShowFullPhone] = useState(false)
    const [isConfirmOpenRemoveWishlist, setIsConfirmOpenRemoveWishlist] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
    const [isConfirmOpenWishlist, setIsConfirmOpenWishlist] = useState(false);
    const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
    const handleMessageClick = () => {
        setIsModalOpen(true)
    }


    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
    }

    const openFullscreen = () => {
        const img = document.getElementById("main-product-image")
        if (img && img.requestFullscreen) {
            img.requestFullscreen()
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            setShareUrl('https://second-hand-client-dc3y.vercel.app')
        }
    }, [])

    const handleWishListProduct = () => {
        if (product.wishlist) {
            setIsRemoveWishlistOpen(true)
        } else {
            setIsWishlistOpen(true);
        }
    };

    const handleCompareProduct = () => {
        if (product.wishlist) {
            setIsRemoveWishlistOpen(true)
        } else {
            setIsCompareOpen(true);
        }
    };
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-6">

                <div className="w-full lg:w-2/3">
                    <div className="relative bg-white rounded-lg overflow-hidden mb-4">
                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                            <Image
                                id="main-product-image"
                                src={product.images[currentImageIndex] || "/placeholder.svg"}
                                alt={product.title}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg"
                            />
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-100"
                            >
                                <ArrowLeft size={20} />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-100"
                            >
                                <ArrowRight size={20} />
                            </button>
                            <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                                {currentImageIndex + 1} / {product.images.length}
                            </div>
                            <button
                                onClick={openFullscreen}
                                className="absolute bottom-4 right-4 w-8 h-8 rounded-md bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-100"
                            >
                                <Maximize2 size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-4 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{formatDistanceToNow(new Date(product.createdAt), { addSuffix: true })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Eye size={16} />
                            <span>{product.views ?? 0} Views</span>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="rounded-md px-3 py-1 text-sm">
                            {product.category}
                        </Badge>
                        <Badge variant="outline" className="rounded-md px-3 py-1 text-sm">
                            {product.condition}
                        </Badge>
                    </div>

                    <div className="text-3xl font-bold text-gray-800 mb-6">৳{product.price}</div>

                    <div className="space-y-2 mb-6">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Location: {product.location}</span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-md">
                            <Phone size={16} />
                            <span>Phone Number: {product.userId?.phoneNumber}</span>
                        </div>
                    </div>

                    {product.description && (
                        <div className="bg-white rounded-lg p-4 mb-6">
                            <h2 className="text-lg font-semibold mb-2">Description</h2>
                            <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
                        </div>
                    )}


                </div>

                <div className="w-full lg:w-1/3">
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-medium">{product.userId?.name}</h3>
                                <p className="text-sm text-gray-500">Member since: 1 year</p>
                                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                    <span>User is offline</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>{product.location}</span>
                        </div>

                        <a href="#" className="text-blue-500 hover:underline text-sm">
                            See all ads
                        </a>

                        <div className="mt-4 p-3 bg-gray-50 rounded-md flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Phone size={18} className="text-gray-500" />
                                <span className="font-medium">
                                    {showFullPhone
                                        ? product.userId?.phoneNumber
                                        : `${product.userId?.phoneNumber?.substring(0, 3)}${"*".repeat(product.userId?.phoneNumber?.length - 3 || 8)}`
                                    }
                                </span>
                            </div>
                            <button
                                onClick={() => setShowFullPhone(!showFullPhone)}
                                className="w-8 h-8 bg-[#537cd9] rounded-full flex items-center justify-center text-white"
                            >
                                <Eye size={16} />
                            </button>
                        </div>

                        <button
                            onClick={handleMessageClick}
                            disabled={product.userId?._id === user?.userId}
                            className={cn(
                                "w-full mt-4 py-3 bg-[#537cd9] text-white font-medium rounded-md flex items-center justify-center gap-2",
                                product.userId?._id === user?.userId ? "opacity-50 cursor-not-allowed" : "hover:bg-[#3a5eb4]",
                            )}
                        >
                            <MessageSquare size={18} />
                            Chat
                        </button>
                    </div>

                    <div className="flex items-center gap-3 mt-6">
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                        >
                            <Facebook size={18} className="text-gray-600" />
                        </a>

                        <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(product.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                        >
                            <Twitter size={18} className="text-gray-600" />
                        </a>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        disabled={product?.status === 'sold'}
                                        variant="outline"
                                        onClick={handleCompareProduct}
                                        size="sm"
                                        className={`w-8 h-8 p-0 flex items-center justify-center rounded-full
                                        ${product?.wishlist ? "bg-[#537cd9] text-white hover:bg-[#537cd9] hover:text-white" : "hover:text-[#537cd9] hover:border-[#537cd9] hover:bg-white"} `}
                                    >
                                        <GitCompareArrows />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{product?.wishlist ? 'Remove to compare' : 'Add to compare'}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
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
                        <div className="ml-auto">
                            <button className="flex items-center gap-1 text-red-500 hover:text-red-600">
                                <Flag size={16} />
                                <span>Report abuse</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {user ? (
                <MessageModal
                    setIsConfirmOpen={setIsConfirmOpenMessage}
                    setModalContent={setModalContent}
                    setModalState={setModalState}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    user={product}
                />
            ) : (
                <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            )}

            {user ? (
                <PurchaseModal
                    isOpen={isPurchaseOpen}
                    onClose={() => setIsPurchaseOpen(false)}
                    product={product}
                    setIsConfirmOpen={setIsConfirmOpenMessagePurchase}
                    setModalContent={setModalContent}
                    setModalState={setModalState}
                />
            ) : (
                <LoginModal isOpen={isPurchaseOpen} onClose={() => setIsPurchaseOpen(false)} />
            )}

            <SuccessModal
                isOpen={isConfirmOpenMessage}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmOpenMessage(false)}
            />

            <SuccessModal
                isOpen={isConfirmOpenPurchase}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmOpenMessagePurchase(false)}
            />
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
            <SuccessModal
                isOpen={isConfirmOpenWishlist}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmOpenWishlist(false)}
            />
            {user ? <CompareMode
                isOpen={isCompareOpen}
                onClose={() => setIsCompareOpen(false)}
                user={product}
                setIsConfirmOpen={setIsConfirmOpenWishlist}
                setModalContent={setModalContent}
                setModalState={setModalState}
            /> :
                <LoginModal
                    isOpen={isCompareOpen}
                    onClose={() => setIsCompareOpen(false)}
                />}
        </div>
    )
}

export default SingleProductView
