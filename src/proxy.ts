import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function proxy(req:NextRequest){

    const token = await getToken({req, secret: process.env.BETTER_AUTH_SECRET!})
    if(token?.realBackendToken){
        return NextResponse.next()
    }else{
        return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login`)
    }
}

export const config = {
  matcher: '/shop',
}