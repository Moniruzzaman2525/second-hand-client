"use client";


import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { useRouter } from "next/navigation";


interface TransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: TransactionModalProps) => {
    const router = useRouter()
    const loginNow = async () => {
        router.push('/login')
    };

    const signUp = () => {
        router.push('/register')
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-8 bg-white shadow-xl rounded-lg">
                <DialogTitle className="text-xl font-bold text-gray-800">Login Required</DialogTitle>
                <DialogDescription className="mt-2 text-lg text-gray-600">
                    You need to be logged in to continue with this action. Please log in to access your account and proceed.
                </DialogDescription>
                <div className="mt-4">
                    <p className="text-gray-500 text-md">
                        If you already have an account, click Login Now to access your account.
                    </p>
                    <p className="text-gray-500 text-md mt-2">
                        Don’t have an account? <span onClick={signUp} className="text-blue-500 cursor-pointer">Sign up here</span>.
                    </p>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={loginNow}
                        className="px-6 py-2 bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] text-white rounded-lg"
                    >
                        Login Now
                    </button>
                </div>
            </DialogContent>
        </Dialog>

    );
};

export default LoginModal;
