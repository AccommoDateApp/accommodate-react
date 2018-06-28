import { Action } from ".";
import { UserRole } from "../state/profile";

export enum ProfileActions {
    SET_USER_ROLE = "set_user_role",
    SET_EDIT_MODE = "set_edit_mode",
}

export function setUserMode(flag: UserRole) : Action<UserRole> {
    return {
        type: ProfileActions.SET_USER_ROLE,
        value: flag,
    };
}

export function setEditMode(flag: boolean) : Action<boolean> {
  return {
    type: ProfileActions.SET_EDIT_MODE,
    value: flag,
  };
}
