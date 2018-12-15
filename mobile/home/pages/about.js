import Layout from '../components/layout'
import { Button } from 'antd-mobile'
import Link from '../components/link'

export default () => (
  <Layout title='About'>
    <Link href='/m'>
      <Button>Go to Index</Button>
    </Link>
  </Layout>
)
