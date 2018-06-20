import { Button, Card } from "antd";
import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { purchasePowerUp } from "../../actions/storeActions";
import { AccommoDateState } from "../../state";
import { PowerUp } from "../../state/store";
import "./StoreItem.scss";

interface StoreItemProps {
  powerup: PowerUp;
  isPurchasingThisItem: boolean;
  isPurchasing: boolean;
  purchasePowerUp: any;
}

export const StoreItemComponent = (props: StoreItemProps) => {
  const icon = (
    <img src={props.powerup.iconUrl} />
  );

  const description = props.powerup.description.split("\n").map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  const quantity = props.powerup.quantity === 1 ? "it" : props.powerup.quantity;
  const price = props.powerup.price === 0 ? "free" : `$ ${props.powerup.price}`;
  const purchaseButtonText = `Get ${quantity} for ${price}`;

  return (
    <div className="purchase-item">
      <Card cover={icon}>
        <h2>{props.powerup.name}</h2>
        {description}

        <br />

        <Button
          className="fluid"
          type="primary"
          disabled={props.isPurchasing}
          loading={props.isPurchasingThisItem}
          onClick={() => props.purchasePowerUp(props.powerup)}
        >
          {purchaseButtonText}
        </Button>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: AccommoDateState, ownProps: StoreItemProps) => ({
  ...ownProps,
  isPurchasing: !!state.store.activePowerUpPurchase,
  isPurchasingThisItem: state.store.activePowerUpPurchase === ownProps.powerup,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    purchasePowerUp,
  }, dispatch);
};

export const StoreItem = connect(mapStateToProps, mapDispatchToProps)(StoreItemComponent) as any;
