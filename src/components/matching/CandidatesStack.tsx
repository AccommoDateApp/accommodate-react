import { Button, Col, Row } from "antd";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  createMatch,
  rejectMatch,
} from "../../actions/matchingActions";
import { api } from "../../api/client";
import { AccommoDateState } from "../../state";
import {
  LandlordBio,
  RealEstate,
  TenantBiography,
  UserMode,
} from "../../state/biography";
import { Matchable, MatchedPair, UserMatches } from "../../state/match";

interface CandidatesStackProps extends UserMatches {
  createMatch: typeof createMatch;
  rejectMatch: typeof rejectMatch;
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

const getMatchedPair = async (props: CandidatesStackProps) : Promise<MatchedPair> => {
  const loggedUserBiography = await api.fetchBio();
  const potentialMatch = props.potentialMatches[0];
  const userIsATenant = loggedUserBiography.mode === UserMode.Tenant;

  let matchedPair: MatchedPair;
  if (userIsATenant) {
    matchedPair = {
      realEstate: (potentialMatch as RealEstate),
      tenant: (loggedUserBiography as TenantBiography),
    };
  } else {
    matchedPair = {
      // TODO: not always does the landlord swipe using his first realEstate
      realEstate: (loggedUserBiography as LandlordBio).realEstates[0],
      tenant: (potentialMatch as TenantBiography),
    };
  }
  console.log(`matchedPair. tenant: ${matchedPair.tenant.id}, realEstate: ${matchedPair.realEstate.id}`);
  console.log(`userIsAtenanst: ${userIsATenant}`);
  return matchedPair;
};

const renderAcceptMatchButton = (props: CandidatesStackProps) : JSX.Element => {
  const handleMatchAccepted = async () => (
    props.createMatch(await getMatchedPair(props))
  );
  return (
    <Button size="large" type="primary" onClick={handleMatchAccepted}>
      Yes!
    </Button>
  );
};

const renderRejectMatchButton = (props: CandidatesStackProps) : JSX.Element => {
  const handleMatchRejected = async () => (
    props.rejectMatch(await getMatchedPair(props))
  );
  return (
    <Button size="large" type="danger" onClick={handleMatchRejected}>
      Nay!
    </Button>
  );
};

const renderPotentialMatch = (potentialMatches: Matchable[]) : JSX.Element => {
  const noMatchesLeft = potentialMatches.length <= 0;
  if (noMatchesLeft) {
    return <h3>No one else around you</h3>;
  } else {
    return <div />;
  }
};

const mapStateToProps = (state: AccommoDateState) : UserMatches => (state.userMatches);

const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators({
    createMatch,
    rejectMatch,
  }, dispatch)
);

export const CandidatesStack = connect(mapStateToProps, mapDispatchToProps)(CandidatesStackComponent);
