import { AdminProductStats } from "@/components/ui/admin/product-stats"
import { AdminRevenueChart } from "@/components/ui/admin/revenue-chart"
import { AdminCategoryChart } from "@/components/ui/admin/category-chart"
import { AdminQuickActions } from "@/components/ui/admin/quick-actions"
import { getAllProductsByAdmin } from "@/services/Admin"
import UserPage from "../ui/admin/user-pate"

export async function AdminDashboard() {
    const { data } = await getAllProductsByAdmin();
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h2>
                <p className="text-gray-600">Complete marketplace overview and management with real data.</p>
            </div>
            <AdminQuickActions />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AdminProductStats data={data} />
                <UserPage />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AdminRevenueChart />
                <AdminCategoryChart />
            </div>
        </div>
    )
}
