"use client"

import SHForm from "@/components/ui/core/form/SHForm";
import SHInput from "@/components/ui/core/form/SHInput";
import SHTextarea from "@/components/ui/core/form/SHTextarea";
import SHContainer from "@/components/ui/core/SHContainer";
import SuccessModal from "@/components/ui/core/SHModel/SuccessMessage";
import { contactUs } from "@/services/Contact";
import { Facebook, Instagram, MoveRight, Twitter } from "lucide-react";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ContactForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [modalContent, setModalContent] = useState("")
    const [modalState, setModalState] = useState("")
    const redirectFunction = (item: string) => {
        const facebook = "https://www.facebook.com/moniruzzaman255/";
        const instagram = "https://www.instagram.com/monir_2525/?hl=en";
        const twitter = "https://x.com/Monir8699";
        let link = '';
        switch (item.toLowerCase()) {
            case 'facebook':
                link = facebook;
                break;
            case 'instagram':
                link = instagram;
                break;
            case 'twitter':
                link = twitter;
                break;
            default:
                return;
        }
        window.open(link, '_blank');
    }

    const onSubmit = async (data: FieldValues) => {
        try {
            const res = await contactUs(data);
            if (res.success) {
                setIsChecked(false)
                setIsConfirmOpen(true)
                setModalContent('Your message has been sent successfully. We will get back to you soon!');
                setModalState('success')
            } else {
                setIsConfirmOpen(true)
                setModalContent('Failed to send your message. Please try again later.!');
                setModalState('failed')
            }
        } catch (error: any) {
            toast.error(error.message);
            setIsConfirmOpen(true)
            setModalContent(error.message);
            setModalState('failed')
        }
    };


    return (
        <div className="bg-gray-200 min-h-screen p-6 md:p-10 flex items-center justify-center">
            <SHContainer className="flex flex-col md:flex-row w-full max-w-5xl">
                <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-yellow-500">Contact</span> us
                    </h2>
                    <h2 className="mt-4 inline-block px-4 py-2 bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] rounded-lg text-sm">
                        How Can We Help?
                    </h2>
                    <h3 className="mt-6 text-xl md:text-2xl font-semibold">We Are Ready to Help</h3>
                    <p className="mt-2 text-[#374b5c] text-sm md:text-base">
                        Check our Q&A guidelines to see if your question has already been
                        answered. If not, please contact us and we will get back to you as
                        soon as possible.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start space-x-4">
                        <button onClick={() => redirectFunction('facebook')} className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                            <Facebook />
                        </button>
                        <button onClick={() => redirectFunction('instagram')} className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                            <Instagram />
                        </button>
                        <button onClick={() => redirectFunction('twitter')} className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                            <Twitter />
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-[#f2f4f8] p-6 md:p-10 rounded-lg shadow-lg">
                    <h3 className="text-center text-lg md:text-xl font-semibold text-[#374b5c]">
                        Did not find the answer? <br className="hidden md:block" />
                        Ask us questions directly
                    </h3>
                    <div className="mt-6 space-y-4">
                        <SHForm onSubmit={onSubmit}>
                            <div className="py-4">
                                <SHInput
                                    label="Name"
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="py-4">
                                <SHInput
                                    label="Email"
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="py-4">
                                <SHInput
                                    label="Phone"
                                    required
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                />
                           </div>
                            <div className="py-4">
                                <SHTextarea
                                    label="Message"
                                    required
                                    placeholder="Message"
                                    name="message"
                                />
                           </div>
                            <div className="flex items-center pb-4 text-xs md:text-sm">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    className="mr-2"
                                    required
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                />
                                <label htmlFor="privacy" className="text-gray-600">
                                    I accept the <span className="text-[#537cd9]">privacy</span> <span className="text-[#6d90df]">policy</span>
                                </label>
                            </div>
                            <div className="w-full flex justify-center">
                                <button
                                    type="submit"
                                    className="w-full md:w-1/3 flex justify-center items-center gap-3 bg-gradient-to-r text-white from-[#537cd9] to-[#6d90df] hover:from-[#3a5eb4] hover:to-[#537cd9] py-3 rounded-lg text-lg"
                                >
                                    <span>Send</span> <MoveRight />
                                </button>
                            </div>
                        </SHForm>
                    </div>
                </div>
            </SHContainer>
            <SuccessModal
                isOpen={isConfirmOpen}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmOpen(false)}
            />
        </div>
    );
};

export default ContactForm;
