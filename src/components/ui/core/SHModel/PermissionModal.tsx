"use client";

import { productPermission } from "@/services/Admin";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { IProduct, } from "@/types";
import { Dispatch, SetStateAction } from "react";


interface PermissionModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Partial<IProduct>;
    setIsConfirmOpen: Dispatch<SetStateAction<boolean>>;
    setModalContent: Dispatch<SetStateAction<string>>;
    setModalState: Dispatch<SetStateAction<string>>;
}

const PermissionModal = ({ isOpen, onClose, product, setIsConfirmOpen, setModalContent, setModalState }: PermissionModalProps) => {


    const confirmNow = async (permission: string) => {
        try {
            let data;
            if (permission === 'reject' || permission === 'accepted') {
                data = {
                    permission: permission
                };
            }
            if (product && product._id && data) {
                const res = await productPermission({ productId: product._id, data });
                if (res.success) {
                    if (permission === 'reject') {
                        setIsConfirmOpen(true)
                        setModalState('failed')
                        setModalContent(`Product permission updated successfully to '${permission}'`);
                    } else if (permission === 'accepted') {
                        setIsConfirmOpen(true)
                        setModalContent(`Product permission updated successfully to '${permission}'`);
                        setModalState('success')
                    }
                    onClose();
                } else {
                    setIsConfirmOpen(true)
                    setModalContent(res.message || 'Failed to update product permission');
                    setModalState('failed')
                    onClose();
                }
            }
        } catch (error: any) {
            onClose();
            setIsConfirmOpen(true)
            setModalContent(error instanceof Error ? error.message : 'An unexpected error occurred');
            setModalState('failed')
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-8 bg-white shadow-xl rounded-lg">
                <DialogTitle className="text-xl font-bold text-gray-800">Permission Post</DialogTitle>
                <DialogDescription className="mt-2 text-lg text-gray-600">
                    Are you suer you want to permission <span className="font-semibold">{product?.title}</span>.
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
                        onClick={() => confirmNow('reject')}
                        className="px-6 py-2 bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] text-white rounded-lg"
                    >
                        Reject
                    </button>
                    <button
                        onClick={() => confirmNow('accepted')}
                        className="px-6 py-2 bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] text-white rounded-lg"
                    >
                        Accepted
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PermissionModal;
