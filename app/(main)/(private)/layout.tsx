
import { AppSidebar } from "@/components/AppSidebar";
import FooterBar from "@/components/FooterBar";
import { SidebarProvider } from "@/components/ui/sidebar"

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   return(

    <SidebarProvider>
      <AppSidebar />
       <div className="container p-8 bg-[#f8f4f0]">
        {children}
       </div>
      <FooterBar />
    </SidebarProvider>
   )

}