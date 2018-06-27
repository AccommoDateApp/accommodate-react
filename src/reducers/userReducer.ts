import { Action, EmptyAction } from "../actions";
import { LoginActions } from "../actions/loginActions";
import { defaultUserState, User } from "../state/user";

export const userReducer = (state: User = defaultUserState, action: EmptyAction & Action<boolean>) : User => {
  switch (action.type) {
    case LoginActions.ResetLogin:
      return {
        ...state,
        loginSuccess: undefined,
      };

    case LoginActions.StartLogin:
      return {
        ...state,
        isLoggingIn: true,
      };

    case LoginActions.FinishLogin:
      return {
        ...state,
        isLoggedIn: action.value,
        isLoggingIn: false,
        loginSuccess: action.value,
      };

    case LoginActions.Logout:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        loginSuccess: undefined,
      };

    default:
      return state;
  }
};
