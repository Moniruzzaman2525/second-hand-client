"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { forgotPassword } from "@/services/AuthService";
import { toast } from "sonner";

interface TModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ForgetPassModal = ({ isOpen, onClose }: TModalProps) => {
    const [forgotEmail, setForgotEmail] = useState("")
    const forgetNow = async () => {
        const res = await forgotPassword(forgotEmail)
        if (res.success) {
            onClose()
            toast.success('Reset link is generated successfully please check your mail')
        } else {
            toast.error('Something went wrong')
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-8 bg-white shadow-xl rounded-lg">
                <DialogTitle className="text-[24px] font-bold text-center text-gray-800">Reset Password</DialogTitle>
                <DialogDescription className="p-5 text-[15px] text-gray-600">
                    <span className="pb-2">Enter the email address associated with the account.</span>
                    <input
                        type="email"
                        onChange={(e) => setForgotEmail(e.target.value)}
                        className="w-full border py-5 px-3 rounded"
                    />
                </DialogDescription>

                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={forgetNow}
                        className="px-6 py-2 bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] text-white rounded-lg"
                    >
                        Send
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ForgetPassModal;
