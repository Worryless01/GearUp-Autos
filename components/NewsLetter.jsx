import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <section className="newsletter">
        <h2>Subscribe To Newsletter</h2>
        <div className="box1">
          <input type="text" placeholder="Enter Your Email..." />
          <a href="#" className="btn2">
            Subscribe
          </a>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
