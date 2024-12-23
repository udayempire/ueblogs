import {Navbar} from "../components/Navbar"
import { FullBlog } from "@/components/FullBlog"
import { useBlog } from "../hooks/index"
export const Blog=()=>{
    return <div>
        <Navbar/>

        <div className="flex justify-center mt-10">
            <FullBlog blog={blog}/>
        </div>
        
    </div>

}