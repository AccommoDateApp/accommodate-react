import { defaultUserMatches, UserMatches } from "./match";
import { defaultProfile, ProfileProps } from "./profile";
import { defaultSignupFormState, SignupForm } from "./signup";
import { defaultPowerUpStoreState, PowerUpStore } from "./store";
import { defaultUserState, User } from "./user";

export interface AccommoDateState {
  profile: ProfileProps;
  signup: SignupForm;
  store: PowerUpStore;
  user: User;
  userMatches: UserMatches;
}

export const defaultState: AccommoDateState = {
  profile: defaultProfile,
  signup: defaultSignupFormState,
  store: defaultPowerUpStoreState,
  user: defaultUserState,
  userMatches: defaultUserMatches,
};
