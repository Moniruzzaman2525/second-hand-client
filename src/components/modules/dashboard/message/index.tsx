"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const MessageApp = ({ message }) => {
    console.log(message)
    const users = [
        { id: 1, name: "Shazzad K.p", avatar: "bg-blue-500", lastMessage: "You: I am interested in..." },
        { id: 2, name: "Saiful Islam Emon", avatar: "bg-red-500", lastMessage: "You: I am interested in..." },
    ];

    const initialMessages = [
        {
            userId: 1,
            messages: [
                { sender: "you", time: "12:40 PM", content: "I am interested in iPhone 12 | 128 GB . Purple" },
                { sender: "other", time: "12:45 PM", content: "Okay, let me check availability." },
            ],
        },
        {
            userId: 2,
            messages: [
                { sender: "you", time: "12:40 PM", content: "I am interested in iPhone 12 | 128 GB . Purple" },
                { sender: "other", time: "12:50 PM", content: "Got it, I'll check that." },
            ],
        },
    ];

    const [activeUser, setActiveUser] = useState(null);
    const [activeUserDetails, setActiveUserDetails] = useState();
    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState("");
    console.log(activeUser)
    const handleUserClick = (user) => {
        console.log(user)
        setActiveUserDetails(user)
        setActiveUser(user.id);
    };

    const handleMessageSend = () => {
        if (!newMessage.trim()) return;

        const updatedMessages = messages.map((conversation) => {
            if (conversation.userId === activeUser) {
                return {
                    ...conversation,
                    messages: [
                        ...conversation.messages,
                        {
                            sender: "you",
                            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                            content: newMessage,
                        },
                    ],
                };
            }
            return conversation;
        });

        setMessages(updatedMessages);
        setNewMessage("");
    };

    return (
        <div className="flex flex-col w-full h-screen bg-[#f8fafd]">
            <h1 className="text-xl font-semibold text-gray-800">Messages</h1>
            <div className="flex justify-between items-center p-4 bg-white shadow-md">
                <h1 className="text-xl font-semibold text-gray-800">Conversations</h1>
                <h1 className="text-xl font-semibold text-gray-800">{activeUserDetails?.name}</h1>
                <Button variant="default">View Profile</Button>
            </div>

            <div className="flex py-4 shadow-sm h-full w-full">
                <div className="w-1/3 bg-white p-4 rounded-lg h-[100%] shadow-sm">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            onClick={() => handleUserClick(user)}
                            className={`flex items-center space-x-2 mb-4 py-3 px-2 rounded cursor-pointer ${activeUser === user.id ? 'bg-gray-200' : ''}`}
                        >
                            <div className={`${user.avatar} w-8 h-8 rounded-full`}></div>
                            <div>
                                <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                                <p className="text-xs text-gray-600">{user.lastMessage}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex-1 rounded-lg shadow-sm">
                    {activeUser && (
                        <div className="px-6 pt-10 bg-[#f2f4f8] h-[50%]">
                            {messages
                                .find((conversation) => conversation.userId === activeUser)
                                ?.messages.map((message, index) => (
                                    <div key={index} className={`flex ${message.sender === "you" ? "justify-end" : "justify-start"}`}>
                                        <div>
                                            <div className="text-xs py-2 text-gray-600">{message.time}</div>
                                            <div className={`text-white p-5 rounded-lg mt-1 ${message.sender === "you" ? "bg-blue-500" : "bg-gray-400"}`}>
                                                {message.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}

                    <div className="flex-1 bg-[#f8fafd]">
                        <div className="px-10 flex gap-5 flex-col py-20">
                            <Textarea
                                placeholder="Write your message here"
                                className="resize-none py-10"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                            <div className="flex justify-end">
                                <Button className="w-[25%]" onClick={handleMessageSend}>
                                    Send
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageApp;
