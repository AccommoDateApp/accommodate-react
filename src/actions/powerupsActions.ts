import { Dispatch } from "react-redux";
import { Action, EmptyAction } from ".";
import { api } from "../api/client";
import { PowerUp } from "../state/store";

export enum PowerUpActions {
  StartFetching = "start_fetching_purchased_powerups",
  FinishFetching = "finish_fetching_purchased_powerups",
}

const startFetchingPurchasedPowerUps = () : EmptyAction => ({
  type: PowerUpActions.StartFetching,
});

const finishFetchingPurchasedPowerUps = (powerups: PowerUp[]) : Action<PowerUp[]> => ({
  type: PowerUpActions.FinishFetching,
  value: powerups,
});

export const fetchPurchasedPowerUps = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startFetchingPurchasedPowerUps());

    try {
      const powerups = await api.fetchUserPowerups();

      dispatch(finishFetchingPurchasedPowerUps(powerups));
    } catch {
      dispatch(finishFetchingPurchasedPowerUps([]));
    }
  };
};

export const usePowerUp = (powerup: PowerUp) => {
  return async (dispatch: Dispatch) => {
    dispatch(startFetchingPurchasedPowerUps());

    try {
      const powerups = await api.usePowerUp(powerup.id);

      dispatch(finishFetchingPurchasedPowerUps(powerups));
    } catch {
      dispatch(finishFetchingPurchasedPowerUps([]));
    }
  };
};
