import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Moon,
  Sun,
  Shield,
  User,
  Trash2,
  Bell,
  Globe,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Database,
  Download,
  Upload,
  Palette,
  Zap,
  Cpu,
  Smartphone,
  Laptop,
  Settings as SettingsIcon,
  Key,
  Mail,
  ShieldCheck,
  RefreshCw,
  HardDrive,
  Languages,
  Volume2,
  Clock,
  Smartphone as PhoneIcon,
  Monitor,
  LogOut,
  HelpCircle,
  ShieldAlert,
  AlertTriangle,
  Sparkles,
  BarChart,
  Server,
  Wifi,
  WifiOff,
  Network,
  Battery,
  BatteryCharging,
  Thermometer,
  Gauge,
  Hash,
  Sliders,
  ToggleLeft,
  ToggleRight,
  BellRing,
  BellOff,
  VolumeX,
  Volume1,
  Maximize2,
  Minimize2,
  Grid,
  List,
  Layout,
  Columns,
  Rows
} from "lucide-react"

export default function Settings() {
  const { user, logout } = useAuth()
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("general")
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sounds: false,
    weeklyReports: true
  })
  const [security, setSecurity] = useState({
    twoFactor: false,
    autoLogout: true,
    showPassword: false,
    sessionTimeout: 30
  })
  const [performance, setPerformance] = useState({
    animations: true,
    hardwareAcceleration: true,
    dataSaver: false,
    cacheSize: "medium"
  })

  const sections = [
    { id: "general", label: "General", icon: <SettingsIcon className="h-4 w-4" /> },
    { id: "appearance", label: "Appearance", icon: <Palette className="h-4 w-4" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="h-4 w-4" /> },
    { id: "security", label: "Security", icon: <Shield className="h-4 w-4" /> },
    { id: "performance", label: "Performance", icon: <Zap className="h-4 w-4" /> },
    { id: "advanced", label: "Advanced", icon: <Cpu className="h-4 w-4" /> },
  ]

  const handleLogoutAll = () => {
    if (window.confirm("Are you sure you want to logout from all devices?")) {
      logout()
    }
  }

  const renderSection = () => {
    switch(activeSection) {
      case "general":
        return (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Account Information
                  </CardTitle>
                  <CardDescription>
                    Your basic account details and status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Account Status</p>
                      <p className="text-sm text-muted-foreground">
                        Your account is verified and active
                      </p>
                    </div>
                    <Badge className="gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                      <CheckCircle className="h-3 w-3" />
                      Active
                    </Badge>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Role</span>
                      <Badge variant={user?.role === "admin" ? "destructive" : "secondary"}>
                        {user?.role?.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Member Since</span>
                      <span className="font-medium">Jan 2024</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Last Login</span>
                      <span className="font-medium">Just now</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Language & Region
                  </CardTitle>
                  <CardDescription>
                    Set your preferred language and timezone
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Language</Label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option>English (US)</option>
                      <option>Bahasa Indonesia</option>
                      <option>Español</option>
                      <option>Français</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Timezone</Label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option>UTC+07:00 (Jakarta)</option>
                      <option>UTC+08:00 (Singapore)</option>
                      <option>UTC+00:00 (London)</option>
                      <option>UTC-05:00 (New York)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Date Format</Label>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">DD/MM/YYYY</Button>
                      <Button variant="outline" size="sm" className="flex-1">MM/DD/YYYY</Button>
                      <Button variant="outline" size="sm" className="flex-1">YYYY-MM-DD</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Data Management
                </CardTitle>
                <CardDescription>
                  Manage your data exports and backups
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap -4 md:grid-cols-2">
                  <div className="rounded-lg border bg-gradient-to-br from-blue-500/5 to-blue-500/10 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Download className="h-5 w-5 text-blue-500" />
                      <h4 className="font-semibold">Export Data</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Download all your data in JSON or CSV format
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">JSON</Button>
                      <Button variant="outline" size="sm">CSV</Button>
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-cyan-500">
                        Export All
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-gradient-to-br from-green-500/5 to-green-500/10 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Upload className="h-5 w-5 text-green-500" />
                      <h4 className="font-semibold">Backup</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Last backup: 2 days ago
                    </p>
                    <Button size="sm" className="w-full bg-gradient-to-r from-green-500 to-emerald-500">
                      Create Backup Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "appearance":
        return (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Moon className="h-5 w-5 text-primary" />
                    Theme Settings
                  </CardTitle>
                  <CardDescription>
                    Customize your dashboard appearance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-lg p-2 ${darkMode ? 'bg-primary/10' : 'bg-amber-500/10'}`}>
                        {darkMode ? <Moon className="h-4 w-4 text-primary" /> : <Sun className="h-4 w-4 text-amber-500" />}
                      </div>
                      <div>
                        <p className="font-medium">Dark Mode</p>
                        <p className="text-sm text-muted-foreground">
                          Switch between light and dark themes
                        </p>
                      </div>
                    </div>
                    <Switch 
                      checked={darkMode} 
                      onCheckedChange={setDarkMode}
                      className="data-[state=checked]:bg-primary"
                    />
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <Label>Accent Color</Label>
                    <div className="flex gap-2">
                      {["primary", "blue", "green", "purple", "orange", "pink"].map((color) => (
                        <button
                          key={color}
                          className={`h-8 w-8 rounded-full border-2 ${
                            color === "primary" 
                              ? "bg-primary border-primary" 
                              : `bg-${color}-500 border-${color}-500`
                          } hover:scale-110 transition-transform`}
                          title={color.charAt(0).toUpperCase() + color.slice(1)}
                        />
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <Label>Layout Density</Label>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 gap-2">
                        <Grid className="h-3 w-3" />
                        Compact
                      </Button>
                      <Button size="sm" className="flex-1 gap-2 bg-primary">
                        <List className="h-3 w-3" />
                        Comfortable
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 gap-2">
                        <Maximize2 className="h-3 w-3" />
                        Spacious
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layout className="h-5 w-5 text-primary" />
                    Display Settings
                  </CardTitle>
                  <CardDescription>
                    Configure how content is displayed
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Animations</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Columns className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">Grid View</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <BarChart className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">Charts Smoothing</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="h-4 w-4 text-purple-500" />
                        <span className="text-sm font-medium">Mobile Optimized</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Preview
                </CardTitle>
                <CardDescription>
                  See how your settings affect the dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border bg-gradient-to-br from-primary/5 to-primary/10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-4 w-32 rounded-full bg-primary/20"></div>
                    <div className="h-8 w-24 rounded-lg bg-primary/20"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} className="h-20 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5"></div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "security":
        return (
          <div className="space-y-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Security Settings
                </CardTitle>
                <CardDescription>
                  Protect your account with enhanced security features
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Key className="h-4 w-4 text-blue-500" />
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                    </div>
                    <Switch 
                      checked={security.twoFactor} 
                      onCheckedChange={(checked) => setSecurity({...security, twoFactor: checked})}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-amber-500" />
                      <div>
                        <p className="font-medium">Auto Logout</p>
                        <p className="text-sm text-muted-foreground">
                          Logout automatically after {security.sessionTimeout} minutes of inactivity
                        </p>
                      </div>
                    </div>
                    <Switch 
                      checked={security.autoLogout} 
                      onCheckedChange={(checked) => setSecurity({...security, autoLogout: checked})}
                    />
                  </div>
                  <div className="pl-10">
                    <Input 
                      type="range" 
                      min="5" 
                      max="120" 
                      step="5"
                      value={security.sessionTimeout}
                      onChange={(e) => setSecurity({...security, sessionTimeout: e.target.value})}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>5 min</span>
                      <span>{security.sessionTimeout} min</span>
                      <span>120 min</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    Password Management
                  </CardTitle>
                  <CardDescription>
                    Update and manage your password
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full gap-2 bg-gradient-to-r from-primary to-primary/80">
                    <RefreshCw className="h-4 w-4" />
                    Change Password
                  </Button>
                  <div className="rounded-lg border bg-gradient-to-br from-green-500/5 to-green-500/10 p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-700">Password Strength: Strong</p>
                        <p className="text-sm text-green-600/80 mt-1">
                          Your password meets all security requirements
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-primary" />
                    Security Logs
                  </CardTitle>
                  <CardDescription>
                    Recent security events and activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "New login from Chrome, Malang",
                      "Password changed successfully",
                      "Two-factor authentication enabled",
                      "Security settings updated"
                    ].map((log, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span>{log}</span>
                        <span className="text-muted-foreground ml-auto">Today</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Logs
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "advanced":
        return (
          <div className="space-y-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-yellow-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-600">
                  <AlertTriangle className="h-5 w-5" />
                  Advanced Settings
                </CardTitle>
                <CardDescription>
                  These settings are for advanced users only
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Developer Mode</p>
                      <p className="text-sm text-muted-foreground">
                        Enable additional debugging tools
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">API Debugging</p>
                      <p className="text-sm text-muted-foreground">
                        Log all API requests and responses
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Experimental Features</p>
                      <p className="text-sm text-muted-foreground">
                        Access to beta and experimental features
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>API Endpoint</Label>
                  <Input defaultValue="https://api.dashboard.com/v1" />
                </div>
                <div className="space-y-2">
                  <Label>WebSocket URL</Label>
                  <Input defaultValue="wss://ws.dashboard.com" />
                </div>
              </CardContent>
            </Card>

            {/* DANGER ZONE */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-red-500/50 bg-gradient-to-br from-red-500/5 to-red-500/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <Trash2 className="h-5 w-5" />
                  Danger Zone
                </CardTitle>
                <CardDescription>
                  Irreversible actions - proceed with caution
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-700">Delete Account</p>
                      <p className="text-sm text-red-600/80 mt-1">
                        This will permanently delete your account and all associated data.
                        This action cannot be undone.
                      </p>
                    </div>
                  </div>
                  <Button variant="destructive" className="w-full mt-4 gap-2">
                    <Trash2 className="h-4 w-4" />
                    Delete My Account
                  </Button>
                </div>
                
                <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-amber-700">Reset All Settings</p>
                      <p className="text-sm text-amber-600/80 mt-1">
                        Reset all settings to their default values
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 gap-2 border-amber-500 text-amber-600 hover:bg-amber-500/10">
                    <RefreshCw className="h-4 w-4" />
                    Reset Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Settings Content</CardTitle>
                <CardDescription>
                  Select a section from the menu to view settings
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        )
    }
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Settings & Preferences
          </h1>
          <p className="text-muted-foreground mt-2">
            Customize your dashboard experience and manage account settings
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2" onClick={handleLogoutAll}>
            <LogOut className="h-4 w-4" />
            Logout All Devices
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-primary to-primary/80">
            <CheckCircle className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* SIMPLE TABS NAVIGATION */}
      <div className="flex flex-wrap gap-2 mb-6">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? "default" : "outline"}
            onClick={() => setActiveSection(section.id)}
            className="gap-2"
          >
            {section.icon}
            {section.label}
          </Button>
        ))}
      </div>

      {/* CONTENT */}
      {renderSection()}

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