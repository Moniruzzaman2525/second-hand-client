"use client";

import { Button } from "@/components/ui/button";
import {
    FieldValues,
    SubmitHandler,
} from "react-hook-form";
import { useState } from "react";
import SHImageUploader from "@/components/ui/core/SHImageUploader";
import ImagePreviewer from "@/components/ui/core/SHImageUploader/ImagePreviewer";
import SHForm from "@/components/ui/core/form/SHForm";
import SHInput from "@/components/ui/core/form/SHInput";

export default function AddProductsForm() {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);

    const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {


        const modifiedData = {
            ...data,
            price: parseFloat(data.price),
            stock: parseInt(data.stock),
            weight: parseFloat(data.stock),
        };

        const formData = new FormData();
        formData.append("data", JSON.stringify(modifiedData));

        for (const file of imageFiles) {
            formData.append("images", file);
        }
        try {
            // const res = await addProduct(formData);
            // console.log(res)
            // if (res.success) {
            //     toast.success(res.message);
            //     router.push("/user/shop/products");
            // } else {
            //     toast.error(res.message);
            // }
        } catch (err: any) {
            console.error(err);
        }
    };

    return (
        <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl p-5 ">
            <div className="flex items-center space-x-4 mb-5 ">


                <h1 className="text-xl font-bold">Add Product</h1>
            </div>
            <SHForm onSubmit={handleFormSubmit}>
                <div className="flex justify-between items-center border-t border-b py-3 my-5">
                    <p className="text-primary font-bold text-xl">Basic Information</p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <SHInput
                        type="text"
                        name="title"
                        label="Product Title"
                    />
                    <SHInput
                        type="number"
                        name="price"
                        label="Product Price"
                    />
                </div>

                <div>
                    <div className="flex justify-between items-center border-t border-b py-3 my-5">
                        <p className="text-primary font-bold text-xl">Images</p>
                    </div>
                    <div className="flex gap-4 ">
                        <SHImageUploader
                            setImageFiles={setImageFiles}
                            setImagePreview={setImagePreview}
                            label="Upload Image"
                            className="w-fit mt-0"
                        />
                        <ImagePreviewer
                            className="flex flex-wrap gap-4"
                            setImageFiles={setImageFiles}
                            imagePreview={imagePreview}
                            setImagePreview={setImagePreview}
                        />
                    </div>
                </div>


                <Button type="submit" className="mt-5 w-full">
                    Add Product
                </Button>
            </SHForm>
        </div>
    );
}
