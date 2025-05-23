"use client"
import { sendMessage } from "@/services/Message";
import { IUser } from "@/types"
import { Send } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner";

export default function ProfileSection({ user }: { user: IUser }) {
    const [message, setMessage] = useState<string>("");

    const handleSend = async () => {
        try {
            if (!message.trim()) {
                toast.error('Please write a message before sending.');
                return;
            }

            if (user && user?._id) {
                const res = await sendMessage({ message, receiverID: user?._id });
                if (res.success) {
                    toast.success('Message sent successfully!');
                    setMessage("");
                } else {
                    toast.error(res.message || 'Failed to send message');
                }
            }
        } catch (error) {
            toast.error(error instanceof Error ? error.message : 'An unexpected error occurred');
        }
    };


    return (
        <div className="w-full">

            <div className="w-full h-60 bg-[#697885] relative">

                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
                    <div className="rounded-full h-32 w-32 overflow-hidden border-4 border-white bg-slate-200 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-20 h-20 text-slate-400"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="mt-20 text-center">
                <h1 className="text-2xl font-semibold text-slate-700">{user.name}</h1>
                <div className="flex justify-center items-center mt-2">
                    <div className="bg-amber-400 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                        <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-gray-500 text-sm">Member since 2 days</p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto mt-20 bg-[#f2f4f8] p-4 md:p-10 rounded-lg shadow-sm mx-4 md:mx-auto">
                <h2 className="text-center text-xl font-medium text-slate-700 mb-6">Send a message</h2>
                <div className="relative">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={6}
                        className="w-full min-h-24 md:min-h-32 resize-none p-3 md:p-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                        placeholder="Write your message here"
                    ></textarea>
                </div>
                <div className="flex justify-center mt-4">
                    <button onClick={handleSend} className="px-4 md:px-6 py-2 rounded-md flex items-center bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] transition-all text-sm md:text-base">
                        Send a message
                        <Send className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
