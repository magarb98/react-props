import React from "react";
import data from "./data";

export default function Card(props) {
  return (
    <section>
      <div className="card">
        <img src={props.imageUrl} alt="" />
        <div className="component">
          <p className="location">
            <img src="icon.svg" alt="" />
            {props.location}
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </p>
          <h2 id="place">{props.title}</h2>
          <h4 id="date">
            {props.startDate} - {props.endDate}
          </h4>
          <p className="description">{props.description}</p>
        </div>
      </div>
      {props.id < data.length && <hr />}
    </section>
  );
}
