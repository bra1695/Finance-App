import Image from "next/image";
import Link from "next/link";
import iconCaretRight from '@/public/assets/images/icon-caret-right.svg';

export default function SeeDetails(url: any){
    return(
        <Link className="flex flex-row gap-4 text-gray-400" href={url}>
         <span>See details</span> <Image className="mb-1" src={iconCaretRight} alt="details caret" />
        </Link>
        
    );
}