"use client"
import SHForm from '@/components/ui/core/form/SHForm';
import SHInput from '@/components/ui/core/form/SHInput';
import { resetPassword } from '@/services/AuthService';
import { FieldValues } from 'react-hook-form';


const ChangePasswordForm = ({ id, token }: { id: string | undefined, token: string | undefined }) => {

    const handleSubmit = async (data: FieldValues) => {
        const newPassword = data.newPassword
        const res = await resetPassword(id ,token, newPassword)
        console.log(res)
    };

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className="w-[100%] max-w-[400px] p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Change Your Password</h2>
                <SHForm onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <SHInput
                            type="password"
                            name='password'
                            required
                            placeholder="Enter new password"
                            label='New Password'
                        />
                    </div>
                    <div className="mb-6">
                        <SHInput
                            type="password"
                            name="confirmPassword"
                            label='Confirm Password'
                            required
                            placeholder="Confirm your password"
                        />
                    </div>
                    <div className="mt-4">
                        <button
                            onClick={handleSubmit}
                            className="w-full py-3 bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] transition-all font-bold rounded-md duration-300"
                        >
                            Change Password
                        </button>
                    </div>
                </SHForm>
            </div>
        </div>
    );
};

export default ChangePasswordForm;
