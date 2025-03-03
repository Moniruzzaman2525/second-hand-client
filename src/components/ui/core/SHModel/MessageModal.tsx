"use client";

import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { ISingleProduct } from "@/types";
import { sendMessage } from "@/services/Message";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface MessageModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: Partial<ISingleProduct>;
}

const MessageModal = ({ isOpen, onClose, user }: MessageModalProps) => {
    const [message, setMessage] = useState<string>(`I'm interested in ${user.title}`);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const router = useRouter()
    const handleSend = async () => {
        try {
            if (user && user.userID?._id) {
                const res = await sendMessage({ message, receiverID: user?.userID?._id });
                if (res) {
                    toast.success('Message sent successfully!');
                    router.push('/messages');
                    onClose();
                } else {
                    toast.error(res.message || 'Failed to send message');
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
                <DialogTitle className="text-xl font-bold text-gray-800">Send a Message</DialogTitle>
                <DialogDescription className="mt-2 text-lg text-gray-600">
                    You are about to send a message to {user?.userID?.name}. Write your message below:
                </DialogDescription>
                <textarea
                    ref={textareaRef}
                    className="w-full resize-none mt-4 p-4 border-2 border-gray-300 rounded-lg"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                />
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSend}
                        className="px-6 py-2 bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] text-white rounded-lg"
                    >
                        Send Message
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MessageModal;
