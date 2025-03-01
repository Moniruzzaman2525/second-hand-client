"use client";

import * as React from "react";
import {
    Bot,
    Frame,
    LifeBuoy,
    Map,
    PieChart,
    Send,
    Settings,
    SquareTerminal,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Logo from "@/app/assets/logo.png";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Image from "next/image";

const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "/user/dashboard",
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: "Shop",
            url: "/user/shop/products",
            icon: Bot,
            items: [
                {
                    title: "Manage Products",
                    url: "/user/shop/products",
                },
                {
                    title: "Manage Categories",
                    url: "/user/shop/category",
                },
                {
                    title: "Manage Brands",
                    url: "/user/shop/brand",
                },
                {
                    title: "Manage Coupon",
                    url: "/user/shop/manage-coupon",
                },
            ],
        },

        {
            title: "Settings",
            url: "#",
            icon: Settings,
            items: [
                {
                    title: "Profile",
                    url: "/dashboard/profile",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Support",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send,
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div className="flex items-center justify-center">
                                    <Image src={Logo} alt="Logo" width={200} height={200} className="mr-2" />
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
