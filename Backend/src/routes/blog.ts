import { Hono } from "hono"
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { verify } from "hono/jwt"
export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },Variables:{
        userId:string
    }
}>()
blogRouter.use("/*",async (c,next)=>{
    const authHeader = c.req.header("Authorization") || ""
    const token = authHeader.split(" ")[1]
    console.log(token)
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
blogRouter.post("/new-blog", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const body = await c.req.json()
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
blogRouter.get("/bulk",async (c)=>{
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
blogRouter.put('/update',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json()
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