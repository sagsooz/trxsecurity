import { DashboardStats } from "@/components/admin/dashboard-stats"
import { ActivityLog } from "@/components/admin/activity-log"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="text-sm text-gray-400">Last updated: {new Date().toLocaleString()}</div>
      </div>

      <DashboardStats />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ActivityLog />

        <Card className="border-gray-800 bg-gray-900/50 text-white lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Backlinks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-gray-800 bg-black p-4">
              <p className="text-center text-gray-400">
                Backlink data will be displayed here once integrated with the database.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
