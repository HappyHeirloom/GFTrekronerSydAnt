import React, { useState } from "react";
import { Layout, Menu} from "antd";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import {
  HomeOutlined,
  FileWordOutlined,
  QuestionOutlined,
  UserOutlined,
  MailFilled,
  ApartmentOutlined,
  LoginOutlined,
  ContactsOutlined,
  DatabaseOutlined,
  SolutionOutlined
} from "@ant-design/icons";

import logo from "../images/GF_LOGO.png";
import logoMini from "../images/GF_LOGO_MINI.png";

import {navtext} from '../objectText/navbarText';
import changeLanguage from './languageComponent';

var image = logo;
// var windowWidth = window.innerWidth;

const { Sider } = Layout;
const { SubMenu } = Menu;

var text = "";
var number = 0;


function Navbar() {
  var [collap, collapChange] = useState(false);
  const { collapsed } = collap;


  // if(changeLanguage() ? text = navtext.navText_EN : text = navtext.navText_DK);

  // function checkWindowSize(){
  //   const {col} =  collap;
  //   if(windowWidth < 576){
  //     collapChange(collap = ({col}));
  //     image = logoMini;
  //   }
  // }

  function onCollapse (collapsed) {
    collapChange(collap = ({ collapsed }));
    if(collapsed ? image = logoMini : image = logo);
  };

  function raiseNumber(){
    number++;
  }

  function resetNumber(){
    number = 0;
  }


  if(changeLanguage() ? text = navtext.navText_EN : text = navtext.navText_DK);
  const location = useLocation();
  
  return (
  
    
    <Sider style={{
        
        height: '100vh',
        position: 'sticky',
        top: 0,
      }} id="" collapsible collapsed={collapsed} onCollapse={onCollapse} breakpoint="sm">

      
      <div className="logo">
        <Link to="/">
        <img
          src={image}
          alt="GF Trekroner Syd logo"
          className="logoImage"
        />
        </Link>
      </div>
      <Menu  theme="dark" defaultSelectedKeys={[this.props.location.pathname]} mode="inline" id="testingText">
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <Link to="/">{text[number].text}</Link>
        </Menu.Item>
        {raiseNumber()}
        <Menu.Item key="/GF" icon={<QuestionOutlined />}>
          <Link to="/GF">{text[number].text}</Link>
        </Menu.Item>
        {raiseNumber()}
        <Menu.Item key="" icon={<ApartmentOutlined />}>
          <Link to="/ejerforeningerne">{text[number].text}</Link>
        </Menu.Item>
        {raiseNumber()}
        <Menu.Item key="" icon={<UserOutlined />}>
          <Link to="/bestyrelsen">{text[number].text}</Link>
        </Menu.Item>
        {raiseNumber()}
        <SubMenu key="sub1" icon={<FileWordOutlined />} title={text[number].text}>
        {raiseNumber()}
          <Menu.Item key="">
            <Link to="/dokumenter">{text[number].text}</Link>
          </Menu.Item>
        {raiseNumber()}
          <Menu.Item key="">
            <Link to="/doc/parkering">{text[number].text}</Link>
          </Menu.Item>

        {raiseNumber()}
          <Menu.Item key="">
            <Link to="/doc/reglement">{text[number].text}</Link>
          </Menu.Item>

        {raiseNumber()}
          <Menu.Item key="">
            <Link to="/doc/plejebeskrivelse">{text[number].text}</Link>
          </Menu.Item>

        {raiseNumber()}
          <Menu.Item key="">
            <Link to="/doc/resume">{text[number].text}</Link>
          </Menu.Item>

        {raiseNumber()}
          <Menu.Item key="">
            <Link to="/doc/vedtægter">{text[number].text}</Link>
          </Menu.Item>

        {raiseNumber()}
          <Menu.Item key="">
            <Link to="/doc/budget">{text[number].text}</Link>
          </Menu.Item>

        {raiseNumber()}
          <Menu.Item key="">
            <Link to="/doc/udbudsmateriale">{text[number].text}</Link>
          </Menu.Item>
        </SubMenu>
        {raiseNumber()}
        <Menu.Item key="" icon={<ContactsOutlined />}>
          <Link to="/Calender">Kalender</Link>
        </Menu.Item>
        {/* {raiseNumber()} */}
        <Menu.Item key="" icon={<MailFilled />}>
          <Link to="/kontakt">{text[number].text}</Link>
        </Menu.Item>
        {raiseNumber()}
        <Menu.Item key="" icon={<SolutionOutlined />}>
          <Link to="/FAQ">{text[number].text}</Link>
        </Menu.Item>
        {raiseNumber()}
        <Menu.Item key="" icon={<DatabaseOutlined />}>
          <Link to="/privacy">{text[number].text}</Link>
        </Menu.Item>        
        {raiseNumber()}
        <Menu.Item key="" icon={<LoginOutlined />}>
          <Link to="/admin">{text[number].text}</Link>
        </Menu.Item>
        {resetNumber()}
      </Menu>
    </Sider>
  );
}

export default Navbar;
