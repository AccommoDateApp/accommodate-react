import { MatchState } from "./match";
import { Profile, UserMode } from "./profile";
import { defaultSignupFormState, SignupForm } from "./signup";
import { defaultUserState, User } from "./user";

export interface AccommoDateState {
  profile: Profile;
  matches: MatchState[];
  user: User;
  signup: SignupForm;
}

export const defaultState: AccommoDateState = {
  matches: [],
  profile: {
    basicDetails: "",
    mode: UserMode.Landlord,
  },
  signup: defaultSignupFormState,
  user: defaultUserState,
};
