import withApolloClient from '../lib/with-apollo-client'
import withApp from '../lib/with-app'
import AppContainer from '../containers/app'
import {compose} from 'recompose'

export default compose(
  withApolloClient,
  withApp,
)(AppContainer)
