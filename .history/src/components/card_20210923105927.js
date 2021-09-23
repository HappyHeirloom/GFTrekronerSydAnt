//#region Imports
import React from "react";
import { Link } from 'react-router-dom';
import { Card} from 'antd';

//#endregion

//#region Styles

//#endregion

export default function Card(prop) {
  //#region HTML code

 
  const { Meta } = Card;
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://w7.pngwing.com/pngs/726/537/png-transparent-x-mark-computer-icons-check-mark-x-mark.png" />}
  >
    <Meta title="" description="" />
  </Card>
  )
  //#endregion
}
