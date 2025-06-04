
"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Home,
  ShoppingCart,
  Settings,
  BarChart3,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useUser } from "@/context/UserContext"

interface DashboardSidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function DashboardSidebar({ sidebarOpen, setSidebarOpen }: DashboardSidebarProps) {
  const pathname = usePathname()
  const { user } = useUser()
  const sidebarItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard", userOnly: true },
    { icon: Home, label: "Dashboard", href: "/dashboard/admin/dashboard", adminOnly: true },
    { icon: Home, label: "Profile", href: "/dashboard/profile" },
    { icon: BarChart3, label: "Add New", href: "/dashboard/listing/add-ads" },
    { icon: Users, label: "My Ads", href: "/dashboard/listing" },
    { icon: ShoppingCart, label: "Message", href: "/dashboard/messages" },
    { icon: Settings, label: "User Management", href: "/dashboard/admin/user-management", adminOnly: true },
    { icon: ShoppingCart, label: "Listing Management", href: "/dashboard/admin/listings", adminOnly: true },
  ]

  const filteredItems = sidebarItems?.filter(item => {
    if (item.adminOnly && user?.role !== "admin") return false;
    if (item.userOnly && user?.role === "admin") return false;
    return true;
  });


  const SidebarContent = () => (

    <div className="bg-gradient-to-b from-purple-700 to-violet-800 text-white h-full">
      <div className="p-6 pt-20">
        <h2 className="text-xl font-bold mb-6">User Menu</h2>
        <nav className="space-y-2">
          {filteredItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Button
                key={item.href}
                variant={isActive ? "secondary" : "ghost"}
                className={`w-full justify-start text-white hover:bg-white/20 ${isActive ? "bg-white/20" : ""}`}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            )
          })}
        </nav>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
      <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-64 min-h-[calc(100vh-80px)]">
        <SidebarContent />
      </aside>
    </>
  )
}
