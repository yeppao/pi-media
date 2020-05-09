
import React from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="header">
      <div className="logo">Pi Media</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Movies</Menu.Item>
      </Menu>
    </Header >
  );
}

export default withRouter(AppHeader);