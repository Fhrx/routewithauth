import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, ShieldCheck, Trash2 } from "lucide-react"

export default function Admin() {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <p className="text-muted-foreground">
          Manage users & system access
        </p>
      </div>

      {/* STATS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">
              Total Users
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">
              +12 this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">
              Admin Accounts
            </CardTitle>
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Protected access
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge className="bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400">
              Operational
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* USER TABLE */}
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b text-left text-muted-foreground">
                <tr>
                  <th className="py-2">Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Admin Demo",
                    email: "admin@mail.com",
                    role: "admin",
                  },
                  {
                    name: "User Demo",
                    email: "user@mail.com",
                    role: "user",
                  },
                ].map((user, i) => (
                  <tr key={i} className="border-b last:border-none">
                    <td className="py-3 font-medium">{user.name}</td>
                    <td className="text-muted-foreground">{user.email}</td>
                    <td>
                      <Badge
                        variant={user.role === "admin" ? "destructive" : "secondary"}
                      >
                        {user.role}
                      </Badge>
                    </td>
                    <td className="text-right">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-red-500"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}