import { IAction } from ".";
import { UserMode } from "../reducers/profileReducer";

export enum ProfileActions {
    SET_USER_MODE = "set_user_mode",
}

export function setUserMode(flag: UserMode) : IAction<UserMode> {
    return {
        type: ProfileActions.SET_USER_MODE,
        value: flag,
    };
}
