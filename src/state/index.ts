import { MatchProps } from "../components/matching/Match";

export interface AccommoDateState {
  matches: MatchProps[];
}

export const defaultState: AccommoDateState = {
  matches: [
    {
      chatStatusIcon: "string",
      matchIsStarred: true,
      matchName: "Tomas",
      matchPicture: "string",
    },
  ],
};
