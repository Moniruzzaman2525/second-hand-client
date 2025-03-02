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

