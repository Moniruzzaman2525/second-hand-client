import { Skeleton } from "@/components/ui/skeleton"

export function AboutPageSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image skeleton */}
                <div className="w-full md:w-1/2">
                    <Skeleton className="w-full aspect-[4/3] rounded-lg" />
                </div>

                {/* Content skeleton */}
                <div className="w-full md:w-1/2 space-y-4">
                    {/* Button skeleton */}
                    <div className="flex justify-start mb-4">
                        <Skeleton className="h-10 w-24 rounded-md" />
                    </div>

                    {/* Heading skeleton */}
                    <Skeleton className="h-10 w-full max-w-md" />

                    {/* Paragraph skeletons */}
                    <div className="space-y-3">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-[90%]" />
                        <Skeleton className="h-4 w-[95%]" />
                    </div>

                    <div className="space-y-3 pt-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-[85%]" />
                    </div>

                    <div className="space-y-3 pt-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-[80%]" />
                    </div>

                    <div className="space-y-3 pt-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-[75%]" />
                    </div>

                    {/* Button skeleton */}
                    <div className="pt-4">
                        <Skeleton className="h-12 w-40 rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    )
}
