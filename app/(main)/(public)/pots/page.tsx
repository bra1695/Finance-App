import PotsCard from '@/components/PotsCard';
import { Button } from '@/components/ui/button';
import potsData from '@/public/pots.json';
type Pots = {
    name: string;
    target: number;
    total: number;
    theme: string;
}
export default function Pots() {
    const pots: Pots[] = potsData;
    return (
        <div className="lg:p-6 max-w-7xl mx-auto">
            <div className='flex justify-between'>
                <h1 className="text-3xl font-bold mb-6">Pots</h1>
                <Button className='bg-[#201f24] rounded-md text-white'>
                    + Add New Pot
                </Button>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    pots.map((value, index) => (
                        <PotsCard  pot={value} key={index} />
                    ))
                }

            </div>
        </div>
    )
}