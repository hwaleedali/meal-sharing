import React, { useEffect, useState } from "react";
import "./meals.css";

function AllReviews({ match }) {
  const [reviewState, setReviewState] = useState([]);
  const id = Number(match.params.id);
  console.log(id);
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const data = await fetch("http://localhost:3000/api/reviews");
    const items = await data.json();
    console.log(items);
    setReviewState(items);
  };
  console.log(reviewState);
  //   const filteredReview = reviewState.filter((review) => review.meal_id === id);
  //   console.log(filteredReview);
  const mappedReview = reviewState.map((review) => (
    <>
      <section className="menu-item">
        <p>R-Id: {review.id}</p>
        <p>Meal Id: {review.meal_id}</p>
        <p>Rate: {review.title}</p>
        <p>Desc: {review.description}</p>
        <p>Stars: {review.stars}</p>
        <p>Dated: {review.created_date}</p>
      </section>
    </>
  ));
  return (
    <div>
      <h1 className="textHeight">Review Meals</h1>
      <div className="mealsDesign">{mappedReview}</div>
    </div>
  );
}
export default AllReviews;
