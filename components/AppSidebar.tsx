"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import React, { useEffect, useState } from "react"
import logoSmall from "@/public/assets/images/logo-small.svg"
import logoLarge from "@/public/assets/images/logo-large.svg"
import iconMenuMinamize from "@/public/assets/images/icon-minimize-menu.svg"
import Image from "next/image"
import { usePathname } from "next/navigation";
import { 
  Home, 
  CreditCard, 
  PieChart, 
  PiggyBank, 
  CalendarCheck 
} from "lucide-react";

export function AppSidebar() {
  const isMobile = useIsMobile()
  const [image, setImage] = useState(logoLarge)
  const pathname = usePathname();

  const getImageDimensions = () => {
    return isMobile 
      ? { width: 15, height: 30 } 
      : { width: 100, height: 20 };
  }

  const { toggleSidebar } = useSidebar()
  const dimensions = getImageDimensions()

  const items = [
    {
      title: "Overview",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: CreditCard,
    },
    {
      title: "Budgets",
      url: "/budget",
      icon: PieChart,
    },
    {
      title: "Pots",
      url: "/pots",
      icon: PiggyBank,
    },
    {
      title: "Recurring Bills",
      url: "/bills",
      icon: CalendarCheck,
    },
  ]

  useEffect(() => {
    setImage(isMobile ? logoSmall : logoLarge)
  }, [isMobile])

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="px-8 py-8 bg-[#201f24] rounded-tr-2xl">
        <Image
          alt="Logo Finance"
          src={image}
          height={dimensions.height}
          width={dimensions.width}
        />
      </SidebarHeader>

      <SidebarContent className="px-0 py-6 bg-[#201f24]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => {
                const isActive = pathname === item.url || 
                                (item.url !== "/dashboard" && pathname.startsWith(item.url));
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={`
                        py-6 px-8 rounded-none rounded-r-2xl transition-all duration-200 border-l-4 border-transparent mx-0
                        ${
                          isActive
                            ? "bg-white text-[#201f24] border-l-[#277C78] hover:bg-white/95 shadow-sm"
                            : "text-white hover:bg-white/10 hover:text-white"
                        }
                      `}
                    >
                      <a href={item.url} className="flex items-center gap-4 w-full">
                        <item.icon 
                          className={`w-5 h-5 transition-all duration-200 ${
                            isActive ? "text-[#201f24]" : "text-white"
                          }`} 
                        />
                        <span className="font-semibold text-base group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-0 bg-[#201f24] rounded-br-2xl">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={toggleSidebar}
              className="h-14 px-8 text-white hover:bg-white/10 hover:text-white rounded-none transition-all duration-200 mx-0"
            >
              <Image
                alt="Menu Minimize"
                src={iconMenuMinamize}
                height={20}
                width={20}
                className="brightness-0 invert"
              />
              <span className="font-semibold text-base group-data-[collapsible=icon]:hidden">
                Minimize Menu
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}