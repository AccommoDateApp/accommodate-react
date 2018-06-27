import { History } from "history";
import { Dispatch } from "redux";
import { Action, EmptyAction } from ".";
import { api } from "../api/client";

export enum LoginActions {
  ResetLogin = "reset_login",
  StartLogin = "start_login",
  FinishLogin = "finish_login",
  FailLogin = "fail_login",
  Logout = "logout",
}

export const resetLogin = () : EmptyAction => ({
  type: LoginActions.ResetLogin,
});

const startLogin = () : EmptyAction => ({
  type: LoginActions.StartLogin,
});

const finishLogin = () : EmptyAction => ({
  type: LoginActions.FinishLogin,
});

const failLogin = (error: string) : Action<string> => ({
  type: LoginActions.FailLogin,
  value: error,
});

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(resetLogin());
    dispatch(startLogin());

    try {
      await api.login(email, password);

      dispatch(finishLogin());
    } catch (error) {
      dispatch(failLogin(error.message));
    }
  };
};

const finishLogout = () : EmptyAction => ({
  type: LoginActions.Logout,
});

export const logout = (history: History) => {
  return async (dispatch: Dispatch) => {
    await api.logout();

    dispatch(finishLogout());
    history.push("/");
  };
};
