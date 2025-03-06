"use client"
import SHForm from '@/components/ui/core/form/SHForm';
import SHInput from '@/components/ui/core/form/SHInput';
import { resetPassword } from '@/services/AuthService';
import { FieldValues } from 'react-hook-form';
import { useState } from 'react';
import SuccessModal from '@/components/ui/core/SHModel/SuccessMessage';

const ChangePasswordForm = ({ id, token }: { id: string | undefined, token: string | undefined }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [modalContent, setModalContent] = useState("")
    const [modalState, setModalState] = useState("")
    const handleSubmit = async (data: FieldValues) => {
        if (data.password !== data.confirmPassword) {
            setPasswordMismatch(true);
            return;
        } else {
            setPasswordMismatch(false);
        }
        if (isSubmitting) return;
        setIsSubmitting(true);
        try {
            const newPassword = data.confirmPassword;
            const res = await resetPassword(id, token, newPassword);

            if (res.success) {
                setIsConfirmOpen(true)
                setModalContent(res.message);
                setModalState('success')
            } else {
                setIsConfirmOpen(true)
                setModalContent('Failed to reset password');
                setModalState('failed')
            }
        } catch (error: any) {
            setIsConfirmOpen(true)
            setModalContent(error.message);
            setModalState('failed')
        } finally {
            setIsSubmitting(false);
        }
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

                    {passwordMismatch && (
                        <div className="text-red-500 text-sm mb-4">Passwords do not match.</div>
                    )}

                    <div className="mt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] transition-all font-bold rounded-md duration-300"
                        >
                            {isSubmitting ? 'Submitting...' : 'Change Password'}
                        </button>
                    </div>
                </SHForm>
                <SuccessModal
                    isOpen={isConfirmOpen}
                    status={modalState}
                    content={modalContent}
                    onOpenChange={() => setIsConfirmOpen(false)}
                />
            </div>
        </div>
    );
};

export default ChangePasswordForm;
