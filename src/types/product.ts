export interface IProduct {
    _id: string;
    views: string;
    title: string;
    description: string;
    location: string;
    address: string;
    price: number;
    condition: 'new' | 'used';
    images: string[];
    userId: TUser
    permission?: string;
    compare?: boolean;
    wishlist?: boolean;
    status?: string;
    category: string
    createdAt: string;
}

export interface TUser {
    name: string;
    email: string;
    phoneNumber: string;
    _id: string
}
export interface ISingleProduct {
    _id?: string;
    wishlist?: boolean;
    compare?: boolean;
    views?: string;
    title: string;
    description: string;
    location: string;
    address: string;
    price: number;
    condition: 'new' | 'used';
    images: string[];
    userId: TUser
    permission?: string;
    status?: string;
    category: string
    createdAt: string;
}
