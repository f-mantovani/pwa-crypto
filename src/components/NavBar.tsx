import logo from '../assets/flowdesk_logo.png'
import { Logo } from '../styles/image.style'

export const NavBar = () => {
  return (
    <nav>
      <Logo src={logo} alt="flowdesk logo" />
    </nav>
  )
}