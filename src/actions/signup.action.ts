"use server"
import { SignupType } from "@/types/signup.type";

interface SignupErrorObject{
  message: string,
  statusMsg: string
}

export async function signupAction(values: SignupType) : Promise< string | null | SignupErrorObject>{
  try {
    
      const res = await fetch(`${process.env.BACK_END_API}/v1/auth/signup`,{
        body:JSON.stringify(values),
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await res.json();
    
    console.log(data);
    
    if(data.statusMsg){
      return data
    }
      return data.message
    
  } catch (error) {
    return null
  }
}