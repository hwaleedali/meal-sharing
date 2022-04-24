import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./meals.css";

function Meals() {
  const [useTodo, setUseTodo] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("http://localhost:3000/api/meals");
    const items = await data.json();
    console.log(items);
    setUseTodo(items);
  };
  const singleTitle = useTodo.map((item) => {
    return (
      <section className="menu-item">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <Link to={`/meal-details/${item.id}`}>
          <p>Detail</p>
        </Link>
        <Link to={`/reviews/${item.id}`}>
          <p>Reviews</p>
        </Link>
      </section>
    );
  });
  return <div className="mealsDesign">{singleTitle}</div>;
}
export default Meals;
