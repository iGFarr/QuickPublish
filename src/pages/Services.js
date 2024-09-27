import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../components/Footer";

const Services = () => {
  const [showForms, setShowForms] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    bookTitle: "",
    protagonistName: "",
    storyIdea: "",
    additionalDetails: "",
    customerEmail: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleGetStartedClick = () => {
    setShowForms(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if at least one of the fields (other than customerName) has at least 20 characters
    if (
      (form.bookTitle.length >= 2 ||
        form.protagonistName.length >= 2 ||
        form.storyIdea.length >= 5 ||
        form.additionalDetails.length >= 5) &&
      form.customerName.length >= 3 &&
      form.customerEmail.includes("@") &&
      form.customerEmail.length >= 3
    ) {
      // Clear any previous error message and send the email via EmailJS
      setErrorMessage("");

      // Send an email via EmailJS
      emailjs
        .send(
          "service_socvfxk", // Replace with your EmailJS service ID
          "template_qwniwwr", // Replace with your EmailJS template ID
          {
            customer_name: form.customerName,
            book_title: form.bookTitle,
            protagonist_name: form.protagonistName,
            story_idea: form.storyIdea,
            additional_details: form.additionalDetails,
            customer_email: form.customerEmail,
          },
          "cRaDZUzOm4I_1_AkQ" // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log(
              "Email sent successfully",
              response.status,
              response.text
            );
          },
          (err) => {
            console.log("Failed to send email", err);
          }
        );

      // Redirect to PayPal with the form data
      const bookDetails = `Title: ${form.bookTitle || "N/A"}, Protagonist: ${
        form.protagonistName || "N/A"
      }, Idea: ${form.storyIdea || "N/A"}, Details: ${
        form.additionalDetails || "N/A"
      }`;

      // Open PayPal for payment (adjust URL for your PayPal link)
      window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=isaacgfarr@gmail.com&item_name=Book Writing Service-${
        form.bookTitle
      }for${
        form.customerName
      }&amount=99.00&currency_code=USD&custom=${encodeURIComponent(
        bookDetails
      )}`;
    } else {
      var errorMessage = "";
      if (form.customerName.length < 3) {
        errorMessage += "Please enter your full name. ";
      }
      if (form.customerEmail.length < 3) {
        errorMessage +=
          "Please enter your email where the digital copy will be delivered. ";
      }
      if (
        !(
          form.bookTitle.length >= 2 ||
          form.protagonistName.length >= 2 ||
          form.storyIdea.length >= 5 ||
          form.additionalDetails.length >= 5
        )
      ) {
        // Set an error message if validation fails
        errorMessage += "Please enter more details into one of the fields.";
      }
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div className="page-background">
      <div className="jumbotron">
        {showForms ? (
          <></>
        ) : (
          <>
            <h2>Publish Your Book Now!</h2>
            <p>
              We offer a full-service package for only $99. You provide the
              ideas, and our advanced AI system will write a unique and
              captivating story out of it. Once completed, we will publish it on
              Amazon, and you'll receive a free digital copy. You can also buy
              printed copies once it's live!
            </p>
          </>
        )}
        {!showForms ? (
          <button onClick={handleGetStartedClick} className="btn btn-primary">
            Get Started
          </button>
        ) : (
          <div className="story-forms">
            <h3>Fill in the details for your book:</h3>

            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="customerName">Your Name</label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  className="form-control"
                  placeholder="Your first and last name here"
                  value={form.customerName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="customerEmail">Your Email</label>
                <input
                  type="text"
                  id="customerEmail"
                  name="customerEmail"
                  className="form-control"
                  placeholder="Enter the email you would like your digital copy delivered to."
                  value={form.customerEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bookTitle">Title of the Book</label>
                <input
                  type="text"
                  id="bookTitle"
                  name="bookTitle"
                  className="form-control"
                  placeholder="Leave this blank if you want us to come up with your story's title..."
                  value={form.bookTitle}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="protagonistName">Protagonist's Name</label>
                <input
                  type="text"
                  id="protagonistName"
                  name="protagonistName"
                  className="form-control"
                  placeholder="Leave this blank if you want us to name your protagonist"
                  value={form.protagonistName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="storyIdea">Story Idea</label>
                <textarea
                  id="storyIdea"
                  name="storyIdea"
                  className="form-control"
                  placeholder="Enter the central idea of your story here, or leave blank to have us come up with an idea"
                  value={form.storyIdea}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="additionalDetails">Additional Details</label>
                <textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  className="form-control"
                  placeholder="Enter any other additional details about your story that you want included or leave blank"
                  value={form.additionalDetails}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit Your Story & Go to Payment
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
