import React from "react";
import { BiSearchAlt, BiSelectMultiple, BiSolidPurchaseTag } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const Purchase = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); 
    }, []);
  return (
    <div>
      <section className="ride" id="ride">
        <div className="heading">
          <span data-aos="fade-in">How Its Work</span>
          <h1 data-aos="fade-in">Purchase with 3 Easy Steps</h1>
        </div>
        <div className="ride-container">
          <div className="box" data-aos="slide-right">
            <BiSearchAlt className="bx"/>
            <h2>Research</h2>
            <p>
              Begin by researching different car models, makes, and features
              that align with your preferences and needs. Consider factors such
              as fuel efficiency, size, safety ratings, and technology features.
            </p>
          </div>
          <div className="box" data-aos="slide-up">
            <BiSelectMultiple  className="bx"/>
            <h2>Select</h2>
            <p>
              Use search filters to refine your choices based on make, model,
              price, and mileage. Ensure to verify crucial details, prioritize
              safety features, and finalize your decision.
            </p>
          </div>
          <div className="box" data-aos="slide-left">
            <BiSolidPurchaseTag className="bx" />
            <h2>Purchase And Secure Payment</h2>
            <p>
              Arrange secure payment through the website's provided payment
              methods, such as credit/debit cards, wire transfers. Be cautious
              and ensure that the payment process is secure before proceeding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purchase;
