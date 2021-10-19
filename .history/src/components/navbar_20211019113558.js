import React, { useState} from "react";
import { Layout, Menu} from "antd";
import { Link,  useLocation} from "react-router-dom";
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
  var location = useLocation();

  console.log(location.pathname)

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
      <Menu  theme="dark" defaultSelectedKeys={location.pathname} mode="inline" id="testingText">
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <Link to="/">{text[number].text}</Link>
        </Menu.Item>
        {raiseNumber()}
        <Menu.Item key="/GF" icon={<QuestionOutlined />}>
          <Link to="/GF">{text[number].text}</Link>
        </Menu.Item>
        {raiseNumber()}
        <Menu.Item key="/ejerforeningerne" icon={<ApartmentOutlined />}>
          <Link to="/ejerforeningerne">{text[number].text}</Link>
        </Menu.Item>
        {raiseNumber()}
        <Menu.Item key="/bestyrelsen" icon={<UserOutlined />}>
          <Link to="/bestyrelsen">{text[number].text}</Link>
        </Menu.Item>
        {raiseNumber()}
        <SubMenu key="sub1" icon={<FileWordOutlined />} title={text[number].text}>
        {raiseNumber()}
          <Menu.Item key="/dokumenter">
            <Link to="/dokumenter">{text[number].text}</Link>
          </Menu.Item>
        {raiseNumber()}
          <Menu.Item key="/doc/parkering">
            <Link to="/doc/parkering">{text[number].text}</Link>
          </Menu.Item>

        {raiseNumber()}
          <Menu.Item key="/doc/reglement">
            <Link to="/doc/reglement">{text[number].text}</Link>
          </Menu.Item>

        {raiseNumber()}
          <Menu.Item key="/doc/plejebeskrivelse">
            <Link to="/doc/plejebeskrivelse">{text[number].text}</Link>
          </Menu.Item>

        {raiseNumber()}
          <Menu.Item key="/doc/resume">
            <Link to="/doc/resume">{text[number].text}</Link>
          </Menu.Item>

        {raiseNumber()}
          <Menu.Item key="/doc/vedtægter">
            <Link to="/doc/vedtægter">{text[number].text}</Link>
          </Menu.Item>

        {raiseNumber()}
          <Menu.Item key="/doc/budget">
            <Link to="/doc/budget">{text[number].text}</Link>
          </Menu.Item>

        {raiseNumber()}
          <Menu.Item key="/doc/udbudsmateriale">
            <Link to="/doc/udbudsmateriale">{text[number].text}</Link>
          </Menu.Item>
        </SubMenu>
        {raiseNumber()}
        <Menu.Item key="/Calender" icon={<ContactsOutlined />}>
          <Link to="/Calender">Kalender</Link>
        </Menu.Item>
        {/* {raiseNumber()} */}
        <Menu.Item key="/kontakt" icon={<MailFilled />}>
          <Link to="/kontakt">{text[number].text}</Link>
        </Menu.Item>
        {raiseNumber()}
        <Menu.Item key="/FAQ" icon={<SolutionOutlined />}>
          <Link to="/FAQ">{text[number].text}</Link>
        </Menu.Item>
        {raiseNumber()}
        <Menu.Item key="/privacy" icon={<DatabaseOutlined />}>
          <Link to="/privacy">{text[number].text}</Link>
        </Menu.Item>        
        {raiseNumber()}
        <Menu.Item key="/admin"" icon={<LoginOutlined />}>
          <Link to="/admin">{text[number].text}</Link>
        </Menu.Item>
        {resetNumber()}
      </Menu>
    </Sider>
  );
}

export default Navbar;
