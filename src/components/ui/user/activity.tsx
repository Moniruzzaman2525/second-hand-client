import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

export function UserActivity() {
  const activities = [
    {
      action: "Product Listed",
      item: "abcd",
      time: "Today at 7:33 AM",
      status: "Pending Approval",
    },
    {
      action: "Product View",
      item: "Xinji Nothing 2 smartwatch",
      time: "Yesterday at 3:45 PM",
      status: "108 total views",
    },
    {
      action: "Product Approved",
      item: "Xinji Nothing 2 smartwatch",
      time: "Mar 6, 2025",
      status: "Active",
    },
    {
      action: "Account Login",
      item: "Security Alert",
      time: "Mar 5, 2025",
      status: "Successful",
    },
  ]

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-t-lg">
        <CardTitle className="flex items-center">
          <Clock className="mr-2 h-5 w-5 text-violet-700" />
          Recent Activity
        </CardTitle>
        <CardDescription>Your recent marketplace activity</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
              <div className="h-2 w-2 mt-2 rounded-full bg-purple-600"></div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{activity.action}</h4>
                <p className="text-xs text-gray-600">{activity.item}</p>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">{activity.time}</span>
                  <span className="text-xs font-medium text-purple-700">{activity.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
