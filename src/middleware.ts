import { NextResponse ,type NextRequest } from "next/server";


export function middleware(request:NextRequest){

    const response = NextResponse.next();

    console.log("Middleware executed")
    console.log(request.url)
    console.log(request.nextUrl)

    // return NextResponse.redirect(new URL('/products', request.url))

    const themePreference = response.cookies.get("user")

    if(!themePreference) {
        response.cookies.set("user" , "jayed" )
    }

    response.headers.set("custom-header","custom-value")
    return response ;

}


// export const config = {
//     matcher:'/profile'
// }
