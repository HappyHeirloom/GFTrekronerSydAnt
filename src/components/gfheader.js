import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import getCurrentSite from "./languageComponent";
import changeLanguage from "./languageComponent";

import '../styles/gfheader.css';

var site = getCurrentSite();

function Gfheader() {
  var lang = "";
  var [disabledDK, changeDisDK] = useState(true);
  var [disabledEN, changeDisEN] = useState(false);
  var [displayDK, changeDisplayDK] = useState("none");
  var [displayEN, changeDisplayEN] = useState("block");
  var danish = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/2560px-Flag_of_Denmark.svg.png"
  var english = "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"

  if(changeLanguage() ? lang = english : lang = danish);

  function handleMenuClick(e) {
    // message.info('Click on menu item.');
    changeLanguage(true);
    checkLanguage();
  }
  function checkLanguage(){
    //DISABLED
    if(disabledEN ? changeDisDK(disabledDK = true) : changeDisDK(disabledDK = false));
    if(disabledDK ? changeDisEN(disabledEN = false) : changeDisEN(disabledEN = true));

    //DISPLAY
    if(disabledEN ? changeDisplayDK(displayDK = "block") : changeDisplayDK(displayDK = "none"));
    if(disabledDK ? changeDisplayEN(displayEN = "block") : changeDisplayEN(displayEN = "none"));
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" disabled={disabledDK} style={{display: displayDK}}>
        <Link to={site}>
          <img src={danish} alt="Dansk" style={{height: 38, width: 76}}/>
        </Link>
      </Menu.Item>
      <Menu.Item key="2" disabled={disabledEN} style={{display: displayEN}}>
        <Link to={site}>
          <img src={english} alt="English" style={{height: 38, width: 76}}/>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
        <Row gutter={48}>
          <Col xl={5} md={6} sm={0} xs={0}/>
           <Col xl={14} md={12} sm={20} xs={18}>
            <h1 className="gfHeader">GF Trekroner Syd</h1>
          </Col>
          <Col xl={5} md={6} sm={4} xs={6}>
              <Dropdown className="langbutton" overlay={menu}>
                <Button>
                  <img src={lang} className="flag" alt="Vælg sprog"/>
                </Button>
              </Dropdown>
            </Col>
      
        </Row>
    
  );
}

export default Gfheader;
