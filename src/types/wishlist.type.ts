import { ProductType } from "./product.type";

export interface wishListType {
    status : string,
    count : number,
    data : ProductType[]
}
export interface addedResWishListType {
    status : string,
    message : string,
    data : string[]
}