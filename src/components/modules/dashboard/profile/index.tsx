"use client"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import SHForm from "@/components/ui/core/form/SHForm";
import SHInput from "@/components/ui/core/form/SHInput";
import SHTextarea from "@/components/ui/core/form/SHTextarea";

const UserProfileSettings = () => {
    const handleFormSubmit = () => {

    }
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-6">Settings</h2>
            <SHForm onSubmit={handleFormSubmit}>
                <Accordion type="single" collapsible>
                    <AccordionItem className="shadow-sm bg-[#fdfdfe] rounded px-5 py-2 my-10" value="account-details">
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
                                        <SHTextarea name="description" placeholder="Write something about yourself" label="Profile Description" />
                                    </div>
                                    <div className="flex gap-10">
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
                                    <Button className="mt-4">Save Changes</Button>
                                </CardContent>
                            </Card>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem className="shadow-sm bg-[#fdfdfe] rounded px-5 py-2 my-10" value="profile-image">
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

                    <AccordionItem className="shadow-sm bg-[#fdfdfe] rounded px-5 py-2 my-10" value="social-links">
                        <AccordionTrigger>Social Links</AccordionTrigger>
                        <AccordionContent>
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div>
                                        <Label htmlFor="facebook">Facebook</Label>
                                        <Input id="facebook" placeholder="Enter your Facebook profile link" />
                                    </div>
                                    <div>
                                        <Label htmlFor="twitter">Twitter</Label>
                                        <Input id="twitter" placeholder="Enter your Twitter profile link" />
                                    </div>
                                    <Button className="mt-4">Save Changes</Button>
                                </CardContent>
                            </Card>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem className="shadow-sm bg-[#fdfdfe] rounded px-5 py-2 my-10" value="change-password">
                        <AccordionTrigger>Change Password</AccordionTrigger>
                        <AccordionContent>
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div>
                                        <Label htmlFor="old-password">Old Password</Label>
                                        <Input id="old-password" type="password" placeholder="Enter your old password" />
                                    </div>
                                    <div>
                                        <Label htmlFor="new-password">New Password</Label>
                                        <Input id="new-password" type="password" placeholder="Enter your new password" />
                                    </div>
                                    <Button className="mt-4">Change Password</Button>
                                </CardContent>
                            </Card>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
           </SHForm>
        </div>
    );
};

export default UserProfileSettings;
