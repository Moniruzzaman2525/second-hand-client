"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

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



export const getUserDetails = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/get-me`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
        },
        next: {
          tags: ["USER"],
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return new Error(error.message);
  }
};


export const updateProfile = async (userData: FieldValues): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users`, {
      method: "PATCH",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
      },
    });
    revalidateTag("USER");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
