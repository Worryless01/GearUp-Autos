"use client";
import Link from "next/link";
import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useStateContext } from "@/context/SateContext";

const index = () => {
  const { firstName, setName } = useStateContext();

  // const submitForm =(e) => {
  //   e.preventDefault()
  //   location.assign('/Home')
  //   setName(firstName)
  // }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <nav className="sign-nav">
        <div className="logo">
          <img src="jeep.png" alt="logo" data-aos="zoom-in" />
          <div className="logo-name" data-aos="slide-left">
            <h3>GearUp Autos</h3>
          </div>
        </div>
        <div className="lists">
          <Link className="b" href="" data-aos="fade-up-left">
            buy car
          </Link>
          <Link className="b" href="" data-aos="fade-up-right">
            sell car
          </Link>
        </div>
      </nav>
      <div className="hero">
        <div className="auto">
          <div className="jeeper">
            <img src="about.png" alt="jeep" data-aos="slide-right" />
          </div>
          <div className="download" data-aos="fade-down">
            <p>
              Explore a diverse range of premium vehicles at our car sales
              website. Find your ideal ride with ease, from sleek sedans to
              robust SUVs. Enjoy competitive prices, detailed listings, and
              flexible financing options. Your perfect car awaits—start your
              search now
            </p>
          </div>
          <div className="down-app" data-aos="fade-up">
            <img src="appstore.png" alt="app" />
            <img src="ios.png" alt="app" />
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="form-container"
          data-aos="fade-down"
        >
          <h2>Sign Up</h2>
          <div className="info">
            <label htmlFor="fn" className="firstName">
              First name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              required
            />
            <label htmlFor="ln">Last name</label>
            <input type="text" placeholder="Last name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="" placeholder="Email" />
            <label htmlFor="phone">Phone number</label>
            <input type="text" />
            <label htmlFor="pass">Password</label>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="check">
            <input type="checkbox" name="" id="" required/>
            <p>
              Yes, I would like to hear about GearUp Autos exclusive deals and
              discounts
            </p>
          </div>
          <div className="check-btn">
            <Link href="/Home">
              <button>Create Account</button>
            </Link>
          </div>
          <div className="bar">
            <p>
              Already have an account{" "}
              <Link href="" className="link">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
