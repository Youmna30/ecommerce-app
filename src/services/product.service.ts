import { ProductType } from "@/types/product.type";
import getMyToken from "@/utiles/getMyToken";

export async function getAllProducts() : Promise< ProductType[] | null >{
    try {
        const data = await fetch(`${process.env.BACK_END_API}/v1/products`)
        const products = await data.json();
        return products.data
    } catch (error) {
        console.log(error);
        return null;
    }
}
export async function getProductById(id : string) : Promise< ProductType | null >{
    try {
        const data = await fetch(`${process.env.BACK_END_API}/v1/products/${id}`)
        const products = await data.json();
        return products.data
    } catch (error) {
        console.log(error);
        return null;
    }
}