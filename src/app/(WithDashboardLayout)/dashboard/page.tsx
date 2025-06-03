import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"

export default function Page() {
    return (
        <DashboardLayout>
            <DashboardOverview />
        </DashboardLayout>
    )
}
