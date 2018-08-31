import React from "react";
import "./House.css";

export default function House(props) {
  let listing = props.properties.map((e, i) => {
    return (
      <div key={i} className="property">
        <button onClick={() => props.delete(e.house_id)} className="delete">
          X
        </button>
        <div className="img">
          <img src={e.img} alt="" />
        </div>
        <div>Property Name: {e.property_name}</div>
        <div>Address: {e.address}</div>
        <div>City: {e.city}</div>
        <div>State: {e.state}</div>
        <div>Zip Code: {e.zip_code}</div>
        <div>Monthly Mortgage: {e.monthly_mortgage}</div>
        <div>Desired Monthly Rent: {e.desired_monthly_rent}</div>
      </div>
    );
  });

  return (
    <div>
      <div>{listing}</div>
    </div>
  );
}
