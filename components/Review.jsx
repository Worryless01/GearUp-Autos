import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const Review = () => {
  return (
    <div>
      <section className="reviews" id="reviews">
        <div className="heading">
          <span>Reviews</span>
          <h1>What Our Customer Say</h1>
        </div>
        <div className="reviews-container">
          <div className="box">
            <div className="rev-img">
              <img src="/rev1.jpg" alt="" />
            </div>
            <h2>Someone Name</h2>
            <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              placeat quas odit beatae, impedit perspiciatis soluta similique
              maxime?
            </p>
            <button>View Details</button>

          </div>
          <div className="box">
            <div className="rev-img">
              <img src="/rev2.jpg" alt="" />
            </div>
            <h2>Someone Name</h2>
            <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              ullam odio dicta dolorem, quos quam repudiandae eos earum?
            </p>
            <button>View Details</button>
          </div>
          <div className="box">
            <div className="rev-img">
              <img src="/rev3.jpg" alt="" />
            </div>
            <h2>Someone Name</h2>
            <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              exercitationem voluptates nisi et sint. Ab, natus. Cupiditate,
              quos?
            </p>
            <button>View Details</button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
