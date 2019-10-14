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
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class DemoNavbar extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      user: null
    }
  }

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }

  handleLogout = (e) => {
    e.preventDefault()
    //Remove the token from local storage (or cookies)
    localStorage.removeItem('mernToken')
    //update the state of the app
    this.props.updateUser()
}
  render() {
    let links = ''
    //If the user is logged in, show profile page and logout links
    if(this.props.user) {
      links = (
        <span>
          <DropdownItem to="/profile" tag={Link}>
            Profile
          </DropdownItem>
          <DropdownItem to="/" tag={Link} onClick={this.handleLogout}>
          Logout
          </DropdownItem>
          <DropdownItem to="/myevents" tag={Link}>
            All Events
          </DropdownItem>
          <DropdownItem to="/events" tag={Link}>
            New Event
          </DropdownItem>
        </span>
        )
      }
      else {
        links = (
        <span>
          <DropdownItem to="/login" tag={Link}>
            Login
          </DropdownItem>
          <DropdownItem to="/signup" tag={Link}>
            Sign Up
          </DropdownItem>
          </span>
        )
      }

    return (

        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                Kids Play Planner
              </NavbarBrand>

              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Menu</span>
                    </DropdownToggle>
                    <DropdownMenu>

                    {links}

                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>

    );
  }
}

export default DemoNavbar;
