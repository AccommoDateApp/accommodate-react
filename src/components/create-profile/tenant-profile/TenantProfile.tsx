import * as React from "react";
import { AboutMe } from "./../AboutMe";
import { ProfilePicture } from "./../ProfilePicture";
import { Preferences } from "./Preferences";

export const LandlordProfile = () => (
    <div>
        <div>
            <ProfilePicture />
        </div>
        <div>
            <AboutMe />
        </div>
        <div>
            <ForRent />
        </div>

    </div>
);
