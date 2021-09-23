import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    ShopOutlined,
    MailFilled,
  } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class Navbar extends Component {
    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
  render() {
    const { collapsed } = this.state;
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo">
              {/* TODO: only logo when collapsed */}
              <img src="https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2020/12/GF_LOGO.png" height="32px" width="150px" />  
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  <Link to="/">
                    Forside
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<FileOutlined />}>
                  <Link to="/GF">
                    Om grundejerforeningen
                  </Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<FileOutlined />} title="Dokumenter">

                  <Menu.Item key="3">
                    <Link to="/doc/parkering">
                      Parkering
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="4">
                    <Link to="/doc/reglement">
                      Reglement
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="5">
                    <Link to="/doc/plejebeskrivelse">
                      Plejebeskrivelse
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="6">
                    <Link to="/doc/resume">
                      Resumé
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="7"> 
                    <Link to="/doc/vedtægter"> 
                      Vedtægter
                    </Link> 
                  </Menu.Item>

                  <Menu.Item key="8">
                    <Link to="/doc/budget">
                      Budget
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="9">
                    <Link to="/doc/udbudsmateriale">
                      Udbudsmateriale
                    </Link>
                  </Menu.Item>

                </SubMenu>
                <Menu.Item key="10" icon={<FileOutlined />}>
                  <Link to="/bestyrelsen">
                    Bestyrelsen
                  </Link>
                </Menu.Item>
                <Menu.Item key="11" icon={<MailFilled />}>
                  <Link to="/kontakt">
                    Kontakt os
                  </Link>
                </Menu.Item>
                <Menu.Item key="12" icon={<ShopOutlined />}>
                  <Link to="/ejerforeningerne">
                    Ejerforeningerne
                  </Link>
                </Menu.Item>
            </Menu>
        </Sider>
          
    );
  }
}
