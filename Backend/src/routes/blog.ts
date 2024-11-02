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
        return c.json("You are not logged in")
    }
})
blogRouter.post("/", async (c) => {
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