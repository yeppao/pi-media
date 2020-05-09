import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './app.css';

import { Layout } from 'antd';

import AppRouter from './router/AppRouter';
import { AppHeader, AppBreadcrumb, AppFooter} from './components/layout';

const { Content } = Layout;

export default class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <AppHeader />
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <AppBreadcrumb />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <AppRouter />    
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </Router>
    );
  }
}
