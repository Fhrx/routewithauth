import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/context/AuthContext"
import {
  Users,
  Activity,
  Shield,
  TrendingUp,
  BarChart3,
  Clock,
  Cpu,
  Database,
  Zap,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Calendar,
  PieChart,
  LineChart,
  Globe,
  Server,
  ShieldCheck,
  ArrowUpRight,
  MoreVertical
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Overview() {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    users: 1248,
    sessions: 312,
    growth: 24,
    performance: 89
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        sessions: prev.sessions + Math.floor(Math.random() * 3) - 1,
        performance: Math.min(100, Math.max(80, prev.performance + (Math.random() * 2 - 1)))
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const activityItems = [
    { 
      id: 1, 
      title: "User John updated profile", 
      time: "2 minutes ago", 
      icon: <Users className="h-4 w-4" />,
      type: "info" 
    },
    { 
      id: 2, 
      title: "Admin created new account", 
      time: "15 minutes ago", 
      icon: <Shield className="h-4 w-4" />,
      type: "admin" 
    },
    { 
      id: 3, 
      title: "Password changed successfully", 
      time: "1 hour ago", 
      icon: <ShieldCheck className="h-4 w-4" />,
      type: "security" 
    },
    { 
      id: 4, 
      title: "New login from Chrome", 
      time: "2 hours ago", 
      icon: <Globe className="h-4 w-4" />,
      type: "login" 
    },
    { 
      id: 5, 
      title: "Database backup completed", 
      time: "4 hours ago", 
      icon: <Database className="h-4 w-4" />,
      type: "system" 
    },
  ]

  const systemMetrics = [
    { label: "CPU Usage", value: "42%", icon: <Cpu className="h-4 w-4" />, color: "from-blue-500/20 to-blue-500/10" },
    { label: "Memory", value: "3.2/8GB", icon: <Server className="h-4 w-4" />, color: "from-green-500/20 to-green-500/10" },
    { label: "Response Time", value: "143ms", icon: <Zap className="h-4 w-4" />, color: "from-purple-500/20 to-purple-500/10" },
    { label: "Uptime", value: "99.8%", icon: <Clock className="h-4 w-4" />, color: "from-orange-500/20 to-orange-500/10" },
  ]

  const getRoleColor = (role) => {
    return role === "admin" 
      ? "from-red-500 to-orange-500" 
      : "from-blue-500 to-cyan-500"
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER WITH WELCOME */}
      <div className="rounded-xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-6 border border-primary/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Welcome back, <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{user?.name}</span> 👋
            </h1>
            <p className="text-muted-foreground mt-2">
              Here's what's happening with your dashboard today
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge 
              variant="outline" 
              className="gap-2 px-4 py-2 border-primary/20"
            >
              <Calendar className="h-4 w-4" />
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </Badge>
          </div>
        </div>
      </div>

      {/* STATS GRID WITH ANIMATIONS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Users Card */}
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Users
            </CardTitle>
            <div className="rounded-lg bg-blue-500/10 p-2 group-hover:scale-110 transition-transform">
              <Users className="h-4 w-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">{stats.users.toLocaleString()}</div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1 text-xs text-green-600">
                <ArrowUpRight className="h-3 w-3" />
                +12%
              </div>
              <span className="text-xs text-muted-foreground">from last month</span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400" style={{ width: '75%' }}></div>
            </div>
          </CardContent>
        </Card>

        {/* Active Sessions Card */}
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Sessions
            </CardTitle>
            <div className="rounded-lg bg-green-500/10 p-2 group-hover:scale-110 transition-transform">
              <Activity className="h-4 w-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">{stats.sessions}</div>
            <p className="text-xs text-muted-foreground mt-2">Live users now</p>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400 animate-pulse" style={{ width: '60%' }}></div>
              </div>
              <span className="text-xs font-medium text-green-600 animate-pulse">Live</span>
            </div>
          </CardContent>
        </Card>

        {/* Role Card */}
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Your Role
            </CardTitle>
            <div className={`rounded-lg bg-gradient-to-br ${getRoleColor(user?.role)}/20 p-2 group-hover:scale-110 transition-transform`}>
              <Shield className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-3">
              <Badge 
                className={`gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r ${getRoleColor(user?.role)} text-white border-0`}
              >
                <Shield className="h-3 w-3" />
                {user?.role?.toUpperCase()}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              {user?.role === "admin" ? "Full system access" : "Standard user access"}
            </p>
          </CardContent>
        </Card>

        {/* Growth Card */}
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Performance
            </CardTitle>
            <div className="rounded-lg bg-purple-500/10 p-2 group-hover:scale-110 transition-transform">
              <TrendingUp className="h-4 w-4 text-purple-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">{stats.growth}%</div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1 text-xs text-green-600">
                <ArrowUpRight className="h-3 w-3" />
                +5.2%
              </div>
              <span className="text-xs text-muted-foreground">this week</span>
            </div>
            <div className="mt-3">
              <LineChart className="h-10 w-full text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CONTENT GRID */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* ACTIVITY FEED */}
        <Card className="lg:col-span-2 group hover:shadow-lg transition-all duration-300">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
              <button className="text-sm text-primary hover:underline transition-colors flex items-center gap-1">
                View all
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {activityItems.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors group/item"
                >
                  <div className={`rounded-lg p-2 ${item.type === 'admin' ? 'bg-red-500/10' : item.type === 'security' ? 'bg-green-500/10' : 'bg-blue-500/10'}`}>
                    <div className={item.type === 'admin' ? 'text-red-500' : item.type === 'security' ? 'text-green-500' : 'text-blue-500'}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.time}
                    </p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className="text-xs opacity-0 group-hover/item:opacity-100 transition-opacity"
                  >
                    View
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* SYSTEM INFO & METRICS */}
        <div className="space-y-6">
          {/* System Status Card */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/5 p-4 border border-green-500/20">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-500/20 p-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-green-700">All systems operational</p>
                    <p className="text-sm text-green-600/80 mt-1">No issues detected</p>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                {systemMetrics.map((metric, index) => (
                  <div 
                    key={index}
                    className={`rounded-lg bg-gradient-to-br ${metric.color} p-4 border`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {metric.icon}
                      <span className="text-xs font-medium">{metric.label}</span>
                    </div>
                    <div className="text-xl font-bold">{metric.value}</div>
                  </div>
                ))}
              </div>

              {/* Admin Notice */}
              {user?.role === "admin" && (
                <div className="mt-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-primary">Admin Privileges Active</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        You have full access to all system features and settings
                      </p>
                      <button className="mt-3 text-sm text-primary hover:underline transition-colors flex items-center gap-1">
                        Access Admin Panel
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Version</span>
                  <span className="font-medium">v2.1.4</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-muted-foreground">Last updated</span>
                  <span className="font-medium">Just now</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <BarChart3 className="h-4 w-4" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg. Session</span>
                <span className="font-medium">4m 32s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Bounce Rate</span>
                <span className="font-medium text-green-600">24%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">New Users</span>
                <span className="font-medium">42</span>
              </div>
              <div className="pt-3">
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70" style={{ width: '68%' }}></div>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-2">Weekly goal: 68% complete</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ADD CSS ANIMATIONS */}
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