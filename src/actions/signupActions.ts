import { Dispatch } from "react-redux";
import { Action, EmptyAction } from ".";
import { api } from "../api/client";
import { login } from "./loginActions";

export enum SignupActions {
  ChangeEmail = "change_email",
  ChangePassword = "change_password",
  ChangeName = "change_name",

  ResetSignup = "reset_signup",
  StartSignup = "start_signup",
  FinishSignup = "finish_signup",
}

export const changeEmail = (value: string) : Action<string> => ({
  type: SignupActions.ChangeEmail,
  value,
});

export const changePassword = (value: string) : Action<string> => ({
  type: SignupActions.ChangePassword,
  value,
});

export const changeName = (value: string) : Action<string> => ({
  type: SignupActions.ChangeName,
  value,
});

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

export const signup = (email: string, password: string, name: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(startSignup());

    try {
      const signupSuccess = await api.signup(email, password);

      if (!signupSuccess) {
        dispatch(finishSignup(false));
        return;
      }

      dispatch(finishSignup(true));
      login(email, password)(dispatch);

      await api.updateBio({
        name,
      } as any);
    } catch {
      dispatch(finishSignup(false));
    }
  };
};
