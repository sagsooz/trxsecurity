"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { LoginForm } from "@/components/admin/login-form"
import { isAuthenticated } from "@/lib/admin-auth"

export default function AdminLoginPage() {
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // If already authenticated, redirect to dashboard
    if (isAuthenticated()) {
      router.push("/mrzadmin/dashboard")
    } else {
      setIsChecking(false)
    }
  }, [router])

  if (isChecking) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#00ff9d] border-t-transparent"></div>
          <p className="mt-4 text-white">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <div className="flex flex-1 items-center justify-center bg-[url('/placeholder.svg?key=vxh5i')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-10 w-full max-w-md p-4">
          <LoginForm />
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
    </div>
  )
}
