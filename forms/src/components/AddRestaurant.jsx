import { useState } from "react";
function AddRestaurant({ updateRestaurants }) {
  return (
    <form>
      <div>
        <label>Name:</label>
        <input type="text" name="name" required />
      </div>

      <div>
        <label>image:</label>
        <input type="text" name="image" required />
      </div>

      <div>
        <label>Address:</label>
        <input type="text" name="address" required />
      </div>

      <div>
        <label>Phone:</label>
        <input type="tel" name="phone" required />
      </div>

      <div>
        <label>Cuisine:</label>
        <input type="text" name="cuisine" required />
      </div>

      <div>
        <label>Rating:</label>
        <input type="number" name="rating" min="1" max="5" required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddRestaurant;
