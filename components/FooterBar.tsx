"use client"

import { usePathname } from "next/navigation";
import { 
  Home, 
  CreditCard, 
  PieChart, 
  PiggyBank, 
  CalendarCheck 
} from "lucide-react";
export default function FooterBar(){
      const pathname = usePathname();
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
    return (
        <div className="bg-[#201f24] block lg:hidden text-white p-4 fixed bottom-0 left-0 w-full rounded-tl-2xl rounded-tr-2xl">
            <div className="grid grid-cols-5">
                 {
                    items.map((item,index)=>{
                        const isActive= pathname === item.url ||
                        (item.url !== "/dashboard" && pathname.startsWith(item.url))
                        return(
                            <a key={index} href={item.url} aria-label={item.title} className={`flex flex-col items-center justify-center p-2 rounded-tl-2xl rounded-tr-2xl 
                                                    ${
                          isActive
                            ? "bg-white text-[#201f24] border-b-4  border-b-[#277C78] hover:bg-white/95 shadow-sm"
                            : "text-white hover:bg-white/10 hover:text-white"
                        }
                            `}>
                     <item.icon 
                          className={`w-5 h-5 transition-all duration-200 ${
                            isActive ? "text-[#201f24]" : "text-white"
                          }`} 
                        />
                        <span className="font-semibold hidden md:block text-base group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>

                            </a>
                        )
                    })
                 }

            </div>

        </div>
    )
}