"use client";


import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { IPurchaseHistory, } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


interface MessageModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: Partial<IPurchaseHistory>;
}

const ConfirmModal = ({ isOpen, onClose, user }: MessageModalProps) => {
    const router = useRouter()
    const confirmNow = async () => {
        try {


        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'An unexpected error occurred');
            onClose();
        }
    };


    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-8 bg-white shadow-xl rounded-lg">
                <DialogTitle className="text-xl font-bold text-gray-800">Confirm Product</DialogTitle>
                <DialogDescription className="mt-2 text-lg text-gray-600">
                    Are you suer you want to confirm {user?.itemID?.title}.
                </DialogDescription>
                <div>

                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={confirmNow}
                        className="px-6 py-2 bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] text-white rounded-lg"
                    >
                        Confirm Now
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmModal;
