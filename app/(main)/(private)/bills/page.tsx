'use client';
import transactionData from '@/public/transactions.json';
import iconBills from '@/public/assets/images/icon-recurring-bills.svg';
import Image from 'next/image';
import TransactionList from '@/components/TransactionList';
type Transaction = {
    avatar: string;
    name: string;
    category: string;
    date: string;
    amount: number;
    recurring: boolean;
};
export default function Bills() {
    const transactions: Transaction[] = transactionData;
    const totalBills = transactions.filter(x => x.recurring).reduce((sum, transaction) => sum + Math.abs(transaction.amount), 0);
    return (
        <div className="lg:p-6 max-w-7xl mx-auto">
            <div className='flex justify-between'>
                <h1 className="text-3xl font-bold mb-6">Recurring Bills</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div>
                    <div className="flex flex-col md:flex-row lg:flex-col w-full gap-4">
                        <div className="flex flex-col p-4 gap-12 bg-[#201f24] rounded-2xl flex-1">
                            <Image
                                src={iconBills}
                                alt="Icon Bills"
                                className="w-8 h-8"
                                height={20}
                                width={20}
                            />
                            <div className="flex flex-col gap-2 text-white">
                                <span>Total Bills</span>
                                <span className="font-bold text-3xl">${totalBills.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex flex-col p-4 gap-3 bg-white rounded-2xl flex-1">
                            <h3 className="text-2xl font-bold">Summary</h3>
                            <div className="flex py-3 border-b-2 border-gray-200 justify-between">
                                <span className="text-sm text-gray-600">Paid Bills</span>
                                <span>4 ($190.00)</span>
                            </div>
                            <div className="flex py-3 border-b-2 border-gray-200 justify-between">
                                <span className="text-sm text-gray-600">Total Upcoming</span>
                                <span>4 ($194.98)</span>
                            </div>
                            <div className="flex py-3 border-b-2 text-red-500 border-gray-200 justify-between">
                                <span className="text-sm">Due Soon</span>
                                <span>2 ($59.98)</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='col-span-1 lg:col-span-2'>
                    <TransactionList />
                </div>
            </div>
        </div>
    )
}