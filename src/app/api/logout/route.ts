import AuthService from "@/modules/auth/service.ts/auth-service";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest){
    AuthService.destroySession()
    return NextResponse.redirect(new URL('/portal/login', request.url))
}