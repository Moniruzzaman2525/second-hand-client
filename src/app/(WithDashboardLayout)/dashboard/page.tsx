import { UserDashboard } from "@/components/dashboard/dashboard-overview"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { getAllUserProducts } from "@/services/Product";

export default async function Page() {
      const { data } = await getAllUserProducts();
    return (
        <DashboardLayout>
            <UserDashboard data={data} />
        </DashboardLayout>
    )
}
