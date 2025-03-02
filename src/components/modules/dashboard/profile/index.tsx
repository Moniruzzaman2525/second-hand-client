"use client"
import { Accordion } from "@/components/ui/accordion";
import AccountDetails from "./section/AccountDetails";
import ProfileImage from "./section/ProfileImage";
import SocialLinks from "./section/SocialLinks";
import ChangesPassword from "./section/ChangesPassword";

const UserProfileSettings = () => {

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-6">Settings</h2>

                <Accordion type="single" collapsible>
                   <AccountDetails />
                   <ProfileImage />
                   <SocialLinks />
                   <ChangesPassword />
                </Accordion>

        </div>
    );
};

export default UserProfileSettings;
