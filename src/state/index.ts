import { MatchState } from "./match";
import { defaultProfile, ProfileProps } from "./profile";
import { defaultSignupFormState, SignupForm } from "./signup";
import { defaultPowerUpStoreState, PowerUpStore } from "./store";
import { defaultUserState, User } from "./user";

export interface AccommoDateState {
  profile: ProfileProps;
  matches: MatchState[];
  user: User;
  signup: SignupForm;
  store: PowerUpStore;
}

export const defaultState: AccommoDateState = {
  matches: [],
  profile: defaultProfile,
  signup: defaultSignupFormState,
  store: defaultPowerUpStoreState,
  user: defaultUserState,
};
