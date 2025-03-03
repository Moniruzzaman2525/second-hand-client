// components/MessageModal.tsx
"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../dialog";
import { ISingleProduct } from "@/types";


interface MessageModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSendMessage: (message: string) => void;
    user: Partial<ISingleProduct>;
}

const MessageModal = ({ isOpen, onClose, onSendMessage, user }: MessageModalProps) => {
    const [message, setMessage] = useState<string>("");

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage("");
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
