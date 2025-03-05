
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getUserMessage, sendMessage } from "@/services/Message";
import { MessageAppProps, MessageContent, User } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { ArrowLeft, SendHorizontal } from "lucide-react";

const MessageApp = ({ message }: MessageAppProps) => {
    const [activeUser, setActiveUser] = useState<string | null>(null);
    const [activeUserDetails, setActiveUserDetails] = useState<User | undefined>();
    const [messages, setMessages] = useState<MessageContent[]>([]);
    const [newMessage, setNewMessage] = useState<string>("");

    const handleUserClick = async (user: User) => {
        try {
            const res = await getUserMessage(user.id);
            if (res.success) {
                setMessages(res.data);
                setActiveUserDetails(user);
                setActiveUser(user.id);
            }
        } catch (error) {
            console.error("Error fetching user messages", error);
        }
    };

    const handleMessageSend = async () => {
        if (!newMessage.trim()) return;
        if (newMessage && activeUser) {
            const res = await sendMessage({ message: newMessage, receiverID: activeUser });
            if (res.success) {
                setMessages(res.data);
            }
        }
        setNewMessage("");
    };

    const handleBackClick = () => {
        setActiveUser(null);
        setActiveUserDetails(undefined);
        setMessages([]);
    };



    return (
        <div className="flex flex-col w-full h-screen bg-[#f8fafd]">
            <h1 className="text-[30px] py-5 font-semibold text-gray-800">Messages</h1>
            <div className="flex justify-between items-center p-4 bg-white shadow-md">
                <h1 className="text-xl hidden md:block font-semibold text-gray-800">Conversations</h1>
                {activeUserDetails && (
                    <Button onClick={handleBackClick} className="lg:hidden">
                        <ArrowLeft className="text-xl" />
                    </Button>
                )}
                {activeUserDetails && (
                    <h1 className="text-xl hidden md:block font-semibold text-gray-800">{activeUserDetails?.name}</h1>
                )}
                {/* {activeUser && <Button onClick={handleViewProject} variant="default">View Profile</Button>} */}
            </div>
            <div className="flex flex-col lg:flex-row shadow-sm w-full h-[55%]">
                <div className={`lg:w-[35%] bg-[#ffffff] py-4 lg:block ${activeUser ? 'hidden' : 'block'}`}>
                    {message && message.length > 0 ? (
                        message.map((user) => (
                            <div
                                key={user.id}
                                onClick={() => handleUserClick(user)}
                                className={`flex items-center space-x-2 mb-4 py-5 px-10 cursor-pointer ${activeUser === user.id ? "bg-[#f7f9fc]" : ""}`}
                            >
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                                    <p className="text-xs text-gray-600">{user.lastMessage}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-600">
                            <p>No conversations available</p>
                        </div>
                    )}
                </div>

                {
                    activeUser ?
                        <div className={`flex-1 h-[100%] flex flex-col shadow-sm ${activeUser ? "block" : "hidden"}`}>
                            <div className="h-full flex flex-col">
                                <div className="flex-1 p-5 bg-[#f2f4f7] overflow-y-scroll h-[70%]">
                                    {messages?.length > 0 ? (
                                        messages?.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`flex ${item.sender === "you" ? "justify-end" : "justify-start"} mb-3`}
                                            >
                                                <div>
                                                    <div className="text-xs py-1 text-gray-600">
                                                        {formatDistanceToNow(new Date(item.content.timestamp), { addSuffix: true })}
                                                    </div>

                                                    <div
                                                        className={`text-white py-5 px-20 rounded-lg ${item.sender === "you" ? "bg-gradient-to-r from-[#537cd9] to-[#6d90df]" : "bg-gray-400"
                                                            }`}
                                                    >
                                                        {item.content.message}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center text-gray-500 mt-5">No messages yet</div>
                                    )}
                                </div>
                                <div className="bg-[#f7f9fc] py-4 px-6">
                                    <Textarea
                                        placeholder="Write your message here..."
                                        className="resize-none bg-[#ffffff] py-6"
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                    />
                                    <div className="flex justify-center mt-3">
                                        <Button
                                            className="w-[25%] py-2 md:my-8 bg-gradient-to-r from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] text-white"
                                            onClick={handleMessageSend}
                                        >
                                            Send <SendHorizontal />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div> : <div className="flex items-center w-full h-full justify-center text-gray-500">
                            Select a conversation to start messaging
                        </div>
                }
            </div>
        </div>
    );
};

export default MessageApp;
