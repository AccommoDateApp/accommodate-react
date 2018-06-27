import { Action, EmptyAction } from "../actions";
import { LoginActions } from "../actions/loginActions";
import { defaultFetchableState, Fetchable } from "../state";

type ActionType = EmptyAction & Action<boolean> & Action<string>;

export const loginReducer = (state: Fetchable<boolean> = defaultFetchableState, action: ActionType) : Fetchable<boolean> => {
  switch (action.type) {
    case LoginActions.ResetLogin:
      return {
        ...state,
        error: undefined,
        isFetching: false,
        value: undefined,
      };

    case LoginActions.StartLogin:
      return {
        ...state,
        isFetching: true,
      };

    case LoginActions.FinishLogin:
      return {
        ...state,
        isFetching: false,
        value: true,
      };

    case LoginActions.FailLogin:
      return {
        ...state,
        error: action.value,
        isFetching: false,
        value: false,
      };

    default:
      return state;
  }
};
