import { Avatar, AvatarFallback } from "./ui/avatar"
export const FullBlog = () => {
    return <div>
        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-5xl" >This is title of the Blog</h1>
            <div className="flex justify-between">
                <div className="flex items-center gap-5">
                    <Avatar>
                        <AvatarFallback className="text-black">U</AvatarFallback>
                    </Avatar>
                    <p>Uday Kumar</p>
                </div>
                <div>
                    <p>2 Nov 2024</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p>2 min read</p>
                <div className="flex gap-6">
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

}