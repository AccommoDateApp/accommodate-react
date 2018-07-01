import { RealEstate, TenantBiography } from "./biography";

export interface ActualMatch extends Matchable {
  matchIsFavorite: boolean;
}

export interface MatchingState {
  isFetchingUserMatches: boolean;
  userMatches: UserMatches;
}

export interface UserMatches {
  actualMatches: ActualMatch[];
  potentialMatches: Matchable[];
}

export const defaultUserMatches: UserMatches = {
  actualMatches: [],
  potentialMatches: [],
};

export const defaultMatchingState: MatchingState = {
  isFetchingUserMatches: false,
  userMatches: defaultUserMatches,
};

export interface Matchable {
  id: string;
  images: string[];
  name: string;
}

export interface MatchedPair {
  tenant: TenantBiography;
  realEstate: RealEstate;
}
