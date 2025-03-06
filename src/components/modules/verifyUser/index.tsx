"use client"

import { Button } from "@/components/ui/button";
import SuccessModal from "@/components/ui/core/SHModel/SuccessMessage";
import { verifyEmail } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { useState } from "react";

const VerifyEmail = ({ id, token }: { id: string | undefined, token: string | undefined }) => {
    const [isConfirmOpen, setIsConfirmModalOpen] = useState(false);
    const router = useRouter()
    const [modalContent, setModalContent] = useState("")
    const [modalState, setModalState] = useState("")
    const redirectLogin = () => {
        router.push('/login')
    }

    const verifyEmailFn = async () => {
        try {
            const res = await verifyEmail(id, token)
            if (res.success) {
                setIsConfirmModalOpen(true)
                setModalContent('Link verify successfully done, You can login now!');
                setModalState('success')
            } else {
                setIsConfirmModalOpen(true)
                setModalContent('Failed to verify the email. Please try again.');
                setModalState('failed')
            }

        } catch (error: any) {
            setIsConfirmModalOpen(true)
            setModalContent(error.message);
            setModalState('failed')
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8 px-4">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                    Verify Your Email
                </h2>

                <div className="flex items-center justify-center">
                    <Button onClick={verifyEmailFn} className="hidden md:flex items-center gap-2  px-6 py-2 rounded-lg font-medium bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] transition-all">
                        Verify Now
                    </Button>
                </div>
            </div>
            <SuccessModal
                isOpen={isConfirmOpen}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmModalOpen(false)}
                onClose={redirectLogin}
            />
        </div>
    );
};

export default VerifyEmail;
