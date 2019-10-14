import React from "react";
import { Redirect } from 'react-router-dom';
// nodejs library that concatenates classes


// reactstrap components
import { Button, FormGroup, Input, InputGroupAddon, InputGroupText, InputGroup} from "reactstrap";
import ReactDatetime from "react-datetime";
import axios from 'axios'


class NewEvents extends React.Component {
    state = {
        eventname: '',
        date: '',
        time: '',
        location: '',
        description: '',
        child: '',
        attendingEvents: [],
        redirect: false
    }
    handleDate = (date) => {
        this.setState({ date: date })
        console.log(this.date)
        
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.handleDate()
        console.log('something was submitted', this.state)
        let token = localStorage.getItem('mernToken')

        console.log('TOOOKKKKKEEEENNN; ', token, this.props.user)
        axios.post(`http://localhost:3000/event/`, this.state, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(response => {
            this.props.getData()
            console.log(response)
        })
        .catch(err => {
            console.log('ERROR', err)
        })
        
        // console.log('this is the state', this.state)
    }


  
    render() {
        const today = new Date();
        today.setDate(today.getDate() + 1);

        return (
            <div>
            {/* {this.state.redirect ? <Redirect to='/events' /> : '' } */}
            <h1 className="display-3 text-white">

                <span>Create an Event!</span>
                </h1>
                <form className="event-form" onSubmit={this.handleSubmit}>
                    <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="fa fa-user-circle" />
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Event Title..." type="eventname" name="eventname" onChange={(e) => this.setState({ eventname: e.target.value})}/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="fa fa-user-circle" />
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Child(s) name..." type="child" name="child" onChange={(e) => this.setState({ child: e.target.value})}/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="fa fa-location-arrow" />
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Location" type="location" name="location" onChange={(e) => this.setState({ location: e.target.value})}/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="ni ni-hat-3" />
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Time" type="test" name="time" onChange={(e) => this.setState({ time: e.target.value})}/>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup className="focused">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                            </InputGroupText>
                            </InputGroupAddon>
                            <ReactDatetime
                    
                            type="date"
                            name="date"
                            selected={this.state.startDate}
                            onChange={date => this.handleDate(date)}
                            timeFormat={false}
                            />
                        </InputGroup>
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="fa fa-pencil-square-o" />
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Event description and contact info..." type="description" onChange={(e) => this.setState({ description: e.target.value})}/>
                        </InputGroup>
                    </FormGroup>
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
                    <div className="btn-wrapper">
                    </div>
                </div>
            
        );
    }
}

export default NewEvents;