import {useState} from "react";

function AddRestaurant({updateRestaurants}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    address: "",
    phone: "",
    cuisine: "",
    rating: "",
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData(prev => {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    updateRestaurants(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input onChange={handleChange} value={formData.name} type="text" name="name" required/>
      </div>

      <div>
        <label>image:</label>
        <input onChange={handleChange} value={formData.image} type="text" name="image" required/>
      </div>

      <div>
        <label>Address:</label>
        <input onChange={handleChange} value={formData.address} type="text" name="address" required/>
      </div>

      <div>
        <label>Phone:</label>
        <input onChange={handleChange} value={formData.phone} type="tel" name="phone" required/>
      </div>

      <div>
        <label>Cuisine:</label>
        <input onChange={handleChange} value={formData.cuisine} type="text" name="cuisine" required/>
      </div>

      <div>
        <label>Rating:</label>
        <input onChange={handleChange} value={formData.rating} type="number" name="rating" min="1" max="5" required/>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddRestaurant;
