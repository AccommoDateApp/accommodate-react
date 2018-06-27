import { Action, EmptyAction } from "../actions";
import { BioActions } from "../actions/bioActions";
import { defaultFetchableState, Fetchable } from "../state";
import { Bio } from "../state/bio";

type ActionType = EmptyAction & Action<Bio> & Action<string>;

export const bioReducer = (state: Fetchable<Bio> = defaultFetchableState, action: ActionType) : Fetchable<Bio> => {
  switch (action.type) {
    case BioActions.StartFetchingBio:
      return {
        ...state,
        error: undefined,
        isFetching: true,
        value: undefined,
      };

    case BioActions.FinishFetchingBio:
      return {
        ...state,
        error: undefined,
        isFetching: false,
        value: action.value,
      };

    case BioActions.FailFetchingBio:
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
