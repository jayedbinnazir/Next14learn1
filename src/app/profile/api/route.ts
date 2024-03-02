import { type NextRequest } from "next/server"
import { headers , cookies } from 'next/headers'

export async function GET(request:NextRequest){

    console.log('Req Header', request.headers.get("Authorization") )

    const requestHeaders = new Headers(request.headers)
    console.log('req header 1' , requestHeaders.get("Authorization") )


    const headerList = headers() ;
    console.log('next headers ->' , headerList.get("Authorization") )
    console.log(typeof headerList.get("Authorization") )


    console.log("cookies from the request ", request.cookies.get("theme"))
    console.log("cookies from the request ", typeof request.cookies.get("theme"))

    //next cookies
    cookies().set("resultsPerPage", "20")

    console.log("cokkies from next cookie",cookies().get("resultsPerPage"))

    return new Response('<h1>GET_REQUEST--->Responded With Plain Text</h1>',{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark"
        }
    })
}



export async function POST(){

}