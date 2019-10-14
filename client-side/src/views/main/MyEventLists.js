
import React from "react";
import axios from 'axios'

// reactstrap components
import { CardBody, Card, Button} from "reactstrap";

class EventListItems extends React.Component {
    state={
        attendingEvents: []
    }
    
  render() {
    console.log(this.props.result)
    return ( 
      <div className="e">
      <Card className="shadow">
        <CardBody className="event-cards">
             <h2>{this.props.result.eventname}</h2>
            <p>{this.props.result.date}</p>
            <p>{this.props.result.time}</p>
            <p>{this.props.result.location}</p>
            <p>Child(s): {this.props.result.child}</p>
            <p>{this.props.result.description}</p>
                <Button
                      className="my-4"
                      color="primary"
                      type="submit"
                      onClick={this.handleSaveEvent}
                    > Save Event </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default EventListItems;
