import { BrandType } from "./brand.type";
import { CategoryType } from "./category.type";
import { SubCategoryType } from "./subcategory.type";

export interface ProductType {
    _id: string,
    title: string,
    slug: string,
    imageCover: string,
    description: string,
    ratingsAverage: number,
    ratingsQuantity: number,
    price: number,
    priceAfterDiscount?: number,
    quantity: number,
    category: CategoryType,
    brand: BrandType,
    images: string[],
    subcategory: SubCategoryType[]

}