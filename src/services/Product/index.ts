"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addProduct = async (productData: FormData): Promise<any> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
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

    if (query?.location) {
        params.append("location", query?.location.toString());
    }

    if (query?.search) {
        params.append("searchTerm", query?.search.toString());
    }

    if (query?.condition) {
        const condition = Array.isArray(query.condition) ? query.condition.join(',') : query.condition;
        params.append("condition", condition);
    }
    const token = (await cookies()).get("accessToken")?.value;

    const headers: HeadersInit = {};
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/listings?limit=${limit}&page=${page}&${params}`,
            {
                method: 'GET',
                headers: headers,
                next: {
                    tags: ["PRODUCT"],
                },
            },
        );
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};


export const getAllUserProducts = async (page?: string, limit?: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/listings/user-products?limit=${limit}&page=${page}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
                },
                next: {
                    tags: ["PRODUCT"],
                },
            },
        );
        const data = await res.json();
        return data;
    } catch (error: any) {
        return new Error(error.message);
    }
};

export const getSingleProduct = async (productId: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/listings/${productId}`,
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


export const updateProduct = async (
    productData: FormData,
    productId: string
): Promise<any> => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/listings/${productId}`,
            {
                method: "PATCH",
                body: productData,
                headers: {
                    Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
                },
            }
        );
        revalidateTag("PRODUCT");
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};

export const handleDeleteProduct = async (productId: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/listings/${productId}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
                },
            },
        );
        revalidateTag("PRODUCT");
        const data = await res.json();

        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};



