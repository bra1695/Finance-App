'use client'
import BudgetDetailsChart from '@/components/BudgetDetailsChart';
import DepenceDetailsCard from '@/components/DepenceDetailsCard';
import { Button } from '@/components/ui/button';
import budgetData from '@/public/budgets.json';
import transactionsData from '@/public/transactions.json';

// Define your Budget type
type Budget = {
  category: string;
  maximum: number;
  theme: string;
  depence: number;
};
type Transaction ={
    avatar: string;
    name: string;
    category: string;
    date: string;
    amount: number;
    recurring: boolean;
};

export default function BudgetPage() {
  const budgets: Budget[] = budgetData;
  const transactions: Transaction[]= transactionsData;
  
  return (
    <div className="lg:p-6 max-w-7xl mx-auto">
      <div className='flex justify-between'>
        <h1 className="text-3xl font-bold mb-6">Budgets</h1>
        <Button className='bg-[#201f24] rounded-md text-white'>
          + Add New Budget
        </Button>
      </div>
      
      <div className='mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <div className='lg:self-start lg:sticky lg:top-6'> 
        <BudgetDetailsChart />
        </div>
        
        <div className='col-span-1 lg:col-span-2'>
          {budgets.map((budget, index) => (
            // Pass entire budget object as a single prop
            <DepenceDetailsCard 
              key={index} 
              budget={budget}  
              transactions={transactions}
            />
          ))}
        </div>
      </div>
    </div>
  )
}