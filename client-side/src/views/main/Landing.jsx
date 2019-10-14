
import React from "react";
// nodejs library that concatenates classes
import axios from 'axios'
import { Redirect } from 'react-router-dom'

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import SimpleFooter from "components/Footers/SimpleFooter";
import MyEventLists from "./MyEventLists.js"

class Landing extends React.Component {
  state = {
    savedEvents: []
  }


  render() {

    return (
      <>
      <main ref="main">
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default">
            <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="9">
                      <h1 className="display-3 text-white">
                      <p>Kids Play Planner is an app that allows parents to set up events for children in the Seattle area. </p>
                        <span></span>
                      </h1>
                       
                      {/* <div >
                      Saved events
                      </div> */}
                    </Col>
                  </Row>
                </div>
              </Container>
            </section>
            </div>
      </main>
      <SimpleFooter />
    </>
    );
  }
}

export default Landing;
