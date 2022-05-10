import React, { useEffect, useState } from "react";
import "./meals.css";

function Review({ match }) {
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
  const filteredReview = reviewState.filter((review) => review.meal_id === id);
  console.log(filteredReview);
  const mappedReview = filteredReview.map((review) => (
    <>
      <section className="menu-item">
        <p key={review.meal_id}>Rate: {review.title}</p>
        <p key={review.meal_id}>Desc: {review.description}</p>
        <p key={review.meal_id}>Stars: {review.stars}</p>
        <p key={review.meal_id}>Dated: {review.created_date}</p>
      </section>
    </>
  ));
  return (
    <div className="backGroundMeal">
      <h1 className="textHeight">Review Meals</h1>
      <div className="mealsDesign">{mappedReview}</div>
    </div>
  );
}
export default Review;
