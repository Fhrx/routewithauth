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
  UserCog,
  Smartphone,
  ChevronDown
} from "lucide-react"

export default function Admin() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("all")
  const [showMobileFilter, setShowMobileFilter] = useState(false)

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
            Admin Panel
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage users, monitor system health, and configure security
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button size="sm" className="gap-2">
            <UserPlus className="h-4 w-4" />
            <span className="hidden sm:inline">Add User</span>
            <span className="sm:hidden">Add</span>
          </Button>
        </div>
      </div>

      {/* SYSTEM STATS - RESPONSIVE */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {systemStats.map((stat, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all duration-300"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2 p-4">
              <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground truncate">
                {stat.label}
              </CardTitle>
              <div className="rounded-lg p-1.5 md:p-2 bg-primary/10">
                <div className="text-primary md:scale-100 scale-90">
                  {stat.icon}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-baseline gap-1 md:gap-2">
                <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                <div className={`text-xs font-medium ${
                  stat.change.includes('+') ? 'text-green-600' : 
                  'text-blue-600'
                }`}>
                  {stat.change}
                </div>
              </div>
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden mt-2 md:mt-3">
                <div 
                  className="h-full rounded-full bg-primary"
                  style={{ width: '75%' }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* MOBILE FILTER TOGGLE */}
      <div className="md:hidden">
        <Button 
          variant="outline" 
          className="w-full gap-2"
          onClick={() => setShowMobileFilter(!showMobileFilter)}
        >
          <Filter className="h-4 w-4" />
          Filters
          <ChevronDown className={`h-4 w-4 transition-transform ${showMobileFilter ? 'rotate-180' : ''}`} />
        </Button>
        
        {showMobileFilter && (
          <div className="mt-3 p-4 border rounded-lg bg-card animate-fadeIn">
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-2 block">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 block">Filter by Role</Label>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant={filterRole === "all" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setFilterRole("all")}
                  >
                    All
                  </Button>
                  <Button 
                    variant={filterRole === "admin" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setFilterRole("admin")}
                  >
                    Admin
                  </Button>
                  <Button 
                    variant={filterRole === "user" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setFilterRole("user")}
                  >
                    User
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* USER MANAGEMENT */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span className="text-lg">User Management</span>
                  </CardTitle>
                  <CardDescription>
                    Manage all user accounts and permissions
                  </CardDescription>
                </div>
                {/* DESKTOP FILTERS */}
                <div className="hidden md:flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 w-64"
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
              {/* MOBILE USER LIST */}
              <div className="md:hidden">
                <div className="space-y-3 p-4">
                  {filteredUsers.map((user) => (
                    <Card key={user.id} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-medium text-primary">
                              {user.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-medium truncate">{user.name}</p>
                              {user.verified && (
                                <Badge variant="outline" className="text-xs gap-1 border-green-500/20 flex-shrink-0">
                                  <CheckCircle className="h-3 w-3 text-green-500" />
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground truncate mb-2">{user.email}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge 
                                variant={user.role === "admin" ? "destructive" : "secondary"}
                                className="gap-1 text-xs"
                              >
                                {user.role === "admin" ? <Crown className="h-3 w-3" /> : <UserCog className="h-3 w-3" />}
                                {user.role.toUpperCase()}
                              </Badge>
                              <Badge 
                                variant="outline" 
                                className={`gap-1 text-xs ${getStatusColor(user.status)}`}
                              >
                                {getStatusIcon(user.status)}
                                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-1 text-muted-foreground">
                                <Building className="h-3 w-3" />
                                <span className="truncate">{user.department}</span>
                              </div>
                              <div className="flex items-center gap-1 text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>{user.lastActive}</span>
                              </div>
                            </div>
                            
                            <div className="flex justify-end gap-2 mt-3">
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
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* DESKTOP TABLE */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full min-w-[800px]">
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

          {/* QUICK ACTIONS - RESPONSIVE */}
          <Card className="hover:shadow-lg transition-all duration-300">
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
                  <span className="text-sm">Security</span>
                </Button>
                <Button variant="outline" className="h-auto py-3 flex-col gap-2">
                  <Database className="h-5 w-5" />
                  <span className="text-sm">Backup</span>
                </Button>
                <Button variant="outline" className="h-auto py-3 flex-col gap-2">
                  <Settings className="h-5 w-5" />
                  <span className="text-sm">Config</span>
                </Button>
                <Button variant="outline" className="h-auto py-3 flex-col gap-2">
                  <BarChart3 className="h-5 w-5" />
                  <span className="text-sm">Reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SIDE PANEL - STACK ON MOBILE */}
        <div className="space-y-6">
          {/* SYSTEM HEALTH */}
          <Card className="hover:shadow-lg transition-all duration-300">
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
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">API Response</span>
                  <p className="text-sm font-medium">143ms</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Memory</span>
                  <p className="text-sm font-medium">76%</p>
                </div>
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Database</span>
                  <Badge variant="outline" className="border-green-500/20 text-green-600 text-xs">
                    Healthy
                  </Badge>
                </div>
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Uptime</span>
                  <p className="text-sm font-medium">99.8%</p>
                </div>
              </div>
              <Button variant="outline" className="w-full gap-2 mt-2">
                <RefreshCw className="h-4 w-4" />
                Refresh Metrics
              </Button>
            </CardContent>
          </Card>

          {/* RECENT ACTIVITY */}
          <Card className="hover:shadow-lg transition-all duration-300">
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
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`mt-0.5 h-2 w-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-amber-500' :
                      'bg-blue-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 text-sm">
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* ADMIN PRIVILEGES */}
          <Card className="hover:shadow-lg transition-all duration-300 border-primary/20">
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
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">Full System Access</p>
                    <p className="text-xs text-muted-foreground truncate">All settings and configurations</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">Security Management</p>
                    <p className="text-xs text-muted-foreground truncate">Manage all security policies</p>
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
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

// Add missing Label component
const Label = ({ children, className, ...props }) => (
  <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props}>
    {children}
  </label>
)