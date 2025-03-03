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
