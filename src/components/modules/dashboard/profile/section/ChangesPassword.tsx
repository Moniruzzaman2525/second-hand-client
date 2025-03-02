import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SHForm from '@/components/ui/core/form/SHForm';
import SHInput from '@/components/ui/core/form/SHInput';
import React from 'react';

const ChangesPassword = () => {
    const handleFormSubmit = () => {

    }
    return (
        <SHForm onSubmit={handleFormSubmit}>
            <AccordionItem className="shadow-sm bg-[#fdfdfe] rounded px-5 py-2 my-8" value="change-password">
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
