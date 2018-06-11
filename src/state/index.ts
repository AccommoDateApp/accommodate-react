import { MatchProps } from "../components/matching/Match";

export interface AccommoDateState {
  matches: MatchProps[];
}

export const defaultState: AccommoDateState = {
  matches: Array(5).fill([
    {
      chatStatusIcon: "string",
      matchIsStarred: true,
      matchName: "Tomas",
      matchPicture: "string",
    },
  ]),
};
