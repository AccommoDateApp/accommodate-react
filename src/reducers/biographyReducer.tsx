import { Action, EmptyAction } from "../actions";
import { BiographyActions } from "../actions/biographyActions";
import { defaultState, Fetchable } from "../state";
import { Biography } from "../state/biography";

type ActionType = EmptyAction & Action<Biography> & Action<string>;

export const biographyReducer = (state: Fetchable<Biography> = defaultState.biography, action: ActionType) : Fetchable<Biography> => {
  switch (action.type) {
    case BiographyActions.StartFetchingBio:
    case BiographyActions.StartUpdatingBio:
      return {
        ...state,
        error: undefined,
        isFetching: true,
        value: undefined,
      };

    case BiographyActions.FinishFetchingBio:
    case BiographyActions.FinishUpdatingBio:
      return {
        ...state,
        error: undefined,
        isFetching: false,
        value: action.value,
      };

    case BiographyActions.FailFetchingBio:
    case BiographyActions.FailUpdatingBio:
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
