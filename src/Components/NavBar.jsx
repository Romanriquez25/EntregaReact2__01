import { NavLink } from "react-router-dom"
import { Navbar,Container, NavbarBrand } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMessage } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
  return (
    <>
    <Container className="">
        <Navbar className="" bg="danger" variant="dark">
        <NavLink to="/" className="navbar-brand">
        <FontAwesomeIcon icon={faHome} /> Home
        </NavLink>
        <NavLink to="/contact" className="navbar-brand">
        <FontAwesomeIcon icon={faMessage} />   Contact
        </NavLink>
        
    </Navbar>
    </Container>
    
    </>
    
   
    
    
  )
}
