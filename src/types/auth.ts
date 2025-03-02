export interface IAuthUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    role?: 'admin' | 'user';
    isBlocked?: boolean;
    description?: string;
    location?: string;
    address?: string;
    facebook?: string;
    twitter?: string;
}
