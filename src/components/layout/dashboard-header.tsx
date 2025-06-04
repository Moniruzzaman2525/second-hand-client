"use client"

import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useUser } from "@/context/UserContext"
import { logout } from "@/services/AuthService"
import { protectedRoutes } from "@/constant"
import { usePathname, useRouter } from "next/navigation"

interface DashboardHeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function DashboardHeader({ setSidebarOpen }: DashboardHeaderProps) {
  const { user, setIsLoading } = useUser()
  const pathname = usePathname()
  const router = useRouter()
  const handleLogOut = () => {
    logout()
    setIsLoading(true)
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/")
    }
  }
  return (
    <header className="bg-gradient-to-r from-[#537cd9] to-[#6d90df] text-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link className="text-2xl font-bold" href="/" >Second BD</Link>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="text-[#537cd9]">{user?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="hidden md:inline">{user?.name}</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={handleLogOut}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
