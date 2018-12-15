import Layout from '../components/layout'
import { Button } from 'antd-mobile'
import Link from '../components/link'

export default () => (
  <Layout title='Index'>
    <Link href='/m/about'>
      <Button>Go to About</Button>
    </Link>
  </Layout>
)
