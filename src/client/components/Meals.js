import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./meals.css";

function Meals() {
  const [useTodo, setUseTodo] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const data = await fetch("/api/meals");
    const items = await data.json();
    console.log(items);
    setUseTodo(items);
  };
  const singleTitle = useTodo.map((item) => {
    return (
      <section className="menu-item">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="buttonDesign">
          {" "}
          <Link to={`/meal-details/${item.id}`}>
            <ul>
              <li>Detail</li>
            </ul>
          </Link>
        </div>
        <div className="buttonDesign">
          <Link to={`/reviews/${item.id}`}>
            <ul>
              <li>Reviews</li>
            </ul>{" "}
          </Link>
        </div>
      </section>
    );
  });
  return (
    <div className="backGroundMeal">
      <div className="mealsDesign">{singleTitle}</div>
    </div>
  );
}
export default Meals;
