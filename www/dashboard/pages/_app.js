import withReduxStore from '../lib/with-redux-store'
import withApolloClient from '../lib/with-apollo-client'
import withApp from '../lib/with-app'
import withMobileDetect from '../lib/with-mobile-detect'
import AppContainer from '../containers/app'
import '../assets/styles.less'

import {compose} from 'recompose'
export default compose(
  withMobileDetect,
  withReduxStore,
  withApolloClient,
  withApp,
)(AppContainer)
