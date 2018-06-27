import { api } from "../api/client";
import { Bio } from "./bio";
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
  bio: Fetchable<Bio>;
  userMatches: UserMatches;
}

export const defaultState: AccommoDateState = {
  bio: defaultFetchableState,
  login: {
    ...defaultFetchableState,
    value: api.isLoggedIn || false,
  },
  signup: defaultFetchableState,
  store: defaultPowerUpStoreState,
  userMatches: defaultUserMatches,
};
