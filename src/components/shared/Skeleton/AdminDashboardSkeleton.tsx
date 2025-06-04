import { Skeleton } from "@/components/ui/skeleton"

export default function AdminDashboardSkeleton() {
    return (
        <div className="p-6 space-y-8">
            {/* Header Section Skeleton */}
            <div className="space-y-2">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-4 w-96" />
            </div>

            {/* Quick Actions Section Skeleton */}
            <div className="space-y-4">
                <Skeleton className="h-6 w-40" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="bg-purple-100 rounded-lg p-6 space-y-3">
                            <Skeleton className="h-8 w-8 rounded-full bg-purple-200" />
                            <Skeleton className="h-5 w-24 bg-purple-200" />
                            <Skeleton className="h-4 w-32 bg-purple-200" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Statistics Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Statistics Skeleton */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Skeleton className="h-5 w-5" />
                        <Skeleton className="h-6 w-36" />
                    </div>
                    <Skeleton className="h-4 w-48" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="border rounded-lg p-4 space-y-3">
                                <div className="flex items-center space-x-2">
                                    <Skeleton className="h-4 w-4 rounded-full" />
                                    <Skeleton className="h-4 w-20" />
                                </div>
                                <Skeleton className="h-8 w-12" />
                                <Skeleton className="h-3 w-16" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* User Statistics Skeleton */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Skeleton className="h-5 w-5" />
                        <Skeleton className="h-6 w-32" />
                    </div>
                    <Skeleton className="h-4 w-52" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="border rounded-lg p-4 space-y-3">
                                <div className="flex items-center space-x-2">
                                    <Skeleton className="h-4 w-4 rounded-full" />
                                    <Skeleton className="h-4 w-24" />
                                </div>
                                <Skeleton className="h-8 w-8" />
                                <Skeleton className="h-3 w-20" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
