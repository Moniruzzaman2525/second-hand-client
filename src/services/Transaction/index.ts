"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";



export const createTransaction = async ({ itemID, sellerID }: { itemID: string, sellerID: string }): Promise<any> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions`, {
            method: "POST",
            body: JSON.stringify({ itemID, sellerID }),
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


export const getAllPurchaseHistory = async (page?: string, limit?: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/transactions?limit=${limit}&page=${page}`,
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
        console.log(data)
        return data;
    } catch (error: any) {
        return new Error(error.message);
    }
};
export const getAllSellerHistory = async (page?: string, limit?: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/transactions/seller?limit=${limit}&page=${page}`,
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions/complete-sales/${userId}`, {
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
