import BarLeft from "@/components/BarLeft"

export default function DashBoardLayout ({children}){
    return <div className="flex flex-raw w-screen h-screen">
    <BarLeft/>
    {children}
     </div>
}