import {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { LoginType } from '../types/login.type';

interface LoginResponseType {
    name:string,
    email:string,
    realBackendToken:string
}
export const nextAuthConfig : NextAuthOptions = {

    providers:[
        CredentialsProvider({
            name:"fresh cart",
            credentials:{
                email:{},
                password:{}
            },
            async authorize(credentials){

            const res = await fetch(`${process.env.BACK_END_API}/v1/auth/signin`,{
                body:JSON.stringify(credentials),
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            
            const data = await res.json();
             console.log(data);

            if(data.message == "success"){
                return {
                    name: data.user.name,
                    email: data.user.email,
                    realBackendToken: data.token
                }
            }
                return null;
            }
        })
    ],
    callbacks:{
        jwt( params ) {
            if(params.user){
                params.token.realBackendToken = params.user.realBackendToken;
            }
            return params.token
        }
    },
    pages:{
        signIn: "/login"
    },
    secret:process.env.BETTER_AUTH_SECRET,

}