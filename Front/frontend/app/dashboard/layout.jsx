import BarLeft from "@/components/BarLeft"
import MenuDash from "@/components/MenuDash"

export default function DashBoardLayout ({children}){
    return <div className="flex flex-raw w-screen h-screen">
    <BarLeft/>
    <MenuDash/>
    {children}
     </div>
}