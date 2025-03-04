"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { IProduct, } from "@/types";
import { toast } from "sonner";


interface PermissionModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Partial<IProduct>;
}

const PermissionModal = ({ isOpen, onClose, product }: PermissionModalProps) => {

    const confirmNow = async (permission: string) => {
        try {
            let data
            if (permission === 'reject') {
                data = {
                    permission: permission
                }
            } else if (permission === 'accepted') {
                data = {
                    permission: permission
                }
            }

            console.log(data)
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'An unexpected error occurred');
            onClose();
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
