import { Blog } from "@/components/Blog"
import { Navbar } from "@/components/Navbar"
import { useAllPosts } from "@/hooks"

export const Blogs = () => {
    const {loading,allPosts} = useAllPosts()
    if(loading){
        return <div className="bg-zinc-50">
        <Navbar />
        <div className="">
            Loading.... Please wait
        </div>
    </div>
    }
    return <div className="bg-zinc-50">
        <Navbar />
        <div className="">
            <div className="mt-7  ">
                {allPosts.map((post)=>(
                    <Blog key={post.id} posts={post}/>
                ))}
            </div>
        </div>
    </div>

}