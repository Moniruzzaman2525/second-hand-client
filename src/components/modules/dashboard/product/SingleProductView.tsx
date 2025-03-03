"use client";
import { ISingleProduct } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SingleProductView = ({ product }: { product: ISingleProduct }) => {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);

    const handleMessageClick = () => {
        router.push(`/message/${product.userID._id}`);
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
                        <p className="text-xl text-gray-600 mt-2">৳{product.price}</p>
                    </div>

                    <div className="space-y-2 mb-4">
                        <p className="text-lg text-gray-600">{product.category} | {product.condition}</p>
                        <p className="text-lg text-gray-600">{product.location}</p>
                        <p className="text-lg text-gray-600">Phone: {product.userID.phoneNumber}</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg mt-6">
                        <h3 className="text-xl font-semibold text-gray-800">Seller Information</h3>
                        <div className="space-y-2 mt-2">
                            <p className="text-gray-600">Name: {product.userID.name}</p>
                            <p className="text-gray-600">Email: {product.userID.email}</p>
                        </div>
                    </div>

                    <div className="mt-4 flex gap-4">
                        <button
                            onClick={handleMessageClick}
                            className="w-full py-2 px-4 bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] text-white font-semibold rounded-lg"
                        >
                            Chat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductView;
