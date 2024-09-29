// BookShowcase.js
import React from "react";
import ShatterVeilCover from "../images/coverImages/TheShatterVeilFrontCover.png";
import AtTheEdgeCover from "../images/coverImages/AtTheEdge_FrontCover.png";
import MetalAndDustCover from "../images/coverImages/MetalAndDustCover.png";
import AwakeningProtCover from "../images/coverImages/AwakeningProtCover.png";
import SaintsSecretCover from "../images/coverImages/ASaintsSecretFrontCover.png";

const books = [
  {
    title: "The Shattered Veil",
    link: "https://a.co/d/7CxtVgA",
    cover: ShatterVeilCover,
  },
  {
    title: "A Saint's Secret",
    link: "https://a.co/d/e3Kgksa",
    cover: SaintsSecretCover,
  },
  {
    title: "A World At The Edge of Time",
    link: "https://a.co/d/3RqTM3L",
    cover: AtTheEdgeCover,
  },
  {
    title: "Metal & Dust",
    link: "https://a.co/d/9r89DHz",
    cover: MetalAndDustCover,
  },
  {
    title: "Awakening Protocol",
    link: "https://a.co/d/d1DK1bU",
    cover: AwakeningProtCover,
  },
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
