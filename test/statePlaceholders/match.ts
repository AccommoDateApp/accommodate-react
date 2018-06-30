import {UserMatches} from "../../src/state/match";
import {tenantBiographyPlaceholder} from "./biography";

export const userMatchesPlaceholder: UserMatches = {
  actualMatches: Array(2).fill(tenantBiographyPlaceholder),
  potentialMatches: Array(5).fill(tenantBiographyPlaceholder),
};
