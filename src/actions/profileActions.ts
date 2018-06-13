import { Action } from ".";
import { UserMode } from "../state/profile";

export enum ProfileActions {
    SET_USER_MODE = "set_user_mode",
}

export function setUserMode(flag: UserMode) : Action<UserMode> {
    return {
        type: ProfileActions.SET_USER_MODE,
        value: flag,
    };
}
