'use client'

import SHForm from '@/components/ui/core/form/SHForm';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SHInput from '@/components/ui/core/form/SHInput';
import { IAuthUser } from '@/types';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { updateProfile } from '@/services/Users';
import { toast } from 'sonner';

const SocialLinks = ({ profile }: { profile: IAuthUser }) => {
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
        <SHForm key={JSON.stringify(profile)} defaultValues={profile} onSubmit={handleFormSubmit}>

            <AccordionItem className="shadow-sm bg-[#fdfdfe] rounded px-2 md:px-5 my-8" value="social-links">
                <AccordionTrigger>Social Links</AccordionTrigger>
                <AccordionContent>
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <div>
                                <SHInput
                                    type="text"
                                    name="facebook"
                                    label="Facebook"
                                    placeholder="Enter your Facebook profile link"
                                />
                            </div>
                            <div>
                                <SHInput
                                    type="text"
                                    name="twitter"
                                    label="Twitter"
                                    placeholder="Enter your Twitter profile link"
                                />
                            </div>
                            <Button className="mt-4">Save Changes</Button>
                        </CardContent>
                    </Card>
                </AccordionContent>
            </AccordionItem>
        </SHForm>
    );
};

export default SocialLinks;
