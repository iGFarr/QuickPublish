import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.message.length > 5) {
      // EmailJS send email function
      emailjs
        .send(
          "service_socvfxk", // Replace with your EmailJS service ID
          "template_xilzgq5", // Replace with your EmailJS template ID
          {
            from_name: form.name + "  @  " + form.email,
            message: form.message,
          },
          "cRaDZUzOm4I_1_AkQ" // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Email sent successfully!");
            // Clear the form after submission
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (err) => {
            console.error("FAILED...", err);
            alert("Failed to send email.");
          }
        );
    }
  };

  return (
    <div className="jumbotron">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
