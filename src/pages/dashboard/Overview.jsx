import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/context/AuthContext"
import {
  Users,
  Activity,
  Shield,
  TrendingUp,
} from "lucide-react"

export default function Overview() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.name} 👋
        </p>
      </div>

      {/* STATS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">
              Active Sessions
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">312</div>
            <p className="text-xs text-muted-foreground">
              Live users now
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">
              Your Role
            </CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Badge
              variant={user?.role === "admin" ? "destructive" : "secondary"}
            >
              {user?.role?.toUpperCase()}
            </Badge>
            <p className="mt-2 text-xs text-muted-foreground">
              Access level
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">
              Growth
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+24%</div>
            <p className="text-xs text-muted-foreground">
              Compared to last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CONTENT GRID */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* ACTIVITY */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "User John updated profile",
              "Admin created new account",
              "Password changed successfully",
              "New login from Chrome",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-md border p-3"
              >
                <span className="text-sm">{item}</span>
                <Badge variant="outline">Just now</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* INFO */}
        <Card>
          <CardHeader>
            <CardTitle>System Info</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              Status:{" "}
              <span className="font-medium text-green-600">
                Operational
              </span>
            </p>
            <p>
              Version: <span className="font-medium">v1.0.0</span>
            </p>
            <p>
              Last update:{" "}
              <span className="font-medium">Today</span>
            </p>

            {user?.role === "admin" && (
              <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
                Admin access enabled
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}