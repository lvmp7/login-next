import { NextRequest, NextResponse } from "next/server"
import AuthService from "./modules/auth/service.ts/auth-service"

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)',]
}
const publicRoutes = ['/','/portal/sign-up','/portal/login',]

export async function middleware(request: NextRequest){
    const pathName = request.nextUrl.pathname
    if(publicRoutes.includes(pathName)){
        return NextResponse.next()
    }
    const session = await AuthService.isSessionValid()

    if(!session){
        const isAPIRoute = pathName.startsWith('/api')
        if(isAPIRoute){
            return NextResponse.json({message: "Unauthorized"},{status:401})
        }
        return NextResponse.redirect(new URL('/portal/login',request.url))
    }
    return NextResponse.next()
}