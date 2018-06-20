import { Action, EmptyAction } from "../actions";
import { SignupActions } from "../actions/signupActions";
import { defaultSignupFormState, SignupForm } from "../state/signup";

export const signupReducer = (state: SignupForm = defaultSignupFormState, action: EmptyAction & Action<boolean>) : SignupForm => {
  switch (action.type) {
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
