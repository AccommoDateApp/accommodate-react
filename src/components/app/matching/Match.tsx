import * as React from "react";

export interface MatchProps {
  matchName: string;
  matchPicture: string;
  matchIsStarred: boolean;
  chatStatusIcon: string;
}

export const Match = (props: MatchProps) => {
  return (
    <div>
      <div>Pic: {props.matchPicture}</div>
      <h3>Name: {props.matchName}</h3>
      <div>Starred: {props.matchIsStarred}</div>
      <div>Chat: {props.chatStatusIcon}</div>
    </div>
  );
};
