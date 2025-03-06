
"use client";
import { ISingleProduct } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { MessageSquare, ShoppingBagIcon } from "lucide-react";
import MessageModal from "@/components/ui/core/SHModel/MessageModal";
import { useUser } from "@/context/UserContext";
import PurchaseModal from "@/components/ui/core/SHModel/TransactionModal";
import LoginModal from "@/components/ui/core/SHModel/LoginModal";
import SuccessModal from "@/components/ui/core/SHModel/SuccessMessage";

const SingleProductView = ({ product }: { product: ISingleProduct }) => {

    const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isPurchaseOpen, setIsPurchaseOpen] = useState<boolean>(false);
    const [isConfirmOpenMessage, setIsConfirmOpenMessage] = useState(false);
    const [isConfirmOpenPurchase, setIsConfirmOpenMessagePurchase] = useState(false);
    const [modalContent, setModalContent] = useState("")
    const [modalState, setModalState] = useState("")
    const { user } = useUser()
    const handleMessageClick = () => {
        setIsModalOpen(true);
    };
    const handlePurchaseProduct = () => {
        setIsPurchaseOpen(true);
    };

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
    };


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 flex flex-col items-center">
                    <div className="relative w-full h-96 mb-4">
                        <Image
                            src={selectedImage}
                            alt="Product Image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg border-2 border-gray-300"
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto">
                        {product.images.map((image, index) => (
                            <div
                                key={index}
                                className="w-24 h-24 relative rounded-lg overflow-hidden cursor-pointer"
                                onClick={() => handleImageClick(image)}
                            >
                                <Image
                                    src={image}
                                    alt={`Product Image ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg border-2 border-gray-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
                        <p className="text-xl text-gray-600 mt-2">${product.price}</p>
                    </div>

                    <div className="space-y-2 mb-4">
                        <p className="text-lg text-gray-600">{product.category} | {product.condition}</p>
                        <p className="text-lg text-gray-600">{product.location}</p>
                        <p className="text-lg text-gray-600">Phone: {product.userId.phoneNumber}</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg mt-6">
                        <h3 className="text-xl font-semibold text-gray-800">Seller Information</h3>
                        <div className="space-y-2 mt-2">
                            <p className="text-gray-600">Name: {product.userId.name}</p>
                            <p className="text-gray-600">Email: {product.userId.email}</p>
                        </div>
                    </div>

                    <div className="mt-4 justify-between flex gap-4">
                        <button
                            disabled={product.userId._id === user?.userId || product?.status === 'sold'}
                            onClick={handlePurchaseProduct}
                            className="w-[40%] py-2 px-4 bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] text-white font-semibold rounded-lg flex items-center justify-center gap-2"
                        >
                            <ShoppingBagIcon size={20} />
                            BuyNow
                        </button>
                        <button
                            disabled={product.userId._id === user?.userId}
                            onClick={handleMessageClick}
                            className="w-[40%] py-2 px-4 bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] text-white font-semibold rounded-lg flex items-center justify-center gap-2"
                        >
                            <MessageSquare size={20} />
                            Chat
                        </button>
                    </div>
                </div>
            </div>

            {
                user ? <MessageModal
                    setIsConfirmOpen={setIsConfirmOpenMessage}
                    setModalContent={setModalContent}
                    setModalState={setModalState}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    user={product}
                /> :
                    <LoginModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    />}
            {user ? <PurchaseModal
                isOpen={isPurchaseOpen}
                onClose={() => setIsPurchaseOpen(false)}
                product={product}
                setIsConfirmOpen={setIsConfirmOpenMessagePurchase}
                setModalContent={setModalContent}
                setModalState={setModalState}
            /> :
                <LoginModal
                    isOpen={isPurchaseOpen}
                    onClose={() => setIsPurchaseOpen(false)}
                />}

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
        </div>
    );
};

export default SingleProductView;
