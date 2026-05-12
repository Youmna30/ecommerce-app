import { BrandType } from "@/types/brand.type";

export async function getAllBrands() : Promise< BrandType[] | null >{
    try {
        const data = await fetch(`${process.env.BACK_END_API}/v1/brands`)
    const brands = await data.json();
    return brands.data;
    } catch (error) {
        console.log(error);
        return null;
    }


    
}