"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageIcon, ZoomIn } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// Multiple products data
const productData = [
  {
    _id: "683ff6d8c7395c98401a8479",
    title: "abcd",
    price: 50,
    images: [
      "https://res.cloudinary.com/dtbmdvq12/image/upload/v1749022424/wgx6gugw48l-1749022424215-images-internet%20bill.jpg",
    ],
    category: "vehicles",
    status: "available",
  },
  {
    _id: "683ff6d8c7395c98401a8480",
    title: "iPhone 14 Pro",
    price: 800,
    images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
    category: "electronics",
    status: "available",
  },
  {
    _id: "683ff6d8c7395c98401a8481",
    title: "Gaming Laptop",
    price: 1200,
    images: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    category: "electronics",
    status: "sold",
  },
]

export function UserProductImages() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Get all images with product info
  const allImages = productData.flatMap((product) =>
    product.images.map((imageUrl, index) => ({
      url: imageUrl,
      productId: product._id,
      productTitle: product.title,
      productPrice: product.price,
      category: product.category,
      status: product.status,
      imageIndex: index,
    })),
  )

  // Get unique categories
  const categories = ["all", ...new Set(productData.map((p) => p.category))]

  // Filter images by category
  const filteredImages =
    selectedCategory === "all" ? allImages : allImages.filter((img) => img.category === selectedCategory)

  const totalImages = allImages.length

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-t-lg">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center">
              <ImageIcon className="mr-2 h-5 w-5 text-violet-700" />
              Product Images ({totalImages})
            </CardTitle>
            <CardDescription>Images from your {productData.length} listed products</CardDescription>
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="text-sm border rounded px-2 py-1"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </option>
            ))}
          </select>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredImages.map((image, index) => (
              <div key={`${image.productId}-${image.imageIndex}`} className="relative group">
                <div className="relative aspect-video rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
                  <img
                    src={image.url || "/placeholder.svg?height=200&width=300"}
                    alt={`${image.productTitle} - Image ${image.imageIndex + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200"></div>

                  {/* Zoom button */}
                  <Button
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>

                  {/* Status badge */}
                  <Badge
                    className={`absolute top-2 left-2 text-xs ${
                      image.status === "sold" ? "bg-blue-600" : "bg-green-600"
                    }`}
                  >
                    {image.status}
                  </Badge>
                </div>

                {/* Image info */}
                <div className="mt-2 space-y-1">
                  <h4 className="font-medium text-sm truncate">{image.productTitle}</h4>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      {image.category}
                    </Badge>
                    <span className="text-sm font-bold text-purple-700">${image.productPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-64 flex items-center justify-center border rounded-lg">
            <div className="text-center">
              <ImageIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No images found for selected category</p>
              <Button variant="outline" className="mt-2" onClick={() => setSelectedCategory("all")}>
                Show All Images
              </Button>
            </div>
          </div>
        )}

        {/* Summary */}
        {filteredImages.length > 0 && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex justify-between text-sm text-gray-600">
              <span>
                Showing {filteredImages.length} of {totalImages} images
              </span>
              <span>{categories.length - 1} categories</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
