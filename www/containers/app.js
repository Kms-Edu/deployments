import React from 'react'
import { ApolloProvider } from 'react-apollo'

const AppContainer = (props) => {
  const {Component, pageProps, router, apolloClient} = props
  
  return (
    <ApolloProvider client={apolloClient}>
      <Component key={router.route} {...pageProps} />
    </ApolloProvider>
  )
}
  
export default AppContainer
