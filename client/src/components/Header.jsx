import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router'
import { FaHome } from 'react-icons/fa'

export default function Header() {
  return (
    <header>
      <Navbar bg='light' expand='lg' sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <FaHome className='me-2' />
            Roler<span style={{ fontWeight: 'bold' }}>state</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='main-navigation' />
          <Navbar.Collapse id='main-navigation'>
            <Nav className='ms-auto'>
              <Nav.Link as={NavLink} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to='/gallery'>
                Gallery
              </Nav.Link>
              <Nav.Link as={NavLink} to='/blog'>
                Blog
              </Nav.Link>
              <Nav.Link as={NavLink} to='/contact'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
