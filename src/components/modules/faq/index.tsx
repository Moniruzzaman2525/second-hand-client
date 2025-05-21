"use client"
import { useState } from "react"
import { ArrowLeft, ArrowUp } from "lucide-react"

export default function FAQAccordionShadcn() {
    const [openItem, setOpenItem] = useState<string | null>(null)

    const handleItemClick = (item: string) => {
        setOpenItem(openItem === item ? null : item)
    }

    return (
        <div className="max-w-3xl mx-auto p-4 md:p-6">
            <h1 className="text-2xl font-bold mb-6">General Questions</h1>

            <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                    const itemValue = `item-${num}`
                    const title = getQuestionTitle(num)
                    const isOpen = openItem === itemValue

                    return (
                        <div
                            key={itemValue}
                            className={`border rounded-md overflow-hidden transition-shadow duration-300 ${isOpen ? "shadow-md" : ""}`}
                        >
                            <div
                                className="flex justify-between items-center p-4 cursor-pointer group"
                                onClick={() => handleItemClick(itemValue)}
                            >
                                <h3 className="text-base font-medium text-gray-700">{title}</h3>
                                <div
                                    className={`rounded-full p-2 transition-all duration-200
                                        ${isOpen
                                            ? "bg-amber-400"
                                            : "group-hover:bg-amber-400 text-gray-400 group-hover:text-white"
                                        }`}
                                >
                                    {/* Swap icon on hover using Tailwind and absolute positioning */}
                                    <div className="relative w-5 h-5">
                                        {isOpen ? (
                                            <ArrowUp className="absolute inset-0 w-5 h-5 text-white" />
                                        ) : (
                                            <>
                                                <ArrowLeft className="absolute inset-0 w-5 h-5 group-hover:opacity-0 transition-opacity" />
                                                <ArrowUp className="absolute inset-0 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {isOpen && (
                                <div className="p-4 pt-0">
                                    <p className="text-gray-600">{getAnswerContent(num)}</p>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function getQuestionTitle(num: number): string {
    switch (num) {
        case 1:
            return "1. How do I advertise?"
        case 2:
            return "2. How can I delete my ad?"
        case 3:
            return "3. How can I change or modify my ad?"
        case 4:
            return "4. How can I set a new password on Secondbd"
        case 5:
            return "5. I placed an ad but can't find it. What's the problem?"
        case 6:
            return "6. How can I change my account details?"
        case 7:
            return "7. How do I start a chat with someone?"
        default:
            return ""
    }
}

function getAnswerContent(num: number): string {
    switch (num) {
        case 1:
            return "Posting an ad on secondbd is quick and easy! For this, click on the yellow colored Advertise button and follow the instructions. If you are not logged in, the first step to posting an ad is to log in. Your ad will go live after being reviewed"
        case 2:
            return "To delete your ad, go to your account dashboard, find the ad in your listings, and click on the delete or remove option. Confirm the deletion when prompted."
        case 3:
            return "To modify your ad, navigate to your account dashboard, locate the ad you wish to edit, and click on the edit or modify button. Make your changes and save them."
        case 4:
            return 'To set a new password, go to the login page and click on "Forgot Password". Follow the instructions sent to your email to reset your password.'
        case 5:
            return "Your ad might still be under review. All ads are reviewed before going live. If it's been more than 24 hours, please contact our support team."
        case 6:
            return "To update your account details, go to your account settings or profile page. There you can edit your personal information, contact details, and preferences."
        case 7:
            return 'To start a chat, go to the ad you\'re interested in and click on the "Chat" or "Message" button. You\'ll need to be logged in to use this feature.'
        default:
            return ""
    }
}
