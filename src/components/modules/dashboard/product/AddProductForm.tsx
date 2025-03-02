"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    FieldValues,
    SubmitHandler,
    useFieldArray,
    useForm,
} from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

import { useState } from "react";
import SHImageUploader from "@/components/ui/core/SHImageUploader";
import ImagePreviewer from "@/components/ui/core/SHImageUploader/ImagePreviewer";

export default function AddProductsForm() {
    const [imageFiles, setImageFiles] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([]);

    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            price: "",
            category: "",
            brand: "",
            stock: "",
            weight: "",
            availableColors: [{ value: "" }],
            keyFeatures: [{ value: "" }],
            specification: [{ key: "", value: "" }],
        },
    });

    const {
        formState: { isSubmitting },
    } = form;

    const { append: appendColor, fields: colorFields } = useFieldArray({
        control: form.control,
        name: "availableColors",
    });

    const addColor = () => {
        appendColor({ value: "" });
    };




    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const availableColors = data.availableColors.map(
            (color: { value: string }) => color.value
        );

        const keyFeatures = data.keyFeatures.map(
            (feature: { value: string }) => feature.value
        );

        const specification: { [key: string]: string } = {};
        data.specification.forEach(
            (item: { key: string; value: string }) =>
                (specification[item.key] = item.value)
        );


        const modifiedData = {
            ...data,
            availableColors,
            keyFeatures,
            specification,
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
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex justify-between items-center border-t border-b py-3 my-5">
                        <p className="text-primary font-bold text-xl">Basic Information</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="stock"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Stock</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="weight"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Weight</FormLabel>
                                    <FormControl>
                                        <Input {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="my-5">
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="h-36 resize-none"
                                            {...field}
                                            value={field.value || ""}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
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

                    <div>
                        <div className="flex justify-between items-center border-t border-b py-3 my-5">
                            <p className="text-primary font-bold text-xl">Available Colors</p>
                            <Button
                                variant="outline"
                                className="size-10"
                                onClick={addColor}
                                type="button"
                            >
                                <Plus className="text-primary" />
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {colorFields.map((colorField, index) => (
                                <div key={colorField.id}>
                                    <FormField
                                        control={form.control}
                                        name={`availableColors.${index}.value`}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Color {index + 1}</FormLabel>
                                                <FormControl>
                                                    <Input {...field} value={field.value || ""} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>





                    <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Adding Product....." : "Add Product"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
