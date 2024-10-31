import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { Hono } from "hono"
const app = new Hono<{
    Bindings:{
        DATABASE_URL:string
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
        return c.text("jwt here")
    }catch(e){
        return c.status(403)
    }
})

app.post("/app/v1/signin", async (c)=>{
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
        return ("jwt here")
    }catch(e){
        console.error(e)
        return c.status(500)
    }
})