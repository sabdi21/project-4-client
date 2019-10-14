/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
import Inputs from "./IndexSections/Inputs.jsx";
import Datepicker from "./IndexSections/Datepicker.jsx";
import Login from "./IndexSections/Login.jsx";
// import Download from "./IndexSections/Download.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        {/* <DemoNavbar updateProfile={this.updateProfile} updateUser={this.getUser} user={this.state.user}/> */}
        <main ref="main">
          {/* <Hero />
          <Buttons /> */}
          <Inputs />
          {/* <section className="section"> */}
            {/* <Container>
              <CustomControls />
              <Menus />
            </Container>
          </section> */}
          {/* <Navbars /> */}
          {/* <section className="section section-components"> */}
            {/* <Container>
              <Tabs />
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row> */}
              {/* <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row> */}
              {/* <Alerts />
              <Typography />
              <Modals /> */}
              <Datepicker />
              {/* <TooltipPopover /> */}
            {/* </Container> */}
          {/* </section> */}
          {/* <Carousel />
          <Icons /> */}
          {/* <Login /> */}
          {/* <Download /> */}
        </main>
       
      </>
    );
  }
}

export default Index;
