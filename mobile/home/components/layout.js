import { NavBar, Icon, WingBlank } from 'antd-mobile'
import { withRouter } from 'next/router'
import Head from 'next/head'

export default withRouter(({ router, children, title, drawer }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <NavBar
      mode='light'
      icon={<Icon type='left' />}
      onLeftClick={() => router.back()}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >
      {drawer}
    </NavBar>
    <style jsx>{`
    html,body {
      box-sizing: border-box;
    }
    *, *:before, *:after { box-sizing: inherit; }
     
    /* Set full height: http://stackoverflow.com/questions/6654958/make-body-have-100-of-the-browser-height */
    html {
      /* body will set it's height based on its parent, which is html */
      height: 100%;
     
      /* set full width as well */
      width: 100%;
    }
    body {
      /* min-height is needed for pages that might scroll, ie they may contain _more_ than 100% of viewport height */
      min-height: 100%;
     
      /* needed to prevent unwanted scroll-bars */
      margin: 0;
      padding: 0;
      
      /* This is just so we can tell the body block apart from the app container */
      background-color: gray;
    }
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
