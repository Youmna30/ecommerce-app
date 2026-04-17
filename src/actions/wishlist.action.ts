"use server"
import { addedResWishListType, wishListType } from "@/types/wishlist.type";
import getMyToken from "@/utiles/getMyToken";

interface wishlistBody {
    productId : string
}

export async function addProductToWishList(values: wishlistBody) : Promise< addedResWishListType | null>{
  try {
        const token = await getMyToken();
        const res = await fetch(`${process.env.BACK_END_API}/v1/wishlist`,{
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
export async function getUserWishListData() : Promise< wishListType | null>{
  try {
        const token = await getMyToken();
        const res = await fetch(`${process.env.BACK_END_API}/v1/wishlist`,{
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
export async function deleteWishlist(productId : string) : Promise< addedResWishListType | null>{
  try {
        const token = await getMyToken();
        const res = await fetch(`${process.env.BACK_END_API}/v1/wishlist/${productId}`,{
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