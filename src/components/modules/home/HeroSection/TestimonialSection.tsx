// components/TestimonialCarousel.tsx
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface Testimonial {
    name: string
    title: string
    testimonial: string
    rating: number
}

const testimonials: Testimonial[] = [
    {
        name: "Tasneema Jahan",
        title: "Project Co-ordinator",
        testimonial:
            "I have sold my Poco M2 Pro mobile set in the Second BD platform. With the help of Second BD online platform, I have sold it without any hassle. Thank you so much for the assistance.",
        rating: 5,
    },
    {
        name: "MD. Al-amin",
        title: "Account Executive",
        testimonial:
            "I have sold my household furniture at a good price in the Second BD platform. Their commission rate is very low. Great service. Totally satisfied. Go ahead, Second BD.",
        rating: 5,
    },
    {
        name: "MD. Maksud Khaleque",
        title: "HR Executive",
        testimonial:
            "I recently purchased a second-hand laptop from Second BD and I am very happy with my purchase. I highly recommend Second BD.",
        rating: 5,
    },
    {
        name: "Rina Shah",
        title: "Marketing Manager",
        testimonial:
            "The service was excellent! I sold my old fridge for a great price without any hassle. Highly recommend this platform.",
        rating: 4,
    },
    {
        name: "Anik Rahman",
        title: "Software Engineer",
        testimonial:
            "Selling my old phone on Second BD was a breeze! Great platform, low commission, and easy-to-use. Highly recommend it.",
        rating: 4,
    },
]

export function TestimonialCarousel() {
    return (
        <Carousel className="w-full">
            <CarouselContent className="-ml-1">
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                        <p className="text-gray-500">{testimonial.title}</p>
                                        <p className="text-gray-600 my-4">{testimonial.testimonial}</p>
                                        <div className="flex justify-center space-x-1">
                                            {Array.from({ length: testimonial.rating }, (_, i) => (
                                                <span key={i} className="text-yellow-400">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10" />
            <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10" />
        </Carousel>
    )
}
