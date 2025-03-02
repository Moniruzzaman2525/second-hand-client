"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {

        const term = searchParams.get("search");
        if (term) {
            setSearchTerm(term);
            setDebouncedSearchTerm(term);
        }
    }, [searchParams]);

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);


        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    useEffect(() => {

        if (debouncedSearchTerm) {
            const params = new URLSearchParams(searchParams.toString());
            params.set("search", debouncedSearchTerm);
            router.push(`${pathname}?${params.toString()}`, { scroll: false });
        } else {
            const params = new URLSearchParams(searchParams.toString());
            params.delete("search");
            router.push(`${pathname}?${params.toString()}`, { scroll: false });
        }
    }, [debouncedSearchTerm, pathname, router, searchParams]);

    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="I'm looking for..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-10 border rounded-md"
            />
        </div>
    );
};

export default SearchInput;
