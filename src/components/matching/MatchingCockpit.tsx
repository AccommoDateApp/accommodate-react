import * as React from "react";
import { CandidatesStack } from "./CandidatesStack";
import { MatchProps } from "./Match";
import { MatchesList } from "./MatchesList";
import { Col, Row } from "antd";

interface MatchingCockpitState {
  matches: MatchProps[];
}

const MATCHES_PLACEHOLDER = {
  matches: Array(5).fill(
    {
      chatStatusIcon: "Chatty",
      matchIsStarred: true,
      matchName: "Tomas",
      matchPicture: "awesome",
    } as MatchProps,
  )
} as MatchingCockpitState;

export class MatchingCockpit extends React.PureComponent<any, MatchingCockpitState> {

  public state = MATCHES_PLACEHOLDER;

  public render() {
    return (
      <Row>
        <Col span={8}>
          <MatchesList matches={this.state.matches} />
        </Col>
        <Col span={16}>
          <CandidatesStack />
        </Col>
      </Row>
    );
  }
}
