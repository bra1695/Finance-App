import SeeDetails from "./SeeDetails";

export default function RecurringBills(){
    return(
        <div className="bg-white rounded-2xl p-4">
            <div className="flex justify-between">
                <h3 className="font-semibold text-2xl">Recurring Bills</h3>
                <SeeDetails url="test" />
            </div>
            <div className="flex flex-col gap-4 mt-8">
                <div className="rounded-xl p-4 flex justify-between bg-[#f8f4f0] border-l-4 border-[#277c78]">
                   <span className="text-gray-600">
                      Paid Bills
                   </span>
                   <span className="font-semibold text-xl">
                      $190.00
                   </span>
                </div>

                <div className="rounded-xl p-4 flex justify-between bg-[#f8f4f0] border-l-4 border-[#f2cdac]">
                   <span className="text-gray-600">
                      Total Upcoming
                   </span>
                   <span className="font-bold text-xl">
                      $194.98
                   </span>
                </div>

                <div className="rounded-xl p-4 flex justify-between bg-[#f8f4f0] border-l-4 border-[#82c9d7]">
                   <span className="text-gray-600">
                      Due Soon
                   </span>
                   <span className="font-bold text-xl">
                      $59.98
                   </span>
                </div>

            </div>
            
        </div>
    )
}