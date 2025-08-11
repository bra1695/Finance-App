"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

      {/* Name */}
      <div className="mb-4">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Your name"
          className="mt-1"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="you@example.com"
          className="mt-1"
        />
      </div>

      {/* Password */}
      <div className="mb-2">
        <Label htmlFor="password">Create Password</Label>
        <div className="relative mt-1">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="••••••••"
            className="pr-10"
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

      {/* Password hint */}
      <p className="text-xs text-gray-500 mb-6">
        Passwords must be at least 8 characters
      </p>

      {/* Create Account Button */}
      <Button className="w-full bg-black text-white hover:bg-gray-800">
        Create Account
      </Button>

      {/* Footer link */}
      <p className="mt-4 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <a href="/login" className="font-medium text-black hover:underline">
          Login
        </a>
      </p>
    </div>
  )
}
