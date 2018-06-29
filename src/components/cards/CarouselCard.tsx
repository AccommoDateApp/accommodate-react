import { Card, Col, Row } from "antd";
import * as React from "react";
import "./CarouselCard.scss";

interface ImagesCardProps extends React.Props<any> {
  heading: string | JSX.Element;
  carousel: JSX.Element;
}

export const CarouselCard = (props: ImagesCardProps) => {
  return (
    <Card className="carousel-card">
      <Row type="flex">
        <Col span={12}>
          {props.carousel}
        </Col>

        <Col span={12}>
          <div className="content">
            <h2 className="heading">{props.heading}</h2>

            {props.children}
          </div>
        </Col>
      </Row>
    </Card>
  );
};
