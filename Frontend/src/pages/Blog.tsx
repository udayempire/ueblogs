import {Navbar} from "../components/Navbar"
import { FullBlog } from "@/components/FullBlog"
export const Blog=()=>{
    return <div>
        <Navbar/>

        <div className="flex justify-center mt-10">
            <FullBlog/>
        </div>
        
    </div>

}