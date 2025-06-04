"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, DollarSign, Eye, MoreHorizontal, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

// Multiple products data
const productData = [
  {
    _id: "683ff6d8c7395c98401a8479",
    title: "abcd",
    description: "abcd",
    price: 50,
    condition: "new",
    images: [
      "https://res.cloudinary.com/dtbmdvq12/image/upload/v1749022424/wgx6gugw48l-1749022424215-images-internet%20bill.jpg",
    ],
    address: "asdf",
    location: "asdf",
    status: "available",
    permission: "pending",
    category: "vehicles",
    views: 0,
    createdAt: "2025-06-04T07:33:44.797Z",
  },
  {
    _id: "683ff6d8c7395c98401a8480",
    title: "iPhone 14 Pro",
    description: "Excellent condition iPhone 14 Pro with original box",
    price: 800,
    condition: "used",
    images: ["https://example.com/iphone.jpg"],
    address: "Dhaka",
    location: "Dhaka",
    status: "available",
    permission: "accepted",
    category: "electronics",
    views: 45,
    createdAt: "2025-06-03T07:33:44.797Z",
  },
  {
    _id: "683ff6d8c7395c98401a8481",
    title: "Gaming Laptop",
    description: "High performance gaming laptop with RTX 4060",
    price: 1200,
    condition: "new",
    images: ["https://example.com/laptop.jpg"],
    address: "Chittagong",
    location: "Chittagong",
    status: "sold",
    permission: "accepted",
    category: "electronics",
    views: 120,
    createdAt: "2025-06-02T07:33:44.797Z",
  },
]

export function UserRecentProducts() {
  const [showAll, setShowAll] = useState(false)
  const [sortBy, setSortBy] = useState<"date" | "price" | "views">("date")

  // Sort products based on selected criteria
  const sortedProducts = [...productData].sort((a, b) => {
    switch (sortBy) {
      case "price":
        return b.price - a.price
      case "views":
        return (b.views || 0) - (a.views || 0)
      case "date":
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
  })

  const displayedProducts = showAll ? sortedProducts : sortedProducts.slice(0, 3)

  const getStatusColor = (status: string, permission: string) => {
    if (status === "sold") return "bg-blue-600"
    if (permission === "pending") return "bg-yellow-500"
    if (permission === "accepted") return "bg-green-600"
    return "bg-gray-500"
  }

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-lg">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center">
              <Package className="mr-2 h-5 w-5 text-purple-700" />
              My Products ({productData.length})
            </CardTitle>
            <CardDescription>Your products on the marketplace</CardDescription>
          </div>
          <div className="flex space-x-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "date" | "price" | "views")}
              className="text-sm border rounded px-2 py-1"
            >
              <option value="date">Sort by Date</option>
              <option value="price">Sort by Price</option>
              <option value="views">Sort by Views</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {displayedProducts.map((product) => (
            <div
              key={product._id}
              className="flex flex-col space-y-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{product.title}</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                </div>
                <div className="flex items-center text-lg font-bold text-purple-700 ml-4">
                  <DollarSign className="h-4 w-4 mr-1" />
                  {product.price.toLocaleString()}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  {product.category}
                </Badge>
                <Badge className={`text-xs text-white ${getStatusColor(product.status, product.permission)}`}>
                  {product.status === "sold" ? "Sold" : product.permission}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {product.condition}
                </Badge>
                <div className="flex items-center text-xs text-gray-500 ml-auto">
                  <Eye className="h-3 w-3 mr-1" />
                  {product.views || 0} views
                </div>
              </div>

              <div className="flex justify-between text-xs text-gray-500">
                <span>📍 {product.location}</span>
                <span>Listed: {new Date(product.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>

        {productData.length > 3 && (
          <div className="mt-4 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="text-purple-700 border-purple-700 hover:bg-purple-50"
            >
              {showAll ? "Show Less" : `Show All ${productData.length} Products`}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
