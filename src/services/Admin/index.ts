
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
    const result = await res.json()
    return result
  } catch (error: any) {
    return Error(error);
  }
};
export const productPermission = async ({ productId, data }: { productId: string, data: object}): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${productId}/permission`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
      },
    });
    revalidateTag("USERS");
    const result = await res.json()
    return result
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


export const getAllProductsByAdmin = async (
    page?: string,
    limit?: string,
    query?: { [key: string]: string | string[] | undefined }
) => {
    const params = new URLSearchParams();
    if (query?.minPrice) {
        params.append("minPrice", query?.minPrice.toString());
    }
    if (query?.maxPrice) {
        params.append("maxPrice", query?.maxPrice.toString());
    }
    if (query?.category) {
        const category = Array.isArray(query.category) ? query.category.join(',') : query.category;
        params.append("category", category);
    }

    if (query?.location) {
        params.append("location", query?.location.toString());
    }

    if (query?.search) {
        params.append("searchTerm", query?.search.toString());
    }

    if (query?.condition) {
        const condition = Array.isArray(query.condition) ? query.condition.join(',') : query.condition;
        params.append("condition", condition);
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/listings/by-admin?limit=${limit}&page=${page}&${params}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${(await cookies()).get("accessToken")!.value}`,
                },
                next: {
                    tags: ["PRODUCT"],
                },
            }
        );
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};
