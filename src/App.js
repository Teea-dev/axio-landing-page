import React, { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import axio from "./images/AXIO Icon.png";
import image from "./images/Macbook.png";
import "./style.css";
import {gsap} from "gsap";
import "./App.css";
import { FaDeviantart } from "react-icons/fa";

function App() {
  const sectionRef = useRef(null);
  


  // const intersection = useIntersection(sectionRef, {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.5,
  // });

  // const fadeIn = (element) => {
  //   gsap.from(element, 1, { opacity: 1, y: -100, ease: "power4.out" , stagger:{
  //     amount:0.3
  //   } });
  // };
  // const fadeOut = (element) => {
  //   //  gsap.to(element, 1, { opacity: 0, y: -20, ease: "power4.out", delay: 1 });
  // };

  // intersection && intersection.intersectionRatio < 0.5
  //   ? fadeOut(".fadeIn")
  //   : fadeIn(".fadeOut");
  

  return (
    <>
      <div className="body">
        <div className="header">
          <img src={axio} alt="icon" className="icon" />

          <a className="btn btn-primary first-button d-none d-md-block">
            {" "}
            Join the waitlist
          </a>
        </div>
        <div className="introduction">
          <div className="intro-text">
            <p className="main-text ">
              Get connected with people <br /> traveling to the same
              <br />
              destination as your goods.
            </p>
          </div>
          <div className="mini-text">
            <p className="mini-paragraph">
              Our mission is to provide decentralized <br /> delivering
              processes and create an opportunity for travelers to earn
            </p>
          </div>
          <a className="btn btn-primary second-button">Join the waitlist</a>
        </div>
      </div>
      <div >
        <img 
        ref={el=>{sectionRef = el}} src={image} alt="laptop" className="laptop fadeIn" />
      </div>
      <div className="form">
        <p className="form-heading">
          Be the first to enjoy our endless services.Join the waitlist!!
        </p>

        <form className="input-space">
          <div>
            <div
              className="
                  form-row"
            >
              <div className="input">
                <div className=" names">
                  <div className="col">
                    <input
                      className="first-name form-control"
                      type="text"
                      placeholder="First Name"
                    ></input>
                  </div>
                </div>
                <div className="col">
                  <input
                    className="last-name form-control"
                    type="text"
                    placeholder="Last Name"
                  ></input>
                </div>
              </div>
            </div>
            <input
              type="email"
              className="mt-3 email"
              placeholder="Email Address"
            ></input>

            <div>
              <button type="submit" className="btn btn-primary submt mt-3">
                {" "}
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
