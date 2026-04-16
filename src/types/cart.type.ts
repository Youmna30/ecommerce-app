import { ProductType } from "./product.type"

export interface CartType {
    status: string,
    "message": string,
    "numOfCartItems": number,
    "cartId": string,
    data: CartDataType
}
export interface CartDataType {
        _id: string,
        cartOwner:string,
        totalCartPrice: number
        products: CartProduct []

}
export interface CartProduct {
    count : number,
    price: number,
    product: ProductType []
}