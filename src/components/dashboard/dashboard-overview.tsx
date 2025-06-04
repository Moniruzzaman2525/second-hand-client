"use client"

import { useUser } from "@/context/UserContext"
import { UserLocationMap } from "../ui/user/location-map"
import { UserProductStats } from "../ui/user/product-stats"
import { UserProductStatus } from "../ui/user/product-status"
import { UserQuickActions } from "../ui/user/quick-actions"
import { IProduct } from "@/types"


export function UserDashboard({ data }: { data: IProduct[] }) {
  const { user } = useUser()
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h2>
        <p className="text-gray-600">Welcome back, {user?.name}! Heres your marketplace activity.</p>
      </div>

      <UserQuickActions />
      <UserProductStats data={data} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserProductStatus data={data} />
        <UserLocationMap data={data} />
      </div>
    </div>
  )
}
