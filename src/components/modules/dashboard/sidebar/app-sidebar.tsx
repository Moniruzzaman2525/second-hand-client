"use client";

import * as React from "react";
import {
    Frame,
    LifeBuoy,
    Map,
    PieChart,
    Send,
    User2Icon,
    Settings2,
    History,
    ListCheckIcon
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
import { useUser } from "@/context/UserContext";

const data = {
    navMain: [
        {
            title: "Purchase History",
            url: "/dashboard/purchase-history",
            icon: History,
        },
        {
            title: "Listing",
            url: "/dashboard/listing",
            icon: ListCheckIcon,
        },

        {
            title: "Admin",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "User Management",
                    url: "/dashboard/admin/user-management",
                },
                {
                    title: "Listings",
                    url: "/dashboard/admin/listings",
                },
            ],
        },
        {
            title: "Profile",
            url: "/dashboard/profile",
            icon: User2Icon,
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
    const { user } = useUser();
    const isAdmin = user?.role === 'admin';

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
                <NavMain
                    items={data.navMain.filter((item) => {
                        if (item.title === "Admin" && !isAdmin) {
                            return false;
                        }
                        return true;
                    })}
                />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
