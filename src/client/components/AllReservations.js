import React, { useState, useEffect } from "react";
import "./meals.css";

function AllReservations() {
  const [reservation, setReservation] = useState([]);
  useEffect(() => {
    fetchReservations();
  }, []);
  const fetchReservations = async () => {
    const data = await fetch("/api/reservations");
    const fetchResult = await data.json();
    setReservation(fetchResult);
  };
  const reservations = reservation.map((reservation) => (
    <div className="menu-item">
      <p>
        <span>Name: {reservation.contact_name}</span>
      </p>
      <p>
        <span>Number of Guests : {reservation.number_of_guests}</span>
      </p>
      <p>Email: {reservation.contact_email}</p>
    </div>
  ));

  return (
    <div>
      <h1 className="textHeight">All Reservations</h1>

      <div className="backGroundMeal">
        <p className="mealsDesign">{reservations}</p>
      </div>
    </div>
  );
}

export default AllReservations;
