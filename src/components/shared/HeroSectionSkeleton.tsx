import { Skeleton } from "@/components/ui/skeleton"
import { LightbulbIcon, Search } from "lucide-react"

export default function HeroSectionSkeleton() {
    return (
        <div className="w-full">
            {/* Navigation bar */}
            

            {/* Hero section */}
            <div className="relative w-full h-[480px]">
                {/* Background grid of images */}
                <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 opacity-60">
                    {Array(24)
                        .fill(0)
                        .map((_, i) => (
                            <Skeleton key={i} className="w-full h-full" />
                        ))}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-[1]" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-6 pt-8">
                    <div className="space-y-1">
                        <Skeleton className="h-14 w-[280px] rounded-md mx-auto" /> {/* Second Hand */}
                        <Skeleton className="h-14 w-[320px] rounded-md mx-auto" /> {/* Bangladesh */}
                    </div>

                    {/* Search bar */}
                    <div className="bg-white rounded-lg shadow-md p-3 flex gap-2 w-full max-w-3xl mt-4">
                        <div className="flex items-center gap-2 flex-1 border rounded-md px-2">
                            <LightbulbIcon className="text-gray-400 h-5 w-5" />
                            <Skeleton className="h-8 w-full rounded-md" />
                        </div>
                        <div className="border rounded-md px-2 w-[180px] flex items-center">
                            <Skeleton className="h-8 w-full rounded-md" />
                        </div>
                        <div className="bg-blue-500 rounded-md w-10 h-10 flex items-center justify-center">
                            <Search className="text-white h-5 w-5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div className="w-full flex flex-col items-center justify-center py-8 space-y-4">
                <Skeleton className="h-10 w-40 rounded-md bg-blue-100" /> {/* Buy and Sell Easily */}
                <Skeleton className="h-12 w-[320px] rounded-md" /> {/* Everything Second Hand */}
            </div>
        </div>
    )
}
