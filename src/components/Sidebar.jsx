// SIDEBAR.JSX - FIXED VERSION
import { useState } from "react";
import { NavLink } from "react-router-dom"
import {
  LayoutDashboard,
  User,
  Settings,
  Shield,
  LogOut,
  HelpCircle,
  ChevronRight
} from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import RoleBadge from "@/components/RoleBadge"

export default function Sidebar({ open, setOpen }) {
  const { user, logout } = useAuth()
  const [activeSection, setActiveSection] = useState("main")

  const base = "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200"
  const active = "bg-primary/10 text-primary border-l-4 border-primary"
  const inactive = "text-muted-foreground hover:bg-accent hover:text-foreground"
  const activeAdmin = "bg-red-500/10 text-red-600 border-l-4 border-red-500"
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
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed z-50 h-full w-72 border-r bg-gradient-to-b from-background to-background/95
          transition-all duration-300 shadow-xl flex flex-col
          md:static md:translate-x-0 md:shadow-none
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* USER INFO CARD */}
        <div className="p-6 border-b flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {getUserInitials()}
              </span>
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

          {/* QUICK STATS */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="bg-accent/50 rounded p-2 text-center">
              <p className="text-xs text-muted-foreground">Projects</p>
              <p className="font-bold">12</p>
            </div>
            <div className="bg-accent/50 rounded p-2 text-center">
              <p className="text-xs text-muted-foreground">Tasks</p>
              <p className="font-bold">5</p>
            </div>
            <div className="bg-accent/50 rounded p-2 text-center">
              <p className="text-xs text-muted-foreground">Days</p>
              <p className="font-bold">7</p>
            </div>
          </div>
        </div>

        {/* SCROLLABLE MENU AREA */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase mb-3 px-2">MAIN</p>
            <div className="space-y-1">
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `${base} ${isActive ? active : inactive}`
                }
                onClick={() => setOpen(false)}
              >
                <LayoutDashboard size={18} />
                <span className="flex-1">Overview</span>
                {activeSection === "overview" && <ChevronRight className="h-4 w-4" />}
              </NavLink>

              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `${base} ${isActive ? active : inactive}`
                }
                onClick={() => setOpen(false)}
              >
                <User size={18} />
                <span className="flex-1">Profile</span>
              </NavLink>

              <NavLink
                to="/dashboard/settings"
                className={({ isActive }) =>
                  `${base} ${isActive ? active : inactive}`
                }
                onClick={() => setOpen(false)}
              >
                <Settings size={18} />
                <span className="flex-1">Settings</span>
              </NavLink>
            </div>
          </div>

          {/* ADMIN SECTION */}
          {user?.role === "admin" && (
            <div className="mb-6">
              <p className="text-xs font-semibold text-red-500 uppercase mb-3 px-2">ADMINISTRATION</p>
              <div className="space-y-1">
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `${base} ${
                      isActive ? activeAdmin : inactiveAdmin
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  <Shield size={18} />
                  <span className="flex-1">Admin Panel</span>
                  <span className="text-xs bg-red-500/20 text-red-500 px-2 py-0.5 rounded-full">
                    Admin
                  </span>
                </NavLink>
              </div>
            </div>
          )}

          {/* HELP & SUPPORT - DIPINDAH KE BAWAH */}
          {/* Kosongkan area ini, nanti pindah ke bawah */}
        </div>

        {/* FIXED BOTTOM SECTION - LOGOUT & FOOTER */}
        <div className="border-t mt-auto flex-shrink-0 bg-background">
          {/* HELP & SUPPORT */}
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors w-full hover:bg-accent ${
                isActive ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`
            }
            onClick={() => setOpen(false)}
          >
            <HelpCircle size={18} />
            <span className="flex-1 text-left">Help & Support</span>
          </NavLink>

          {/* LOGOUT BUTTON */}
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors border-t"
          >
            <LogOut size={18} />
            <span className="flex-1 text-left">Logout</span>
          </button>
          
          {/* FOOTER */}
          <div className="px-4 py-3 border-t">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Auth Dashboard React v2.1.4
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {user?.role === 'admin' ? 'Admin Mode' : 'User Mode'}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}