import { Action, EmptyAction } from "../actions";
import { StoreActions } from "../actions/storeActions";
import { defaultPowerUpStoreState, PowerUp, PowerUpStore } from "../state/store";

type ActionType = EmptyAction & Action<PowerUp[]> & Action<PowerUp> & Action<boolean>;

export const storeReducer = (state: PowerUpStore = defaultPowerUpStoreState, action: ActionType) : PowerUpStore => {
  switch (action.type) {
    case StoreActions.StartFetching:
      return {
        ...state,
        isFetchingPowerUps: true,
      };

    case StoreActions.FinishFetching:
      return {
        ...state,
        isFetchingPowerUps: false,
        powerups: action.value,
      };

    case StoreActions.ResetPurchase:
      return {
        ...state,
        purchaseSuccess: undefined,
      };

    case StoreActions.StartPurchase:
      return {
        ...state,
        activePowerUpPurchase: action.value,
      };

    case StoreActions.FinishPurchase:
      return {
        ...state,
        activePowerUpPurchase: undefined,
        purchaseSuccess: action.value,
      };

    default:
      return state;
  }
};
