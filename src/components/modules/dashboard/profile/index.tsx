"use client"
import { Accordion } from "@/components/ui/accordion";
import AccountDetails from "./section/AccountDetails";
import SocialLinks from "./section/SocialLinks";
import ChangesPassword from "./section/ChangesPassword";
import { IAuthUser } from "@/types";

const UserProfileSettings = ({profile} : {profile: IAuthUser}) => {

    return (
        <div className="max-w-full mx-auto md:p-6">
            <h2 className="text-2xl font-semibold mb-6">Settings</h2>

                <Accordion type="single" collapsible>
                   <AccountDetails profile={profile} />
                   {/* <ProfileImage /> */}
                   <SocialLinks profile={profile} />
                   <ChangesPassword />
                </Accordion>

        </div>
    );
};

export default UserProfileSettings;
