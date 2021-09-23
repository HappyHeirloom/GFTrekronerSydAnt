//#region Imports
import React from "react";
import { Link } from 'react-router-dom';
import { Card} from 'antd';

//#endregion

//#region Styles

//#endregion

export default function PdfCard(prop) {
  //#region HTML code

  function handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  };

  const { Meta } = Card;
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Poppellunden" description="www.instagram.com" />
  </Card>
  )
  //#endregion
}
