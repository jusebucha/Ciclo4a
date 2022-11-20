import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function CrearUsuario() {
  return (
    <div >
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-capitalize ">InstaYa</h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Nombre y Apellidos
                        </Form.Label>
                        <Form.Control type="text" placeholder="Ingresar nombre y Apellidos" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Correo electronico
                        </Form.Label>
                        <Form.Control type="email" placeholder="Ingresar email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingresar Contraseña" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirmar contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Crear cuenta
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Ya tiene una cuenta?{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}