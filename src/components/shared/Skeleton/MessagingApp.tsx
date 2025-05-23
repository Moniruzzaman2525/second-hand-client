"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Send, User } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Conversation {
    id: string
    avatar?: string
}

interface Message {
    id: string
    isOwn: boolean
}

export default function MessagingApp() {
    const [loading, setLoading] = useState(true)
    const [selectedConversation, setSelectedConversation] = useState<string>("")
    const [messageText, setMessageText] = useState("")
    const [conversations, setConversations] = useState<Conversation[]>([])
    const [messages, setMessages] = useState<Message[]>([])

    // Simulate loading data
    useEffect(() => {
        const timer = setTimeout(() => {
            setConversations([{ id: "1" }, { id: "2" }, { id: "3" }])

            setMessages([
                { id: "1", isOwn: false },
                { id: "2", isOwn: true },
                { id: "3", isOwn: false },
            ])

            setSelectedConversation("1")
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    const handleSendMessage = () => {
        if (messageText.trim()) {
            const newMessage: Message = {
                id: String(messages.length + 1),
                isOwn: true,
            }

            setMessages([...messages, newMessage])
            setMessageText("")
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Left Sidebar - Conversations */}
            <div className="w-80 bg-white border-r border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <Skeleton className="h-8 w-32" />
                </div>

                <div className="p-4">
                    <Skeleton className="h-6 w-28 mb-4" />

                    <ScrollArea className="h-[calc(100vh-200px)]">
                        <div className="space-y-2">
                            {loading
                                ? // Skeleton loading for conversations
                                Array.from({ length: 5 }).map((_, index) => (
                                    <Card key={index} className="cursor-pointer">
                                        <CardContent className="p-4">
                                            <div className="flex items-start space-x-3">
                                                <Skeleton className="h-10 w-10 rounded-full" />
                                                <div className="flex-1 space-y-2">
                                                    <Skeleton className="h-4 w-24" />
                                                    <Skeleton className="h-3 w-32" />
                                                </div>
                                                <Skeleton className="h-3 w-16" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                                : conversations.map((conversation) => (
                                    <Card
                                        key={conversation.id}
                                        className={`cursor-pointer transition-colors hover:bg-gray-50 ${selectedConversation === conversation.id ? "bg-blue-50 border-blue-200" : ""
                                            }`}
                                        onClick={() => setSelectedConversation(conversation.id)}
                                    >
                                        <CardContent className="p-4">
                                            <div className="flex items-start space-x-3">
                                                <Avatar className="h-10 w-10">
                                                    <AvatarImage src={conversation.avatar || "/placeholder.svg?height=40&width=40"} />
                                                    <AvatarFallback>
                                                        <User className="h-5 w-5" />
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 min-w-0">
                                                    <Skeleton className="h-4 w-24" />
                                                    <Skeleton className="h-3 w-32 mt-1" />
                                                </div>
                                                <Skeleton className="h-3 w-16" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>

            {/* Right Side - Chat Area */}
            <div className="flex-1 flex flex-col">
                {loading ? (
                    // Skeleton loading for chat area
                    <>
                        <div className="bg-white border-b border-gray-200 p-4">
                            <div className="flex items-center justify-between">
                                <Skeleton className="h-6 w-48" />
                            </div>
                        </div>

                        <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="flex justify-end">
                                            <Skeleton className="h-4 w-16 mb-1 ml-auto" />
                                        </div>
                                        <div className="flex justify-end">
                                            <Skeleton className="h-10 w-64 rounded-lg" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        <div className="bg-white border-t border-gray-200 p-4">
                            <div className="flex space-x-2">
                                <Skeleton className="h-10 flex-1 rounded-md" />
                                <Skeleton className="h-10 w-24 rounded-md" />
                            </div>
                        </div>
                    </>
                ) : selectedConversation ? (
                    <>
                        {/* Chat Header */}
                        <div className="bg-white border-b border-gray-200 p-4">
                            <div className="flex items-center justify-between">
                                <Skeleton className="h-6 w-48" />
                            </div>
                        </div>

                        {/* Messages Area */}
                        <ScrollArea className="flex-1 p-4">
                            <div className="space-y-4">
                                {messages.map((message) => (
                                    <div key={message.id} className={`flex flex-col ${message.isOwn ? "items-end" : "items-start"}`}>
                                        <Skeleton className={`h-3 w-16 mb-1 ${message.isOwn ? "ml-auto" : "mr-auto"}`} />
                                        <div className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                                            <div
                                                className={`${message.isOwn ? "bg-blue-500" : "bg-gray-200"
                                                    } rounded-lg px-4 py-2 min-h-[40px] min-w-[100px] max-w-xs lg:max-w-md`}
                                            >
                                                <Skeleton className={`h-4 w-full ${message.isOwn ? "bg-blue-400" : "bg-gray-300"}`} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>

                        {/* Message Input */}
                        <div className="bg-white border-t border-gray-200 p-4">
                            <div className="flex space-x-2">
                                <Input
                                    placeholder=""
                                    value={messageText}
                                    onChange={(e) => setMessageText(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="flex-1"
                                />
                                <Button onClick={handleSendMessage} className="bg-blue-500 hover:bg-blue-600">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center">
                        <Skeleton className="h-5 w-64" />
                    </div>
                )}
            </div>
        </div>
    )
}
