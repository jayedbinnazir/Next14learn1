import { NextRequest } from "next/server"
import { comments } from "./data"


export async function GET(request:NextRequest){
    console.log("---------->",request.nextUrl.searchParams.get("query"))
    const query = request.nextUrl.searchParams.get("query") ;
    
    const filteredComments = query ? comments.filter((comment)=>{
        return comment.text.includes(query) 
    }):null
    return  Response.json(filteredComments || comments )
}


export async function POST(request:Request){
    const comment = await request.json()
    let newComment = {
        id:comments.length+1,
        ...comment
    }
    comments.push(newComment)
    return new Response(JSON.stringify(newComment),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201
    })
    
}

