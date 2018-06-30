import { Button, Col, Row } from "antd";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { createMatch, rejectMatch } from "../../actions/matchingActions";
import {
  Biography,
  LandlordBiography,
  RealEstate,
  TenantBiography,
  UserMode,
} from "../../state/biography";
import { Matchable, MatchedPair } from "../../state/match";

interface MatchingButtonsProps {
  createMatch: typeof createMatch;
  rejectMatch: typeof rejectMatch;
  potentialMatch: Matchable;
  loggedUserBiography: Biography;
}

const MatchingButtonsComponent = (props: MatchingButtonsProps) : JSX.Element => {
  const matchedPair = createMatchedPair(
    props.potentialMatch, props.loggedUserBiography);
  const handleMatchAccepted = () => (props.createMatch(matchedPair));
  const handleMatchRejected = () => (props.rejectMatch(matchedPair));

  const acceptMatchButton = (
    <Button size="large" type="primary" onClick={handleMatchAccepted}>
      Yes!
    </Button>
  );
  const rejectMatchButton = (
    <Button size="large" type="danger" onClick={handleMatchRejected}>
      Nay!
    </Button>
  );

  return (
    <Row type="flex" justify="center">
      <Col>{acceptMatchButton}</Col>
      <Col>{rejectMatchButton}</Col>
    </Row>
  );
};

const createMatchedPair = (potentialMatch: Matchable,
                           loggedUserBiography: Biography) : MatchedPair => {
  const userIsATenant = loggedUserBiography.userMode === UserMode.Tenant;
  let matchedPair: MatchedPair;
  if (userIsATenant) {
    matchedPair = {
      realEstate: (potentialMatch as RealEstate),
      tenant: (loggedUserBiography as TenantBiography),
    };
  } else {
    matchedPair = {
      // TODO: not always does the landlord swipe using his first realEstate
      realEstate: (loggedUserBiography as LandlordBiography).realEstates[0],
      tenant: (potentialMatch as TenantBiography),
    };
  }
  return matchedPair;
};

const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators({
    createMatch,
    rejectMatch,
  }, dispatch)
);

export const MatchingButtons = connect(
  undefined, mapDispatchToProps)(MatchingButtonsComponent);
