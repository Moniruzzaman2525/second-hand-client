"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addProduct = async (productData: FormData): Promise<any> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`, {
            method: "POST",
            body: productData,
            headers: {
                Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
            },
        });
        revalidateTag("PRODUCT");
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};

export const getAllProducts = async (
    page?: string,
    limit?: string,
    query?: { [key: string]: string | string[] | undefined }
) => {
    const params = new URLSearchParams();
    console.log(query);

    if (query?.minPrice) {
        params.append("minPrice", query?.minPrice.toString());
    }
    if (query?.maxPrice) {
        params.append("maxPrice", query?.maxPrice.toString());
    }
    if (query?.category) {
        const category = Array.isArray(query.category) ? query.category.join(',') : query.category;
        params.append("category", category);
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/product?limit=${limit}&page=${page}&${params}`,
            {
                next: {
                    tags: ["PRODUCT"],
                },
            }
        );
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};



