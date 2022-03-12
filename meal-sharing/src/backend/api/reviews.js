const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // const getAllMeals = await knex('meal');
    const allReviews = await knex("review");
    response.json(allReviews);
  } catch (error) {
    throw error;
  }
});

// Adds a new meal
// POST api/meals/
router.post("/", async (request, response) => {
  try {
    const reviewPost = await knex("review").insert({
      title: request.body.title,
      description: request.body.description,
      stars: request.body.stars,
      created_date: request.body.created_date,
      meal_id: request.body.meal_id,
    });

    response.json(reviewPost);
  } catch (error) {
    throw error;
  }
});

// Returns meal by id
// GET api/meals/2
router.get("/:id", async (request, response) => {
  try {
    const reviewByID = await knex("review").where("id", request.params.id);
    response.json(reviewByID);
  } catch (error) {
    throw error;
  }
});

// Updates the meal by id
// PUT api/meals/2
router.put("/:id", async (request, response) => {
  try {
    const updatedReviewByID = await knex("review")
      // .where('id', request.params.id)
      .where({ id: request.params.id })
      .update(request.body);
    response.json(updatedReviewByID);
  } catch (error) {
    throw error;
  }
});

// Deletes the meal by id
// DELETE api/meals/2
router.delete("/:id", async (request, response) => {
  try {
    const deletedReviewByID = await knex("review")
      // .where('id', request.params.id)
      .where({ id: request.params.id })
      .delete(request.body);
    response.json(deletedReviewByID);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
