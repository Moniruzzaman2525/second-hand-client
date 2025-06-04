import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { IProduct } from "@/types"

export function UserProductStatus({ data }: { data: IProduct[] }) {

  const statusCounts = {
    available: data?.filter((p) => p.status === "available").length,
    sold: data?.filter((p) => p.status === "sold").length,
    pending: data?.filter((p) => p.permission === "pending").length,
    accepted: data?.filter((p) => p.permission === "accepted").length,
    rejected: data?.filter((p) => p.permission === "rejected").length,
  }

  const totalProducts = data?.length
  const getPercentage = (count: number) => (totalProducts > 0 ? Math.round((count / totalProducts) * 100) : 0)

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-lg">
        <CardTitle className="flex items-center">
          <Clock className="mr-2 h-5 w-5 text-purple-700" />
          Product Status Overview
        </CardTitle>
        <CardDescription>Status breakdown of your {totalProducts} products</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <h4 className="font-medium">Available Products</h4>
                <p className="text-sm text-gray-500">{getPercentage(statusCounts.available)}% of total products</p>
              </div>
            </div>
            <Badge className="bg-green-500">{statusCounts.available}</Badge>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-yellow-500" />
              <div>
                <h4 className="font-medium">Pending Approval</h4>
                <p className="text-sm text-gray-500">{getPercentage(statusCounts.pending)}% awaiting review</p>
              </div>
            </div>
            <Badge className="bg-yellow-500">{statusCounts.pending}</Badge>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <div>
                <h4 className="font-medium">Sold Products</h4>
                <p className="text-sm text-gray-500">{getPercentage(statusCounts.sold)}% completed sales</p>
              </div>
            </div>
            <Badge className="bg-blue-500">{statusCounts.sold}</Badge>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center space-x-3">
              <XCircle className="h-5 w-5 text-red-500" />
              <div>
                <h4 className="font-medium">Rejected Products</h4>
                <p className="text-sm text-gray-500">{getPercentage(statusCounts.rejected)}% not approved</p>
              </div>
            </div>
            <Badge className="bg-red-500">{statusCounts.rejected}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
