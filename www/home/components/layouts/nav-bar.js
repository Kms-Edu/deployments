import React, { Component, Fragment } from 'react';
import LeftMenu from './left-menu'
import RightMenu from './right-menu'
import { Drawer, Button } from 'antd';
import Head from 'next/head'
import styled from 'styled-components/macro'
import './nav-bar.css'
const Logo = styled.img`
  width: 40px;
  height: 25px;
  margin-top: -5px;
`
class Navbar extends Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };
render() {
  const {title, description, children} = this.props
    return (
      <Fragment>
        <nav className="menuBar">
        <Head>
        <title>{title}</title>
        <meta name="Description" content={description} />        
      </Head>
          <div className="logo">
            <a href="/"><Logo src="/static/logo.png" /></a>
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <div className="rightMenu">
                <RightMenu />
            </div>
            <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
              <span className="barsBtn"></span>
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <LeftMenu />
              <RightMenu />
              
            </Drawer>
            
</div>

        </nav>
        {children}
        </Fragment>
    );
  }
}
export default Navbar;
