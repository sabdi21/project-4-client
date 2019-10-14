
import React from "react";

// reactstrap components
import {
  Button, Card, CardHeader, CardBody, FormGroup,Input,InputGroupAddon,InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";
import { Redirect } from 'react-router-dom'
import axios from 'axios'
// core components
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    // message: ''
}

  handleSubmit = (e) => {
      e.preventDefault()
      console.log('Submit', this.state)
      axios.post(`http://localhost:3000/auth/login`, this.state)
      .then(response => {
          //Assign token
          console.log('Success', response)
          localStorage.setItem('mernToken', response.data.token)
          this.props.updateUser()
      })
      .catch(err => {
          console.log('ERROR', err)
      })
  }

  render() {
            
    if(this.props.user) {
      return <Redirect to="/profile" />
  }
  
    return (
      <>
        {/* <DemoNavbar /> */}
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-md">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Log in with</small>
                      </div>
                      <div className="btn-wrapper text-center">

                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          type="submit"
                          onSubmit={this.handleSubmit}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/google.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>

                      <form>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" onChange={(e) => this.setState({ email: e.target.value})}/>
                          </InputGroup>
                        </FormGroup>

                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password" type="password" autoComplete="off" onChange={(e) => this.setState({ password: e.target.value})} />
                          </InputGroup>
                        </FormGroup>

                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                            
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>

                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                            onClick={this.handleSubmit}
                          >
                            Submit
                          </Button>
                        </div>
                      </form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      {/* <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      > */}
                        <small>Forgot password?</small>
                      {/* </a> */}
                    </Col>
                    <Col className="text-right" xs="6">
                      {/* <a
                        className="text-light"
                      > */}
                        <small>Create new account</small>
                      {/* </a> */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Login;
