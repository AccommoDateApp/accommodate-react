import * as React from "react";
import { Match, MatchProps } from "./Match";

export interface MatchesListProps {
  matches: MatchProps[];
}

export const MatchesList = (props: MatchesListProps) => {

  function renderMatch(match: MatchProps, listIdx: number) {
    return <Match key={listIdx} {...props.matches[listIdx]} />;
  }

  return (
    <div>{props.matches.map(renderMatch)}</div>
  );
};
