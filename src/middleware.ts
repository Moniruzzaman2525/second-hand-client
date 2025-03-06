import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";

type TRole = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];
const roleBasedPrivateRoutes = {
    user: [
        "/dashboard/profile",
        "/dashboard/purchase-history",
        "/dashboard/listing",
        "/dashboard/sales-history",
        "/messages",
        "/dashboard/listing/add-ads",
        "/dashboard/favorites"
    ],
    admin: ["/dashboard", "/dashboard/admin/user-management", "/dashboard/admin/listings"],
};

export const middleware = async (request: NextRequest) => {
    const { pathname } = request.nextUrl;
    const userInfo = await getCurrentUser();

    if (!userInfo) {
        if (authRoutes.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(
                new URL(
                    `https://second-hand-client-dc3y.vercel.app/login?redirectPath=${pathname}`,
                    request.url
                )
            );
        }
    }

    if (userInfo?.role) {
        const userRole = userInfo?.role as TRole;
        if (userRole === "user") {
            if (roleBasedPrivateRoutes[userRole].includes(pathname)) {
                return NextResponse.next();
            }
            return NextResponse.redirect(new URL("/", request.url));
        }

        if (userRole === "admin") {
            return NextResponse.next();
        }
    }
    return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
    matcher: [
        "/login",
        "/register",
        "/dashboard/purchase-history",
        "/dashboard/profile",
        "/dashboard/listing",
        "/dashboard/sales-history",
        "/dashboard/admin/user-management",
        "/dashboard/admin/listings",
        "/messages",
        "/dashboard/listing/add-ads",
        "/dashboard/favorites"
    ],
};
