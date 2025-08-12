"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      window.location.href = "/dashboard"
    } else {
      const data = await res.json()
      alert(data.error || "Login failed")
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow"
    >
      <h1 className="text-2xl font-bold mb-6">Login</h1>

      {/* Email */}
      <div className="mb-4">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="you@example.com"
          className="mt-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Password */}
      <div className="mb-6">
        <Label htmlFor="password">Password</Label>
        <div className="relative mt-1">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="••••••••"
            className="pr-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Login Button */}
      <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
        Login
      </Button>

      {/* Footer link */}
      <p className="mt-4 text-center text-sm text-gray-500">
        Need to create an account?{" "}
        <a href="/register" className="font-medium text-black hover:underline">
          Sign Up
        </a>
      </p>
    </form>
  )
}
