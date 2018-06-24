import { Card, Col, Row } from "antd";
import * as React from "react";
import {RealEstateType} from "../../state/profile";

const {Meta} = Card;

interface RealEstateProps {
  realEstate: RealEstateType[];
}

export function RealEstateComponent(props: RealEstateProps) : JSX.Element {
  const distArr: RealEstateType[][] = distProjects(props.realEstate);
  return (
    <Row>
    <Col span={24}>
    {distArr.map((arr: RealEstateType[], index: number) => (<Row gutter={24} key={index}>{arr.map((item: RealEstateType, indx) => (<Col span={8} key={indx}><EstateThumbnail {...item} /></Col>))}</Row>))}
    </Col>
    </Row>
  );
}

function EstateThumbnail(props: RealEstateType) : JSX.Element {
  return (
    <Card onClick={() => {estateClickHandler(props); }} hoverable={true} style={{ width: 240 }} cover={<img alt={props.name} src={props.images.length ? props.images[0] : "#"} />}>
      <Meta title={props.name} description={props.address} />
    </Card>
  );
}

const estateClickHandler = (estateObj: RealEstateType) => {
  console.log("fuck this shit in a", estateObj.name);
};

function distProjects(projectArr: RealEstateType[]) {
  const gridArr: any = [];
  for (let i = 1, j = 0  ; i <= projectArr.length ; i++) {
    if (i % 3 === 0) {
      if (gridArr[j] === undefined) { gridArr[j] = []; }
      gridArr[j].push(projectArr[i - 1]);
      j++;
    } else {
      if (gridArr[j] === undefined) { gridArr[j] = []; }
      gridArr[j].push(projectArr[i - 1]);
    }
  }
  return gridArr;
}
