'use client'
import TransactionList from "@/components/TransactionList";
export default function TransactionsPage() {


  return (
    <div className="lg:p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Transactions</h1>
      <TransactionList />
    </div>
  );
}