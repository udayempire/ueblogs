import { Avatar, AvatarFallback } from "./ui/avatar"
import { Blog } from "@/hooks"
import { timeAgo } from "@/utils/timeUtils"
import { Button } from "./ui/button"
export const FullBlog = ( {blog }: { blog: Blog }) => {
    return <div className="w-3/5 ">
        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-5xl text-center" >{blog.title}</h1>
            <div className="flex justify-between">
                <div className="flex items-center gap-5">
                    <Avatar>
                        <AvatarFallback className="text-black">{blog.author?.name[0]}</AvatarFallback>
                    </Avatar>
                    <p>{blog.author?.name}</p>
                </div>
                <div>
                    <p>{timeAgo(`${blog.createdAt}`)}</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p>{Math.ceil((blog.content.split(" ").length / 200))} Min Read</p>
                <div className="flex gap-6">
                    <Button>Summarize Text</Button> 
                    <Button>Listen</Button> 
                    <Button>Follow Creator</Button> 
                    <div className="flex items-center gap-1 cursor-pointer">
                        <img src="upvote.svg" alt="" />
                        <p>25K</p>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img src="comment.svg" alt="" />
                        <p>25K</p>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer ">
                        <img src="nature.png" alt="" />
                        <p>Share</p>
                    </div>
                </div>
            </div>
            <p>{blog.content}</p>

        </div>


    </div>

}