import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IProduct } from "@/types"
import { Package, DollarSign, Tag, Eye, TrendingUp } from "lucide-react"



export function UserProductStats({ data }: { data: IProduct[] }) {
  const totalProducts = data?.length
  const totalValue = data?.reduce((sum, product) => sum + product.price, 0)
  const totalViews = data?.reduce((sum, product) => sum + (Number(product.views) || 0), 0)
  const uniqueCategories = [...new Set(data?.map((product) => product.category))].length
  const previousMonthProducts = Math.floor(totalProducts * 0.8)
  const productGrowth = (((totalProducts - previousMonthProducts) / previousMonthProducts) * 100).toFixed(1)

  const previousMonthViews = Math.floor(totalViews * 0.7)
  const viewsGrowth = totalViews > 0 ? (((totalViews - previousMonthViews) / previousMonthViews) * 100).toFixed(1) : 0

  const stats = [
    {
      title: "Total Products",
      value: totalProducts?.toString(),
      description: `+${productGrowth}% from last month`,
      icon: Package,
      trend: "up",
    },
    {
      title: "Total Value",
      value: `$${totalValue?.toLocaleString()}`,
      description: "Combined listing value",
      icon: DollarSign,
      trend: "up",
    },
    {
      title: "Total Views",
      value: totalViews?.toString(),
      description: `+${viewsGrowth}% from last month`,
      icon: Eye,
      trend: "up",
    },
    {
      title: "Categories",
      value: uniqueCategories?.toString(),
      description: "Product categories",
      icon: Tag,
      trend: "neutral",
    },
  ]

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-lg">
        <CardTitle className="flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-purple-700" />
          My Product Statistics
        </CardTitle>
        <CardDescription>Overview of your {totalProducts} marketplace products</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats?.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center space-x-2">
                <stat.icon className="h-4 w-4 text-purple-700" />
                <span className="text-sm font-medium text-gray-600">{stat.title}</span>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.trend === "up" ? "text-green-600" : "text-gray-500"}`}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
