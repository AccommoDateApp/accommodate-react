import { Bio } from "./bio";
import { defaultUserMatches, UserMatches } from "./match";
import { defaultSignupFormState, SignupForm } from "./signup";
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
  signup: SignupForm;
  store: PowerUpStore;
  login: Fetchable<boolean>;
  bio: Fetchable<Bio>;
  userMatches: UserMatches;
}

export const defaultState: AccommoDateState = {
  bio: defaultFetchableState,
  login: defaultFetchableState,
  signup: defaultSignupFormState,
  store: defaultPowerUpStoreState,
  userMatches: defaultUserMatches,
};
