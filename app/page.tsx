"use client"

import { AuthProvider } from "@/components/auth/auth-provider"
import { useState } from "react"
import { LoginForm } from "@/components/auth/login-form"
import { TaskDashboard } from "@/components/dashboard/task-dashboard"
// ...existing code...

function AppContent() {
  // User and loading state lifted to Home
  return null // replaced by Home
}

export default function Home() {
  const [user, setUser] = useState<{ name: string; role: "guest" | "user" } | null>(null)
  const loading = false

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return <LoginForm onLogin={setUser} />
  }

  // Dynamic welcome message
  const welcomeTitle =
    user.role === "guest"
      ? `Welcome, Demo Guest`
      : `Welcome, Demo User`

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{welcomeTitle}</h1>
      <TaskDashboard onSignOut={() => setUser(null)} user={user} />
    </div>
  )
}
