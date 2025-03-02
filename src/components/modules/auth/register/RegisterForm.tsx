"use client"

import { } from 'lucide-react';
import styles from '../login/LoginForm.module.css';
import Link from 'next/link';
import SHForm from '@/components/ui/core/form/SHForm';
import SHInput from '@/components/ui/core/form/SHInput';
import { FieldValues } from 'react-hook-form';
import { registerUser } from '@/services/AuthService';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { useUser } from '@/context/UserContext';

const RegisterForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const redirect = searchParams.get('redirectPath')
    const { setIsLoading } = useUser();
    const handleFormSubmit = async (data: FieldValues) => {
        const res = await registerUser(data)
        if (res.success) {
            setIsLoading(true)
            toast.success(res?.message)
            if (redirect) {
                router.push(redirect)
            } else {
                router.push('/')
            }
        } else {
            toast.error(res?.message)
        }
    };
    return (
        <div
            className={`${styles.banner} relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center`}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-[2px]"></div>

            <div className="relative z-10 w-full max-w-md p-6 bg-[#fdfdfe] rounded-lg shadow-lg">
                <div className='py-5'>
                    <h1 className="text-xl font-semibold">Registration</h1>
                    <p className="font-extralight text-sm text-gray-600">
                        Join us today and start your journey!
                    </p>
                </div>
                <SHForm onSubmit={handleFormSubmit}>

                    <div className="w-full border border-gray-300 rounded-lg p-2 my-3">
                        <SHInput
                            type="text"
                            name="name"
                            label="Name"
                        />
                    </div>
                    <div className="w-full border border-gray-300 rounded-lg p-2 my-3">
                        <SHInput
                            type="email"
                            name="email"
                            label="Email"
                        />
                    </div>
                    <div className="w-full border border-gray-300 rounded-lg p-2 my-3">
                        <SHInput
                            type="text"
                            name="phoneNumber"
                            label="Phone"
                        />
                    </div>

                    <div className="w-full border border-gray-300 rounded-lg p-2 my-3">
                        <SHInput
                            type="password"
                            name="password"
                            label="Password"
                        />
                    </div>

                    <div className="flex justify-end items-center my-2">
                        <a href="#" className="text-[#ffb300] text-[16px]">
                            Forgot password?
                        </a>
                    </div>

                    <button type='submit' className="w-full py-2 text-white bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] rounded-lg">
                        Register
                    </button>

                </SHForm>
                <p className="text-sm text-gray-600 text-center my-3">
                    Already have an account ?
                    <Link href="/login" className="text-primary">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
