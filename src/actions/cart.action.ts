"use server"

import { CartType } from "@/types/cart.type";
import getMyToken from "@/utiles/getMyToken";

interface CartBody {
    productId : string
}

export async function addProductToCart(values: CartBody) : Promise< CartType | null>{
  try {
        const token = await getMyToken();
        const res = await fetch(`${process.env.BACK_END_API}/v2/cart`,{
            body:JSON.stringify(values),
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                token: token as string
            }
        })
        const data = await res.json();
        
    return data
  } catch (error) {
    return null
  }
}
export async function getLoggedInUserCart() : Promise< CartType | null>{
  try {
        const token = await getMyToken();
        const res = await fetch(`${process.env.BACK_END_API}/v2/cart`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                token: token as string
            }
        })
        const data = await res.json();
        
    return data
  } catch (error) {
    return null
  }
}
export async function deleteProductFromCart(productId : string) : Promise< CartType | null>{
  try {
        const token = await getMyToken();
        const res = await fetch(`${process.env.BACK_END_API}/v2/cart/${productId}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                token: token as string
            }
        })
        const data = await res.json();
        
    return data
  } catch (error) {
    return null
  }
}
export async function deleteAllProductFromCart() : Promise< CartType | null>{
  try {
        const token = await getMyToken();
        const res = await fetch(`${process.env.BACK_END_API}/v2/cart`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                token: token as string
            }
        })
        const data = await res.json();
        
    return data
  } catch (error) {
    return null
  }
}
export async function updateCartItem(productId: string, count:number) : Promise< CartType | null>{
  try {
        const token = await getMyToken();
        const res = await fetch(`${process.env.BACK_END_API}/v2/cart/${productId}`,{
            body: JSON.stringify({count}),
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                token: token as string
            }
        })
        const data = await res.json();
    
    console.log("updatedData--",data);
    
    return data
  } catch (error) {
    return null
  }
}