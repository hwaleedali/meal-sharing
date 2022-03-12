const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    let meal = await knex("meal");

    if ("maxprice" in request.query) {
      mealMaxPrice = meal.filter(
        (meal) => Number(meal.price) < Number(request.query.maxprice)
      );
      if (isNaN(request.query.maxprice)) {
        return response.status(404).end("Please write Correct Price");
      } else {
        return response.json(mealMaxPrice);
      }
    }

    if ("availableReservations" in request.query) {
      const getMeal = await knex("meal")
        .join("reservation", "meal.id", "=", "reservation.meal_id")

        .select(
          "meal.id",
          "title",
          "description",
          "location",
          "time",
          "max_reservations",
          "price",
          "meal.created_date",
          "meal_id",
          knex.raw("SUM(number_of_guests) AS sum")
        )
        .where("max_reservations", ">", "number_of_guests")
        .groupBy("meal_id");

      const availableMeals = getMeal.filter((meal) => {
        return meal.max_reservations > meal.sum;
      });
      console.log(availableMeals);
      return response.json(availableMeals);
    }

    if ("title" in request.query) {
      mealTitle = meal.filter((meal) =>
        meal.title.includes(request.query.title)
      );
      if (!isNaN(request.query.title)) {
        return response.status(404).end("Please write Correct title");
      } else {
        return response.json(mealTitle);
      }
    }
    if ("createdAfter" in request.query) {
      mealDate = meal.filter(
        (meal) =>
          new Date(meal.created_date).getTime() >
          new Date(request.query.createdAfter).getTime()
      );
      if (mealDate.length === 0) {
        return response
          .status(404) // does not work??
          .json({ Error: "No meal found created this date" });
      }
      return response.json(mealDate);
    }

    if ("limit" in request.query) {
      const limit = Number(request.query.limit);
      if (isNaN(limit)) {
        return response.status(404).end("Please write Correct limit");
      } else {
        let meal = await knex("meal").limit(limit);
        return response.json(meal);
      }
    }
    response.json(meal);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    const postMeal = await knex("meal").insert({
      title: request.body.title,
      description: request.body.description,
      location: request.body.location,
      time: request.body.time,
      max_reservations: request.body.max_reservations,
      price: request.body.price,
      created_date: request.body.created_date,
    });

    response.json(postMeal);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const getMealByID = await knex("meal").where("id", request.params.id);
    response.json(getMealByID);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const updateMealByID = await knex("meal")
      // .where('id', request.params.id)
      .where({ id: request.params.id })
      .update(request.body);
    response.json(updateMealByID);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const deleteMealByID = await knex("meal")
      // .where('id', request.params.id)
      .where({ id: request.params.id })
      .delete(request.body);
    response.json(deleteMealByID);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
