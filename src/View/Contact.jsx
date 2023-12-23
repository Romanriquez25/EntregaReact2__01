import React from 'react'
import { Form, Button, Container } from "react-bootstrap";

export const Contact = () => {
  return (
    <>
     <Container className='col-6 my-5' >
      <h1 className='fw-ligther text-center'>En que podemos ayudarte!</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
    </>  )
}
