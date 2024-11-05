import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { timeAgo } from "@/utils/timeUtils"
import { Posts } from "@/hooks"
export const Blog = ({ posts }: { posts: Posts }) => {
    return <div className="w-full ">
        <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center  ">
                <div className="p-5 flex flex-col gap-4 w-full max-w-xl border-b">
                    {/* Post Details */}
                    <div className="flex text-gray-500 items-center gap-4 justify-start">
                        <Avatar>
                            <AvatarFallback className="text-black">{posts.author?.name[0]}</AvatarFallback>
                        </Avatar>
                        <p >{posts.author?.name}</p>
                        <div className="bg-gray-600 rounded-full w-1 h-1"></div>
                        <p>{timeAgo(`${posts.createdAt}`)}</p>
                    </div>
                    {/* Post Heading */}
                    <h1 className="font-bold text-2xl cursor-pointer">{posts.title}</h1>
                    <p className="text-gray-500">{posts.content.slice(0, 120)}...</p>
                    <div className="flex gap-5">
                        <p>{Math.ceil((posts.content.split(" ").length / 200))} Min Read</p>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <img src="upvote.svg" alt="" />
                            <p>25K</p>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <img src="comment.svg" alt="" />
                            <p>25K</p>
                        </div>
                        <div className="flex items-center gap-2 cursor-pointer ">
                            <img src="share.svg" alt="" />
                            <p>Share</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}