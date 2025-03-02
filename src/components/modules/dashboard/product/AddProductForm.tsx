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
import SHTextarea from "@/components/ui/core/form/SHTextarea";
import SHSelect from "@/components/ui/core/form/SHSelect";
import { categories, conditionOptions } from "@/constant";
import { addProduct } from "@/services/Product";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function AddProductsForm() {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);
    const router = useRouter();
    const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
        const modifiedData = {
            ...data,
            price: parseFloat(data.price),
        };

        const formData = new FormData();
        formData.append("data", JSON.stringify(modifiedData));

        for (const file of imageFiles) {
            formData.append("images", file);
        }
        try {
            const res = await addProduct(formData);
            if (res.success) {
                toast.success(res.message);
                router.push("/dashboard/listing");
            } else {
                toast.error(res.message);
            }
        } catch (err: any) {
            toast.error(err.message);
        }
    };

    return (
        <div className="rounded-xl bg-[#fdfdfe] flex-grow w-full py-10 px-20">
            <SHForm onSubmit={handleFormSubmit}>
                <div className="flex justify-between items-center border-t border-b py-3 my-5">
                    <p className="text-primary font-bold text-xl">General Information</p>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="">
                        <SHInput
                            type="text"
                            name="title"
                            label="Product Title"
                        />
                    </div>
                    <div className="flex gap-10 justify-between items-center">
                        <SHSelect
                            options={categories}
                            name="category"
                            label="Category"
                        />
                        <SHSelect
                            options={conditionOptions}
                            name="condition"
                            label="Condition"
                        />
                        <SHInput
                            type="number"
                            name="price"
                            label="Product Price"
                        />
                    </div>
                    <div className="flex gap-10 justify-between items-center">
                        <SHInput
                            type="text"
                            name="location"
                            label="City"
                        />
                        <SHInput
                            type="text"
                            name="address"
                            label="Address"
                        />
                    </div>
                    <div>
                        <SHTextarea
                            name="description"
                            label="Description"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center border-t border-b py-3 my-5">
                            <p className="text-primary font-bold text-xl">Gallery</p>
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
                    <div className="flex justify-end">
                        <Button type="submit" className="mt-5 w-[20%]">
                            Add Product
                        </Button>
                    </div>
                </div>
            </SHForm>
        </div>
    );
}
