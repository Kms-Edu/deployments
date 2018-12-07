import { NavBar, Icon, WingBlank } from 'antd-mobile'
import { withRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'
export default withRouter(({ router, children, title, description }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="Description" content={description} />
    </Head>
    <NavBar
      mode='light'
      icon={<Icon type='left' />}
      onLeftClick={() => router.back()}
    >
      Ant Design Mobile example
    </NavBar>
    <h1>{title}</h1>
    <style jsx>{`
      h1 {
        padding: 15px 0 9px 15px;
        color: #000;
        font-size: 16px;
        line-height: 16px;
        height: 16px;
        font-weight: bolder;
        position: relative;
      }
    `}</style>
    <WingBlank>
      {children}
    </WingBlank>
  </div>
))