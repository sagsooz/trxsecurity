"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, FileText, Settings, Shield, Database, BarChart, Globe, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { logout } from "@/lib/admin-auth"
import { useRouter } from "next/navigation"

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  href: string
  active?: boolean
}

function SidebarItem({ icon: Icon, label, href, active }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200",
        active ? "bg-[#00ff9d]/20 text-[#00ff9d]" : "text-gray-400 hover:bg-gray-800 hover:text-white",
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  )
}

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/mrzadmin")
  }

  return (
    <div className="flex h-full w-64 flex-col border-r border-gray-800 bg-black">
      <div className="flex h-14 items-center border-b border-gray-800 px-4">
        <h2 className="text-lg font-bold text-[#00ff9d]">MRZ Admin</h2>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          <SidebarItem
            icon={LayoutDashboard}
            label="Dashboard"
            href="/mrzadmin/dashboard"
            active={pathname === "/mrzadmin/dashboard"}
          />
          <SidebarItem
            icon={Users}
            label="Users"
            href="/mrzadmin/dashboard/users"
            active={pathname === "/mrzadmin/dashboard/users"}
          />
          <SidebarItem
            icon={FileText}
            label="Content"
            href="/mrzadmin/dashboard/content"
            active={pathname === "/mrzadmin/dashboard/content"}
          />
          <SidebarItem
            icon={Globe}
            label="Backlinks"
            href="/mrzadmin/dashboard/backlinks"
            active={pathname === "/mrzadmin/dashboard/backlinks"}
          />
          <SidebarItem
            icon={Shield}
            label="Security"
            href="/mrzadmin/dashboard/security"
            active={pathname === "/mrzadmin/dashboard/security"}
          />
          <SidebarItem
            icon={Database}
            label="Database"
            href="/mrzadmin/dashboard/database"
            active={pathname === "/mrzadmin/dashboard/database"}
          />
          <SidebarItem
            icon={BarChart}
            label="Analytics"
            href="/mrzadmin/dashboard/analytics"
            active={pathname === "/mrzadmin/dashboard/analytics"}
          />
          <SidebarItem
            icon={Settings}
            label="Settings"
            href="/mrzadmin/dashboard/settings"
            active={pathname === "/mrzadmin/dashboard/settings"}
          />
        </nav>
      </div>
      <div className="border-t border-gray-800 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all duration-200 hover:bg-red-900/30 hover:text-red-400"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
