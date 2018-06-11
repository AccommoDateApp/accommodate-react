import { IAction } from "../actions";
import { ProfileActions } from "../actions/profileActions";

export interface IProfile {
  basicDetails: string;
  mode: UserMode;               // tenant or landlord
}

export enum UserMode {
  tenant,
  landlord,
}

const defaultState: IProfile = {
  basicDetails: "",
  mode: UserMode.tenant,
};

export function ProfileReducer(state = defaultState, action: IAction<ProfileActions>) {
  switch (action.type) {
    case ProfileActions.SET_USER_MODE:
    if (action.value === UserMode.tenant) {
      return {
        ...state,
        mode: UserMode.tenant,
      };
    } else {
      return {
        ...state,
        mode: UserMode.landlord,
      };
    }
    default:
    return state;
  }
}
