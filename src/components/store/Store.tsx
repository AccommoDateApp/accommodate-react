import { Alert, Col, Row } from "antd";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { fetchPowerUps, resetPurchase } from "../../actions/storeActions";
import { AccommoDateState } from "../../state";
import { PowerUp } from "../../state/store";
import { Spinner } from "../loading/Spinner";
import { StoreItem } from "./StoreItem";

interface PowerUpStoreProps {
  fetchPowerUps: typeof fetchPowerUps;
  isFetching: boolean;
  powerups: PowerUp[];

  purchaseSuccess?: boolean;
  resetPurchase: typeof resetPurchase;
}

class StoreComponent extends React.PureComponent<PowerUpStoreProps> {
  public componentWillMount() {
    this.props.fetchPowerUps();
  }

  public render() {
    if (this.props.isFetching || false) {
      return (
        <Spinner />
      );
    }

    return (
      <>
        {this.renderPurchaseAlert()}
        {this.renderStoreItems()}
      </>
    );
  }

  private renderPurchaseAlert() {
    if (this.props.purchaseSuccess !== undefined) {
      const alertType = this.props.purchaseSuccess ? "success" : "error";
      const alertMessage = this.props.purchaseSuccess
                            ? "You successfully added the PowerUp to your profile!"
                            : "There was an error getting the PowerUp. Please try again.";

      return (
        <>
          <Alert
            type={alertType}
            message={alertMessage}
            showIcon={true}
            closable={true}
            onClose={() => this.props.resetPurchase()}
          />

          <br />
        </>
      );
    }

    return null;
  }

  private renderStoreItems() {
    const items = this.props.powerups.map((powerup, index) => (
      <Col key={index} span={8}>
        <StoreItem powerup={powerup} />
      </Col>
    ));

    return (
      <>
        <h1>Store</h1>

        <Row gutter={56}>
          {items}
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state: AccommoDateState) => ({
  isFetching: state.store.isFetchingPowerUps,
  powerups: state.store.powerups,

  purchaseSuccess: state.store.purchaseSuccess,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchPowerUps,
    resetPurchase,
  }, dispatch);
};

export const Store = connect(mapStateToProps, mapDispatchToProps)(StoreComponent);
