import { Action, EmptyAction } from "../actions";
import { BioActions } from "../actions/bioActions";
import { defaultState, Fetchable } from "../state";
import { Biography } from "../state/bio";

type ActionType = EmptyAction & Action<Biography> & Action<string>;

export const bioReducer = (state: Fetchable<Biography> = defaultState.bio, action: ActionType) : Fetchable<Biography> => {
  switch (action.type) {
    case BioActions.StartFetchingBio:
    case BioActions.StartUpdatingBio:
      return {
        ...state,
        error: undefined,
        isFetching: true,
        value: undefined,
      };

    case BioActions.FinishFetchingBio:
    case BioActions.FinishUpdatingBio:
      return {
        ...state,
        error: undefined,
        isFetching: false,
        value: action.value,
      };

    case BioActions.FailFetchingBio:
    case BioActions.FailUpdatingBio:
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
