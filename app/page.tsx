"use client"

import HeaderLogin from "@/components/HeaderLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
      <HeaderLogin />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16 bg-[f8f4f0] container p-4 h-[90vh]">
        <div

          style={{ backgroundImage: `url('/assets/images/illustration-authentication.svg')` }}
          className='object-fill h-[90vh] w-full hidden lg:block rounded-2xl'
        >
        </div>
        <div className='container col-span-1 lg:col-span-2 flex items-center justify-center'>
          <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow">
            <h1 className="text-2xl font-bold mb-6">Login</h1>

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
            <div className="mb-6">
              <Label htmlFor="password">Password</Label>
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

            {/* Login Button */}
            <Button className="w-full bg-black text-white hover:bg-gray-800">
              Login
            </Button>

            {/* Footer link */}
            <p className="mt-4 text-center text-sm text-gray-500">
              Need to create an account?{" "}
              <a href="/register" className="font-medium text-black hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>


  )
}
