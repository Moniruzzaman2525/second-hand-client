"use client"
import { Accordion } from "@/components/ui/accordion";
import AccountDetails from "./section/AccountDetails";
import SocialLinks from "./section/SocialLinks";
import ChangesPassword from "./section/ChangesPassword";
import { IAuthUser } from "@/types";

const UserProfileSettings = ({profile} : {profile: IAuthUser}) => {

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-6">Settings</h2>

                <Accordion type="single" collapsible>
                   <AccountDetails profile={profile} />
                   {/* <ProfileImage /> */}
                   <SocialLinks profile={profile} />
                   <ChangesPassword profile={profile} />
                </Accordion>

        </div>
    );
};

export default UserProfileSettings;
