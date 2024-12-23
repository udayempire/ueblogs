import { Hono } from "hono"
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { verify } from "hono/jwt"
import { createBlog,updateBlog } from "@udayempire/ueblogs/dist/index"
export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },Variables:{
        userId:string
    }
}>()
//middleware
blogRouter.use("/*",async (c,next)=>{
    const authHeader = c.req.header("Authorization") || ""
    const token = authHeader.split(" ")[1]
    try{
        const payload = await verify(token,c.env.JWT_SECRET)
        // @ts-ignore
        c.set("userId",payload.id)
        await next()
    }catch(e){
        console.log(e)
        c.status(401)
        return c.json("User is not logged in")
    }
})
//posting the blog
blogRouter.post("/createblog", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const body = await c.req.json()
        const {success} = createBlog.safeParse(body)
        if(!success){
            c.status(400)
            return c.json("Invalid Input")
        }
        const userId  = c.get("userId")
        if(!userId){
            c.status(401)
            return c.json({error:"Unauthorized access"})
        }
        const blog = await prisma.posts.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId
            }
        })
        c.status(201)
        return c.json(blog)
    }catch(e){
        console.log(e)
        c.status(400)
        return c.json({error:"Invalid Inputs"})
    }
})

//getting all blogs
blogRouter.get("/allblogs",async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs = await prisma.posts.findMany({
        select:{
            id:true,
            title:true,
            content:true,
            createdAt:true,
            updatedAt:true,
            views:true,
            author:{
                select:{
                    name:true,
                    bio:true,
                    Pronouns:true
                }
            },
            likes:true,
            comments:true
        }
    })
    c.status(200)
    return c.json(blogs)
})
//updating the blogs
blogRouter.put('/updateblog',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json()
    const {success} = updateBlog.safeParse(body)
    if(!success){
        c.status(400)
        return c.json("Invalid Input")
    }
    try{
        const updatedBlog = await prisma.posts.update({
            where:{
                id: body.id
            },
            data:{
                title:body.title,
                content:body.content
            }
        })
        c.status(200)
        return c.json({
            title:updatedBlog.title,
            content:updatedBlog.content
        })
    }catch(e){
        console.log(e)
        if(e==="P2025"){ // Prisma specific error code for "Record not found"
            c.status(404)
            return c.json("No such blogs exist")
        }
        c.status(500)
        return c.json("An error occurred while updating the blog or no such blogs exist")
    }
})

//delete blogs
blogRouter.delete("/deleteblog/:id",async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const userId = c.get("userId")
    const blogId = c.req.param("id")
    console.log(blogId)
    try{
        const blogPost = await prisma.posts.findUnique({
            where:{
                id:blogId
            }
        })
        if(!blogPost){
            c.status(404)
            return c.json("Blog Doesnt exist")
        }
        if(blogPost?.authorId!==userId){
            c.status(403)
            return c.json("You cannot delete someone else Blog")
        }
        const deleteBlog =await prisma.posts.delete({
            where:{
                id:blogId
            }
        })
        c.status(200)
        return c.json({message:"Successfully deleted Blog",deletedBlog:deleteBlog})
    }catch(e){
        console.log(e)
        c.status(500)
        return c.json("An error occurred while deleting the blog or no such blogs exist")
    }
})

//getting a single blog

blogRouter.get("/get/:id", async (c) => {
    const id = c.req.param("id"); // Check if this works; otherwise, use c.req.params.id
    console.log("Fetching Blog ID:", id);
    console.log("hello")

    const prisma = new PrismaClient({
        datasources: {
            db: {
                url: c.env.DATABASE_URL,
            },
        },
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.posts.findFirst({
            where: { id },
            select: {
                id: true,
                title: true,
                content: true,
                createdAt: true,
                updatedAt: true,
                views: true,
                author: {
                    select: {
                        name: true,
                    },
                },
                likes: true,
                comments: true,
            },
        });

        if (!blog) {
            c.status(404);
            return c.json({ message: "Blog not found" });
        }

        return c.json({ blog });
    } catch (e) {
        console.error("Error fetching blog:", e);
        c.status(500);
        return c.json({ message: "Error while fetching blog post" });
    }
});

