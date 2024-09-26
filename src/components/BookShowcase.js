// BookShowcase.js
import React from "react";
import ShatterVeilCover from "../images/TheShatterVeilFrontCover.png";
import AtTheEdgeCover from "../images/AtTheEdge_FrontCover.png";

const books = [
  {
    title: "The Shattered Veil",
    link: "https://a.co/d/7CxtVgA",
    cover: ShatterVeilCover,
  },
  {
    title: "A World At The Edge of Time",
    link: "https://a.co/d/3RqTM3L",
    cover: AtTheEdgeCover,
  },
  // Add more books here
];

const BookShowcase = () => {
  return (
    <div className="book-showcase">
      <div className="books-container">
        {books.map((book, index) => (
          <div key={index} className="book-item">
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookShowcase;
