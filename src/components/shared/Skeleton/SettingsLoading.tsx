import { Skeleton } from "@/components/ui/skeleton"

export default function SettingsLoading() {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <Skeleton className="h-8 w-32" />
            <div className="space-y-4">
                <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-4 w-4" />
                    </div>
                </div>
                <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-5 w-28" />
                        <Skeleton className="h-4 w-4" />
                    </div>
                </div>
                <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-5 w-36" />
                        <Skeleton className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}
