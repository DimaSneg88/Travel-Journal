import React from "react";
import dott from "../assets/dott.png";

export default function Card({ item }) {
  return (
    <div className="card">
      <img className="card--image" src={item.imageUrl} />
      <div className="card_body">
        <div>
          <span className="card--location">
            {item.location}
            <img src={dott} alt="" />
          </span>
          <a href={item.googleMapsUrl} target="blank_" className="card--map">
            View on Google Maps
          </a>
        </div>
        <div className="card--title">{item.title}</div>
        <div className="card--date">
          {item.startDate} - {item.endDate}
        </div>
        <div className="card--subtitle">{item.description}</div>
      </div>
    </div>
  );
}
