import { Layout } from 'antd';
import MainHeader from '../header'
import styled from 'styled-components/macro'

const {
  Header, Footer, Content,
} = Layout;
const StyledHeader = styled(Header)`
  background-color: white;
`
const StyledLayout = styled(Layout)`
  margin: 4px;
`
const header = (
  <MainHeader />
)

const footer = (
  <div>Footer</div>
)

const Guest = ({children, ...rest}) => {
  return (
    <StyledLayout {...rest}>
      <StyledHeader>{header}</StyledHeader>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </StyledLayout>
  )
}

export default Guest