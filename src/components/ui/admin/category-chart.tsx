import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Package } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const productData = [
  {
    _id: "683ff6d8c7395c98401a8479",
    title: "abcd",
    category: "vehicles",
    price: 50,
    permission: "pending",
    views: 0,
  },
  {
    _id: "67c9cbd4d8b60cf96cc46e8b",
    title: "Xinji Nothing 2 smartwatch",
    category: "video game consoles",
    price: 20,
    permission: "accepted",
    views: 108,
  },
]

export function AdminCategoryChart() {
  // Calculate category statistics
  const categoryStats = productData.reduce(
    (acc, product) => {
      const category = product.category
      if (!acc[category]) {
        acc[category] = {
          count: 0,
          totalValue: 0,
          totalViews: 0,
          approved: 0,
          pending: 0,
        }
      }
      acc[category].count++
      acc[category].totalValue += product.price
      acc[category].totalViews += product.views || 0
      if (product.permission === "accepted") acc[category].approved++
      if (product.permission === "pending") acc[category].pending++
      return acc
    },
    {} as Record<string, { count: number; totalValue: number; totalViews: number; approved: number; pending: number }>,
  )

  const categories = Object.entries(categoryStats)
  const colors = ["bg-purple-500", "bg-violet-500", "bg-indigo-500", "bg-blue-500"]

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-t-lg">
        <CardTitle className="flex items-center">
          <PieChart className="mr-2 h-5 w-5 text-violet-700" />
          Category Analytics
        </CardTitle>
        <CardDescription>Product distribution and performance by category</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {categories.map(([category, stats], index) => (
            <div key={category} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded ${colors[index % colors.length]}`}></div>
                  <h4 className="font-medium capitalize">{category}</h4>
                </div>
                <Badge className="bg-purple-600">{stats.count} products</Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center p-2 bg-gray-50 rounded">
                  <div className="font-bold text-lg">${stats.totalValue}</div>
                  <div className="text-gray-500">Total Value</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded">
                  <div className="font-bold text-lg">{stats.totalViews}</div>
                  <div className="text-gray-500">Total Views</div>
                </div>
                <div className="text-center p-2 bg-green-50 rounded">
                  <div className="font-bold text-lg text-green-600">{stats.approved}</div>
                  <div className="text-gray-500">Approved</div>
                </div>
                <div className="text-center p-2 bg-yellow-50 rounded">
                  <div className="font-bold text-lg text-yellow-600">{stats.pending}</div>
                  <div className="text-gray-500">Pending</div>
                </div>
              </div>

              <div className="flex justify-between text-xs text-gray-500">
                <span>Avg Value: ${Math.round(stats.totalValue / stats.count)}</span>
                <span>Avg Views: {Math.round(stats.totalViews / stats.count)}</span>
                <span>Approval Rate: {Math.round((stats.approved / stats.count) * 100)}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Package className="h-4 w-4 text-purple-600" />
              <span className="font-medium">Total Categories: {categories.length}</span>
            </div>
            <div className="text-gray-600">
              Most Popular: {categories.reduce((a, b) => (a[1].count > b[1].count ? a : b))[0]}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
