import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function getMyToken(){
    const myCookies = await cookies()
    const tokenFromCookies =  myCookies.get("next-auth.session-token")?.value;
    const decodedToken = await decode({token:tokenFromCookies, secret:process.env.BETTER_AUTH_SECRET!});
    return decodedToken?.realBackendToken;
}