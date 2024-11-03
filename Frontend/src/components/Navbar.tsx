import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
export const Navbar = () => {
    return <div className="border-b-2 shadow-sm p-3 flex justify-between items-center">
        <Link to="/" className="text-lg font-medium ml-8">
            UEBLOGS

        </Link>
        <div className="flex text-lg gap-12 items-center mr-8">
            <Button size="custom">Write</Button>
            <div className="cursor-pointer">
                <img src="Notification.svg" alt="" />
            </div>
            <Avatar>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </div>
}