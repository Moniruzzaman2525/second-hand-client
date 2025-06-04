import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Users, Package, BarChart3 } from "lucide-react"
import Link from "next/link"

export function AdminQuickActions() {
  const actions = [
    {
      title: "Add Product",
      description: "Add new product to marketplace",
      icon: Plus,
      color: "bg-purple-600 hover:bg-purple-700",
      link: '/dashboard/listing/add-ads'
    },
    {
      title: "Manage Users",
      description: "View and manage users",
      icon: Users,
      color: "bg-violet-600 hover:bg-violet-700",
      link: '/dashboard/admin/user-management'
    },
    {
      title: "Product Reviews",
      description: "Review pending products",
      icon: Package,
      color: "bg-purple-600 hover:bg-purple-700",
      link: '/dashboard/admin/listings'
    },
    {
      title: "View Analytics",
      description: "Detailed analytics report",
      icon: BarChart3,
      color: "bg-violet-600 hover:bg-violet-700",
      link: '/dashboard/admin/dashboard'
    },
  ]

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-lg">
        <CardTitle>Admin Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions?.map((action, index) => (
            <Link href={action.link} key={index}
              className={`h-auto p-4 flex flex-col items-center space-y-2 ${action.color} text-white border-0`}
            >
              <action.icon className="h-6 w-6" />
              <div className="text-center">
                <div className="font-medium text-sm">{action.title}</div>
                <div className="text-xs opacity-90">{action.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
