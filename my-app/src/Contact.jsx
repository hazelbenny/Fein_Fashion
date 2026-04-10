// Importing useState → React hook (state management)
import { useState } from "react";

// Functional component → React concept
function Contact() {

  // State for storing form inputs → React
  // Object → JS (grouping related data)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for storing validation errors → React
  const [errors, setErrors] = useState({});

  // State to track submission status → React
  const [submitted, setSubmitted] = useState(false);

  // Function to handle input changes → JS function
  function handleChange(event) {

    // Destructuring → Advanced JS (extracting values easily)
    const { name, value } = event.target;

    // Updating form data without losing previous values → React + JS
    setFormData({
      ...formData,   // spread operator → Advanced JS (copy old data)
      [name]: value, // dynamic key → Advanced JS
    });
  }

  // Validation function → JS logic
  function validate() {
    const newErrors = {}; // object to store errors

    // Checking if name is empty → JS condition
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Simple email validation → JS string method
    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    // Regex → Advanced JS (pattern matching)
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }

    // Message validation
    if (formData.message.trim() === "") {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  }

  // Function to handle form submission → JS + React
  function handleSubmit(event) {

    event.preventDefault(); 
    // Prevents page reload → HTML form default behavior

    const validationErrors = validate(); // run validation

    // Object.keys() → JS (checking if errors exist)
    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors); // show errors → React
      setSubmitted(false);

    } else {

      setErrors({});      // clear errors
      setSubmitted(true); // show success message

      // Reset form → React state update
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }

  return (

    // Page container → HTML + CSS
    <div className="contact-page">

      {/* Card-like form container → CSS styling */}
      <div className="form-card">

        {/* Heading → HTML */}
        <h2 className="page-title">Get in Touch</h2>

        {/* Form element → Js */}
        <form onSubmit={handleSubmit} className="contact-form">
          {/* onSubmit → React event handling */}

          {/* Input group */}
          <div className="field-group">

            <label>Full Name</label> {/* HTML label */}

            <input
              type="text"
              name="name"                 // used to identify field → Js
              value={formData.name}      // controlled input → React
              onChange={handleChange}    // event handling → React
            />

            {/* Error message → conditional display */}
            <span className="error-text">{errors.name}</span>
          </div>

          <div className="field-group">
            <label>Email Address</label>

            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <span className="error-text">{errors.email}</span>
          </div>

          <div className="field-group">
            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <span className="error-text">{errors.phone}</span>
          </div>

          <div className="field-group">
            <label>Message</label>

            {/* textarea → Js */}
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />

            <span className="error-text">{errors.message}</span>
          </div>

          {/* Submit button → Js */}
          <button type="submit" className="submit-btn">
            Submit
          </button>

          {/* Conditional rendering → React */}
          {submitted && (
            <p className="success-text">
              Form submitted successfully.
            </p>
          )}

        </form>
      </div>
    </div>
  );
}

export default Contact;