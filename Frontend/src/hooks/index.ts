import { useState } from "react"
export interface Posts{
    id:string,
    title:string,
    content:string,
    createdAt:Date,
    updatedAt:Date,
    published:boolean,
    views:number,
    authorId:string,
    //relationships
    author?:User,
    comments?:Comments[],
    likes?:Likes[],
    dislikes?:Dislikes[]
}
export interface User{
    id:string,
    name:string,
    email:string,
    password:string,
    bio?:string,
    createdAt:Date,
    updatedAt:Date,
    posts?:Posts[]
    likes?:Likes[]
    dislikes:Dislikes[]
    comments:Comments[]
}
export interface Likes{
    id:string,
    createdAt:Date,
    userId:string,
    user: User[],
    postId?:string,
    posts?:Posts[],
    commentId:string,
    comments:Comments[]
}
export interface Dislikes{
    id:string,
    createdAt:Date,
    userId:string,
    user: User[],
    postId?:string,
    posts?:Posts[],
    commentId:string,
    comments:Comments[]
}
export interface Comments{
    id:string,
    createdAt:Date,
    userId:string,
    user?:User[],
    postId:string,
    posts:Posts[],
    likes:Likes[],
    dislikes:Dislikes[],
}
export const allPosts=()=>{
    const [loading,setLoading] = useState(true);
    const [allPosts,setAllPosts] = useState()
}