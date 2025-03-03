"use client";


import { createTransaction } from "@/services/Transaction";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { ISingleProduct } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


interface MessageModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: Partial<ISingleProduct>;
}

const TransactionModal = ({ isOpen, onClose, user }: MessageModalProps) => {
    const router = useRouter()
    const purchaseNow = async () => {
        if (user && user.userID?._id && user._id) {
            const res = await createTransaction({ sellerID: user.userID?._id, itemID: user._id })
            if (res.success) {
                toast.success('Purchase successfully!')
                router.push('/dashboard/purchase-history')
                onClose()
            }
        }

    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-8 bg-white shadow-xl rounded-lg">
                <DialogTitle className="text-xl font-bold text-gray-800">Purchase Product</DialogTitle>
                <DialogDescription className="mt-2 text-lg text-gray-600">
                    Are you suer you want to Purchase {user?.title}.
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
