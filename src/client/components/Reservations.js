import React, { useEffect, useState } from "react";
import "./meals.css";

function Reservations() {
  const [reservationState, setReservationState] = useState([]);
  const [success, setSuccess] = useState("");

  const [foodId, setFoodId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [guest, setGuest] = useState("");
  useEffect(() => {
    fetchReservation();
  }, []);
  const fetchReservation = async () => {
    const data = await fetch(
      "http://localhost:3000/api/meals?availableReservations"
    );
    const items = await data.json();
    console.log(items);
    setReservationState(items);
  };
  console.log(reservationState);
  const mappedReservation = reservationState.map((reservation) => (
    <>
      <section className="menu-item">
        <p>Id: {reservation.id}</p>
        <p>Name: {reservation.title}</p>
        <p>Booked Seats: {reservation.sum}</p>
        <p>Description: {reservation.description}</p>
        <p>Max Seats: {reservation.max_reservations}</p>
      </section>
    </>
  ));
  console.log(mappedReservation);
  function addShift(e) {
    e.preventDefault();
    const data = {
      meal_id: Number(foodId),
      contact_name: name,
      contact_phonenumber: Number(phone),
      contact_email: email,
      number_of_guests: Number(guest),
      created_date: "2022-04-03",
    };
    console.log(data);
    fetch("http://localhost:3000/api/reservations", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(
        (response) => response.json()
        // if (response.ok) {
        //   alert("Success");
        //   response.json();
        // } else {
        //   alert("Error");
        // }
      )
      .then((data) => {
        setSuccess("Success:", data);
      })
      .catch((error) => {
        setSuccess("Error:", error);
      });
  }
  return (
    <>
      <div>
        <h1 className="textHeight">Available Reservations</h1>
        <div className="mealsDesign">{mappedReservation}</div>
      </div>
      <div className="formContainer">
        <div>
          <form onSubmit={addShift}>
            <div className="inputWrapper">
              ID:
              <input
                type="number"
                onChange={(e) => setFoodId(Number(e.target.value))}
              />
            </div>
            <div className="inputWrapper">
              Name:
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="inputWrapper">
              Phone#:
              <input
                type="number"
                onChange={(e) => setPhone(Number(e.target.value))}
              />
            </div>
            <div className="inputWrapper">
              Email:
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="inputWrapper">
              No. of Guests:
              <input
                type="number"
                onChange={(e) => setGuest(Number(e.target.value))}
              />
            </div>
            <div>
              <button type="submit">Book Seat</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Reservations;
