import Image from "next/image";
import SeeDetails from "./SeeDetails";
import iconPots from '@/public/assets/images/icon-pot.svg';
import potsData from '@/public/pots.json';
import { useCurrency } from "@/lib/utils";
type Pots = {
    name: string;
    target: number;
    total: number;
    theme: string;
}
export default function PotsStats() {
    const pots: Pots[] = potsData;

    const totalAmount = useCurrency(pots.reduce((total, pot: Pots) => total + pot.total, 0));
    return (
        <div className="bg-white rounded-2xl p-6">
            <div className="flex justify-between">
                <h3 className="font-semibold text-2xl">Pots</h3>
                <SeeDetails />
            </div>
            <div className="grid lg:grid-cols-2 mt-4 gap-4">
                <div className="bg-[#f8f4f0] rounded-2xl  flex gap-4 flex-row justify-center items-center p-4">
                    <Image className="mb-1" src={iconPots} alt="details pots" />
                    <div className="flex flex-col gap-2">
                        <div className="text-sm text-gray-700">Total Saved</div>
                        <div className="text-2xl font-bold ">{totalAmount}</div>
                    </div>

                </div>
                <div className="grid lg:grid-cols-2 gap-4 lg:grid-rows-2">
        {potsData  .slice(0, 4)
.map((entry, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 text-sm"
          >
            <div
              className="w-1 h-12 "
              style={{ backgroundColor: entry.theme,borderRadius:4 }}
            ></div>
            <div className="flex flex-col gap-0.5">
          <span className="font-medium">{entry.name}</span>
            <span className="text-gray-500">
              ${entry.total.toFixed(2)}
            </span>
            </div>
  
          </div>
        ))}
                </div>

            </div>

        </div>
    )
}