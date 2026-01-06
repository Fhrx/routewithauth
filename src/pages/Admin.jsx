import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Users, 
  ShieldCheck, 
  Activity, 
  Search, 
  UserPlus,
  Download,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  XCircle,
  Zap,
  BarChart3,
  Settings,
  Shield,
  Database,
  Server,
  AlertTriangle,
  Crown,
  Filter,
  MoreVertical,
  ArrowUpDown,
  RefreshCw,
  TrendingUp,
  Building,
  Mail,
  UserCog
} from "lucide-react"

export default function Admin() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("all")

  const users = [
    {
      id: 1,
      name: "Admin Demo",
      email: "admin@mail.com",
      role: "admin",
      status: "active",
      lastActive: "Just now",
      department: "Engineering",
      joinDate: "Jan 2024",
      verified: true
    },
    {
      id: 2,
      name: "User Demo",
      email: "user@mail.com",
      role: "user",
      status: "active",
      lastActive: "2 hours ago",
      department: "Marketing",
      joinDate: "Feb 2024",
      verified: true
    },
    {
      id: 3,
      name: "John Smith",
      email: "john@company.com",
      role: "user",
      status: "inactive",
      lastActive: "3 days ago",
      department: "Sales",
      joinDate: "Dec 2023",
      verified: false
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah@company.com",
      role: "admin",
      status: "active",
      lastActive: "30 minutes ago",
      department: "Management",
      joinDate: "Nov 2023",
      verified: true
    },
  ]

  const systemStats = [
    { label: "Total Users", value: "128", change: "+12", icon: <Users className="h-4 w-4" /> },
    { label: "Admin Accounts", value: "3", change: "+1", icon: <ShieldCheck className="h-4 w-4" /> },
    { label: "Active Sessions", value: "24", change: "+4", icon: <Activity className="h-4 w-4" /> },
    { label: "System Health", value: "98.2%", change: "Stable", icon: <Server className="h-4 w-4" /> },
  ]

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = filterRole === "all" || user.role === filterRole
    return matchesSearch && matchesRole
  })

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-500/10 text-green-600 border-green-500/20'
      case 'inactive': return 'bg-amber-500/10 text-amber-600 border-amber-500/20'
      default: return 'bg-gray-500/10 text-gray-600 border-gray-500/20'
    }
  }

  const getStatusIcon = (status) => {
    switch(status) {
      case 'active': return <CheckCircle className="h-3 w-3" />
      case 'inactive': return <Clock className="h-3 w-3" />
      default: return <XCircle className="h-3 w-3" />
    }
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Admin Control Panel
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage users, monitor system health, and configure security settings
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            Add New User
          </Button>
        </div>
      </div>

      {/* SYSTEM STATS - Clean Version */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {systemStats.map((stat, index) => (
          <Card 
            key={index} 
            className="group hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <div className="rounded-lg p-2 bg-primary/10">
                <div className="text-primary">
                  {stat.icon}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className={`text-xs font-medium ${
                  stat.change.includes('+') ? 'text-green-600' : 
                  'text-blue-600'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden mt-3">
                <div 
                  className="h-full rounded-full bg-primary"
                  style={{ width: '75%' }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* USER MANAGEMENT */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    User Management
                  </CardTitle>
                  <CardDescription>
                    Manage all user accounts and permissions
                  </CardDescription>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 w-full md:w-64"
                    />
                  </div>
                  <select 
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="all">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-medium text-sm">User</th>
                      <th className="text-left p-4 font-medium text-sm">Role</th>
                      <th className="text-left p-4 font-medium text-sm">Status</th>
                      <th className="text-left p-4 font-medium text-sm">Last Active</th>
                      <th className="text-left p-4 font-medium text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="font-medium text-primary">
                                {user.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="font-medium">{user.name}</p>
                                {user.verified && (
                                  <Badge variant="outline" className="text-xs gap-1 border-green-500/20">
                                    <CheckCircle className="h-3 w-3 text-green-500" />
                                    Verified
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                <Building className="h-3 w-3" />
                                {user.department}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge 
                            variant={user.role === "admin" ? "destructive" : "secondary"}
                            className="gap-1"
                          >
                            {user.role === "admin" ? <Crown className="h-3 w-3" /> : <UserCog className="h-3 w-3" />}
                            {user.role.toUpperCase()}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Badge 
                            variant="outline" 
                            className={`gap-1 ${getStatusColor(user.status)}`}
                          >
                            {getStatusIcon(user.status)}
                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {user.lastActive}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* QUICK ACTIONS */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Common administrative tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button variant="outline" className="h-auto py-3 flex-col gap-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm">Security Audit</span>
                </Button>
                <Button variant="outline" className="h-auto py-3 flex-col gap-2">
                  <Database className="h-5 w-5" />
                  <span className="text-sm">Backup Data</span>
                </Button>
                <Button variant="outline" className="h-auto py-3 flex-col gap-2">
                  <Settings className="h-5 w-5" />
                  <span className="text-sm">System Config</span>
                </Button>
                <Button variant="outline" className="h-auto py-3 flex-col gap-2">
                  <BarChart3 className="h-5 w-5" />
                  <span className="text-sm">View Reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SIDE PANEL */}
        <div className="space-y-6">
          {/* SYSTEM HEALTH */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                System Health
              </CardTitle>
              <CardDescription>
                Real-time system monitoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">API Response</span>
                  <span className="text-sm font-medium">143ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database</span>
                  <Badge variant="outline" className="border-green-500/20 text-green-600">
                    Healthy
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Memory Usage</span>
                  <span className="text-sm font-medium">76%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Uptime</span>
                  <span className="text-sm font-medium">99.8%</span>
                </div>
              </div>
              <Button variant="outline" className="w-full gap-2">
                <RefreshCw className="h-4 w-4" />
                Refresh Metrics
              </Button>
            </CardContent>
          </Card>

          {/* RECENT ACTIVITY */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                System events and user actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { action: "New user registered", time: "2 min ago", type: "success" },
                  { action: "Password reset requested", time: "15 min ago", type: "info" },
                  { action: "Database backup completed", time: "1 hour ago", type: "success" },
                  { action: "Failed login attempt", time: "3 hours ago", type: "warning" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`mt-0.5 h-2 w-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-amber-500' :
                      'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* ADMIN PRIVILEGES */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-primary" />
                Admin Privileges
              </CardTitle>
              <CardDescription>
                You have full system access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Settings className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Full System Access</p>
                    <p className="text-xs text-muted-foreground">All settings and configurations</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Security Management</p>
                    <p className="text-xs text-muted-foreground">Manage all security policies</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Database className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Data Operations</p>
                    <p className="text-xs text-muted-foreground">Full database access</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CSS ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}