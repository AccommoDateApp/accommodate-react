import { Action, EmptyAction } from "../actions";
import { SignupActions } from "../actions/signupActions";
import { defaultSignupFormState, SignupForm } from "../state/signup";

export const signupReducer = (state: SignupForm = defaultSignupFormState, action: EmptyAction & Action<boolean> & Action<string>) : SignupForm => {
  switch (action.type) {
    case SignupActions.ChangeEmail:
      return {
        ...state,
        email: action.value,
      };

    case SignupActions.ChangePassword:
      return {
        ...state,
        password: action.value,
      };

    case SignupActions.ChangeName:
      return {
        ...state,
        name: action.value,
      };

    case SignupActions.ResetSignup:
      return {
        ...state,
        success: undefined,
      };

    case SignupActions.StartSignup:
      return {
        ...state,
        isSigningUp: true,
      };

    case SignupActions.FinishSignup:
      return {
        ...state,
        isSigningUp: false,
        success: action.value,
      };

    default:
      return state;
  }
};
