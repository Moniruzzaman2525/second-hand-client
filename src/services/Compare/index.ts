"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";


export const addCompare = async ({ item }: { item: string }): Promise<any> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/compare`, {
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


export const removeCompare = async ({ item }: { item: string }): Promise<any> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/compare/${item}`, {
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


export const getUserCompare = async (page?: string, limit?: string) => {


    const token = (await cookies()).get("accessToken")?.value;
    const headers: HeadersInit = {};
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/compare?limit=${limit}&page=${page}`,
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
        return new Error(error.message);
    }
};
