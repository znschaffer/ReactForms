# ReactForms

## Learning

- **Differentiate** between controlled and uncontrolled forms in React by comparing how they manage input state.
- **Construct** a controlled form in React that manages form inputs through component state.
- **Apply** client-side validation techniques to ensure form data meets specified requirements before submission.
- **Transmit** validated form data to a backend by **executing** a POST request.

## Post Reqeusts

POST requests are HTTP requests that send data to a server in the body of the request. The server parses the data and can then add it to a database (something we’ll explore in the coming weeks).

## HTML Forms

Forms are a way to get input and data from a user.

```
<!-- In vanilla HTML, forms can send a request to a server.
     The action attribute specifies the endpoint for the form,
     and the method attribute identifies the HTTP method.
     We skip these attributes in React, but more on that in a moment. -->

<form action="/submit" method="post">

  <!-- The label tag provides a visible label for our inputs.
       The 'for' attribute connects the label to the input's id. -->
  <label for="email">Email:</label>

  <!-- Inputs can be used for many types of data defined by the 'type' attribute:
       text, password, number, email, radio buttons, checkboxes, date, and more. -->

  <!-- The name attribute specifies the key for the form data when the form is submitted,
       creating a key–value pair like name:value. -->

  <!-- The placeholder attribute adds temporary text displayed inside the form field
       until the user enters a value. -->

  <input id="email" type="email" name="email" placeholder="Enter email" />

  <input type="password" name="password" placeholder="Enter password" />

  <input type="number" name="amount" placeholder="Enter amount" />

  <input type="file" name="file" />

  <input type="radio" name="confirm" value="yes" /> Yes

  <input type="checkbox" name="job" value="softwareEngineer" /> Software Engineer

  <input type="date" name="date" />

  <!-- Select menus are drop-down menus with a variety of options. -->
  <select name="color">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
  </select>

  <!-- The textarea element is a multi-line text input.
       Use rows and cols to determine its size. -->
  <textarea name="bio" rows="5" cols="10" placeholder="Enter your bio"></textarea>

  <!-- The submit button sends the form data to the server. -->
  <input type="submit" value="Submit" />

</form>

```

## Controlled Forms

There are two kinds of forms:

- **Uncontrolled forms** – managed by the browser’s DOM and standard HTML form elements.
- **Controlled forms** – managed by **React state**, where the component tracks and updates the form values.

With forms, we want to keep track of the form as the user types into it. Tracking every change the user makes. Adding an onChange event to the form

## Form Events

### `onChange` (inputs)

Use `onChange` on form inputs to react to user typing or selecting.  
This lets you keep the input’s value in **state** and perform **client-side validation** as the user types.

### `onClick` (buttons or controls)

Use `onClick` on buttons or other clickable controls (for example, a “Submit” button or a toggle).  
It’s not ideal for tracking text input; prefer `onChange` for that.

### `onSubmit` (the `<form>` element)

Attach `onSubmit` to the **form tag**, not to the submit button.  
This fires when the user submits the form.

- In plain HTML, it triggers a page navigation (form submission).
- In React, you typically call a handler that reads values from state and, for example, sends a **POST** request.

### `event.preventDefault()`

HTML forms refresh the page by default when submitted.  
Call `event.preventDefault()` inside your `onSubmit` handler to **stop the page reload** and handle submission with JavaScript (for example, using `fetch` or `axios`).

### The Event Object

React passes an **event object** to your handlers:

- In `onSubmit`, it includes `preventDefault()` and information about the form.
- In `onChange`, `event.target` gives you the input element (and its `value`, `name`, etc.), which you can use to update state.

### Form example

```
  import { useState } from "react";

  function LoginForm() {
    //Here we are controlling state in seperate
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //Notice the event param here, this is passed to the handleSubmit by the onSubmit event.
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Username:", username);
      console.log("Password:", password);
      // POST Request would go here (we will cover that next)
    };


    return (
      <form onSubmit={handleSubmit}>
      <!-- The e here is also the event object but this time passed by onChange. e.target.value is how we access the data in the input -->
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    );
  }

  export default LoginForm;

```

### Form data in state

We can manage all form data inside a **single state object**, which is a bit more complex at first.  
However, for large forms it’s easier and requires less code than creating a separate `useState` hook for each input.

```
const [formData, setFormData] = useState({ username: "", password: "" });

// We pass this function as the onChange handler for our inputs.
const handleChange = (event) => {
  // Destructure name and value from the event target.
  // 'name' comes from the input's name attribute.
  const { name, value } = event.target;

  // Use a callback with setFormData to safely update state based on previous state.
  // The spread operator (...) makes a shallow copy of the previous state.
  // [name] uses the variable 'name' as the key, allowing dynamic property names.
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


```

## Running the server

You'll need two terminals open one to run your React app, and the other to run the server. To run the server cd into api and run `npm run start`

## Lab Deliverables

1. Set up

- Navigate into your project folder: cd usestate
- Install dependencies: npm install
- Start the development server: npm run dev
- Open your browser and go to http://localhost:5173/ to view your app

2. Add state to the AddRestaurant component

- Navigate to AddRestaurant
- Import useState and create state with the variables formData and setFormData
- Pass the useState variable an object with the keys name, address, phone, cuisine and rating

<details>
  <summary>Click Here to view solution</summary>

```

const [formData, setFormData] = useState({
name: "",
address: "",
phone: "",
cuisine: "",
rating: "",
image:""
});

```

</details>

3. update state

- Add the following code listed in the solution.

<details>
  <summary>Click Here to view solution</summary>

```

// This function will handle the change event for our form.

//React takes care of events, so we just need to create a callback function to pass to React's onChange handler (which we'll do in the next step).

//The handleChange function will accept the event as a parameter. We'll extract the name and value from the event's target, allowing us to capture both the input field's name and its current value.

const handleChange = (e) => {
const name = e.target.name
const value = e.target.value
// Here we are copying in the current form data with the spread operator
// We are then adding the new key value pair with [name]:value
setFormData({ ...formData, [name]: value });
};

```

</details>

4. Update forms onchange event

- Update the form by adding an onChange attribute to each input, assigning it the handleChange function like this: onChange={handleChange}.
- Test your code by adding this console.log statement: console.log(formData). Then, check the developer console to confirm that the state is updating correctly.

<details>
  <summary>Click Here to view solution</summary>

```
        <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>image:</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
              </div>

            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Cuisine:</label>
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Rati return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>image:</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Cuisine:</label>
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Rating:</label>
              <input
                type="number"
                name="rating"
                min="1"
                max="5"
                value={formData.rating}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
```

</details>

## Submission Instructions

1. Push your code to GitHub.
2. Submit the link to your GitHub repository URL.
