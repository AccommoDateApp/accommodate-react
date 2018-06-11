import { MatchProps } from "../components/matching/Match";
import { Profile, UserMode } from "./profile";
import { defaultUserState, User } from "./user";

export interface AccommoDateState {
  matches: MatchProps[];
  profile: Profile;
  user: User;
}

export const defaultState: AccommoDateState = {
  matches: [],
  profile: {
    basicDetails: "",
    mode: UserMode.Landlord,
  },
  user: defaultUserState,
};
