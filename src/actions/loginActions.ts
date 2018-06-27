import { History } from "history";
import { Dispatch } from "redux";
import { Action, EmptyAction } from ".";
import { api } from "../api/client";

export enum LoginActions {
  ResetLogin = "reset_login",
  StartLogin = "start_login",
  FinishLogin = "finish_login",
  Logout = "logout",
}

export const resetLogin = () : EmptyAction => ({
  type: LoginActions.ResetLogin,
});

const startLogin = () : EmptyAction => ({
  type: LoginActions.StartLogin,
});

const finishLogin = (success: boolean) : Action<boolean> => ({
  type: LoginActions.FinishLogin,
  value: success,
});

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(resetLogin());
    dispatch(startLogin());

    try {
      const success = await api.login(email, password);

      dispatch(finishLogin(success));
    } catch {
      dispatch(finishLogin(false));
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
