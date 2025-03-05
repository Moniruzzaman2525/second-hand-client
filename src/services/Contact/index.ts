"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const contactUs = async (data: FieldValues): Promise<any> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contact`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
            },
        });
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};
