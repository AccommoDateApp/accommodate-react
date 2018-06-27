import { api } from "../api/client";
import { Biography } from "./bio";
import { defaultUserMatches, UserMatches } from "./match";
import { defaultPowerUpStoreState, PowerUpStore } from "./store";

export interface Fetchable<T = any> {
  isFetching: boolean;
  error?: string;
  value?: T;
}

export const defaultFetchableState: Fetchable = {
  isFetching: false,
};

export interface AccommoDateState {
  signup: Fetchable<boolean>;
  store: PowerUpStore;
  login: Fetchable<boolean>;
  biography: Fetchable<Biography>;
  userMatches: UserMatches;
}

export const defaultState: AccommoDateState = {
  biography: defaultFetchableState,
  login: {
    ...defaultFetchableState,
    value: api.isLoggedIn || false,
  },
  signup: defaultFetchableState,
  store: defaultPowerUpStoreState,
  userMatches: defaultUserMatches,
};
