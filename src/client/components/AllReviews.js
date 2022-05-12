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
    const data = await fetch("/api/reviews");
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
        <p>Review-ID: {review.id}</p>
        <p>Meal-ID: {review.meal_id}</p>
        <p>Comments: {review.title}</p>
        <p>Description: {review.description}</p>
        <p>Stars: {review.stars}</p>
        <p>Dated: {review.created_date.split("T")[0]}</p>
      </section>
    </>
  ));
  return (
    <div className="backgroundReview">
      <h1 className="textHeight">Review Meals</h1>
      <div className="mealsDesign">{mappedReview}</div>
    </div>
  );
}
export default AllReviews;
