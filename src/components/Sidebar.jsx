// SIDEBAR.JSX - FIXED STICKY VERSION
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import {
  LayoutDashboard,
  User,
  Settings,
  Shield,
  LogOut,
  HelpCircle,
  ChevronRight,
  Sparkles,
  Zap,
  ShieldCheck
} from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import RoleBadge from "@/components/RoleBadge"

export default function Sidebar({ open, setOpen }) {
  const { user, logout } = useAuth()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const base = "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200"
  const active = "bg-primary/10 text-primary border-l-4 border-primary shadow-sm"
  const inactive = "text-muted-foreground hover:bg-accent hover:text-foreground"
  const activeAdmin = "bg-red-500/10 text-red-600 border-l-4 border-red-500 shadow-sm"
  const inactiveAdmin = "text-red-500 hover:bg-red-500/10"

  const getUserInitials = () => {
    if (!user?.name) return "U"
    return user.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden animate-fadeIn"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed z-40 h-screen w-72 border-r bg-background
          flex flex-col
          md:sticky md:top-0 md:h-screen md:translate-x-0
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ height: '100vh' }}
      >
        {/* STICKY TOP SECTION */}
        <div className="sticky top-0 z-10 bg-background border-b">
          {/* USER INFO CARD */}
          <div className="p-6 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {getUserInitials()}
                  </span>
                </div>
                <div className={`absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-background ${
                  user?.role === 'admin' ? 'bg-red-500' : 'bg-green-500'
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold leading-tight truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-muted-foreground truncate mt-1">
                  {user?.email}
                </p>
                <div className="mt-2">
                  <RoleBadge role={user?.role} />
                </div>
              </div>
            </div>

            {/* SIMPLE STATUS */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Status</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-600 font-medium">
                  Online
                </span>
              </div>
            </div>
          </div>

          {/* SCROLL INDICATOR (desktop only) */}
          <div className={`hidden md:block h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`} />
        </div>

        {/* SCROLLABLE NAVIGATION - STICKY SISTEM */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="p-4">
              {/* DASHBOARD NAVIGATION */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase mb-3 px-2">Navigation</p>
                <div className="space-y-1">
                  <NavLink
                    to="/dashboard"
                    end
                    className={({ isActive }) =>
                      `${base} ${isActive ? active : inactive} group`
                    }
                    onClick={() => setOpen(false)}
                  >
                    <div className={`rounded-lg p-2 transition-all ${
                      active === "overview" ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}>
                      <LayoutDashboard size={18} />
                    </div>
                    <span className="flex-1">Dashboard</span>
                    <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </NavLink>

                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) =>
                      `${base} ${isActive ? active : inactive} group`
                    }
                    onClick={() => setOpen(false)}
                  >
                    <div className={`rounded-lg p-2 transition-all ${
                      active === "profile" ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}>
                      <User size={18} />
                    </div>
                    <span className="flex-1">Profile</span>
                    <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </NavLink>

                  <NavLink
                    to="/dashboard/settings"
                    className={({ isActive }) =>
                      `${base} ${isActive ? active : inactive} group`
                    }
                    onClick={() => setOpen(false)}
                  >
                    <div className={`rounded-lg p-2 transition-all ${
                      active === "settings" ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}>
                      <Settings size={18} />
                    </div>
                    <span className="flex-1">Settings</span>
                    <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </NavLink>
                </div>
              </div>

              {/* ADMIN SECTION */}
              {user?.role === "admin" && (
                <div className="mb-6">
                  <p className="text-xs font-semibold text-red-500 uppercase mb-3 px-2">Administration</p>
                  <div className="space-y-1">
                    <NavLink
                      to="/admin"
                      className={({ isActive }) =>
                        `${base} group ${
                          isActive ? activeAdmin : inactiveAdmin
                        }`
                      }
                      onClick={() => setOpen(false)}
                    >
                      <div className={`rounded-lg p-2 transition-all ${
                        active === "admin" ? 'bg-red-500/20' : 'bg-red-500/10 group-hover:bg-red-500/20'
                      }`}>
                        <Shield size={18} />
                      </div>
                      <span className="flex-1">Admin Panel</span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs bg-red-500/20 text-red-500 px-2 py-1 rounded-full font-medium">
                          Admin
                        </span>
                        <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* STICKY BOTTOM SECTION - TIDAK SCROLL */}
        <div className="sticky bottom-0 border-t bg-background p-4 mt-auto">
          {/* SECURITY STATUS */}
          <div className="mb-4 rounded-lg bg-gradient-to-r from-green-500/5 to-green-500/10 p-3 border border-green-500/20">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-500/20 p-2">
                <ShieldCheck className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-green-700">Security Status</p>
                <p className="text-xs text-green-600/80">All systems secure</p>
              </div>
            </div>
          </div>

          {/* HELP & SUPPORT */}
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all w-full group mb-2 ${
                isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`
            }
            onClick={() => setOpen(false)}
          >
            <div className="rounded-lg p-2 bg-blue-500/10 group-hover:bg-blue-500/20 transition-all">
              <HelpCircle size={18} className="text-blue-500" />
            </div>
            <span className="flex-1 text-left">Help & Support</span>
            <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </NavLink>

          {/* LOGOUT BUTTON */}
          <button
            onClick={logout}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all w-full group text-red-500 hover:bg-red-500/10"
          >
            <div className="rounded-lg p-2 bg-red-500/10 group-hover:bg-red-500/20 transition-all">
              <LogOut size={18} />
            </div>
            <span className="flex-1 text-left">Logout</span>
            <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </button>
          
          {/* FOOTER */}
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Sparkles className="h-3 w-3 text-primary" />
                <p className="text-xs text-muted-foreground font-medium">
                  DashboardPro v2.1.4
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                {user?.role === 'admin' ? '⚡ Admin Mode' : '👤 User Mode'}
              </p>
            </div>
          </div>
        </div>
      </aside>

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
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        
        /* Custom scrollbar for sidebar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 2px;
        }
        
        .dark .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #4b5563;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>
    </>
  )
}