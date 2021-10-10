import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import {
  HomeOutlined,
  FileWordOutlined,
  QuestionOutlined,
  UserOutlined,
  MailFilled,
  ApartmentOutlined,
} from "@ant-design/icons";

import logo from "../images/GF_LOGO.png";
import logoMini from "../images/GF_LOGO_MINI.png";

import {navtext} from '../components/objectText/navbarText';
import changeLanguage from './languageComponent';

var image = logo;
var windowWidth = window.innerWidth;

const { Sider } = Layout;
const { SubMenu } = Menu;

var text = "";
var number = 0;


export default class Navbar extends Component {
  state = {
    collapsed: false,
  };

  checkWindowSize(){
    const {col} =  this.state;
    if(windowWidth < 576){
      this.setState({col});
      image = logoMini;
    }
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
    if(collapsed ? image = logoMini : image = logo);
  };

  raiseNumber(){
    number++;
  }

  resetNumber(){
    number = 0;
  }

  render() {
  if(changeLanguage() ? text = navtext.navText_EN : text = navtext.navText_DK);
    const { collapsed } = this.state;
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} breakpoint="sm">
        <div className="logo">
          <Link to="/">
          <img
            src={image}
            alt="GF Trekroner Syd logo"
            className="logoImage"
          />
          </Link>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">{text[number].text}</Link>
          </Menu.Item>
          {this.raiseNumber()}
          <Menu.Item key="2" icon={<QuestionOutlined />}>
            <Link to="/GF">{text[number].text}</Link>
          </Menu.Item>
          {this.raiseNumber()}
          <SubMenu key="sub1" icon={<FileWordOutlined />} title={text[number].text}>
          {this.raiseNumber()}
            <Menu.Item key="3">
              <Link to="/dokumenter">{text[number].text}</Link>
            </Menu.Item>
          {this.raiseNumber()}
            <Menu.Item key="4">
              <Link to="/doc/parkering">{text[number].text}</Link>
            </Menu.Item>

          {this.raiseNumber()}
            <Menu.Item key="5">
              <Link to="/doc/reglement">{text[number].text}</Link>
            </Menu.Item>

          {this.raiseNumber()}
            <Menu.Item key="6">
              <Link to="/doc/plejebeskrivelse">{text[number].text}</Link>
            </Menu.Item>

          {this.raiseNumber()}
            <Menu.Item key="7">
              <Link to="/doc/resume">{text[number].text}</Link>
            </Menu.Item>

          {this.raiseNumber()}
            <Menu.Item key="8">
              <Link to="/doc/vedtægter">{text[number].text}</Link>
            </Menu.Item>

          {this.raiseNumber()}
            <Menu.Item key="9">
              <Link to="/doc/budget">{text[number].text}</Link>
            </Menu.Item>

          {this.raiseNumber()}
            <Menu.Item key="10">
              <Link to="/doc/udbudsmateriale">{text[number].text}</Link>
            </Menu.Item>
          </SubMenu>
          {this.raiseNumber()}
          <Menu.Item key="11" icon={<UserOutlined />}>
            <Link to="/bestyrelsen">{text[number].text}</Link>
          </Menu.Item>
          {this.raiseNumber()}
          <Menu.Item key="12" icon={<MailFilled />}>
            <Link to="/kontakt">{text[number].text}</Link>
          </Menu.Item>
          {this.raiseNumber()}
          <Menu.Item key="13" icon={<ApartmentOutlined />}>
            <Link to="/ejerforeningerne">{text[number].text}</Link>
          </Menu.Item>

          {/* TEST FOR ADMIN */}
          {/* {this.raiseNumber()}
          <Menu.Item key="14" icon={<ApartmentOutlined />}>
            <Link to="/create">{text[number].text}</Link>
          </Menu.Item>
          {this.raiseNumber()}
          <Menu.Item key="15" icon={<ApartmentOutlined />}>
            <Link to="/adminnewsfeed">{text[number].text}</Link>
          </Menu.Item> */}
          {this.raiseNumber()}
          <Menu.Item key="16" icon={<UserOutlined/>}>
            <Link to="/FAQ">{text[number].text}</Link>
          </Menu.Item>
          {this.raiseNumber()}
          <Menu.Item key="17" icon={<UserOutlined/>}>
            <Link to="/admin">{text[number].text}</Link>
          </Menu.Item>
          {this.resetNumber()}
        </Menu>
      </Sider>
    );
  }
}
