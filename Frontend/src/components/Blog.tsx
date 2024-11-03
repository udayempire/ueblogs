import { Avatar, AvatarFallback } from "@/components/ui/avatar"
export const Blog = () => {
    return <div className="w-full ">
        <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center  ">
                <div className="p-5 flex flex-col gap-4 w-full max-w-xl border-b">
                    {/* Post Details */}
                    <div className="flex text-gray-500 items-center gap-4 justify-start">
                        <Avatar>
                            <AvatarFallback className="text-black">U</AvatarFallback>
                        </Avatar>
                        <p >Uday</p>
                        <div className="bg-gray-600 rounded-full w-1 h-1"></div>
                        <p>2 Days Ago</p>
                    </div>
                    {/* Post Heading */}
                    <h1 className="font-bold text-2xl cursor-pointer">Attachment is the root cause of Destruction</h1>
                    <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia suscipit labore sequi voluptatem repellendus corruption...</p>
                    <div className="flex gap-5">
                        <p>3 Min Read</p>
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