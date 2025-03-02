import SHForm from '@/components/ui/core/form/SHForm';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SHInput from '@/components/ui/core/form/SHInput';

const SocialLinks = () => {
    const handleFormSubmit = () => {

    }
    return (
        <SHForm onSubmit={handleFormSubmit}>

            <AccordionItem className="shadow-sm bg-[#fdfdfe] rounded px-5 py-2 my-8" value="social-links">
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
