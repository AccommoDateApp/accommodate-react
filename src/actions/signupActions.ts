import { Dispatch } from "react-redux";
import { Action, EmptyAction } from ".";
import { api } from "../api/client";
import { login } from "./loginActions";

export enum SignupActions {
  ResetSignup = "reset_signup",
  StartSignup = "start_signup",
  FinishSignup = "finish_signup",
  FailSignup = "fail_signup",
}

export const resetSignup = () : EmptyAction => ({
  type: SignupActions.ResetSignup,
});

const startSignup = () : EmptyAction => ({
  type: SignupActions.StartSignup,
});

const finishSignup = () : EmptyAction => ({
  type: SignupActions.FinishSignup,
});

const failSignup = (error: string) : Action<string> => ({
  type: SignupActions.FailSignup,
  value: error,
});

export const signup = (email: string, password: string, name: string, mode: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(startSignup());

    try {
      await api.signup(email, password, mode);
      dispatch(finishSignup());
      await login(email, password)(dispatch);
      await api.updateBio({
        name,
      });
    } catch (error) {
      dispatch(failSignup(error.message));
    }
  };
};
