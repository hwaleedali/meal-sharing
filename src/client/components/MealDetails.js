import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./meals.css";

function MealDetails({ match }) {
  const [useinput, setUseInput] = useState([]);
  const id = match.params.id;
  console.log(match);
  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const data = await fetch(`/api/meals/${id}`);
    const items = await data.json();
    console.log(items);
    setUseInput(items);
  };
  return (
    <div className="backGroundMeal">
      <h1>Meal Details Page</h1>
      {useinput.map((meal) => (
        <>
          <section className="menu-item">
            <Link exact to={`/meals`}>
              <h1>{meal.title}</h1>
              <p>{meal.description}</p>
              <p>{meal.price}</p>
            </Link>
            <Link exact to={`/deletemeal/${meal.id}`}>
              <button> Delete Meal</button>
            </Link>
          </section>
        </>
      ))}
    </div>
  );
}
export default MealDetails;
