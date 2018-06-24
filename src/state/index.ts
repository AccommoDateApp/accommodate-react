import { MatchState } from "./match";
import { defaultProfile, ProfileProps } from "./profile";
import { defaultSignupFormState, SignupForm } from "./signup";
import { defaultUserState, User } from "./user";

export interface AccommoDateState {
  profile: ProfileProps;
  matches: MatchState[];
  user: User;
  signup: SignupForm;
}

export const defaultState: AccommoDateState = {
  matches: [],
  profile: defaultProfile,
  signup: defaultSignupFormState,
  user: defaultUserState,
};
