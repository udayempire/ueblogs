import { Avatar, AvatarFallback } from "./ui/avatar"
import { Blog } from "@/hooks"
export const FullBlog = ( {blog }: { blog: Blog }) => {
    return <div className="w-3/5 ">
        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-5xl text-center" >This is title of the Blog</h1>
            <div className="flex justify-between">
                <div className="flex items-center gap-5">
                    <Avatar>
                        <AvatarFallback className="text-black">U</AvatarFallback>
                    </Avatar>
                    <p>{posts.author?.name}</p>
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
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione accusantium quos eveniet, labore sit assumenda architecto. Ipsam eum non ducimus, totam omnis rem vel perferendis molestias delectus, iure excepturi facilis, nobis sint distinctio ratione corporis ex illo fugiat vitae accusamus? Non officiis quis perferendis fugit totam provident temporibus! Nihil, veniam veritatis accusantium cum odit ipsa quos illum laudantium earum eum, nostrum error delectus excepturi suscipit eius aperiam inventore incidunt? Vero officiis maiores maxime quas blanditiis, officia iure, adipisci impedit odio temporibus, voluptatum nisi aut fugit? Ipsum consequatur facere facilis, eaque sequi minus quaerat ullam quidem, nemo assumenda necessitatibus sunt? Ut.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione accusantium quos eveniet, labore sit assumenda architecto. Ipsam eum non ducimus, totam omnis rem vel perferendis molestias delectus, iure excepturi facilis, nobis sint distinctio ratione corporis ex illo fugiat vitae accusamus? Non officiis quis perferendis fugit totam provident temporibus! Nihil, veniam veritatis accusantium cum odit ipsa quos illum laudantium earum eum, nostrum error delectus excepturi suscipit eius aperiam inventore incidunt? Vero officiis maiores maxime quas blanditiis, officia iure, adipisci impedit odio temporibus, voluptatum nisi aut fugit? Ipsum consequatur facere facilis, eaque sequi minus quaerat ullam quidem, nemo assumenda necessitatibus sunt? Ut.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione accusantium quos eveniet, labore sit assumenda architecto. Ipsam eum non ducimus, totam omnis rem vel perferendis molestias delectus, iure excepturi facilis, nobis sint distinctio ratione corporis ex illo fugiat vitae accusamus? Non officiis quis perferendis fugit totam provident temporibus! Nihil, veniam veritatis accusantium cum odit ipsa quos illum laudantium earum eum, nostrum error delectus excepturi suscipit eius aperiam inventore incidunt? Vero officiis maiores maxime quas blanditiis, officia iure, adipisci impedit odio temporibus, voluptatum nisi aut fugit? Ipsum consequatur facere facilis, eaque sequi minus quaerat ullam quidem, nemo assumenda necessitatibus sunt? Ut.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione accusantium quos eveniet, labore sit assumenda architecto. Ipsam eum non ducimus, totam omnis rem vel perferendis molestias delectus, iure excepturi facilis, nobis sint distinctio ratione corporis ex illo fugiat vitae accusamus? Non officiis quis perferendis fugit totam provident temporibus! Nihil, veniam veritatis accusantium cum odit ipsa quos illum laudantium earum eum, nostrum error delectus excepturi suscipit eius aperiam inventore incidunt? Vero officiis maiores maxime quas blanditiis, officia iure, adipisci impedit odio temporibus, voluptatum nisi aut fugit? Ipsum consequatur facere facilis, eaque sequi minus quaerat ullam quidem, nemo assumenda necessitatibus sunt? Ut.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione accusantium quos eveniet, labore sit assumenda architecto. Ipsam eum non ducimus, totam omnis rem vel perferendis molestias delectus, iure excepturi facilis, nobis sint distinctio ratione corporis ex illo fugiat vitae accusamus? Non officiis quis perferendis fugit totam provident temporibus! Nihil, veniam veritatis accusantium cum odit ipsa quos illum laudantium earum eum, nostrum error delectus excepturi suscipit eius aperiam inventore incidunt? Vero officiis maiores maxime quas blanditiis, officia iure, adipisci impedit odio temporibus, voluptatum nisi aut fugit? Ipsum consequatur facere facilis, eaque sequi minus quaerat ullam quidem, nemo assumenda necessitatibus sunt? Ut.

            </p>

        </div>


    </div>

}