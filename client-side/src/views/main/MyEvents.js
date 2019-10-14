
import React from "react";
// nodejs library that concatenates classes
import axios from 'axios'
import { Redirect } from 'react-router-dom'

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import SimpleFooter from "components/Footers/SimpleFooter";
import MyEventLists from "./MyEventLists.js"

class MyEvent extends React.Component {
  state = {
    events: []
  }

handleDate = (date) => {
    this.setState({ date: date })
    console.log(this.date)
    
}
handleChange = (e) => {
  e.preventDefault()
  this.setState({
      [e.target.name]: e.target.value,
  })
}

componentDidMount() {
  console.log('event component')
  let token = localStorage.getItem('mernToken')
  console.log('USER; ', this.props.user)
  axios.get(`http://localhost:3000/event/`, {
      headers: { 'Authorization': `Bearer ${token}` }
  })
  .then(response => {
      console.log('SUCESSSSS', response.data)
      this.setState({events: response.data})
  })
  .catch(err => {
      console.log('Event Error', err)
  })
}
handleSaveEvent = (e) => {
  e.preventDefault()
  this.handleDate()
  console.log('something was submitted', this.state)
  let token = localStorage.getItem('mernToken')

  console.log('TOOOKKKKKEEEENNN; ', token, this.props.user)
  axios.post(`http://localhost:3000/event/${this.props.user._id}`, this.state, {
      headers: { 'Authorization': `Bearer ${token}` }
  })
  .then(response => {
      console.log(response)
  })
  .catch(err => {
      console.log('ERROR', err)
  })
  
  // console.log('this is the state', this.state)
}

  render() {

    let allEvents = (this.state.events || []).map((r,i) => {
      // return <h1>hello</h1>
      return <MyEventLists 
          key={i}
          result={r} //named it this instead
          user={this.props.user}
      />
      
  })
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
                  <h1>Events Nearby: </h1>
                    <Col lg="9">
                      <h1 className="display-3 text-white">
                      <p>Events Nearby </p>
                        <span></span>
                      </h1>
                          {allEvents}
                      <div >
                      </div>
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

export default MyEvent;
