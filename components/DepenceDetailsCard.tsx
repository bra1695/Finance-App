import Image from "next/image";
import SeeDetails from "./SeeDetails";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import iconElpssis from '@/public/assets/images/icon-ellipsis.svg';
// Define Budget type (or import from shared types)
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
}

type Props = {
    budget: Budget;  
    transactions: Transaction[]
};

export default function DepenceDetailsCard({ budget, transactions }: Props) {
    const progressValue = (budget.depence / budget.maximum) * 100;
    const remaining = budget.maximum - budget.depence;

    return (
        <div className="p-4 bg-white rounded-2xl flex flex-col mb-4 gap-4">
            <div className="flex justify-between">
            <div className="flex items-center gap-4">
                {/* Use inline style for dynamic color */}
                <span
                    className="w-3 h-3 rounded-full block"
                    style={{ backgroundColor: budget.theme }}
                ></span>
                <h3 className="font-semibold">{budget.category}</h3>
            </div>
            <button className="hover:cursor-pointer" >
                <Image
                    src={iconElpssis}
                    width={30}
                    height={30}
                    className="rounded-full object-cover w-6 h-1.5"
                    alt="Iconmenu depence details"
                />

            </button>
            </div>

            <div className="text-gray-500">
                Maximum of ${budget.maximum}
            </div>
            <div>
                <Progress
                    value={progressValue}
                    className="mb-4 h-6 rounded-md"
                    color={budget.theme}
                />
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <span
                        className="w-1 h-12 rounded-md block"
                        style={{ backgroundColor: budget.theme }}
                    ></span>
                    <div className="flex flex-col gap-2">
                        <span>Spent</span>
                        <span>${budget.depence.toFixed(0)}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span
                        className="w-1 h-12 rounded-md block bg-[#F8F4F0]"

                    ></span>
                    <div className="flex flex-col gap-2">
                        <span>Remaining</span>
                        <span>${remaining>0 ? remaining.toFixed(0): 0}</span>
                    </div>
                </div>
                <div></div>
            </div>
            <div className="bg-[#f8f4f0] p-4 rounded-2xl">
                <div className="flex justify-between">
                    <h3 className="font-semibold text-2xl">Latest Spending</h3>
                    <SeeDetails url="/transactions" />
                </div>
                <div className='mt-6 flex flex-col gap-5.5'> 
                {
                    transactions.filter(x=>x.category===budget.category).slice(0,3).map((value, index)=>(
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

        </div>
    )
}