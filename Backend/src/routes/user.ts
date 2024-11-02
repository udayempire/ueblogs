import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { Hono } from "hono"
import { sign } from "hono/jwt"
import { signupInput,signinInput } from "@udayempire/ueblogs/dist/index"

export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>();


userRouter.post('/signup',async(c)=>{
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    const body = await c.req.json()
    const { success } = signupInput.safeParse(body)
    if(!success){
        c.status(401)
        return c.json("Invalid Inputs")
    }
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
        return c.json({jwt})
    }catch (e:any) {
        console.error("Signup error:", e);
        
        // Handle specific Prisma errors (e.g., unique constraint violation)
        if (e.code === 'P2002') {  // Prisma error code for unique constraint
            c.status(409);
            return c.json({ error: "Email already exists" });
        }

        c.status(403);
        return c.json({ error: "Error while signing up" });
    }
})

userRouter.post("/signin", async(c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
    const body = await c.req.json()
    const success = signinInput.safeParse(body)
    if(!success){
        c.status(401)
        return c.json("Invalid inputs")
    }
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
        const jwt = await sign({id:user.id},c.env.JWT_SECRET)
        c.status(200)
        return c.json({token:jwt})
    }catch(e){
        console.error(e)
        c.status(500)
        return c.json("Error while signin up")
    }
})
