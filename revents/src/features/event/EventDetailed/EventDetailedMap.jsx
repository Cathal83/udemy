import React from "react";
import { Segment } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";
import { Icon } from "semantic-ui-react";
import { apiKey } from "../../../app/common/keys";

const Marker = () => (
  <Icon name="map marker alternate" size="big" color="red" />
);

const EventDetailedMap = ({ lat, lng }) => {
  const zoom = 14;

  return (
    <Segment attached="botton" style={{ padding: 0 }}>
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={{ lat, lng }}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default EventDetailedMap;
