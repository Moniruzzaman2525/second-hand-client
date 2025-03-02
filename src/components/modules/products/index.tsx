"use client"
import { IMeta, IProduct } from "@/types";
import FilterSidebar from "./filterSidebar";
import ProductCard from "@/components/ui/core/ProductCard";
import TablePagination from "@/components/ui/core/SHTable/TablePagination";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const AllProducts = ({
    products,
    meta,
}: {
    products: IProduct[];
    meta: IMeta;
}) => {
    const [searchTerm, setSearchTerm] = useState(""); // State for search term
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Initialize search term from URL search params if available
        const term = searchParams.get("search");
        if (term) {
            setSearchTerm(term);
        }
    }, [searchParams]);

    const handleSearch = (query: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (query) {
            params.set("search", query); // Set search term in URL
        } else {
            params.delete("search"); // Remove search term from URL if empty
        }
        router.push(`${pathname}?${params.toString()}`, {
            scroll: false,
        });
    };

    return (
        <div className="flex gap-8 my-10">
            <div>
                <FilterSidebar />
            </div>
            <div>
                {/* Search input */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search Products..."
                        value={searchTerm}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSearchTerm(value);
                            handleSearch(value); // Update URL with the search term
                        }}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="grid grid-cols-3 gap-8">
                    {products?.map((product: IProduct, idx: number) => (
                        <ProductCard key={idx} product={product} />
                    ))}
                </div>
                <TablePagination totalPage={meta?.totalPage} />
            </div>
        </div>
    );
};

export default AllProducts;
