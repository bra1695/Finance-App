import logoLarge from "@/public/assets/images/logo-large.svg"
import Image from "next/image"
export default function HeaderLogin(){
    return(
        <div className="bg-[#201f24] block lg:hidden flex items-center justify-center p-4 rounded-b-2xl ">
                      <Image
                        alt="Logo Finance"
                        src={logoLarge}
                        height={20}
                        width={100}
                      />      
        </div>
    )
}