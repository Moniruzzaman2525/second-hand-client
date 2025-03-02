import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SHForm from '@/components/ui/core/form/SHForm';
import React from 'react';

const ProfileImage = () => {
    const handleFormSubmit = () => {

    }
    return (
        <SHForm onSubmit={handleFormSubmit}>
            <AccordionItem className="shadow-sm bg-[#fdfdfe] rounded px-5 py-2 my-8" value="profile-image">
                <AccordionTrigger>Profile Image</AccordionTrigger>
                <AccordionContent>
                    <Card>
                        <CardContent className="p-6 text-center">
                            <Avatar className="w-24 h-24 mx-auto">
                                <AvatarImage src="https://via.placeholder.com/150" alt="User" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <Button className="mt-4">Change Avatar</Button>
                        </CardContent>
                    </Card>
                </AccordionContent>
            </AccordionItem>
        </SHForm>
    );
};

export default ProfileImage;
