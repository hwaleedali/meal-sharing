import React, { useState } from "react";
import { throwError } from "rxjs";
import "./meals.css";
const AddMeal = () => {
  // controlled inputs
  const [mealId, setMealId] = useState("");
  const [inputs, setInputs] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [maxR, setMaxR] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  //to get new meal id
  fetch("http://localhost:3000/api/meals")
    .then((res) => res.json())
    .then((data) => {
      const total = data.length;
      setMealId(total);
    });

  //multiple inputs field handled
  //   const handleChange = (event) => {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     setInputs((values) => ({ ...values, [name]: value }));
  //   };

  //handle the submitted form post
  const handleSubmit = (event) => {
    event.preventDefault();
    const objToPost = {
      id: mealId + 1,
      title: inputs,
      description: desc,
      location: location,
      time: time,
      max_reservations: maxR,
      price: price,
      created_date: date,
    };

    // POST request using fetch to add new meal()
    fetch("http://localhost:3000/api/meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objToPost),
    })
      .then((res) => {
        // alert("success!! " + title + " added");
        return res.json();
      })
      .then((data) => {
        // data ? alert("success!! " + title + " added") : throwError
        console.log(data);
        if (data) {
          alert("success!! " + title + " added");
        }
      })
      .catch((error) => {
        if (error) {
          alert("Error fetching! Error code: " + error.status);
        }
        console.log(error);
      });
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Add new meal</h2>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            Title:
            <input
              type="text"
              placeholder="Title"
              value={inputs || ""}
              onChange={(e) => setInputs(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            Description:
            <input
              type="text"
              placeholder="Description"
              value={desc || ""}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            Location
            <input
              type="text"
              placeholder="Location"
              value={location || ""}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            When
            <input
              type="date"
              placeholder="time"
              value={time || ""}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            Reservation #:
            <input
              type="number"
              placeholder="Max Reservations"
              value={maxR || ""}
              onChange={(e) => setMaxR(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            Price:
            <input
              type="decimal"
              placeholder="Price"
              value={price || ""}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="inputWrapper">
            Created Date:
            <input
              type="date"
              placeholder="created_date"
              value={date || ""}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button type="submit">Add new Meal</button>
        </form>
      </div>
    </div>
  );
};
export default AddMeal;