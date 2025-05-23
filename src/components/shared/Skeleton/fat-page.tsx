import { Skeleton } from "@/components/ui/skeleton"

export function FaqPageSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            {/* Heading skeleton */}
            <div className="mb-8 text-center">
                <Skeleton className="h-10 w-64 mx-auto" />
            </div>

            {/* FAQ items */}
            <div className="space-y-4">
                {Array.from({ length: 7 }).map((_, index) => (
                    <div key={index} className="border rounded-md p-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-5 w-5" />
                                <Skeleton className="h-5 w-[80%] max-w-md" />
                            </div>
                            <Skeleton className="h-5 w-5 rounded-full" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
