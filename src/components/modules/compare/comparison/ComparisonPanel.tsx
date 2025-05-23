"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ArrowRight, BarChart2 } from "lucide-react"
import { ISingleProduct } from "@/types"
import { removeCompare } from "@/services/Compare"
import Link from "next/link"
import { useUser } from "@/context/UserContext"


export default function ComparisonPanel({ products }: { products: ISingleProduct[] }) {

    const { user } = useUser();

    const [items, setItems] = useState<ISingleProduct[]>(products)
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        if (user === null) {
            setItems([])
            return
        }
    }, [user])

    useEffect(() => {
        if (products) {
            setItems(products)
        }
    }, [products])

    useEffect(() => {
        const handleAddToCompare = (e: CustomEvent) => {
            setItems((prev) => {
                // Check if item already exists
                if (prev.some((item) => item._id === e.detail._id)) {
                    return prev
                }
                // Add new item (limit to 4 items)
                return prev.length < 4 ? [...prev, e.detail] : prev
            })
        }

        window.addEventListener("add-to-compare", handleAddToCompare as EventListener)

        return () => {
            window.removeEventListener("add-to-compare", handleAddToCompare as EventListener)
        }
    }, [])

    const removeItem = async (id: string) => {
        if (id) {
            const res = await removeCompare({ item: id });
            console.log(res)
            if (res.success) {
            }
        }
    }

    if (items?.length === 0) return null

    return (
        <div
            className={`fixed bottom-0 right-0 right-40 shadow-lg transition-all duration-300 z-50 ${isExpanded ? "h-auto" : "h-16"}`}
        >
            <div className="container relative h-[270px] bg-white mx-auto px-4">
                {isExpanded && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                        {items?.map((item) => (
                            <div key={item?._id} className="relative w-24 border rounded-lg">
                                <button
                                    onClick={() => removeItem(item?._id as string)}
                                    className="absolute top-0 right-0 bg-white rounded-full p-1 z-[1] shadow-md"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                                <div className="aspect-square relative">
                                    <Image
                                        width={100}
                                        height={100}
                                        src={
                                            item?.images[0] ||
                                            "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
                                        } alt={item.title} className="object-cover" />
                                </div>
                                <div className="p-3">
                                    <h3 className="font-medium truncate">{item.title}</h3>
                                    <p className="font-bold mt-1">
                                        <span className="font-semibold">$ {item?.price}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex justify-between items-center h-16">
                    {!isExpanded && <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        <BarChart2 className="h-5 w-5" />
                        Compare{" "}
                        <span className="inline-flex items-center justify-center bg-white text-blue-500 rounded-full w-5 h-5 text-xs font-bold">
                            {items?.length}
                        </span>
                    </button>}

                    {isExpanded && (
                        <Link href="/compare">
                            <button className="bg-yellow-400 text-black px-6 py-2 rounded-md flex items-center">
                                Compare
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button></Link>
                    )}
                </div>
                {isExpanded && <div className="absolute p-2 bg-white top-[-56px] right-0">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        <BarChart2 className="h-5 w-5" />
                        Compare{" "}
                        <span className="inline-flex items-center justify-center bg-white text-blue-500 rounded-full w-5 h-5 text-xs font-bold">
                            {items?.length}
                        </span>
                    </button>
                </div>}
            </div>
        </div>
    )
}
