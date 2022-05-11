import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <header className="headerDesign">
        <h1>Meal App</h1>
      </header>

      <ul className="nav-link">
        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <Link to={"/about"}>
          <li>About</li>
        </Link>

        <Link to={"/meals"}>
          <li>All Meals</li>
        </Link>
        <Link to={"/addmeals"}>
          <li>Add Meals</li>
        </Link>

        <Link to={"/reservation"}>
          <li>Available Reservations</li>
        </Link>
        <Link to={"/allreservation"}>
          <li>All Reservations</li>
        </Link>

        <Link to={"/review"}>
          <li>Reviews</li>
        </Link>

        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
