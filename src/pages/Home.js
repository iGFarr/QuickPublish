import React from "react";
import ServiceOverview from "../components/ServiceOverview";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page-background">
      <header className="jumbotron">
        <h1>Welcome to QuickSaavik!</h1>
        <p>
          QuickPublish is the only site that utilizes LLM's to turn your idea
          into a finished and published book in a matter of hours or days. Other
          sites use humans to ghostwrite your book, costing thousands of dollars
          and taking weeks or months to deliver.
        </p>
        <ServiceOverview />
        <a href="/services" className="btn btn-primary">
          Learn More
        </a>
        <Footer />
      </header>
    </div>
  );
};

export default Home;
