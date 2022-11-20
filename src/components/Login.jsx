import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom"

export default function Login() {
  return (
    <div className="container">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4 ">
                  <h2 className="fw-bold mb-2 text-center text-primary">InstaYa</h2>
                  <p className="mb-4 text-center">¡Por favor, introduzca su usuario y contraseña!</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/*<Form.Label className="text-center ">
                          USUARIO
                        </Form.Label> */}
                        <Form.Control className="form-control-lg" type="email" placeholder="Correo eléctronico" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        {/*<Form.Label>Contraseña</Form.Label>*/}
                        <Form.Control className="form-control-lg" type="password" placeholder="Contraseña" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small text-center">
                          <a className="text-primary" href="#!">
                            ¿Olvidaste la contraseña?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button className="fw-bold" variant="primary" type="submit" size="lg">
                          Iniciar Sesión
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center"> No tiene cuenta?{" "}
                      <NavLink className="nav-link text-primary fw-bold" to="/CrearUsuario1"> Crear cuenta</NavLink>
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
  );
}