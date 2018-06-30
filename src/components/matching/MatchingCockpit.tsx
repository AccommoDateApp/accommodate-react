import { Col, Row } from "antd";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUserMatches } from "../../actions/matchingActions";
import { Spinner } from "../loading/Spinner";
import { CandidatesStack } from "./CandidatesStack";
import { MatchesList } from "./MatchesList";

import { AccommoDateState } from "../../state";

interface MatchingCockpitProps extends StateProps {
  fetchUserMatches: typeof fetchUserMatches;
}

interface StateProps {
  isFetchingUserMatches: boolean;
}

export class MatchingCockpitComponent extends React.PureComponent<MatchingCockpitProps> {
  public componentWillMount() {
    this.props.fetchUserMatches();
  }

  public render() {
    if (this.props.isFetchingUserMatches || false) {
      return <Spinner />;
    }

    return (
      <Row>
      <Col span={8}>
        <MatchesList />
      </Col>
      <Col span={12} push={4}>
        <CandidatesStack />
      </Col>
    </Row>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators({ fetchUserMatches }, dispatch)
);

const mapStateToProps = (state: AccommoDateState) : StateProps => ({
  isFetchingUserMatches: state.matchingState.isFetchingUserMatches,
});

export const MatchingCockpit = connect(mapStateToProps, mapDispatchToProps)(MatchingCockpitComponent);
