import { ProfileProps } from "./profile";

export interface MatchState {
  userProfile: ProfileProps;
  matchIsFavorite: boolean;
}

export interface UserMatches {
  actualMatches: MatchState[];
  potentialMatches: ProfileProps[];
}

export const defaultUserMatches: UserMatches = {
  actualMatches: [],
  potentialMatches: [],
};
