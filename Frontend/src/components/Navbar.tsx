import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export const Navbar = () => {
    const navigate = useNavigate()
    return <div className="border-b-2 bg-white  p-3 flex justify-between items-center ">
        <Link to="/" className="text-xl font-extrabold tracking-widest ml-8">
            UEBLOGS

        </Link>
        <div className="flex text-lg gap-12 items-center mr-8 ">
            <Button className="" size="custom">Write</Button>
            <div className="cursor-pointer">
                <img src="Notification.svg" alt="" />
            </div>
            <Avatar>
                <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Button className="" size="custom" 
            onClick={()=>{
                localStorage.removeItem('token');
                navigate('/signin');
            }}
            
            >Logout</Button>

        </div>
    </div>
}