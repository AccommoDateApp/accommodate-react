import { Col, Row } from "antd";
import * as React from "react";
import { ActualMatch } from "../../state/match";
import "./Match.scss";

export const Match = (actualMatch: ActualMatch) => (
  <Row className="match">
    <Col span={6}>{getPortrait()}</Col>
    <Col span={6}><h3>{actualMatch.name}</h3></Col>
    <Col span={6}>{getFavoriteIcon(actualMatch.matchIsFavorite)}</Col>
    <Col span={6}>{getChatIcon()}</Col>
  </Row>
);

const getFavoriteIcon = (isFavorite: boolean) => {
  const fileSuffix = isFavorite ? "on" : "off";
  const favoriteIcon = require(`../../images/favorite-star-${fileSuffix}.svg`);
  return (
    <div>
      Favorite:
      <img
        className="icon"
        onClick={console.log}
        src={favoriteIcon}
        alt="Favorite Icon"
      />
    </div>
  );
};

const getPortrait = () => (
  <img
    className="icon"
    src={require("../../images/portrait.png")}
    alt="Match Portrait"
  />
);

const getChatIcon = () => (
  <div>
    Chat:
    <img
      className="icon"
      src={require("../../images/chat-icon.png")}
      alt="Chat Icon"
    />
  </div>
);
