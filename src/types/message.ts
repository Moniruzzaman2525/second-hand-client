export interface User {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
}

export interface MessageAppProps {
    message: User[];
}

export interface MessageContent {
    sender: string
    content: Content
}

export interface Content {
    _id: string
    senderID: SenderId
    receiverID: ReceiverId
    message: string
    timestamp: string
    createdAt: string
    updatedAt: string
    __v: number
}

export interface SenderId {
    _id: string
    name: string
}

export interface ReceiverId {
    _id: string
    name: string
}
