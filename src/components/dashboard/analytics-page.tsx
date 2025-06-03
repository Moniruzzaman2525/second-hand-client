import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp, PieChart, Activity } from "lucide-react"

export function AnalyticsPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h2>
        <p className="text-gray-600">Detailed analytics and insights for your business.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Analytics</CardTitle>
            <CardDescription>Detailed revenue breakdown and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gradient-to-r from-[#537cd9]/10 to-[#6d90df]/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-16 w-16 text-[#537cd9] mx-auto mb-4" />
                <p className="text-gray-600">Advanced revenue analytics</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>Key performance indicators and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gradient-to-r from-[#6d90df]/10 to-[#537cd9]/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-16 w-16 text-[#6d90df] mx-auto mb-4" />
                <p className="text-gray-600">Performance tracking</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Behavior</CardTitle>
            <CardDescription>User engagement and behavior patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gradient-to-r from-[#537cd9]/10 to-[#6d90df]/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <PieChart className="h-16 w-16 text-[#537cd9] mx-auto mb-4" />
                <p className="text-gray-600">User behavior analysis</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Real-time Activity</CardTitle>
            <CardDescription>Live activity monitoring and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gradient-to-r from-[#6d90df]/10 to-[#537cd9]/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Activity className="h-16 w-16 text-[#6d90df] mx-auto mb-4" />
                <p className="text-gray-600">Real-time monitoring</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
