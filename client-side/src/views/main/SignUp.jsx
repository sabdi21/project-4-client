import React from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios'
// reactstrap components
import { Button, Card, CardHeader, CardBody, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";

// core components

import SimpleFooter from "components/Footers/SimpleFooter.jsx";


class SignUp extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    bio: '',
    profileUrl: ''
  }
  storeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log('is this working')
}

handleSubmit = (e) => {
  console.log('is this working')
    e.preventDefault()
    console.log('form was submitted', this.state)
    //send the user sig up data to the server
    axios.post(`http://localhost:3000/auth/signup`, this.state)
      .then(response => {
          console.log('SUCCESS', response)
          //Store Token in localStorage (with an argument thats specific to your app)
          localStorage.setItem('mernToken', response.data.token)
          //Update App with user info
          this.props.updateUser()
      })
      .catch(err => {
          console.log('ERROR', err)
      })
}
g
  render() {
      //if user signs up, redirect to profile page
      if (this.props.user) {
        return <Redirect to="/profile" 
        />
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
                        <h2>Sign up</h2>
                      </div>
                      <div className="text-center">
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Or just log-in instead </small>
                      </div>
                      <form onSubmit={this.handleSubmit}>
                        {/* <FormGroup> */}

                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="First Name" type="text" name="firstname" onChange={this.storeInput} />
                          </InputGroup>

                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Last Name" type="text" name="lastname" onChange={this.storeInput} />
                          </InputGroup>

                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email" name="email" onChange={this.storeInput} />
                          </InputGroup>

                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              name="password" onChange={this.storeInput} 
                            />
                          </InputGroup>
                          <br />
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-profile-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input name="profileUrl" autoComplete="on" placeholder="Your profile image" onChange={this.storeInput}/>
                          </InputGroup>

                          <Input required type='textarea' maxLength='500' name='details' id='details' rows={4} placeholder='Please provide a quick bio...' aria-multiline='true'/>


                        {/* </FormGroup> */}
                        <div className="text-muted font-italic">
                          <small>
                            password strength:{" "}
                            <span className="text-success font-weight-700">
                              strong
                            </span>
                          </small>
                        </div>
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
                              >
                                <span>
                                  I agree with the{" "}
                                  <a
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                  >
                                    Privacy Policy
                                  </a>
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            type="submit"
                          >
                            Create account
                          </Button>
                        </div>
                      </form>
                    </CardBody>
                  </Card>
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

export default SignUp;
