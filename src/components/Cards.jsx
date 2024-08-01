import React from "react";
import Card from "./Card";
import travelPlaces from "../data";

export default function Cards() {
  return (
    <div className="container">
      {travelPlaces.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
}
