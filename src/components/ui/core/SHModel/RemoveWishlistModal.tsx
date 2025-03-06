"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { ISingleProduct } from "@/types";
import { removeWishlist } from "@/services/Wishlist";
import { Dispatch, SetStateAction } from "react";


interface TModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: Partial<ISingleProduct>;
    setIsConfirmOpen: Dispatch<SetStateAction<boolean>>;
    setModalContent: Dispatch<SetStateAction<string>>;
    setModalState: Dispatch<SetStateAction<string>>;
}

const RemoveWishlistModal = ({ isOpen, onClose, user, setIsConfirmOpen, setModalContent, setModalState }: TModalProps) => {
    const wishlistNow = async () => {
        try {
            if (user && user._id) {
                const res = await removeWishlist({ item: user._id });
                if (res.success) {
                    setModalContent('Remove wishlist successfully!');
                    setIsConfirmOpen(true)
                    setModalState('success')
                    onClose();
                } else {
                    setModalContent(res.message);
                    setIsConfirmOpen(true)
                    setModalState('failed')
                    onClose();
                }
            } else {
                throw new Error('User or required ID is missing');
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
