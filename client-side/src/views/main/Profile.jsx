import React from "react";
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import classnames from "classnames";

// reactstrap components
import { Button, Container, Input, Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col} from "reactstrap";

// core components
import SimpleFooter from "components/Footers/SimpleFooter.jsx";

class Profile extends React.Component {
  state = {
        firstname: '',
        lastname: '',
        profileUrl: '',
        bio: '',
        iconTabs: 1,
        plainTabs: 1
        }
    
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


  handleSubmit = (e) => {
      e.preventDefault()
      let token = localStorage.getItem('mernToken')
      console.log('user update form was submitted', this.state, token)
      //send the user sig up data to the server
      console.log('user info', this.props.user)
      axios.put(`http://localhost:3000/auth/${this.props.user._id}`, this.state, {
          headers: { 'Authorization': `Bearer ${token}` }
          })
          .then(response => {
              console.log('SUCCESS', response.data.token, token)
              //Store Token in localStorage (with an argument thats specific to your app)
              localStorage.setItem('mernToken', response.data.token)

              //Update App with user info
              this.props.updateUser()
              this.setState({
                  firstname: '',
                  lastname: '',
                  profileUrl: ''
              })
          })
          .catch(err => {
              console.log('ERROR', err.response.data.message)
          })
  }
    toggleNavs = (e, state, index) => {
      e.preventDefault();
      this.setState({
        [state]: index
      });
    };

  render() {
       //If user is not user than redirect to home page
       if(!this.props.user) {
        return <Redirect to="/profile" />
    }

  
    return (
      <>
          <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="separator separator-bottom separator-skew">
              <svg
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container className=" mt--300">
              {/* <Card className="card-profile shadow mt--300"> */}
                <div className="px-8">
          
          <Col lg="6">
           
            <div className="mb-3">
            <h3 className="h4 text-success font-weight-bold mb-4">PROFILE</h3>
            </div>

            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-hat-3 mr-2" />
                    {this.props.user.firstname}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-bell-55 mr-2" />
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 3
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-calendar-grid-58 mr-2" />
                    Share Events
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane  tabId="iconTabs1">
                    <div className="justify-content-center">
                    <h3 className="text-uppercase ">
                    {this.props.user.firstname} {this.props.user.lastname}
                    <div className="card-profile-image ">
                       
                          <img
                            alt="..."
                            className="square-circle"
                            src={this.props.user.profileUrl} 
                          
                          />
                        
                      </div>
                      <span className="font-weight-light"></span>
                    </h3>
                    </div>
                    <p className="description">
                      {this.props.user.bio}
                    </p>
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                  <h3>Update Profile</h3>

                    <form onSubmit={this.handleSubmit}>
                    <Input  name="firstname" placeholder={this.props.user.firstname} value={this.state.firstname} onChange={this.handleChange} />
                    <br /> <br></br>
                    <Input name="lastname" placeholder={this.props.user.lastname} value={this.state.lastname} onChange={this.handleChange} />
                    <br />
                    <br />
                    <Input  name="profileUrl" placeholder={this.props.user.profileUrl} value={this.state.profileUrl} onChange={this.handleChange}/>
                    <br />
                    <Input name="bio" placeholder={this.props.user.bio} value={this.state.bio} onChange={this.handleChange}/>
                     {/* <input className="btn btn-primary" type="submit" />  */}
                    <Button
                          type="submit"
                          className="mr-4"
                          color="info"
                          // href="#pablo"
                          onSubmit={e => e.preventDefault()}
                          size="sm"
                        >
                          Update Profile
                        </Button>

                    </form>
                      </TabPane>
                      <TabPane tabId="iconTabs3">
                        <p className="description">
                          Copy and text this code to your friends to share event.
                          <h2>KS092VLS56</h2>
                        </p>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
              </div>
              {/* </Card> */}
              </Container>
          </section>
        </main> 
        <SimpleFooter />  
      </>
    );
  }
}

export default Profile;
