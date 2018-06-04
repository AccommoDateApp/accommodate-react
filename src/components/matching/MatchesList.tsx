import * as React from "react";
import { Match, MatchProps } from "./Match";

export interface MatchesListProps {
  matches: MatchProps[];
}

export const MatchesList = (props: MatchesListProps) => {

  const matches = props.matches.map(
    (match, id) => <Match key={id} {...match} />,
  );

  return (
    <div>
      <h1>Matches</h1>
      {matches}
    </div>
  );
};
