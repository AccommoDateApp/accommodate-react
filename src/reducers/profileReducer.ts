import { Action } from "../actions";
import { ProfileActions } from "../actions/profileActions";
import { ProfileState , UserMode } from "../components/profile/ProfileTypes";

console.log("this is profile state and user mode", UserMode);

const defaultState: ProfileState = {
  basicDetails: "",
  mode: UserMode.tenant,
};

export function ProfileReducer(state = defaultState, action: Action<UserMode>) {
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
