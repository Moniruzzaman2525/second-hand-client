export interface IProduct {
    _id?: string;
    title: string;
    description: string;
    price: number;
    condition: 'new' | 'used';
    images: string[];
    userID: string;
    status?: string;
    category: string
}
