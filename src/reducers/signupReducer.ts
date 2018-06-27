import { Action, EmptyAction } from "../actions";
import { SignupActions } from "../actions/signupActions";
import { defaultState, Fetchable } from "../state";

type ActionType = EmptyAction & Action<string>;

export const signupReducer = (state: Fetchable<boolean> = defaultState.signup, action: ActionType) : Fetchable<boolean> => {
  switch (action.type) {
    case SignupActions.ResetSignup:
      return {
        ...state,
        error: undefined,
        isFetching: false,
        value: undefined,
      };

    case SignupActions.StartSignup:
      return {
        ...state,
        isFetching: true,
      };

    case SignupActions.FinishSignup:
      return {
        ...state,
        error: undefined,
        isFetching: false,
        value: true,
      };

    case SignupActions.FailSignup:
      return {
        ...state,
        error: action.value,
        isFetching: false,
        value: undefined,
      };

    default:
      return state;
  }
};
