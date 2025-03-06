"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";



export const createTransaction = async ({ item, sellerID }: { item: string, sellerID: string }): Promise<any> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions`, {
            method: "POST",
            body: JSON.stringify({ item, sellerID }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
            },
        });
        revalidateTag("PURCHASE");
        const result = await res.json();
        return result
    } catch (error: any) {
        return Error(error);
    }
};


export const getAllPurchaseHistory = async (page?: string, limit?: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/transactions/purchases?limit=${limit}&page=${page}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
                },
                next: {
                    tags: ["PURCHASE"],
                },
            },
        );
        const data = await res.json();
        return data;
    } catch (error: any) {
        return new Error(error.message);
    }
};
export const getAllSellerHistory = async (page?: string, limit?: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/transactions/sales?limit=${limit}&page=${page}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
                },
                next: {
                    tags: ["PURCHASE"],
                },
            },
        );
        const data = await res.json();
        return data;
    } catch (error: any) {
        return new Error(error.message);
    }
};


export const completeTransaction = async (userId: string): Promise<any> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
            },
        });
        revalidateTag("PURCHASE");
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};


export const handleDeletePurchaseProduct = async (productId: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/transactions/${productId}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
                },
            },
        );
        revalidateTag("PURCHASE");
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};
