import * as React from "react";
import { AboutMe } from "./../AboutMe";
import { ProfilePicture } from "./../ProfilePicture";
import { ForRent } from "./ForRent";

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
