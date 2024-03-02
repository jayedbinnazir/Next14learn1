import { redirect } from "next/navigation";
import { comments } from "../data";


export async function GET(request:Request,{params}:{params:{id:string}} ){
    const comment = comments.find((comment)=>{
        return comment.id === parseInt(params.id)
    })

    if(parseInt(params.id)>comments.length ){
        redirect('/comments')
    }

    return Response.json(comment)
}

export async function PATCH(request:Request,{params}:{params:{id:string}} ){

    const { text } = await request.json()

    const commentIndex = comments.findIndex((comment)=>{
        return comment.id === parseInt(params.id)
    })

    comments[commentIndex].text = text ;

    return Response.json(comments[commentIndex])
}

export async function DELETE(request:Request,{params}:{params:{id:string}} ){

    const { text } = await request.json()

    const commentIndex = comments.findIndex((comment)=>{
        return comment.id === parseInt(params.id)
    })

    const deleteCommnt = comments[commentIndex]

    comments.splice( commentIndex , 1  )

    return Response.json(deleteCommnt)
}