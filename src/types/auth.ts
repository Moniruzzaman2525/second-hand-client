export interface IAuthUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    role?: 'admin' | 'user';
    ban?: boolean;
    description?: string;
    location?: string;
    address?: string;
    facebook?: string;
    twitter?: string;
}

