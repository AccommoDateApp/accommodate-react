import { Action } from "../actions";
import { ProfileActions } from "../actions/profileActions";
import { ProfileState , UserMode } from "../components/profile/ProfileTypes";

const defaultState: ProfileState = {
  basicDetails: "",
  mode: UserMode.tenant,
};

export const profileReducer = (state = defaultState, action: Action<UserMode>) => {
  switch (action.type) {
    case ProfileActions.SET_USER_MODE:
      return {
        ...state,
        mode: action.value,
      };

    default:
      return state;
  }
};
