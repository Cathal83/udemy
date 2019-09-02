import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent
      });
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
    } else {
      this.props.createEvent(this.state);
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;

    return (
      <div>
        <Segment>
          <Form onSubmit={this.handleFormSubmit} autoComplete="off">
            <Form.Field>
              <label>Event Title</label>
              <input
                name="title"
                value={title}
                placeholder="Event Title"
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input
                name="date"
                type="date"
                value={date}
                placeholder="Event Date"
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input
                name="city"
                value={city}
                placeholder="City event is taking place"
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input
                name="venue"
                value={venue}
                placeholder="Enter the Venue of the event"
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input
                name="hostedBy"
                value={hostedBy}
                placeholder="Enter the name of person hosting"
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Button positive type="submit">
              Submit
            </Button>
            <Button type="button" onClick={cancelFormOpen}>
              Cancel
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}
export default EventForm;
