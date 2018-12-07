import Link from './link'

const Header = () => {
  return (
  <header>
    <Link href={'/'} local>Home</Link>
    <Link href={'/about'}>About</Link>
    <Link href={'/hello-world'}>Hello World</Link>
    <Link href={'/archives'}>Archives</Link>
  </header>
)}

export default Header
