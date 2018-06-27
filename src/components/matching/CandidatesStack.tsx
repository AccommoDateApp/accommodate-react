import { Button, Col, Row } from "antd";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  acceptPotentialMatchWithEmail,
  rejectPotentialMatchWithEmail,
} from "../../actions/matchingActions";
import { AccommoDateState } from "../../state";
import { UserMatches } from "../../state/match";
import { CardComponent } from "../card/Card";

import { ProfileProps } from "../../state/profile";

interface CandidatesStackProps extends UserMatches {
  acceptPotentialMatchWithEmail: typeof acceptPotentialMatchWithEmail;
  rejectPotentialMatchWithEmail: typeof rejectPotentialMatchWithEmail;
}

const CandidatesStackComponent = (props: CandidatesStackProps) => {

  const matchingButtons = renderMatchingButtons(props);
  const potentialMatch = renderPotentialMatch(props.potentialMatches);

  return (
    <Row>
      <Col>
        <h1>Potential Matches</h1>
        {potentialMatch}
        {matchingButtons}
      </Col>
    </Row>
  );
};

const renderMatchingButtons = (props: CandidatesStackProps) : JSX.Element => {
  const noMatchesLeft = props.potentialMatches.length <= 0;
  if (noMatchesLeft) {
    return <div />;
  }
  const acceptMatchButton = renderAcceptMatchButton(props);
  const rejectMatchButton = renderRejectMatchButton(props);
  return (
    <Row type="flex" justify="center">
      <Col>{acceptMatchButton}</Col>
      <Col>{rejectMatchButton}</Col>
    </Row>
  );
};

const renderAcceptMatchButton = (props: CandidatesStackProps) : JSX.Element => {
  const matchEmailAddress = props.potentialMatches[0].bio.email;
  const handleMatchAccepted = () => (
    props.acceptPotentialMatchWithEmail(matchEmailAddress)
  );
  return (
    <Button size="large" type="primary" onClick={handleMatchAccepted}>
      Yes!
    </Button>
  );
};

const renderRejectMatchButton = (props: CandidatesStackProps) : JSX.Element => {
  const matchEmailAddress = props.potentialMatches[0].bio.email;
  const handleMatchRejected = () => (
    props.rejectPotentialMatchWithEmail(matchEmailAddress)
  );
  return (
    <Button size="large" type="danger" onClick={handleMatchRejected}>
      Nay!
    </Button>
  );
};

const renderPotentialMatch = (potentialMatches: ProfileProps[]) : JSX.Element => {
  const noMatchesLeft = potentialMatches.length <= 0;
  if (noMatchesLeft) {
    return <h3>No one else around you</h3>;
  } else {
    return <CardComponent {...potentialMatches[0]} />;
  }
};

const mapStateToProps = (state: AccommoDateState) : UserMatches => state.userMatches;

const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators({
    acceptPotentialMatchWithEmail,
    rejectPotentialMatchWithEmail,
  }, dispatch)
);

export const CandidatesStack = connect(mapStateToProps, mapDispatchToProps)(CandidatesStackComponent);
