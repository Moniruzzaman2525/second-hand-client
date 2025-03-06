"use client"

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SHForm from '@/components/ui/core/form/SHForm';
import SHInput from '@/components/ui/core/form/SHInput';
import SuccessModal from '@/components/ui/core/SHModel/SuccessMessage';
import { changesPassword } from '@/services/AuthService';
import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const ChangesPassword = () => {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [modalContent, setModalContent] = useState("")
    const [modalState, setModalState] = useState("")
    const handleFormSubmit = async (data: FieldValues) => {
        try {
            if (data.newPassword === data.oldPassword) {
                toast.error('Old and new password is same');
                return
            }
            const res = await changesPassword(data);
            if (res.success) {
                toast.success("Password changed successfully!");
            } else {
                toast.error(res.message);
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    };
    return (
        <SHForm onSubmit={handleFormSubmit}>
            <AccordionItem className="shadow-sm bg-[#fdfdfe] rounded px-2 md:px-5 my-8" value="change-password">
                <AccordionTrigger>Change Password</AccordionTrigger>
                <AccordionContent>
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <div>
                                <SHInput
                                    type="text"
                                    name="oldPassword"
                                    label="Old Password"
                                    placeholder="Enter your old password"
                                />
                            </div>
                            <div>
                                <SHInput
                                    type="text"
                                    name="newPassword"
                                    label="New Password"
                                    placeholder="Enter your new password"
                                />
                            </div>
                            <Button className="mt-4">Change Password</Button>
                        </CardContent>
                    </Card>
                </AccordionContent>
            </AccordionItem>
            <SuccessModal
                isOpen={isConfirmOpen}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmOpen(false)}
            />
        </SHForm>
    );
};

export default ChangesPassword;
