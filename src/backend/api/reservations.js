const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // const getAllMeals = await knex('meal');
    const allReservations = await knex("reservation");
    response.json(allReservations);
  } catch (error) {
    throw error;
  }
});

// Adds a new meal
// POST api/meals/
router.post("/", async (request, response) => {
  try {
    console.log(request.body);
    const reservationPost = await knex("reservation").insert({
      number_of_guests: request.body.number_of_guests,
      created_date: request.body.created_date,
      contact_phonenumber: request.body.contact_phonenumber,
      contact_name: request.body.contact_name,
      contact_email: request.body.contact_email,
      meal_id: request.body.meal_id,
    });

    response.json(reservationPost);
  } catch (error) {
    throw error;
  }
});

// Returns meal by id
// GET api/meals/2
router.get("/:id", async (request, response) => {
  try {
    const reservationByID = await knex("reservation").where(
      "id",
      request.params.id
    );
    response.json(reservationByID);
  } catch (error) {
    throw error;
  }
});

// Updates the meal by id
// PUT api/meals/2
router.put("/:id", async (request, response) => {
  try {
    const updatedReservationByID = await knex("reservation")
      // .where('id', request.params.id)
      .where({ id: request.params.id })
      .update(request.body);
    response.json(updatedReservationByID);
  } catch (error) {
    throw error;
  }
});

// Deletes the meal by id
// DELETE api/meals/2
router.delete("/:id", async (request, response) => {
  try {
    const deletedReservationByID = await knex("reservation")
      // .where('id', request.params.id)
      .where({ id: request.params.id })
      .delete(request.body);
    response.json(deletedReservationByID);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
