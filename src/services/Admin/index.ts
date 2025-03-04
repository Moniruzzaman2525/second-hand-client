
"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const banUnBanUser = async (userId: string): Promise<any> => {
  try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/${userId}/ban`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
      },
    });
    revalidateTag("USERS");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};


export const handleDeleteUser = async (UserId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/${UserId}/delete`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
        },
      },
    );
    revalidateTag("USERS");
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
