import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "@/context/SateContext";
import Aos from "aos";
import "aos/dist/aos.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const navList = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "ride",
      path: "ride",
    },
    {
      name: "services",
      path: "services",
    },
    {
      name: "about",
      path: "about",
    },
    {
      name: "reviews",
      path: "reviews",
    },
  ];

  const { showCart, setShowCart, totalQuantities, firstName } = useStateContext();
  const [view, setView] = useState(false);

  const HandleMenu = () => {
        setView(true)
  }

  const HandleClick = () => {
    setView(!view);
  };
  return (
    <div className="">
      <div className="header">
        <div className="logo" data-aos="zoom-in">
          <img src="/jeep.png" alt="logo" />
        </div>
        {view && (
          <div>
            <div className="overlay"></div>

            <div className="nav-box">
              <AiOutlineClose
                onClick={HandleClick}
                size={"21rem"}
                style={{
                  position: "absolute",
                  left: "-140px",
                  top: "150px",
                  paddingTop: "300px",
                }}
              />
           
            </div>
          </div>
        )}
           <ul className="list" data-aos="fade-up-left">
                {navList.map((item, index) => (
                  <nav to={item.path} key={index} className="nav-list">
                    {item.name}
                  </nav>
                ))}
              </ul> 
        <div className="btns">
          <span className="btn1" data-aos="fade-up-left">
            <RxAvatar className="rx"/>
          </span>
          <span className="btn2" data-aos="fade-up-right">
            {firstName && <h1>Hello {firstName}</h1>}
          </span>
        </div>
        <GiHamburgerMenu onClick={HandleMenu} className="menu" />
      </div>
      {/* <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />} */}
    </div>
  );
};

export default Navbar;
