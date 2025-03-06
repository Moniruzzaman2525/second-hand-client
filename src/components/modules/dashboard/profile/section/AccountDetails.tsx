'use client'

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SHForm from '@/components/ui/core/form/SHForm';
import SHInput from '@/components/ui/core/form/SHInput';
import SHTextarea from '@/components/ui/core/form/SHTextarea';
import { updateProfile } from '@/services/Users';
import { IAuthUser } from '@/types';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const AccountDetails = ({ profile }: { profile: IAuthUser }) => {
    const router = useRouter();
    const handleFormSubmit = async (data: FieldValues) => {
        try {
            const res = await updateProfile(data);
            if (res.success) {
                toast.success('Profile updated successfully!');
                router.refresh();
            } else {
                toast.error(res.message);
            }
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    return (
        <SHForm
            key={JSON.stringify(profile)}
            defaultValues={profile}
            onSubmit={handleFormSubmit}
        >
            <AccordionItem className="shadow-sm bg-[#fdfdfe] rounded px-2 md:px-5 my-8" value="account-details">
                <AccordionTrigger>Account Details</AccordionTrigger>
                <AccordionContent>
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <div>
                                <SHInput
                                    type="text"
                                    name="name"
                                    label="Display Name"
                                    placeholder="Enter your display name"
                                />
                            </div>
                            <div>
                                <SHInput
                                    type="text"
                                    name="phoneNumber"
                                    label="Phone Number"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <SHInput
                                    type="text"
                                    name="email"
                                    label="Email"
                                    disabled={true}
                                />
                            </div>
                            <div>
                                <SHTextarea
                                    name="description"
                                    placeholder="Write something about yourself"
                                    label="Profile Description"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-10">
                                <SHInput
                                    type="text"
                                    name="location"
                                    label="City"
                                    placeholder="Enter your city"
                                />
                                <SHInput
                                    type="text"
                                    name="address"
                                    label="Address"
                                    placeholder="Enter your address"
                                />
                            </div>
                            <Button className="mt-4 w-full sm:w-auto">Save Changes</Button>
                        </CardContent>
                    </Card>
                </AccordionContent>
            </AccordionItem>
            {/* <SuccessModal
                isOpen={isConfirmOpen}
                status={modalState}
                content={modalContent}
                onOpenChange={() => setIsConfirmOpen(false)}
            /> */}
        </SHForm>
    );
};

export default AccountDetails;
