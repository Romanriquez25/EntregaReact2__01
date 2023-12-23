
import { Home } from "./View/Home"
import { Contact } from "./View/Contact"
import { NotFound } from "./View/NotFound"
import { Route, Routes } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </>
  )
}

export default App
