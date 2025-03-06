"use client"

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SHForm from '@/components/ui/core/form/SHForm';
import SHInput from '@/components/ui/core/form/SHInput';
import { changesPassword } from '@/services/AuthService';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const ChangesPassword = () => {

    const handleFormSubmit = async (data: FieldValues) => {
        try {
            const res = await changesPassword(data);
            if (res.success) {
                toast.success('Password changed successfully!');
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
        </SHForm>
    );
};

export default ChangesPassword;
