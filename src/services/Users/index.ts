"use server";

import { cookies } from "next/headers";

export const getAllUsers =async (page?: string, limit?: string,) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/users?limit=${limit}&page=${page}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
                },
                next: {
                    tags: ["USERS"],
                },
            },
        );
        const data = await res.json();
        return data;
    } catch (error: any) {
        return new Error(error.message);
    }
}
