import { IProduct } from "@/types";
import Image from 'next/image';

const ProductDetailsPage = ({ product }: { product: IProduct }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
                    <p className="text-lg text-gray-500">{product.category} | {product.condition}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">Product Information</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Price</span>
                                <span className="font-semibold">{product.price}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Condition</span>
                                <span>{product.condition}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">City</span>
                                <span>{product.location}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Address</span>
                                <span>{product.address}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">Description</h2>
                        <p className="text-gray-700">{product.description}</p>
                    </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {product.images.map((image, index) => (
                            <div key={index} className="w-full h-48 relative rounded-lg overflow-hidden">
                                <Image
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
