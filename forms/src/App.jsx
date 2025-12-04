import RestaurantsContainer from "./components/RestaurantsContainer";
import AddRestaurant from "./components/addRestaurant";
import { useState } from "react";
import "./App.css";

//App is the root of our application and where we load in our components.
function App() {
  const [restaurantState, setRestaurants] = useState([]);

  const updateRestaurants = (restaurant) => {
    console.log(restaurant);
    setRestaurants([...restaurantState, restaurant]);
  };

  return (
    <div className="App">
      <AddRestaurant updateRestaurants={updateRestaurants} />
      <RestaurantsContainer restaurants={restaurantState} />
    </div>
  );
}

export default App;
