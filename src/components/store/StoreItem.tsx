import { Button, Card, Col, Dropdown, Icon, Menu, Row } from "antd";
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
  purchasePowerUp: typeof purchasePowerUp;
}

const getPriceText = (price: number, quantity: number) => {
  price *= quantity;

  const priceText = price === 0 ? "free" : `$ ${price}`;
  const quantityText = quantity <= 1 ? "it" : `${quantity}`;

  return `Get ${quantityText} for ${priceText}`;
};

export const StoreItemComponent = (props: StoreItemProps) => {
  const { powerup } = props;
  const icon = (
    <img src={powerup.iconUrl} />
  );

  const description = powerup.description.split("\n").map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  let purchaseButton = (
    <Button
      className="fluid"
      type="primary"
      disabled={props.isPurchasing}
      loading={props.isPurchasingThisItem}
      onClick={() => props.purchasePowerUp(powerup.id, 1)}
    >
      {getPriceText(powerup.price, 1)}
    </Button>
  );

  if (powerup.quantities && powerup.quantities.length > 1) {
    const quantitiesToRender = powerup.quantities.slice(1);
    const menuItems = quantitiesToRender.map((quantity, index) => (
      <Menu.Item key={index} onClick={() => props.purchasePowerUp(powerup.id, quantity)}>
        {getPriceText(powerup.price, quantity)}
      </Menu.Item>
    ));

    const quantityMenu = (
      <Menu>
        {menuItems}
      </Menu>
    );

    const quantitiesMenu = (
      <Dropdown overlay={quantityMenu} disabled={props.isPurchasing}>
        <Button type="primary">
          Get more <Icon type="down" />
        </Button>
      </Dropdown>
    );

    purchaseButton = (
      <Row>
        <Col span={13}>
          {purchaseButton}
        </Col>

        <Col span={10} push={1}>
          {quantitiesMenu}
        </Col>
      </Row>
    );
  }

  return (
    <div className="purchase-item">
      <Card cover={icon}>
        <h2>{powerup.name}</h2>
        {description}

        <br />

        {purchaseButton}
      </Card>
    </div>
  );
};

const mapStateToProps = (state: AccommoDateState, ownProps: StoreItemProps) => ({
  ...ownProps,
  isPurchasing: !!state.store.activePowerUpPurchase,
  isPurchasingThisItem: state.store.activePowerUpPurchase === ownProps.powerup.id,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    purchasePowerUp,
  }, dispatch);
};

export const StoreItem = connect(mapStateToProps, mapDispatchToProps)(StoreItemComponent) as any;
