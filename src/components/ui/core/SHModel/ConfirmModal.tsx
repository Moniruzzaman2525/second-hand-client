"use client";


import { completeTransaction } from "@/services/Transaction";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { IPurchaseHistory, } from "@/types";
import { toast } from "sonner";


interface MessageModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Partial<IPurchaseHistory>;
}

const ConfirmModal = ({ isOpen, onClose, product }: MessageModalProps) => {

    const confirmNow = async () => {
        try {
            if (product && product._id) {
                const res = await completeTransaction(product._id)
                if (res.success) {
                    onClose();
                    toast.success('Transaction complete successfully!');
                } else {
                    onClose();
                    toast.error(res.message);
                }
            }


        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'An unexpected error occurred');
            onClose();
        }
    };


    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-8 bg-white shadow-xl rounded-lg">
                <DialogTitle className="text-xl font-bold text-gray-800">Complete transaction</DialogTitle>
                <DialogDescription className="mt-2 text-lg text-gray-600">
                    Are you suer you want to complete {product?.itemID?.title}.
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
                        Complete Now
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmModal;
