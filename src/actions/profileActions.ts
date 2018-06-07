import { IAction } from ".";

export enum ProfileActions {
    SET_USER_MODE = "set_user_mode",
}

export function setUserMode(flag: string) : IAction {
    return {
        type: ProfileActions.SET_USER_MODE,
        value: flag,
    };
}
