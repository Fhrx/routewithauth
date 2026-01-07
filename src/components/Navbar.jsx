// NAVBAR.JSX - FULLY RESPONSIVE VERSION
import { useState, useEffect } from "react";
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
  Shield,
  Sparkles,
  Zap,
  Home,
  ExternalLink,
  Mail,
  Calendar,
  AlertCircle,
  CheckCircle,
  X,
  ChevronRight
} from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import RoleBadge from "@/components/RoleBadge"

export default function Navbar({ onMenuClick }) {
  const { user, logout } = useAuth()
  const [darkMode, setDarkMode] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const notifications = [
    { id: 1, text: "New user registered", time: "5 min ago", type: "success", icon: <User className="h-4 w-4 text-green-500" /> },
    { id: 2, text: "System update available", time: "1 hour ago", type: "info", icon: <Zap className="h-4 w-4 text-blue-500" /> },
    { id: 3, text: "Password changed", time: "Yesterday", type: "success", icon: <Shield className="h-4 w-4 text-green-500" /> },
    { id: 4, text: "Security alert", time: "2 days ago", type: "warning", icon: <AlertCircle className="h-4 w-4 text-amber-500" /> },
  ]

  const quickLinks = [
    { label: "Home", icon: <Home className="h-4 w-4" />, href: "/" },
    { label: "Profile", icon: <User className="h-4 w-4" />, href: "/dashboard/profile" },
    { label: "Settings", icon: <Settings className="h-4 w-4" />, href: "/dashboard/settings" },
    { label: "Help", icon: <HelpCircle className="h-4 w-4" />, href: "/help" },
  ]

  return (
    <>
      {/* MOBILE SEARCH OVERLAY */}
      {showMobileSearch && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden animate-fadeIn">
          <div className="flex items-center gap-2 p-4 border-b">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search dashboard..."
                className="pl-10 pr-10 py-3 w-full rounded-lg border bg-card text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
                autoFocus
              />
              <button
                onClick={() => setShowMobileSearch(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
          </div>
          {/* Recent Searches */}
          <div className="p-4">
            <p className="text-sm font-medium mb-3">Recent Searches</p>
            <div className="space-y-2">
              {["Dashboard settings", "User reports", "System logs"].map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors flex items-center gap-3"
                >
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 shadow-sm">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 hover:bg-accent transition-all active:scale-95 md:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* MOBILE LOGO */}
          <div className="md:hidden flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                <p className="text-[10px] text-muted-foreground">
                  {user?.role === 'admin' ? 'Admin' : 'User'}
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP LOGO */}
          <div className="hidden md:flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                DashboardPro
              </h1>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-xs text-muted-foreground">
                  {user?.role === 'admin' ? 'Admin Panel' : 'User Dashboard'}
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP SEARCH */}
          <div className="hidden md:block relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search dashboard..."
              className="pl-10 pr-4 py-2.5 w-64 rounded-xl border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* MOBILE SEARCH BUTTON */}
          <button
            onClick={() => setShowMobileSearch(true)}
            className="rounded-lg p-2 hover:bg-accent transition-all active:scale-95 md:hidden"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleDarkMode}
            className="rounded-lg p-2 hover:bg-accent transition-all active:scale-95"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <div className="relative">
                <Sun className="h-5 w-5 text-amber-500" />
                <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-amber-500/50 animate-ping"></div>
              </div>
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* NOTIFICATIONS */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications)
                setShowUserMenu(false)
              }}
              className="relative rounded-lg p-2 hover:bg-accent transition-all active:scale-95"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>

            {/* NOTIFICATIONS DROPDOWN - MOBILE */}
            {showNotifications && isMobile && (
              <>
                <div 
                  className="fixed inset-0 z-30 bg-black/50 animate-fadeIn" 
                  onClick={() => setShowNotifications(false)}
                />
                <div className="fixed inset-x-4 top-20 rounded-xl border bg-card shadow-2xl z-40 overflow-hidden animate-slideDown">
                  <div className="p-4 border-b bg-gradient-to-r from-primary/5 to-primary/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Notifications</h3>
                        <p className="text-xs text-muted-foreground">3 unread</p>
                      </div>
                      <button 
                        className="text-xs text-primary hover:underline transition-colors"
                        onClick={() => setShowNotifications(false)}
                      >
                        Mark all read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className="p-4 border-b hover:bg-accent/50 cursor-pointer transition-colors"
                        onClick={() => setShowNotifications(false)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            {notif.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{notif.text}</p>
                            <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t bg-muted/50">
                    <button className="text-sm text-primary hover:underline transition-colors flex items-center justify-center gap-2 w-full">
                      <Bell className="h-4 w-4" />
                      View all notifications
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* NOTIFICATIONS DROPDOWN - DESKTOP */}
            {showNotifications && !isMobile && (
              <>
                <div 
                  className="fixed inset-0 z-30 animate-fadeIn" 
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-80 rounded-xl border bg-card shadow-2xl z-40 overflow-hidden animate-slideDown">
                  <div className="p-4 border-b bg-gradient-to-r from-primary/5 to-primary/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Notifications</h3>
                        <p className="text-xs text-muted-foreground">3 unread • Updated just now</p>
                      </div>
                      <button className="text-xs text-primary hover:underline transition-colors">
                        Mark all read
                      </button>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className="p-4 border-b hover:bg-accent/50 cursor-pointer transition-colors group/notification"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            {notif.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{notif.text}</p>
                            <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                          </div>
                          <button className="opacity-0 group-hover/notification:opacity-100 text-muted-foreground hover:text-foreground transition-all">
                            <ExternalLink className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t bg-muted/50">
                    <a href="#" className="text-sm text-primary hover:underline transition-colors flex items-center justify-center gap-2">
                      <Bell className="h-4 w-4" />
                      View all notifications
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* USER MENU */}
          <div className="relative">
            <button
              onClick={() => {
                setShowUserMenu(!showUserMenu)
                setShowNotifications(false)
              }}
              className="flex items-center gap-2 md:gap-3 rounded-xl p-1.5 hover:bg-accent transition-all active:scale-95"
            >
              <div className="relative">
                <div className="h-8 w-8 md:h-9 md:w-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {user?.name?.charAt(0) || "U"}
                  </span>
                </div>
                <div className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background ${
                  user?.role === 'admin' ? 'bg-red-500' : 'bg-green-500'
                }`} />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium leading-tight">{user?.name}</p>
                <RoleBadge role={user?.role} />
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                showUserMenu ? 'rotate-180' : ''
              }`} />
            </button>

            {/* USER DROPDOWN - MOBILE */}
            {showUserMenu && isMobile && (
              <>
                <div 
                  className="fixed inset-0 z-30 bg-black/50 animate-fadeIn" 
                  onClick={() => setShowUserMenu(false)}
                />
                <div className="fixed inset-x-4 top-20 rounded-xl border bg-card shadow-2xl z-40 overflow-hidden animate-slideDown">
                  <div className="p-4 border-b bg-gradient-to-r from-primary/5 to-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                        <span className="text-white font-bold">
                          {user?.name?.charAt(0) || "U"}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate">{user?.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <RoleBadge role={user?.role} />
                    </div>
                  </div>
                  <div className="p-2 max-h-80 overflow-y-auto">
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="rounded-lg bg-primary/5 p-3 text-center hover:bg-primary/10 transition-colors">
                        <Calendar className="h-4 w-4 text-primary mx-auto mb-1" />
                        <p className="text-xs font-medium">Calendar</p>
                      </div>
                      <div className="rounded-lg bg-green-500/5 p-3 text-center hover:bg-green-500/10 transition-colors">
                        <Mail className="h-4 w-4 text-green-500 mx-auto mb-1" />
                        <p className="text-xs font-medium">Messages</p>
                      </div>
                    </div>
                    
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-accent transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <div className="rounded-lg p-1.5 bg-primary/10">
                          {link.icon}
                        </div>
                        <span className="flex-1">{link.label}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </a>
                    ))}
                    
                    <div className="my-2 border-t" />
                    
                    <button
                      onClick={() => {
                        logout()
                        setShowUserMenu(false)
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-red-500 hover:bg-red-500/10 transition-colors"
                    >
                      <div className="rounded-lg p-1.5 bg-red-500/10">
                        <LogOut className="h-4 w-4" />
                      </div>
                      <span className="flex-1 text-left">Logout</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="p-3 border-t bg-muted/50">
                    <p className="text-xs text-muted-foreground text-center">
                      DashboardPro • v2.1.4
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* USER DROPDOWN - DESKTOP */}
            {showUserMenu && !isMobile && (
              <>
                <div 
                  className="fixed inset-0 z-30 animate-fadeIn" 
                  onClick={() => setShowUserMenu(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border bg-card shadow-2xl z-40 overflow-hidden animate-slideDown">
                  <div className="p-4 border-b bg-gradient-to-r from-primary/5 to-primary/10">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                        <span className="text-white font-bold">
                          {user?.name?.charAt(0) || "U"}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">{user?.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <RoleBadge role={user?.role} />
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="rounded-lg bg-primary/5 p-3 text-center hover:bg-primary/10 transition-colors cursor-pointer">
                        <Calendar className="h-4 w-4 text-primary mx-auto mb-1" />
                        <p className="text-xs font-medium">Calendar</p>
                      </div>
                      <div className="rounded-lg bg-green-500/5 p-3 text-center hover:bg-green-500/10 transition-colors cursor-pointer">
                        <Mail className="h-4 w-4 text-green-500 mx-auto mb-1" />
                        <p className="text-xs font-medium">Messages</p>
                      </div>
                    </div>
                    
                    {quickLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-accent transition-colors group/link"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <div className="rounded-lg p-1.5 bg-primary/10 group-hover/link:bg-primary/20 transition-colors">
                          {link.icon}
                        </div>
                        <span className="flex-1">{link.label}</span>
                        <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </a>
                    ))}
                    
                    <div className="my-2 border-t" />
                    
                    <button
                      onClick={() => {
                        logout()
                        setShowUserMenu(false)
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-500 hover:bg-red-500/10 transition-colors group/logout"
                    >
                      <div className="rounded-lg p-1.5 bg-red-500/10 group-hover/logout:bg-red-500/20 transition-colors">
                        <LogOut className="h-4 w-4" />
                      </div>
                      <span className="flex-1 text-left">Logout</span>
                      <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/logout:opacity-100 group-hover/logout:translate-x-0 transition-all" />
                    </button>
                  </div>
                  <div className="p-3 border-t bg-muted/50">
                    <p className="text-xs text-muted-foreground text-center">
                      DashboardPro • v2.1.4
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* CSS ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </>
  )
}