export interface IPurchaseHistory {
    _id: string
    buyerID: IBuyerId
    sellerID: ISellerId
    itemID: IItemId
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

export interface IItemId {
    _id: string
    title: string
    category: string
    price: number
}
