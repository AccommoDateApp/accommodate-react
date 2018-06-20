import { Col, Row } from "antd";
import * as React from "react";
import {RealEstateType} from "../../state/profile";

interface RealEstateProps {
  realEstate: RealEstateType[];
}

export function RealEstateComponent(props: RealEstateProps) : JSX.Element {
  const distArr: RealEstateType[][] = distProjects(props.realEstate);
  return (
    <Row>
      <Col span={24}>
      {distArr.map((arr: RealEstateType[], index: number) => (<Row gutter={24} key={index}>{arr.map((item: RealEstateType, indx) => (<Col span={8} key={indx}>{item.name}</Col>))}</Row>))}
      </Col>
    </Row>
  );
}

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
