import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section className="about" id="about">
        <div className="heading" data-aos="slide-up">
          <span>About Us</span>
          <h1>Best Customer Experience</h1>
        </div>
        <div className="about-container">
          <div className="about-img"  data-aos="zoom-in-left">
            <img data-aos="slide-right" src="/about.png" alt="" />
          </div>
          <div className="about-text" data-aos="slide-left">
            <span data-aos="fade-in">About Us</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, libero velit voluptatibus culpa quo saepe, commodi
              corrupti ipsa a voluptate necessitatibus ducimus doloribus ipsum
              eos dolore iste natus veniam maiores amet obcaecati voluptatem
              quis?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae repellat sit numquam possimus sunt sapiente. Neque, nam
              repudiandae?
            </p>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
