"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";


export const addWishlist = async ({ item }: { item: string}): Promise<any> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wishlist`, {
            method: "POST",
            body: JSON.stringify({ item }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
            },
            next: {
                tags: ["PRODUCT"],
            },
        });
        revalidateTag("PRODUCT");
        const result = await res.json()
        return result
    } catch (error: any) {
        return Error(error);
    }
};


export const removeWishlist = async ({ item }: { item: string}): Promise<any> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wishlist/${item}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
            },
            next: {
                tags: ["PRODUCT"],
            },
        });
        revalidateTag("PRODUCT");
        const result = await res.json()
        return result
    } catch (error: any) {
        return Error(error);
    }
};


export const getUserWishlist = async (page?: string, limit?: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/wishlist?limit=${limit}&page=${page}`,
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
