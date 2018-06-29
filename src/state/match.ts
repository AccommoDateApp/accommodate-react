import { RealEstate, TenantBiography } from "./biography";

export interface ActualMatch extends Matchable {
  matchIsFavorite: boolean;
}

export interface UserMatches {
  actualMatches: ActualMatch[];
  potentialMatches: Matchable[];
}

export const defaultUserMatches: UserMatches = {
  actualMatches: [],
  potentialMatches: [],
};

export interface Matchable {
  id: string;
  name: string;
}

export interface MatchedPair {
  tenant: TenantBiography;
  realEstate: RealEstate;
}
