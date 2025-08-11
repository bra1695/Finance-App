import { useCurrency } from '@/lib/utils';
import balanceData from '@/public/balance.json';
type Balance = {
    current: number;
    income: number;
    expenses: number;
}
export default function StatisticCards(){
    const balance: Balance=balanceData;
    const currentAmount=useCurrency(balance.current);
    const incomeAmount=useCurrency(balance.income);
    const expensesAmount=useCurrency(balance.expenses);
    return (
        <div className="flex flex-col gap-2 md:flex-row">
            <div className='py-4 px-8 w-full flex flex-col gap-4 group md:w-1/3 rounded-2xl bg-white text-[#201f24] hover:bg-[#201f24] hover:text-white'>
                <span className='text-sm text-gray-500 group-hover:text-white'>Current Balance</span>
                <span className='text-4xl font-bold'>{currentAmount}</span>
            </div>
            <div className='p-4 w-full flex flex-col gap-4 group md:w-1/3 rounded-2xl bg-white text-[#201f24] hover:bg-[#201f24] hover:text-white'>
                <span className='text-sm text-gray-500 group-hover:text-white'>Income</span>
                <span className='text-4xl font-bold'>{incomeAmount}</span>
            </div>
            <div className='p-4 w-full flex flex-col gap-4 group md:w-1/3 rounded-2xl bg-white text-[#201f24] hover:bg-[#201f24] hover:text-white'>
                <span className='text-sm text-gray-500 group-hover:text-white'>Expenses</span>
                <span className='text-4xl font-bold'>{expensesAmount}</span>
            </div>
        </div>
    )
}