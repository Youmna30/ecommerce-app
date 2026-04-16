import { CategoryType } from "@/types/category.type";

export async function getAllCategories() : Promise< CategoryType[] | null >{
    
    try {
        const data = await fetch(`${process.env.BACK_END_API}/v1/categories`,{
            cache:"force-cache"
        })
        const categories = await data.json();
        return categories.data
    } catch (error) {
        console.log(error);
        return null;
    }
}