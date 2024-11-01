import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { Hono } from "hono"
import { sign } from "hono/jwt"
const app = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>();


app.post('/app/v1/signup',async(c)=>{
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    const body = await c.req.json()
    try{
        const user = await prisma.user.create({
            data:{
                name:body.name,
                email:body.email,
                password: body.password,
            }
        });
        const jwt = await sign({id:user.id}, c.env.JWT_SECRET)
        c.status(201)
        return c.json({token:jwt})
    }catch(e){
        c.status(403)
        return c.json("error while signing up")
    }
})

app.post("/app/v1/signin", async(c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    const body = await c.req.json()
    try{
        const user = await prisma.user.findUnique({
            where:{
                email:body.email,
                password:body.password
            }
        });
        if(!user){
            c.status(403)
            return c.json("Cannot find the user")
        }
        const jwt = sign({id:user.id},c.env.JWT_SECRET)
        c.status(200)
        return c.json({token:jwt})
    }catch(e){
        console.error(e)
        c.status(500)
        return c.json("Error while signin up")
    }
})

export default app