import App, { Container } from 'next/app'
const withApp = AppContainer =>
  class extends App {
    static async getInitialProps (props) {
      const { Component, router, ctx, } = props
  
/*
      const { req } = ctx
      if (req) {
        console.log(`m.${req.headers.host}`)
      }      
*/    
/*
      if (req) {
        const MobileDetect = require('mobile-detect')
        const md = new MobileDetect(req.headers['user-agent']);
        const isMobile = md.mobile()   
        if (isMobile) {
          res.writeHead(302, {
            Location: 'http://example.com'
          })
        } 
      } 
*/
      let pageProps = {}
     
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
    
      return { pageProps, router}
    }

    
    render () {          
      return (
        <Container>
          <AppContainer {...this.props} />
        </Container>
      )
    }
  }
  

export default withApp