import { Dispatch } from "react-redux";
import { Action, EmptyAction } from ".";
import { api } from "../api/client";
import { PowerUp, Purchase } from "../state/store";

export enum StoreActions {
  StartFetching = "start_fetching_powerups",
  FinishFetching = "finish_fetching_powerups",
  ResetPurchase = "reset_purchase",
  StartPurchase = "start_purchase",
  FinishPurchase = "finish_purchase",
}

const startFetchingPowerUps = () : EmptyAction => ({
  type: StoreActions.StartFetching,
});

const finishFetchingPowerUps = (powerups: PowerUp[]) : Action<PowerUp[]> => ({
  type: StoreActions.FinishFetching,
  value: powerups,
});

export const fetchPowerUps = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startFetchingPowerUps());

    try {
      const powerups = await api.fetchPowerUps();

      dispatch(finishFetchingPowerUps(powerups));
    } catch {
      dispatch(finishFetchingPowerUps([]));
    }
  };
};

const startPurchasePowerUp = (purchase: Purchase) : Action<Purchase> => ({
  type: StoreActions.StartPurchase,
  value: purchase,
});

const finishPurchasePowerUp = (success: boolean) : Action<boolean> => ({
  type: StoreActions.FinishPurchase,
  value: success,
});

export const purchasePowerUp = (id: string, quantity: number) => {
  return async (dispatch: Dispatch) => {
    const purchase: Purchase = {
      id,
      quantity,
    };

    dispatch(resetPurchase());
    dispatch(startPurchasePowerUp(purchase));

    let success = false;

    try {
      await api.purchasePowerUp(purchase);

      success = true;
    } finally {
      dispatch(finishPurchasePowerUp(success));
    }
  };
};

export const resetPurchase = () : EmptyAction => ({
  type: StoreActions.ResetPurchase,
});
