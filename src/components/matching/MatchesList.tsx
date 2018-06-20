import * as React from "react";
import { MatchState } from "../../state/match";
import { Match } from "./Match";

export interface MatchesListProps {
  matches: MatchState[];
}

export const MatchesList = (props: MatchesListProps) => {

  const imagePlaceholder = "imagePlaceholder";

  const matches = props.matches.map((match, id) => (
      <Match
        key={id}
        chatStatusIcon={imagePlaceholder}
        matchIsStarred={match.matchIsStarred}
        matchName={match.firstName}
        matchPicture={imagePlaceholder}
      />
    ),
  );

  return (
    <div>
      <h1>Matches</h1>
      {matches}
    </div>
  );
};
