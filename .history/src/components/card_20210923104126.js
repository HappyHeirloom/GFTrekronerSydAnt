//#region Imports
import React from "react";
import Link from "react-router"

//#endregion

//#region Styles

//#endregion

export default function PdfCard(prop) {
  //#region HTML code


  const {Card} = antd;

  const { Meta } = Card;
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Poppellunden" description="www.instagram.com" />
    <Link to="/"></Link>
  </Card>
  )
  //#endregion
}
