import { Col, Row } from "antd";
import * as React from "react";
import { ActualMatch } from "../../state/match";
import "./Match.scss";

export const Match = (actualMatch: ActualMatch) => (
  <Row className="match" style={{ height: "75px" }}>
    <Col className="col" span={6}>{getPortrait(actualMatch)}</Col>
    <Col className="col name" span={8}><h3>{actualMatch.name}</h3></Col>
    <Col className="col" span={5}>{getFavoriteIcon(actualMatch.matchIsFavorite)}</Col>
    <Col className="col" span={5}>{getChatIcon()}</Col>
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

const getPortrait = (actualMatch: ActualMatch) => {
  const matchImage = actualMatch.images[0];
  return (
    <img
      className="portrait"
      src={`${matchImage}`}
      alt="Match Portrait"
    />
  );
};

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
