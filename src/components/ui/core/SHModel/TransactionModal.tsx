

"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { ISingleProduct } from "@/types";
import { createTransaction } from "@/services/Transaction";
import { Dispatch, SetStateAction } from "react";


interface TransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Partial<ISingleProduct>;
    setIsConfirmOpen: Dispatch<SetStateAction<boolean>>;
    setModalContent: Dispatch<SetStateAction<string>>;
    setModalState: Dispatch<SetStateAction<string>>;
}

const TransactionModal = ({ isOpen, onClose, product, setIsConfirmOpen, setModalContent, setModalState }: TransactionModalProps) => {
    const purchaseNow = async () => {
        try {
            if (product && product.userId?._id && product._id) {
                const res = await createTransaction({ sellerID: product.userId?._id, item: product._id });
                if (res.success) {
                    setModalContent('Purchase successfully!');
                    setIsConfirmOpen(true)
                    setModalState('success')
                    onClose();
                } else {
                    setIsConfirmOpen(true)
                    setModalState('failed')
                    setModalContent(res.message);
                    onClose();
                }
            }
        } catch (error) {
            setModalContent(error instanceof Error ? error.message : 'An unexpected error occurred');
            setIsConfirmOpen(true)
            setModalState('failed')
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-8 bg-white shadow-xl rounded-lg">
                <DialogTitle className="text-xl font-bold text-gray-800">Purchase Product</DialogTitle>
                <DialogDescription className="mt-2 text-lg text-gray-600">
                    Are you suer you want to Purchase {product?.title}.
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
                        onClick={purchaseNow}
                        className="px-6 py-2 bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] text-white rounded-lg"
                    >
                        Purchase Now
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default TransactionModal;
