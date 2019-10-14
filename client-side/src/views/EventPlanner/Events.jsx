import React from "react";
import axios from 'axios'

import { Container, Row, Col } from "reactstrap";

import NewEvents from "./NewEvents"
import EventListItems from "./EventListItems"

import SimpleFooter from "components/Footers/SimpleFooter";
class Events extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            userInfo: '',
            events: []
        }
    }
    
    //   state = {
    //     events: []
    // }
    getData = () => {
         console.log('event component')
        let token = localStorage.getItem('mernToken')
        console.log('TOOOKKKKKEEEENNN; ', this.props.user)
        axios.get(`http://localhost:3000/event/search/${this.props.user._id}`, {
        // axios.get(`http://localhost:3000/event/${this.props.user._id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
            console.log('get response', response.data)
            this.setState({events: response.data})
        })
        .catch(err => {
            console.log('Event Error', err)
        })
    }

    componentDidMount() {
       
        if(this.props.user) {
            this.getData()   
        }
        
    }

        
    render() {
        let allEvents = (this.state.events || []).map((r,i) => {
            // return <h1>hello</h1>
            return <EventListItems 
                getData = {this.getData}
                key={i}
                result={r} //named it this instead
                user={this.props.user}
            />
        })
        return (
            <main>
            
            <div className="position-relative">
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
                        <Col lg="6">

                            <NewEvents user={this.props.user} getData={this.getData} /> 
                  
                            <div className="btn-wrapper">
                            {this.props.result}
                        </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <hr />
                        <h1>{this.props.user.firstname}'s Events</h1>
                        {allEvents}
                        
                        </Col>
                        </Row>
                        </div>
                    </Container>
                </section>
                </div>
                <SimpleFooter />
            </main>
        );
    }       
}

export default Events;