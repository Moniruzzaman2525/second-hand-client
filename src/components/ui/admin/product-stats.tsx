import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IProduct } from "@/types"
import { Package, Eye, CheckCircle, AlertTriangle, DollarSign, TrendingUp } from "lucide-react"



export function AdminProductStats({ data }: { data: IProduct[] }) {

  const totalProducts = data?.length
  const totalViews = data?.reduce((sum, product) => sum + (Number(product.views) || 0), 0)
  const approvedProducts = data?.filter((p) => p.permission === "accepted")?.length
  const pendingProducts = data?.filter((p) => p.permission === "pending")?.length
  const totalValue = data?.reduce((sum, product) => sum + product.price, 0)
  const averagePrice = totalProducts > 0 ? Math.round(totalValue / totalProducts) : 0
  const uniqueCategories = [...new Set(data?.map((p) => p.category))]?.length
  const totalImages = data?.reduce((sum, product) => sum + product.images?.length, 0)

  const stats = [
    {
      title: "Total Products",
      value: totalProducts?.toString(),
      description: `${uniqueCategories} categories`,
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Total Views",
      value: totalViews?.toString(),
      description: `Avg: ${totalProducts > 0 ? Math.round(totalViews / totalProducts) : 0} per product`,
      icon: Eye,
      color: "text-green-600",
    },
    {
      title: "Pending Approval",
      value: pendingProducts?.toString(),
      description: `${approvedProducts} approved`,
      icon: AlertTriangle,
      color: "text-yellow-600",
    },
    {
      title: "Total Value",
      value: `$${totalValue}`,
      description: `Avg: $${averagePrice}`,
      icon: DollarSign,
      color: "text-purple-600",
    },
    {
      title: "Product Images",
      value: totalImages?.toString(),
      description: `Avg: ${totalProducts > 0 ? Math.round(totalImages / totalProducts) : 0} per product`,
      icon: TrendingUp,
      color: "text-indigo-600",
    },
    {
      title: "Approval Rate",
      value: `${totalProducts > 0 ? Math.round((approvedProducts / totalProducts) * 100) : 0}%`,
      description: `${approvedProducts}/${totalProducts} approved`,
      icon: CheckCircle,
      color: "text-emerald-600",
    },
  ]

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-lg">
        <CardTitle className="flex items-center">
          <Package className="mr-2 h-5 w-5 text-purple-700" />
          Product Statistics
        </CardTitle>
        <CardDescription>Overview of all {totalProducts} marketplace products</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats?.map((stat, index) => (
            <div key={index} className="space-y-2 p-3 border rounded-lg">
              <div className="flex items-center space-x-2">
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                <span className="text-sm font-medium text-gray-600">{stat.title}</span>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
