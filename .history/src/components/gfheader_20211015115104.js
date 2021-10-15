import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import getCurrentSite from "./languageComponent";
import changeLanguage from "./languageComponent";

import '../styles/gfheader.css';

var site = getCurrentSite();

function Gfheader() {
  var lang = "";
  var [disabledDK, changeDisDK] = useState(true);
  var [disabledEN, changeDisEN] = useState(false);
  
  if(changeLanguage() ? lang = "Language: EN" : lang = "Sprog: DK");

  function handleMenuClick(e) {
    // message.info('Click on menu item.');
    changeLanguage(true);
    checkLanguage();
  }
  function checkLanguage(){
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
          English
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
        <Row>
           <Col xl={16} md={20} sm={12} xs={16}>
            <h1 className="gfHeader" id="">GF Trekroner Syd</h1>
          </Col>
      
            <Col xl={8} md={4} sm={12} xs={8}>
                <Dropdown className="langbutton" overlay={menu}>
                  <Button>
                   {lang} <DownOutlined />
                   </Button>
                    </Dropdown>
             </Col>
        </Row>
    
  );
}

export default Gfheader;
