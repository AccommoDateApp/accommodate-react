import * as React from "react";
import { AboutMe } from "./../AboutMe";
import { ProfilePicture } from "./../ProfilePicture";
import { Preferences } from "./Preferences";

export const TenantProfile = () => (
    <div>
        <div>
            <ProfilePicture />
        </div>
        <div>
            <AboutMe />
        </div>
        <div>
            <Preferences />
        </div>

    </div>
);
