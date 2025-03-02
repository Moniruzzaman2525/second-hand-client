"use client"

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";

const UserProfileSettings = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-6">Settings</h2>
            <Accordion type="single" collapsible>
                <AccordionItem value="account-details">
                    <AccordionTrigger>Account Details</AccordionTrigger>
                    <AccordionContent>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <div>
                                    <Label htmlFor="display-name">Display Name</Label>
                                    <Input id="display-name" placeholder="Enter your display name" className="mt-1" />
                                </div>
                                <div>
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" type="tel" placeholder="Enter your phone number" className="mt-1" />
                                </div>
                                <div>
                                    <Label htmlFor="description">Profile Description</Label>
                                    <Textarea id="description" placeholder="Write something about yourself" className="mt-1" />
                                </div>
                                <div>
                                    <Label htmlFor="address">Address</Label>
                                    <Input id="address" placeholder="Enter your address" className="mt-1" />
                                </div>
                                <Button className="mt-4">Save Changes</Button>
                            </CardContent>
                        </Card>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="profile-image">
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

                <AccordionItem value="social-links">
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

                <AccordionItem value="change-password">
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
        </div>
    );
};

export default UserProfileSettings;
