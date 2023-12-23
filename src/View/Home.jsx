import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  return (
    <>
        <Container className="text-center my-5">
         <h1 className="fw-lighter">Bienvenido a  <span className="fw-bold">Happy Cake</span></h1>
         <h5 className="fw-ligther">El lugar de los Pasteles Felices</h5>
         <FontAwesomeIcon icon={faBirthdayCake} size="3x" />
        </Container>

    </>

  )
}
