import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart } from "lucide-react"

export function UserCategoryChart() {
  // Only showing categories for this user's products
  const categories = [
    { name: "Vehicles", count: 1, color: "bg-purple-500" },
    { name: "Video Game Consoles", count: 1, color: "bg-violet-500" },
  ]

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-t-lg">
        <CardTitle className="flex items-center">
          <PieChart className="mr-2 h-5 w-5 text-violet-700" />
          My Category Distribution
        </CardTitle>
        <CardDescription>Your products across categories</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded ${category.color}`}></div>
                <span className="text-sm font-medium">{category.name}</span>
              </div>
              <div className="text-sm text-gray-600">
                {category.count} product{category.count !== 1 ? "s" : ""}
              </div>
            </div>
          ))}
          <div className="pt-4 border-t">
            <div className="text-center text-sm text-gray-500">Your Categories: {categories.length}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
