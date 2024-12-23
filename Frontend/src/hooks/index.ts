import { BACKEND_URL } from "@/config"
import axios from "axios"
import { useEffect, useState } from "react"
export interface Posts{
    id:string,
    title:string,
    content:string,
    createdAt:Date,
    updatedAt:Date,
    published:boolean,
    views:number,
    authorId:string,  // change it to author{name:string}
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
export const useAllPosts=()=>{
    const [loading,setLoading] = useState(true);
    const [allPosts,setAllPosts] = useState<Posts[]>([]);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const token = localStorage.getItem("token")
                const response = await axios.get(`${BACKEND_URL}/blog/allblogs`,{
                    headers:{
                        Authorization: token
                    }
                })
                if (!response) {
                    alert("No posts")
                }
                setAllPosts(response.data)
                setLoading(false)
            }catch(e){
                console.error(e)
            }
        }
        fetchData()
    },[])
    return {
        loading,
        allPosts
    }
}

export interface Blog {
    "id":string,
    "title": string,
    "content": string,
    "author": {
        "name": string
    },
}

export const useBlog=({id}:{id:string})=>{
    const [loading,setLoading]= useState(true);
    const [blog,setBlog] = useState<Blog>()

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/get/${id}`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response=>{
            setBlog(response.data.blog)
            setLoading(false)
        })
    },[id])
    return {
        loading,blog
    }
}