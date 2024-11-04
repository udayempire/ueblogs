import { Blog } from "@/components/Blog"
import { Navbar } from "@/components/Navbar"
export const Blogs = () => {

    return <div className="bg-zinc-50">
        <Navbar />
        <div className="">
            <div className="mt-7  ">
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </div>
        </div>

    </div>

}