//#region Imports
import React from "react";

//#endregion

//#region Styles
import "../styles/card.css"

//#endregion


    export default function PdfCard(prop) {
      const {  Card, Avatar  } = antd;
      const {  EditOutlined, EllipsisOutlined, SettingOutlined  } = icons;

      const { Meta } = Card;

      //#region HTML code
      return (
        <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
      </Card>,
      mountNode)}
      
      //#endregion
