import { Bio } from "./bio";
import { defaultUserMatches, UserMatches } from "./match";
import { defaultSignupFormState, SignupForm } from "./signup";
import { defaultPowerUpStoreState, PowerUpStore } from "./store";
import { defaultUserState, User } from "./user";

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
  user: User;
  bio: Fetchable<Bio>;
  userMatches: UserMatches;
}

export const defaultState: AccommoDateState = {
  bio: defaultFetchableState,
  signup: defaultSignupFormState,
  store: defaultPowerUpStoreState,
  user: defaultUserState,
  userMatches: defaultUserMatches,
};
