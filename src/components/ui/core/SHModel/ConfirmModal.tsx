"use client";


import { completeTransaction } from "@/services/Transaction";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { IPurchaseHistory, } from "@/types";
import { Dispatch, SetStateAction } from "react";


interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    setIsConfirmOpen: Dispatch<SetStateAction<boolean>>;
    setModalContent: Dispatch<SetStateAction<string>>;
    setModalState: Dispatch<SetStateAction<string>>;
    product: Partial<IPurchaseHistory>;
}

const ConfirmModal = ({ isOpen, onClose, product, setIsConfirmOpen, setModalContent, setModalState }: ConfirmModalProps) => {

    const confirmNow = async () => {
        try {
            if (product && product._id) {
                const res = await completeTransaction(product._id)
                if (res.success) {
                    onClose();
                    setIsConfirmOpen(true)
                    setModalContent('Transaction complete successfully!');
                    setModalState('success')
                } else {
                    onClose();
                    setIsConfirmOpen(true)
                    setModalContent(res.message);
                    setModalState('failed')
                }
            }


        } catch (error) {
            setIsConfirmOpen(true)
            setModalContent(error instanceof Error ? error.message : 'An unexpected error occurred');
            setModalState('failed')
            onClose();
        }
    };


    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-8 bg-white shadow-xl rounded-lg">
                <DialogTitle className="text-xl font-bold text-gray-800">Complete transaction</DialogTitle>
                <DialogDescription className="mt-2 text-lg text-gray-600">
                    Are you suer you want to complete <span className="font-semibold">{product?.item?.title}</span>.
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
