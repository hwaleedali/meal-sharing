import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./TestComponent/TestComponent";

import Nav from "./components/Nav";
import About from "./components/About";
import Meals from "./components/Meals";
import MealDetails from "./components/MealDetails";
import AddMeal from "./components/AddMeal";
import Review from "./components/Review";
import AllReviews from "./components/AllReviews";
import Reservations from "./components/Reservations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { DeleteMeal } from "./components/DeleteMeal";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/meals" component={Meals} />
          <Route exact path="/addmeals" component={AddMeal} />
          <Route exact path="/about" component={About} />
          <Route exact path="/meal-details/:id" component={MealDetails} />
          <Route exact path="/reviews/:id" component={Review} />
          <Route exact path="/review" component={AllReviews} />
          <Route exact path="/reservation" component={Reservations} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/deletemeal/:id" component={DeleteMeal} />

          <Route exact path="/test-component">
            <TestComponent></TestComponent>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
const Home = () => {
  return (
    <div className="homePage">
      <p>
        This the Home Page of Meal App Where You Can Find and Order Your Food As
        Per Your Requirments and Allergies.
      </p>
    </div>
  );
};
export default App;
