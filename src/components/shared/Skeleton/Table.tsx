"use client"

import { useState, useEffect } from "react"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ProductListingPage() {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState<Product[]>([])

    // Simulate loading data
    useEffect(() => {
        const timer = setTimeout(() => {
            setProducts([
                {
                    id: 1,
                    name: "Xinji Nothing 2 smartwatch",
                    category: "video game consoles",
                    stock: "available",
                    price: 20.0,
                    city: "Sherpur",
                    permission: "accepted",
                    image: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 2,
                    name: "asdf sdf",
                    category: "hobbies sports",
                    stock: "available",
                    price: 50.0,
                    city: "Sherpur",
                    permission: "pending",
                    image: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 3,
                    name: "sadf",
                    category: "vehicles",
                    stock: "available",
                    price: 8.0,
                    city: "Sherpur",
                    permission: "pending",
                    image: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 4,
                    name: "abcd",
                    category: "electronics",
                    stock: "available",
                    price: 50.0,
                    city: "Sherpur",
                    permission: "accepted",
                    image: "/placeholder.svg?height=40&width=40",
                },
                {
                    id: 5,
                    name: "abcd",
                    category: "electronics",
                    stock: "available",
                    price: 50.0,
                    city: "Sherpur",
                    permission: "accepted",
                    image: "/placeholder.svg?height=40&width=40",
                },
            ])
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="container mx-auto py-6">
           

            <div className="rounded-md border">
                <Table>
                    <TableHeader className="bg-gray-100">
                        <TableRow>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Stock</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>City</TableHead>
                            <TableHead>Permission</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading
                            ? // Skeleton loading state
                            Array.from({ length: 5 }).map((_, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Skeleton className="h-10 w-10 rounded-full" />
                                            <Skeleton className="h-4 w-[140px]" />
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-4 w-[120px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-4 w-[80px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-4 w-[60px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-4 w-[70px]" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-4 w-[80px]" />
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Skeleton className="h-8 w-8 rounded-full" />
                                            <Skeleton className="h-8 w-8 rounded-full" />
                                            <Skeleton className="h-8 w-8 rounded-full" />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                            : // Actual content
                            products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full overflow-hidden">
                                                <img
                                                    src={product.image || "/placeholder.svg"}
                                                    alt={product.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <span>{product.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                    <TableCell>$ {product.price.toFixed(2)}</TableCell>
                                    <TableCell>{product.city}</TableCell>
                                    <TableCell>
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs ${product.permission === "accepted"
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-yellow-100 text-yellow-600"
                                                }`}
                                        >
                                            {product.permission}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <button className="p-1 rounded-full hover:bg-gray-100">
                                                <Eye className="h-5 w-5 text-gray-500" />
                                            </button>
                                            <button className="p-1 rounded-full hover:bg-gray-100">
                                                <Pencil className="h-5 w-5 text-gray-500" />
                                            </button>
                                            <button className="p-1 rounded-full hover:bg-gray-100">
                                                <Trash2 className="h-5 w-5 text-gray-500" />
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-center space-x-2 mt-4">
                <button className="p-2 rounded-md hover:bg-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                    >
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>
                <button className="h-8 w-8 rounded-full bg-yellow-400 text-sm font-medium">1</button>
                <button className="h-8 w-8 rounded-full hover:bg-gray-100 text-sm font-medium">2</button>
                <button className="h-8 w-8 rounded-full hover:bg-gray-100 text-sm font-medium">3</button>
                <button className="p-2 rounded-md hover:bg-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                    >
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

// Type definition
interface Product {
    id: number
    name: string
    category: string
    stock: string
    price: number
    city: string
    permission: string
    image: string
}
