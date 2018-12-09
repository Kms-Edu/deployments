import '../assets/styles.less'
import Query from '../containers/query'
import gql from 'graphql-tag'
import MeasureRender from '../containers/measure-render'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button,  Row, Col  } from 'antd'
import Header from '../components/header'
import {AccountCircle} from 'styled-icons/material/AccountCircle.cjs'

const FormItem = Form.Item
const Option = Select.Option

//const MeasureRender = dynamic(import('../containers/measure-render'), {ssr: false})
//const Layout = dynamic(import('../components/layout'))
//const ErrorMessage = dynamic(import('../components/error-message'))
//const Header = dynamic(import('../components/header'))

const testQuery = gql`
  query{
    sche_ages{
      id
      age_name
      from_month
      to_month
    }
  }
`

const testSubscription = gql`
  subscription {
    sche_ages{
      id
      age_name
      from_month
      to_month
    }
  }
`


const Age = ({sche_age: {id, age_name, from_month, to_month}}) => {
  return (
    <div>
      id: {id}
      name: {age_name}
      from month: {from_month}
      to month: {to_month}
    </div>
  )
}

const AgeList = ({sche_ages}) => {
  return sche_ages.map(item => {
    return <Age sche_age={item} key={item.id} />
  })
}



const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
const Page = () => (
  <MeasureRender name="IndexPage">
    <Layout
      title="Home"
      description="Home"
    >
      <Header />
      <Title>Home page</Title>
      <AccountCircle size={30} />
      <Query
        query={testQuery}
        subscription={testSubscription}>
        {data => <AgeList sche_ages={data.sche_ages} />
        }
      </Query>
        <div style={{ marginTop: 100 }}>
    <Form layout='horizontal'>
      <FormItem
        label='Input Number'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <InputNumber size='large' min={1} max={10} style={{ width: 100 }} defaultValue={3} name='inputNumber' />
        <a href='#'>Link</a>
      </FormItem>

      <FormItem
        label='Switch'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Switch defaultChecked name='switch' />
      </FormItem>

      <FormItem
        label='Slider'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Slider defaultValue={70} />
      </FormItem>

      <FormItem
        label='Select'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Select size='large' defaultValue='lucy' style={{ width: 192 }} name='select'>
          <Option value='jack'>jack</Option>
          <Option value='lucy'>lucy</Option>
          <Option value='disabled' disabled>disabled</Option>
          <Option value='yiminghe'>yiminghe</Option>
        </Select>
      </FormItem>

      <FormItem
        label='DatePicker'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <DatePicker name='startDate' />
      </FormItem>
      <FormItem
        style={{ marginTop: 48 }}
        wrapperCol={{ span: 8, offset: 8 }}
      >
        <Button size='large' type='primary' htmlType='submit'>
        OK
        </Button>
        <Button size='large' style={{ marginLeft: 8 }}>
        Cancel
        </Button>
      </FormItem>
    </Form>
  </div>
  <div>
  <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </div>
    </Layout>
  </MeasureRender>
)
Page.getInitialProps = async ({apolloClient, fetchPolicy}) => {
  await apolloClient.query({query: testQuery, ...fetchPolicy})
}
export default Page
