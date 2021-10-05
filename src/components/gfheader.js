import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import getCurrentSite from "./languageComponent";
import changeLanguage from "./languageComponent";

var site = getCurrentSite();

function Gfheader() {
  
  var [disabledDK, changeDisDK] = useState(true);
  var [disabledEN, changeDisEN] = useState(false);
  
  function handleMenuClick(e) {
    // message.info('Click on menu item.');
    changeLanguage(true);
    checkLanguage();
  }
  function checkLanguage(){
    console.log("changed");
    if(disabledEN ? changeDisDK(disabledDK = true) : changeDisDK(disabledDK = false));
    if(disabledDK ? changeDisEN(disabledEN = false) : changeDisEN(disabledEN = true));
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />} disabled={disabledDK}>
        <Link to={site}>
          Dansk
        </Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />} disabled={disabledEN}>
        <Link to={site}>
          Engelsk
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
        <Row gutter={[16, 16]}>
          <Col span={20}>
            <h1 style={{fontSize: 30}}>GF Trekroner Syd</h1>
          </Col>
          <Col span={4}>
            <Dropdown overlay={menu}>
              <Button>
                Sprog <DownOutlined />
              </Button>
            </Dropdown>
          </Col>
        </Row>

  );
}

export default Gfheader;
