import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, Eye, User, MapPin, Calendar, MoreHorizontal, CheckCircle, XCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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
    userId: {
      _id: "67c9ca88d8b60cf96cc46e3d",
      name: "MD MONIRUZZAMAN",
      phoneNumber: "01925716395",
    },
    status: "available",
    permission: "pending",
    category: "vehicles",
    createdAt: "2025-06-04T07:33:44.797Z",
    updatedAt: "2025-06-04T07:33:44.797Z",
    views: 0,
  },
  {
    _id: "67c9cbd4d8b60cf96cc46e8b",
    title: "Xinji Nothing 2 smartwatch",
    description: "This is good product",
    price: 20,
    condition: "used",
    images: [
      "https://res.cloudinary.com/dtbmdvq12/image/upload/v1741278164/j2n2jcez76-1741278163908-images-1000006775-720x640.jpg",
      "https://res.cloudinary.com/dtbmdvq12/image/upload/v1741278164/fhcmf3rvt3w-1741278163909-images-1000006774-720x640.jpg",
      "https://res.cloudinary.com/dtbmdvq12/image/upload/v1741278164/asora9kvrfm-1741278163909-images-1000006773-720x640.jpg",
      "https://res.cloudinary.com/dtbmdvq12/image/upload/v1741278164/t0xlskv3yd-1741278163933-images-1000006772-720x640.jpg",
      "https://res.cloudinary.com/dtbmdvq12/image/upload/v1741278164/ivy2p8fuo2i-1741278163934-images-1000006771-720x640.jpg",
    ],
    address: "Mubarokpur",
    location: "Sherpur",
    userId: {
      _id: "67c9cb10d8b60cf96cc46e59",
      name: "MD MONIRUZZAMAN",
      phoneNumber: "01925716395",
    },
    status: "available",
    permission: "accepted",
    category: "video game consoles",
    createdAt: "2025-03-06T16:22:44.545Z",
    updatedAt: "2025-05-27T10:11:44.961Z",
    views: 108,
  },
]

export function AdminRecentProducts() {
  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-lg">
        <CardTitle className="flex items-center">
          <Package className="mr-2 h-5 w-5 text-purple-700" />
          All Products ({productData.length})
        </CardTitle>
        <CardDescription>Complete list of marketplace products</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {productData.map((product) => (
            <div key={product._id} className="border rounded-lg p-4 space-y-4">
              {/* Header with title, price and actions */}
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{product.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-purple-700">${product.price}</span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <XCircle className="mr-2 h-4 w-4 text-red-600" />
                            Reject
                          </DropdownMenuItem>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-1">{product.description}</p>
                </div>
              </div>

              {/* Product details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">Seller:</span>
                    <span>{product.userId.name}</span>
                    <span className="text-gray-500">({product.userId.phoneNumber})</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">Location:</span>
                    <span>
                      {product.location}, {product.address}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">Listed:</span>
                    <span>{new Date(product.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Eye className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">Views:</span>
                    <span>{product.views || 0}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Package className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">Images:</span>
                    <span>{product.images.length}</span>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  {product.category}
                </Badge>
                <Badge
                  variant={product.permission === "accepted" ? "default" : "secondary"}
                  className={`text-xs ${
                    product.permission === "accepted"
                      ? "bg-green-600"
                      : product.permission === "pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                >
                  {product.permission}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {product.condition}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {product.status}
                </Badge>
              </div>

              {/* Product images preview */}
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.slice(0, 4).map((image, index) => (
                  <div key={index} className="flex-shrink-0">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.title} - Image ${index + 1}`}
                      className="w-16 h-16 object-cover rounded border"
                    />
                  </div>
                ))}
                {product.images.length > 4 && (
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded border flex items-center justify-center text-xs text-gray-500">
                    +{product.images.length - 4}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
