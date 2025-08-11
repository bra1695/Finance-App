import HeaderLogin from "@/components/HeaderLogin";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){

    return(
        <div>
            <HeaderLogin />
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16 bg-[f8f4f0] container p-4 h-[90vh]">
           <div

            style={{ backgroundImage: `url('/assets/images/illustration-authentication.svg')` }}
           className='object-fill h-[90vh] w-full hidden lg:block rounded-2xl'
           >
           </div>
           <div className='container col-span-1 lg:col-span-2 flex items-center justify-center'>
              {children}
           </div>
        </div>
        </div>

    )
}