"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BudgetChart from "@/components/BudgetChart";
import PotsStats from "@/components/PotsStats";
import RecurringBills from "@/components/RecurringBills";
import StatisticCards from "@/components/StatisticCards";
import TransactionStats from "@/components/TransactionStats";
import budgetsData from "@/public/budgets.json";

type Budget = {
  category: string;
  maximum: number;
  theme: string;
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const budgets: Budget[] = budgetsData;

  useEffect(() => {
    async function checkAuth() {
      const res = await fetch("/api/auth/me");
      if (!res.ok) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  if (loading) {
    return <p className="p-6">Checking authentication...</p>;
  }

  return (
    <div className="lg:p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Overview</h1>
      <StatisticCards />
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-2 my-2 lg:my-8">
        <div className="grid grid-rows-2 lg:grid-rows-3 gap-4 lg:gap-0">
          <div className="row-span-1">
            <PotsStats />
          </div>
          <div className="row-span-1 lg:row-span-2">
            <TransactionStats />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <BudgetChart budgets={budgets} />
          <RecurringBills />
        </div>
      </div>
    </div>
  );
}
