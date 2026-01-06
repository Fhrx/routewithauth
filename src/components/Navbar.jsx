// NAVBAR.JSX - Enhanced
import { useState } from "react";
import { 
  Menu, 
  LogOut, 
  Search, 
  Bell, 
  Sun, 
  Moon,
  ChevronDown,
  Settings,
  User,
  HelpCircle,
  Shield
} from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import RoleBadge from "@/components/RoleBadge"

export default function Navbar({ onMenuClick }) {
  const { user, logout } = useAuth()
  const [darkMode, setDarkMode] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const notifications = [
    { id: 1, text: "New user registered", time: "5 min ago" },
    { id: 2, text: "System update available", time: "1 hour ago" },
    { id: 3, text: "Password changed", time: "Yesterday" },
  ]

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 hover:bg-accent transition-colors md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* LOGO */}
        <div className="hidden md:flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
            <Shield className="h-4 w-4 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold">DashboardPro</h1>
            <p className="text-xs text-muted-foreground">
              {user?.role === 'admin' ? 'Admin Panel' : 'User Dashboard'}
            </p>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="hidden md:block relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        {/* THEME TOGGLE */}
        <button
          onClick={toggleDarkMode}
          className="hidden sm:flex items-center justify-center rounded-lg p-2 hover:bg-accent transition-colors"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <Sun className="h-5 w-5 text-amber-500" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>

        {/* NOTIFICATIONS */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative rounded-lg p-2 hover:bg-accent transition-colors"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>

          {/* NOTIFICATIONS DROPDOWN */}
          {showNotifications && (
            <>
              <div 
                className="fixed inset-0 z-30" 
                onClick={() => setShowNotifications(false)}
              />
              <div className="absolute right-0 top-full mt-2 w-80 rounded-lg border bg-popover shadow-lg z-40">
                <div className="p-4 border-b">
                  <h3 className="font-semibold">Notifications</h3>
                  <p className="text-xs text-muted-foreground">3 unread</p>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="p-3 border-b hover:bg-accent cursor-pointer transition-colors"
                    >
                      <p className="text-sm font-medium">{notif.text}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t text-center">
                  <button className="text-sm text-primary hover:underline">
                    Mark all as read
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* USER MENU */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-3 rounded-lg p-2 hover:bg-accent transition-colors"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {user?.name?.charAt(0) || "U"}
              </span>
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium leading-tight">{user?.name}</p>
              <RoleBadge role={user?.role} />
            </div>
            <ChevronDown className={`h-4 w-4 transition-transform ${
              showUserMenu ? 'rotate-180' : ''
            }`} />
          </button>

          {/* USER DROPDOWN MENU */}
          {showUserMenu && (
            <>
              <div 
                className="fixed inset-0 z-30" 
                onClick={() => setShowUserMenu(false)}
              />
              <div className="absolute right-0 top-full mt-2 w-56 rounded-lg border bg-popover shadow-lg z-40">
                <div className="p-4 border-b">
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-sm text-muted-foreground truncate">{user?.email}</p>
                  <div className="mt-2">
                    <RoleBadge role={user?.role} />
                  </div>
                </div>
                <div className="p-2">
                  <a
                    href="/dashboard/profile"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors"
                  >
                    <User className="h-4 w-4" />
                    My Profile
                  </a>
                  <a
                    href="/dashboard/settings"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </a>
                  <a
                    href="/help"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors"
                  >
                    <HelpCircle className="h-4 w-4" />
                    Help & Support
                  </a>
                  <div className="my-2 border-t" />
                  <button
                    onClick={logout}
                    className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}