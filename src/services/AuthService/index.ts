"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    if (result.success) {
      (await cookies()).set("accessToken", result.data.token);
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    if (result.success) {
      (await cookies()).set("accessToken", result.data.token);
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const forgotPassword = async(userEmail: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/forget-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: userEmail}),
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const resetPassword = async (id: string | undefined, token: string | undefined, newPassword: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/forget-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({ id, newPassword }),
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decodedData = null;

  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    return decodedData;
  } else {
    return null;
  }
};



export const reCaptchaTokenVerification = async (token: string) => {
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.NEXT_PUBLIC_RECAPTCHA_SERVER_KEY!,
        response: token,
      }),
    });

    return res.json();
  } catch (err: any) {
    return Error(err);
  }
};

export const logout = async () => {
  (await cookies()).delete('accessToken');
  try {
    return {
      message: 'Logout successful',
      next: {
        tags: ['PRODUCT'],
      },
    };
  } catch (error: any) {
    return {
      message: 'Logout failed',
      error: error.message,
    };
  }
};





export const changesPassword = async (userData: FieldValues): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/changes-password`, {
      method: "POST",
      body: JSON.stringify(userData),
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

