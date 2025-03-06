

"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { ISingleProduct } from "@/types";
import { toast } from "sonner";
import { createTransaction } from "@/services/Transaction";
import { useRouter } from "next/navigation";
import { useState } from "react";


interface TransactionModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Partial<ISingleProduct>;
}

const TransactionModal = ({ isOpen, onClose, product }: TransactionModalProps) => {
    const router = useRouter()
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [modalContent, setModalContent] = useState("")
    const [modalState, setModalState] = useState("")
    const purchaseNow = async () => {
        try {
            if (product && product.userId?._id && product._id) {
                const res = await createTransaction({ sellerID: product.userId?._id, item: product._id });
                if (res.success) {
                    toast.success('Purchase successfully!');
                    router.push('/dashboard/purchase-history');
                    onClose();
                } else {
                    toast.error(res.message);
                    onClose();
                }
            } else {
                throw new Error('User or required ID is missing');
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'An unexpected error occurred');
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
