"use client"

import type React from "react"

import { useState } from "react"
import { AuthCheck } from "@/components/admin/auth-check"
import { DashboardSidebar } from "@/components/admin/dashboard-sidebar"
import { DashboardHeader } from "@/components/admin/dashboard-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <AuthCheck>
      <div className="flex h-screen bg-gray-950 text-white">
        <div
          className={`fixed inset-y-0 z-50 transform transition-transform duration-300 lg:static lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <DashboardSidebar />
        </div>

        <div className="flex flex-1 flex-col overflow-hidden">
          <DashboardHeader toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

          <main className="flex-1 overflow-auto bg-gradient-to-br from-gray-950 to-gray-900 p-4">{children}</main>
        </div>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={toggleSidebar} />}
      </div>
    </AuthCheck>
  )
}
