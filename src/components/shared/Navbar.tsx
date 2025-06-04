"use client"

import { useState } from "react"
import { Menu, X, User, PlusIcon, LogOut, ChevronDown } from "lucide-react"
import logo from "../../app/assets/logo.png"
import Image from "next/image"
import Link from "next/link"
import { useUser } from "@/context/UserContext"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { logout } from "@/services/AuthService"
import { protectedRoutes } from "@/constant"
import { usePathname, useRouter } from "next/navigation"
import MegaMenu from "./MegaMenu"

const navbarItem = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Products",
        href: "/products",
        hasMegaMenu: true,
    },
    // {
    //     name: "Favorite",
    //     href: "/favorites",
    // },
    {
        name: "About",
        href: "/about-us",
    },
    {
        name: "Contact",
        href: "/contact-us",
    },
    {
        name: "FAQ",
        href: "/faq",
    },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState("")
    const [megaMenuOpen, setMegaMenuOpen] = useState(false)
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

    const handleNavItemHover = (itemName: string, hasMegaMenu?: boolean) => {
        setActive(itemName)
        if (hasMegaMenu) {
            setMegaMenuOpen(true)
        }
    }

    const handleNavItemLeave = (hasMegaMenu?: boolean) => {
        if (!hasMegaMenu) {
            setActive("")
        }
    }

    return (
        <div className="relative">
            <nav className="bg-yellow-400 border-b w-full fixed top-0 left-0 z-50">
                <div className="md:container mx-auto px-3 md:px-40 py-3 flex justify-between items-center">
                    <div className="md:hidden border rounded-full p-2 flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-black text-2xl">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-black flex items-center">
                            <Image
                                src={logo || "/placeholder.svg"}
                                alt="Logo"
                                width={200}
                                height={200}
                                className="mr-2 sm:w-auto sm:h-auto max-w-[150px] md:max-w-[200px]"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-10">
                        {navbarItem.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => handleNavItemHover(item.name, item.hasMegaMenu)}
                                onMouseLeave={() => handleNavItemLeave(item.hasMegaMenu)}
                            >
                                <Link
                                    href={item.href}
                                    className={`relative text-[#374B5C] font-medium text-lg transition-colors flex items-center ${active === item.name ? "text-red-600" : ""}`}
                                >
                                    <span
                                        className={`absolute -left-5 top-1/2 transform -translate-y-1/2 text-blue-500 transition-all duration-300 ease-in-out ${active === item.name ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-2"}`}
                                    >
                                        •
                                    </span>
                                    {item.name}
                                    {item.hasMegaMenu && <ChevronDown className="ml-1 h-4 w-4" />}
                                </Link>
                            </div>
                        ))}
                    </div>
                    {user?.email && <Link
                        onMouseEnter={() => setActive("favorite")}
                        onMouseLeave={() => setActive("")}
                        className={`relative text-[#374B5C] font-medium text-lg transition-colors ${active === "favorite" ? "text-red-600" : ""}`}
                        href="/favorites"
                    >
                        <span
                            className={`absolute -left-5 top-1/2 transform -translate-y-1/2 text-blue-500 transition-all duration-300 ease-in-out ${active === "favorite" ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-2"}`}
                        >
                            •
                        </span>
                        Favorites
                    </Link>}
                    <Link href="/dashboard/listing/add-ads">
                        <Button className="hidden md:flex items-center gap-2 px-6 py-2 rounded-lg font-medium bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] transition-all">
                            Post Your Ad <PlusIcon />
                        </Button>
                    </Link>
                    {user?.email ? (
                        <>
                            <div className="relative group">
                                <Avatar>
                                    <AvatarImage>
                                        <User className="text-black cursor-pointer" />
                                    </AvatarImage>
                                    <AvatarFallback>
                                        <User className="text-black cursor-pointer" />
                                    </AvatarFallback>
                                </Avatar>
                                <div className="absolute top-[55px] right-[10px] md:right-[-80px] w-[250px] bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform group-hover:scale-x-100 group-hover:scale-y-100 scale-x-0 scale-y-0">
                                    <div className="py-2">
                                        <Link
                                            href={`/dashboard/profile`}
                                            className="block text-[#374B5C] font-medium px-4 py-3 hover:bg-[#f8fafd]"
                                        >
                                            <span>My Profile</span>
                                        </Link>
                                        <Link
                                            href={`/dashboard/profile`}
                                            className="block text-[#374B5C] font-medium px-4 py-3 hover:bg-[#f8fafd]"
                                        >
                                            Dashboard
                                        </Link>
                                        <div className="border-t border-gray-200">
                                            <Link
                                                href="#"
                                                onClick={handleLogOut}
                                                className="flex gap-5 font-medium px-4 py-3 hover:bg-[#f8fafd]"
                                            >
                                                <LogOut /> <span>Log Out</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <Link
                            onMouseEnter={() => setActive("login")}
                            onMouseLeave={() => setActive("")}
                            className={`relative text-[#374B5C] font-medium text-lg transition-colors ${active === "login" ? "text-red-600" : ""}`}
                            href="/login"
                        >
                            <span
                                className={`absolute -left-5 top-1/2 transform -translate-y-1/2 text-blue-500 transition-all duration-300 ease-in-out ${active === "login" ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-2"}`}
                            >
                                •
                            </span>
                            Login
                        </Link>
                    )}
                </div>

                {isOpen && (
                    <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full py-4 px-6 space-y-4 z-[999]">
                        {navbarItem.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`block text-[#374B5C] font-medium text-lg transition-colors ${active === item.name ? "text-red-600" : ""}`}
                                    onMouseEnter={() => setActive(item.name)}
                                    onMouseLeave={() => setActive("Home")}
                                >
                                    <div className="flex items-center justify-between">
                                        {item.name}
                                        {item.hasMegaMenu && (
                                            <ChevronDown
                                                className="h-4 w-4 cursor-pointer"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setMegaMenuOpen(!megaMenuOpen)
                                                }}
                                            />
                                        )}
                                    </div>
                                </Link>
                                {item.hasMegaMenu && megaMenuOpen && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        <div className="grid grid-cols-1 gap-2">
                                            <div>
                                                <h4 className="font-semibold text-sm text-gray-500 mb-1">Electronics</h4>
                                                <ul className="space-y-1">
                                                    <li>
                                                        <Link href="/products/electronics/phones" className="text-sm hover:text-blue-500">
                                                            Phones
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/electronics/laptops" className="text-sm hover:text-blue-500">
                                                            Laptops
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/electronics/tablets" className="text-sm hover:text-blue-500">
                                                            Tablets
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-sm text-gray-500 mb-1">Vehicles</h4>
                                                <ul className="space-y-1">
                                                    <li>
                                                        <Link href="/products/vehicles/cars" className="text-sm hover:text-blue-500">
                                                            Cars
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/vehicles/motorcycles" className="text-sm hover:text-blue-500">
                                                            Motorcycles
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </nav>

            {megaMenuOpen && active === "Products" && (
                <div
                    className="hidden md:block absolute w-full left-0 top-[60px] z-40 bg-white shadow-lg"
                    onMouseEnter={() => {
                        setMegaMenuOpen(true)
                        setActive("Products")
                    }}
                    onMouseLeave={() => {
                        setMegaMenuOpen(false)
                        setActive("")
                    }}
                >
                    <MegaMenu />
                </div>
            )}
        </div>
    )
}

export default Navbar
