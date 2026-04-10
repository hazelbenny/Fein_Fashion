import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validate() {
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }

  return (
    <div className="contact-page">
      <div className="form-card">
        <h2 className="page-title">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="field-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
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
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            />
            <span className="error-text">{errors.message}</span>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>

          {submitted && (
            <p className="success-text">Form submitted successfully.</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;