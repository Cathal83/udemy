import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Form, Button } from "semantic-ui-react";
import cuid from "cuid";

import { createEvent, updateEvent } from "../eventActions";

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    event
  };
};

const actions = {
  createEvent,
  updateEvent
};

class EventForm extends Component {
  state = {
    ...this.props.event
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
      this.props.history.push(`/events/${this.state.id}`);
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: "/assets/user.png"
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`);
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
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
            <Button type="button" onClick={this.props.history.goBack}>
              Cancel
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  actions
)(EventForm);
