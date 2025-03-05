"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { ISingleProduct } from "@/types";
import { toast } from "sonner";
import { removeWishlist } from "@/services/Wishlist";


interface TModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: Partial<ISingleProduct>;
}

const RemoveWishlistModal = ({ isOpen, onClose, user }: TModalProps) => {
    const wishlistNow = async () => {
        try {
            if (user && user.userId?._id && user._id) {
                const res = await removeWishlist({ item: user._id });
                if (res.success) {
                    toast.success('Remove wishlist successfully!');
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
                <DialogTitle className="text-xl font-bold text-gray-800">Remove Wishlist Product</DialogTitle>
                <DialogDescription className="mt-2 text-lg text-gray-600">
                    Are you suer you want to remove wishlist {user?.title}.
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
                        onClick={wishlistNow}
                        className="px-6 py-2 bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] text-white rounded-lg"
                    >
                        Remove Wishlist Now
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default RemoveWishlistModal;
