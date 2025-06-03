"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, BarChart3, Users, Settings, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"

const sidebarItems = [
  { icon: Home, label: "Profile", href: "/dashboard/profile" },
  { icon: BarChart3, label: "Add New", href: "/dashboard/listing/add-ads" },
  { icon: Users, label: "My Ads", href: "/dashboard/listing" },
  { icon: ShoppingCart, label: "Message", href: "/dashboard/messages" },
  { icon: Settings, label: "User Management", href: "/dashboard/admin/user-management" },
  { icon: ShoppingCart, label: "Listing Management", href: "/dashboard/admin/listings" },
]

interface DashboardSidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function DashboardSidebar({ sidebarOpen, setSidebarOpen }: DashboardSidebarProps) {
  const pathname = usePathname()

  const SidebarContent = () => (
    <div className="bg-gradient-to-b from-[#537cd9] to-[#6d90df] text-white h-full">
      <div className="p-6">
        {/* <h2 className="text-xl font-bold mb-6">Navigation</h2> */}
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
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

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 min-h-[calc(100vh-80px)]">
        <SidebarContent />
      </aside>
    </>
  )
}
