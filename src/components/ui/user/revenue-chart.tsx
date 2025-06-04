import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export function UserRevenueChart() {
  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-lg">
        <CardTitle className="flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-purple-700" />
          My Revenue Overview
        </CardTitle>
        <CardDescription>Monthly revenue from your products</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-64 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg flex items-center justify-center border border-purple-100">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 text-purple-700 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Your Revenue Analytics</p>
            <p className="text-sm text-gray-500 mt-2">Total potential: $70</p>
            <p className="text-sm text-gray-500">Average per product: $35</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
