export interface IProduct {
    _id?: string;
    title: string;
    description: string;
    location: string;
    address: string;
    price: number;
    condition: 'new' | 'used';
    images: string[];
    userID: string;
    status?: string;
    category: string
}
export interface ISingleProduct {
    _id?: string;
    title: string;
    description: string;
    location: string;
    address: string;
    price: number;
    condition: 'new' | 'used';
    images: string[];
    userID: {
        phoneNumber: string;
        email: string;
        name: string;
        _id: string
    };
    status?: string;
    category: string
}
