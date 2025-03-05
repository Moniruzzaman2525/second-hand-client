import { IProduct } from "./product"

export interface IPurchaseHistory {
    _id: string
    buyerID: IBuyerId
    sellerID: ISellerId
    item: IProduct
    status: string
    createdAt: string
    updatedAt: string
}

export interface IBuyerId {
    _id: string
    name: string
    phoneNumber: string
}

export interface ISellerId {
    _id: string
    name: string
    phoneNumber: string
}


