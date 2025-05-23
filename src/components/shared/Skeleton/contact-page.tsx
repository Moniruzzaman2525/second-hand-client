import { Skeleton } from "@/components/ui/skeleton"

export function ContactPageSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8 bg-gray-100">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left side */}
                <div className="w-full md:w-1/3 space-y-6">
                    {/* Heading skeleton */}
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-10 w-32" />
                        <Skeleton className="h-10 w-16" />
                    </div>

                    {/* Help button skeleton */}
                    <Skeleton className="h-10 w-40 rounded-md" />

                    {/* Subheading skeleton */}
                    <Skeleton className="h-8 w-48" />

                    {/* Text paragraph skeleton */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-[90%]" />
                    </div>

                    {/* Social icons skeleton */}
                    <div className="flex gap-3 pt-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                </div>

                {/* Right side - Form */}
                <div className="w-full md:w-2/3">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        {/* Form header skeleton */}
                        <div className="mb-6 space-y-2">
                            <Skeleton className="h-6 w-48" />
                            <Skeleton className="h-4 w-64" />
                        </div>

                        {/* Form fields skeleton */}
                        <div className="space-y-6">
                            {/* Name field */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-1">
                                    <Skeleton className="h-5 w-16" />
                                    <Skeleton className="h-3 w-3 rounded-full" />
                                </div>
                                <Skeleton className="h-12 w-full rounded-md" />
                            </div>

                            {/* Email field */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-1">
                                    <Skeleton className="h-5 w-16" />
                                    <Skeleton className="h-3 w-3 rounded-full" />
                                </div>
                                <Skeleton className="h-12 w-full rounded-md" />
                            </div>

                            {/* Phone field */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-1">
                                    <Skeleton className="h-5 w-16" />
                                    <Skeleton className="h-3 w-3 rounded-full" />
                                </div>
                                <Skeleton className="h-12 w-full rounded-md" />
                            </div>

                            {/* Message field */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-1">
                                    <Skeleton className="h-5 w-24" />
                                    <Skeleton className="h-3 w-3 rounded-full" />
                                </div>
                                <Skeleton className="h-32 w-full rounded-md" />
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-center gap-2">
                                <Skeleton className="h-5 w-5 rounded" />
                                <Skeleton className="h-4 w-32" />
                            </div>

                            {/* Submit button */}
                            <div className="flex justify-end">
                                <Skeleton className="h-12 w-32 rounded-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
