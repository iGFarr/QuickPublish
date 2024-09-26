// Showcase.js
import React from "react";
import BookShowcase from "../components/BookShowcase";

const Showcase = () => {
  return (
    <div className="jumbotron">
      <h2>Books We've Published</h2>
      <BookShowcase />
    </div>
  );
};

export default Showcase;
