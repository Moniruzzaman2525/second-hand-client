import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Mail, Calendar, MoreHorizontal, Shield, Ban } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const userData = [
  {
    _id: "682bf0cf2d601603151d809f",
    name: "MD MONIRUZZAMAN",
    email: "web.moniruzzaman541@gmail.com",
    role: "user",
    isBlocked: false,
    createdAt: "2025-05-20T03:02:39.335Z",
    updatedAt: "2025-05-20T03:02:39.335Z",
  },
  {
    _id: "682befce317d610f450a4792",
    name: "MD MONIRUZZAMAN",
    email: "web.moniruzzaman41@gmail.com",
    role: "user",
    isBlocked: false,
    createdAt: "2025-05-20T02:58:22.669Z",
    updatedAt: "2025-05-20T02:58:22.669Z",
  },
  {
    _id: "682bef31317d610f450a478f",
    name: "MD MONIRUZZAMAN",
    email: "web.moniruzzaman5@gmail.com",
    role: "user",
    isBlocked: false,
    createdAt: "2025-05-20T02:55:45.302Z",
    updatedAt: "2025-05-20T02:55:45.302Z",
  },
  {
    _id: "682beefe317d610f450a478c",
    name: "MD MONIRUZZAMAN",
    email: "web.moniruzzafdsfmsdfccffsdfsdff1ffdd@gmail.com",
    role: "user",
    isBlocked: false,
    createdAt: "2025-05-20T02:54:54.373Z",
    updatedAt: "2025-05-20T02:54:54.373Z",
  },
  {
    _id: "682beecbb90e980642beadb8",
    name: "MD MONIRUZZAMAN",
    email: "web.moniruzzafdsfmsdfccfff1ffdd@gmail.com",
    role: "user",
    isBlocked: false,
    createdAt: "2025-05-20T02:54:03.486Z",
    updatedAt: "2025-05-20T02:54:03.486Z",
  },
]

export function AdminRecentUsers() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
  }

  return (
    <Card>
      <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-t-lg">
        <CardTitle className="flex items-center">
          <Users className="mr-2 h-5 w-5 text-violet-700" />
          All Users ({userData.length})
        </CardTitle>
        <CardDescription>Complete list of marketplace users</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {userData.map((user) => {
            const { date, time } = formatDate(user.createdAt)
            return (
              <div key={user._id} className="border rounded-lg p-4 space-y-3">
                {/* User header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback className="bg-purple-100 text-purple-700">
                        {getInitials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user.name}</h4>
                      <p className="text-sm text-gray-500">ID: {user._id.slice(-8)}</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Shield className="mr-2 h-4 w-4" />
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Ban className="mr-2 h-4 w-4" />
                        Block User
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* User details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Email:</span>
                      <span className="truncate">{user.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Joined:</span>
                      <span>
                        {date} at {time}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Shield className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Role:</span>
                      <span className="capitalize">{user.role}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="font-medium">Last Updated:</span>
                      <span>{formatDate(user.updatedAt).date}</span>
                    </div>
                  </div>
                </div>

                {/* Status badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={user.isBlocked ? "destructive" : "default"}
                    className={`text-xs ${!user.isBlocked ? "bg-green-600" : ""}`}
                  >
                    {user.isBlocked ? "Blocked" : "Active"}
                  </Badge>
                  <Badge variant="outline" className="text-xs capitalize">
                    {user.role}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Gmail User
                  </Badge>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
