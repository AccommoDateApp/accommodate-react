import { Dispatch } from "react-redux";
import { Action, EmptyAction } from ".";
import { api } from "../api/client";
import { login } from "./loginActions";

export enum SignupActions {
  ResetSignup = "reset_signup",
  StartSignup = "start_signup",
  FinishSignup = "finish_signup",
}

export const resetSignup = () : EmptyAction => ({
  type: SignupActions.ResetSignup,
});

const startSignup = () : EmptyAction => ({
  type: SignupActions.StartSignup,
});

const finishSignup = (success: boolean) : Action<boolean> => ({
  type: SignupActions.FinishSignup,
  value: success,
});

export const signup = (email: string, password: string, name: string, mode: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(startSignup());

    try {
      const signupSuccess = await api.signup(email, password, mode);

      if (!signupSuccess) {
        dispatch(finishSignup(false));
        return;
      }

      dispatch(finishSignup(true));
      await login(email, password)(dispatch);

      await api.updateBio({
        name,
      } as any);
    } catch {
      dispatch(finishSignup(false));
    }
  };
};
