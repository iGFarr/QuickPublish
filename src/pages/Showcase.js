// Showcase.js
import React from "react";
import BookShowcase from "../components/BookShowcase";
import Footer from "../components/Footer";

const Showcase = () => {
  return (
    <div className="page-background">
      <div className="jumbotron">
        <h2>Books We've Published</h2>
        <BookShowcase />
        <Footer />
      </div>
    </div>
  );
};

export default Showcase;
