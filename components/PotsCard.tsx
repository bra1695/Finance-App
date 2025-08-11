import Image from "next/image";
import SeeDetails from "./SeeDetails";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import iconElpssis from '@/public/assets/images/icon-ellipsis.svg';
type Pots = {
    name: string;
    target: number;
    total: number;
    theme: string;
}

type Props = {
    pot: Pots
};

export default function PotsCard({ pot }: Props) {
    const progressValue= (pot.total / pot.target)*100
    return (
        <div className="p-4 bg-white rounded-2xl flex flex-col mb-4 gap-4">
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    {/* Use inline style for dynamic color */}
                    <span
                        className="w-3 h-3 rounded-full block"
                        style={{ backgroundColor: pot.theme }}
                    ></span>
                    <h3 className="font-semibold">{pot.name}</h3>
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
            <div className="flex justify-between">
                <div className="text-gray-500">Total Saved</div>
                <div className="text-2xl font-bold">
                    ${pot.total.toFixed(2)}
                </div>
            </div>
            <div>
                 <Progress
                    value={progressValue}
                    className="mb-4 h-3"
                    color={pot.theme}
                />
            </div>
            <div className="flex justify-between">
                <span>{progressValue.toFixed(2)}%</span>
                <span>target of ${pot.target}</span>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <Button className='bg-[#f8f4f0] rounded-md flex items-center py-4 text-[#201f24]'>
                    + Add Money
                </Button>
                 <Button className='bg-[#f8f4f0] rounded-md flex items-center py-4 text-[#201f24]'>
                    Withdraw
                </Button>
            </div>
        </div>
    )
}