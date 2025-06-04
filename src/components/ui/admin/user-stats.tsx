import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IAuthUser } from "@/types"
import { Users, UserCheck, UserX, Calendar, Mail, Clock } from "lucide-react"


export function AdminUserStats({ data }: { data: IAuthUser[] }) {
  const totalUsers = data?.length
  const activeUsers = data?.filter((u) => !u.isBlocked).length
  const blockedUsers = data?.filter((u) => u.isBlocked).length
  const uniqueNames = [...new Set(data?.map((u) => u.name))].length
  const uniqueEmails = [...new Set(data?.map((u) => u.email))].length

  // Calculate users registered today
  const today = new Date().toDateString()
  const newUsersToday = data?.filter((u) => {
    const userDate = new Date(u.createdAt).toDateString()
    return today === userDate
  }).length

  // Calculate users registered in May 2025
  const usersInMay2025 = data?.filter((u) => {
    const userDate = new Date(u.createdAt)
    return userDate.getMonth() === 4 && userDate.getFullYear() === 2025 // May is month 4 (0-indexed)
  }).length

  const stats = [
    {
      title: "Total Users",
      value: totalUsers?.toString(),
      description: `${uniqueEmails} unique emails`,
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Users",
      value: activeUsers?.toString(),
      description: `${blockedUsers} blocked users`,
      icon: UserCheck,
      color: "text-green-600",
    },
    {
      title: "Unique Names",
      value: uniqueNames?.toString(),
      description: `${totalUsers} total accounts`,
      icon: UserX,
      color: "text-orange-600",
    },
    {
      title: "New Today",
      value: newUsersToday?.toString(),
      description: "Users registered today",
      icon: Calendar,
      color: "text-purple-600",
    },
    {
      title: "May 2025 Signups",
      value: usersInMay2025?.toString(),
      description: "Registered in May",
      icon: Clock,
      color: "text-indigo-600",
    },
    {
      title: "Email Domains",
      value: "1",
      description: "gmail.com domain",
      icon: Mail,
      color: "text-emerald-600",
    },
  ]

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-t-lg">
        <CardTitle className="flex items-center">
          <Users className="mr-2 h-5 w-5 text-violet-700" />
          User Statistics
        </CardTitle>
        <CardDescription>Overview of all {totalUsers} marketplace users</CardDescription>
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
