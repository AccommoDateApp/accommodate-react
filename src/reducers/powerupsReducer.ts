import { Action, EmptyAction } from "../actions";
import { PowerUpActions } from "../actions/powerupsActions";
import { defaultFetchableState, Fetchable } from "../state";
import { PowerUp } from "../state/store";

export const powerupsReducer = (state: Fetchable<PowerUp[]> = defaultFetchableState, action: EmptyAction & Action<PowerUp[]>) : Fetchable<PowerUp[]> => {
  switch (action.type) {
    case PowerUpActions.StartFetching:
      return {
        ...state,
        isFetching: true,
      };

    case PowerUpActions.FinishFetching:
      return {
        ...state,
        isFetching: false,
        value: action.value,
      };

    default:
      return state;
  }
};
