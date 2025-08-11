'use client'
import transactionData from '@/public/transactions.json';
import SeeDetails from './SeeDetails';
import Image from 'next/image';
type Transaction = {
    avatar: string;
    name: string;
    category: string;
    date: string;
    amount: number;
    recurring: boolean;
};
export default function TransactionStats() {
    const transactions: Transaction[] = transactionData;
    return (
        <div className="bg-white rounded-2xl p-4">
            <div className="flex justify-between">
                <h3 className="font-semibold text-2xl">Transactions</h3>
                <SeeDetails url="/transactions" />
            </div>
            <div className='mt-6 flex flex-col gap-5.5'> 
            {
                transactions.slice(0, 5).map((value, index) => (
                    <div className='flex justify-between'>
                        <div className='flex flex-row gap-2'>
                            <Image
                                src={value.avatar.replace("./public", "")}
                                alt={value.name}
                                width={30}
                                height={30}
                                className="rounded-full object-cover w-12 h-12"
                            />
                            <span className='font-semibold flex flex-col items-center justify-center text-lg'>{value.name}</span>
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <div className={`font-semibold ${value.amount>0? 'text-[#277c78]' :''}`}>
                                 {
                                    value.amount>0? '+$'+value.amount : "-$"+Math.abs(value.amount)
                                 }
                            </div>
                            <div className='text-gray-600'>
                                {value.date.split('T')[0]}
                            </div>
                        </div>    
                    </div>
                ))
            }
            </div>

        </div>
    )
}