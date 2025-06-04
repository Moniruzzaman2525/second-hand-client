import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, Eye, Package } from "lucide-react"

const productData = [
  {
    _id: "683ff6d8c7395c98401a8479",
    title: "abcd",
    price: 50,
    views: 0,
    category: "vehicles",
    createdAt: "2025-06-04T07:33:44.797Z",
    permission: "pending",
  },
  {
    _id: "67c9cbd4d8b60cf96cc46e8b",
    title: "Xinji Nothing 2 smartwatch",
    price: 20,
    views: 108,
    category: "video game consoles",
    createdAt: "2025-03-06T16:22:44.545Z",
    permission: "accepted",
  },
]

export function AdminRevenueChart() {
  const totalValue = productData.reduce((sum, product) => sum + product.price, 0)
  const totalViews = productData.reduce((sum, product) => sum + (product.views || 0), 0)
  const averagePrice = Math.round(totalValue / productData.length)
  const averageViews = Math.round(totalViews / productData.length)
  const approvedValue = productData
    .filter((p) => p.permission === "accepted")
    .reduce((sum, product) => sum + product.price, 0)

  // Monthly breakdown (mock data based on creation dates)
  const monthlyData = [
    { month: "March 2025", products: 1, value: 20, views: 108 },
    { month: "June 2025", products: 1, value: 50, views: 0 },
  ]

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-lg">
        <CardTitle className="flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-purple-700" />
          Revenue & Performance Analytics
        </CardTitle>
        <CardDescription>Marketplace financial and engagement overview</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-700">${totalValue}</div>
            <div className="text-sm text-gray-600">Total Value</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-700">${approvedValue}</div>
            <div className="text-sm text-gray-600">Approved Value</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-700">{totalViews}</div>
            <div className="text-sm text-gray-600">Total Views</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
            <Package className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-indigo-700">{productData.length}</div>
            <div className="text-sm text-gray-600">Products</div>
          </div>
        </div>

        {/* Monthly Breakdown */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Monthly Breakdown</h4>
          {monthlyData.map((month, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <h5 className="font-medium">{month.month}</h5>
                <div className="text-lg font-bold text-purple-700">${month.value}</div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-bold">{month.products}</div>
                  <div className="text-gray-500">Products</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">{month.views}</div>
                  <div className="text-gray-500">Views</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">${month.value}</div>
                  <div className="text-gray-500">Value</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="font-bold">${averagePrice}</div>
              <div className="text-gray-500">Avg Price</div>
            </div>
            <div className="text-center">
              <div className="font-bold">{averageViews}</div>
              <div className="text-gray-500">Avg Views</div>
            </div>
            <div className="text-center">
              <div className="font-bold">{Math.round((approvedValue / totalValue) * 100)}%</div>
              <div className="text-gray-500">Approved Rate</div>
            </div>
            <div className="text-center">
              <div className="font-bold">${Math.round(totalValue / totalViews || 0)}</div>
              <div className="text-gray-500">Value per View</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
