import * as React from "react";
import { MatchState } from "../../state/match";

export const Match = (state: MatchState) => {
  const props = mapStateToProps(state);
  return (
    <div>
      <div>Pic: {props.matchPicture}</div>
      <h3>Name: {props.matchName}</h3>
      <div>Starred: {props.matchIsStarred}</div>
      <div>Chat: {props.chatStatusIcon}</div>
    </div>
  );
};

const mapStateToProps = (match: MatchState) : MatchProps  => {
  const picturePlaceholder = "picturePlaceholder";
  return {
    chatStatusIcon: picturePlaceholder,
    matchIsStarred: match.matchIsStarred,
    matchName: match.firstName,
    matchPicture: picturePlaceholder,
  };
};

interface MatchProps {
  matchName: string;
  matchPicture: string;
  matchIsStarred: boolean;
  chatStatusIcon: string;
}
