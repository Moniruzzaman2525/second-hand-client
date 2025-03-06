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
import SuccessModal from "@/components/ui/core/SHModel/SuccessMessage";
import { Loader } from "lucide-react";
export default function AddProductsForm() {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [modalContent, setModalContent] = useState("")
    const [modalState, setModalState] = useState("")
    const [loading, setLoading] = useState(false);
    const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
        setLoading(true)
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
                setImageFiles([])
                setImagePreview([])
                setIsConfirmOpen(true)
                setModalContent(res.message);
                setModalState('success')
            } else {
                setIsConfirmOpen(true)
                setModalContent(res.message);
                setModalState('failed')
            }
        } catch (err: any) {
            setIsConfirmOpen(true)
            setModalContent(err.message);
            setModalState('failed')
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="rounded-xl bg-[#fdfdfe] flex-grow w-full py-10 px-4 sm:px-6 md:px-8 lg:px-20">
            <SHForm onSubmit={handleFormSubmit}>
                <div className="flex justify-between items-center border-t border-b py-3 my-5">
                    <p className="text-primary font-bold text-xl">General Information</p>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col sm:flex-row sm:gap-6">
                        <SHInput
                            required
                            type="text"
                            name="title"
                            label="Product Title"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-6 justify-between">
                        <SHSelect
                            required
                            options={categories}
                            name="category"
                            label="Category"

                        />
                        <SHSelect
                            required
                            options={conditionOptions}
                            name="condition"
                            label="Condition"

                        />
                        <SHInput
                            required
                            type="number"
                            name="price"
                            label="Product Price"

                        />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-6 justify-between">
                        <SHInput
                            required
                            type="text"
                            name="location"
                            label="City"

                        />
                        <SHInput
                            required
                            type="text"
                            name="address"
                            label="Address"

                        />
                    </div>
                    <div>
                        <SHTextarea
                            required
                            name="description"
                            label="Description"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center border-t border-b py-3 my-5">
                            <p className="text-primary font-bold text-xl">Gallery</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4">
                            <SHImageUploader
                                setImageFiles={setImageFiles}
                                setImagePreview={setImagePreview}
                                label="Upload Image"
                                className="w-full sm:w-fit mt-0"
                                disabled={imageFiles.length >= 5}
                            />
                            <ImagePreviewer
                                className="flex flex-wrap gap-4 w-full sm:w-fit"
                                setImageFiles={setImageFiles}
                                imagePreview={imagePreview}
                                setImagePreview={setImagePreview}
                            />
                        </div>
                        <div className="flex justify-end mt-2 text-[#374b5c] text-[20px] font-semibold">
                            <h1>{imageFiles.length} / 5</h1>
                        </div>
                    </div>
                    <div className="flex justify-end mt-5">
                        <Button type="submit" className="w-full sm:w-[20%] bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] transition-all">
                            {loading ? <Loader /> : 'Add Product'}
                        </Button>
                    </div>
                </div>
            </SHForm>
            <SuccessModal
                isOpen={isConfirmOpen}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmOpen(false)}
            />
        </div>
    );
}
