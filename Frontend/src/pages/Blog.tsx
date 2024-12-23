import {Navbar} from "../components/Navbar"
import { FullBlog } from "@/components/FullBlog"
import { useBlog } from "../hooks/index"
import { useParams } from "react-router-dom"
export const Blog=()=>{
    const { id } = useParams()
    const {loading,blog} = useBlog({
        id: id || ""
    });
    if(loading || !blog){
        return <div>
            loading...
        </div>
    }
    return <div>
        <Navbar/>

        <div className="flex justify-center mt-10">
            <FullBlog blog={blog}/>
        </div>
        
    </div>

}