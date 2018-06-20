import * as React from "react";
import { MatchState } from "../../state/match";

export const Match = (matchState: MatchState) => {
  const picturePlaceholder = "picturePlaceholder";
  return (
    <div>
      <div>Pic: {picturePlaceholder}</div>
      <h3>Name: {matchState.firstName}</h3>
      <div>Starred: {matchState.matchIsStarred}</div>
      <div>Chat: {picturePlaceholder}</div>
    </div>
  );
};
