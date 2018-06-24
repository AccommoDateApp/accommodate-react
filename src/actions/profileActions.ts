import { Action } from ".";
import { UserRole } from "../state/profile";

export enum ProfileActions {
    SET_USER_ROLE = "set_user_role",
}

export function setUserMode(flag: UserRole) : Action<UserRole> {
    return {
        type: ProfileActions.SET_USER_ROLE,
        value: flag,
    };
}
