import dynamic from 'next/dynamic'
import Head from 'next/head'
import Layout from '../components/layout'
import ListView from '../components/list-view'
import Drawer from '../components/drawer'
const TabBar = dynamic(import('../components/tab-bar'), {
  ssr: false
})
/*const Layout = dynamic(import('../components/layout'))

/*const ListView = dynamic(import('../components/list-view'))
const Drawer = dynamic(import('../components/drawer'))
*/
export default () => (
  <Layout 
    drawer={<Drawer title={'Testing'} />}
    title={'Testing'}
  >
    <Head>
      <meta name="Description" content="Put your description here." />
    </Head>
    <TabBar
      life={<ListView />}
      koubei={<div>Koubei</div>}
      friend={<div>Friend</div>}
      my={<div>My</div>}
      />
  </Layout>
)
