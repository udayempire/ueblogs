import { z } from "zod"
export const signupInput=z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(6)
})
//type inference in zod
export type signupInput = z.infer<typeof signupInput>

export const signinInput= z.object({
    email:z.string().email(),
    password:z.string().min(6)
})
export type signinInput = z.infer<typeof signinInput>

export const createBlog = z.object({
    title:z.string().max(250),
    content:z.string(),
})
export type createBlog = z.infer<typeof updateBlog>
export const updateBlog = z.object({
    title:z.string().max(250),
    content:z.string(),
})
export type updateBlog = z.infer<typeof updateBlog>
