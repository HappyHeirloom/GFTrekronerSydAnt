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
  MoreOutlined,
} from "@ant-design/icons";

import logo from "../images/GF_LOGO.png";
import logoMini from "../images/GF_LOGO_MINI.png";

var image = logo;
var windowWidth = window.innerWidth;

const { Sider } = Layout;
const { SubMenu } = Menu;

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
  render() {
    const { collapsed } = this.state;
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} breakpoint="sm">
        <div className="logo">
          <img
            src={image}
            alt="GF Trekroner Syd logo"
            className="logoImage"
          />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Forside</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<QuestionOutlined />}>
            <Link to="/GF">Om grundejerforeningen</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<FileWordOutlined />} title="Dokumenter">
            <Menu.Item key="3">
              <Link to="/dokumenter">Alle dokumenter</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/doc/parkering">Parkering</Link>
            </Menu.Item>

            <Menu.Item key="5">
              <Link to="/doc/reglement">Reglement</Link>
            </Menu.Item>

            <Menu.Item key="6">
              <Link to="/doc/plejebeskrivelse">Plejebeskrivelse</Link>
            </Menu.Item>

            <Menu.Item key="7">
              <Link to="/doc/resume">Resumé</Link>
            </Menu.Item>

            <Menu.Item key="8">
              <Link to="/doc/vedtægter">Vedtægter</Link>
            </Menu.Item>

            <Menu.Item key="9">
              <Link to="/doc/budget">Budget</Link>
            </Menu.Item>

            <Menu.Item key="10">
              <Link to="/doc/udbudsmateriale">Udbudsmateriale</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="11" icon={<UserOutlined />}>
            <Link to="/bestyrelsen">Bestyrelsen</Link>
          </Menu.Item>
          <Menu.Item key="12" icon={<MailFilled />}>
            <Link to="/kontakt">Kontakt os</Link>
          </Menu.Item>
          <Menu.Item key="13" icon={<MoreOutlined />}>
            <Link to="/ejerforeningerne">Ejerforeningerne</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
