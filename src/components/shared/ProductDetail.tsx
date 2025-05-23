"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Heart, Share2, Flag, ChevronLeft, ChevronRight } from "lucide-react"

export default function ProductListing() {
    const [imageIndex, setImageIndex] = useState(1)
    const totalImages = 5

    const nextImage = () => {
        setImageIndex((prev) => (prev === totalImages ? 1 : prev + 1))
    }

    const prevImage = () => {
        setImageIndex((prev) => (prev === 1 ? totalImages : prev - 1))
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                    <div className="relative aspect-square">
                        <Card className="w-full h-full flex items-center justify-center">
                            <CardContent className="flex flex-col items-center justify-center h-full w-full p-8">
                                <Skeleton className="w-32 h-32 rounded-full mb-6" />
                                <Skeleton className="h-6 w-40 mb-2" />
                                <Skeleton className="h-4 w-24 mb-4" />
                                <div className="flex space-x-2">
                                    <Skeleton className="w-2 h-2 rounded-full" />
                                    <Skeleton className="w-2 h-2 rounded-full" />
                                    <Skeleton className="w-2 h-2 rounded-full" />
                                    <Skeleton className="w-2 h-2 rounded-full" />
                                    <Skeleton className="w-2 h-2 rounded-full" />
                                </div>
                            </CardContent>
                        </Card>

                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
                            onClick={nextImage}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>

                        <div className="absolute bottom-2 right-2 bg-white border text-slate-600 text-xs px-2 py-1 rounded shadow-sm">
                            {imageIndex} / {totalImages}
                        </div>
                    </div>

                    <div className="flex items-center text-sm space-x-4">
                        <div className="flex items-center space-x-2">
                            <Skeleton className="h-4 w-4 rounded" />
                            <Skeleton className="h-4 w-20" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Skeleton className="h-4 w-4 rounded" />
                            <Skeleton className="h-4 w-16" />
                        </div>
                    </div>

                    <div>
                        <Skeleton className="h-8 w-80 mb-3" />
                        <div className="flex flex-wrap gap-2 my-3">
                            <Skeleton className="h-6 w-32 rounded-full" />
                            <Skeleton className="h-6 w-16 rounded-full" />
                        </div>
                        <Skeleton className="h-10 w-20 mt-2" />
                    </div>

                    <div className="space-y-3 bg-slate-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2">
                            <Skeleton className="h-4 w-4 rounded" />
                            <Skeleton className="h-4 w-32" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Skeleton className="h-4 w-4 rounded" />
                            <Skeleton className="h-4 w-40" />
                        </div>
                    </div>
                </div>

                <div>
                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-4">
                                    <Avatar className="h-12 w-12">
                                        <AvatarFallback>
                                            <Skeleton className="h-6 w-6 rounded" />
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-2">
                                        <Skeleton className="h-5 w-32" />
                                        <Skeleton className="h-4 w-28" />
                                        <div className="flex items-center space-x-2">
                                            <Skeleton className="h-2 w-2 rounded-full" />
                                            <Skeleton className="h-3 w-20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                            <div className="flex items-center space-x-2 mb-2">
                                <Skeleton className="h-4 w-4 rounded" />
                                <Skeleton className="h-4 w-16" />
                            </div>
                            <Skeleton className="h-9 w-full rounded-md" />
                        </CardContent>
                        <Separator />
                        <CardContent className="pt-4 pb-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <Skeleton className="h-4 w-4 rounded" />
                                    <Skeleton className="h-4 w-24" />
                                </div>
                                <Skeleton className="h-8 w-8 rounded-full" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Skeleton className="h-9 w-full rounded-md" />
                        </CardFooter>
                    </Card>

                    <div className="flex justify-center space-x-6 mt-4">
                        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                            <Share2 className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                            <Flag className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
