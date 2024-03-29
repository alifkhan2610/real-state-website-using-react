import React from "react";
import "./Hero.css";
import { MdLocationOn } from "react-icons/md";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* hero left side  */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Most Suitable <br /> Property.
            </h1>
          </div>

          <div className="flexColStart secondaryText hero-des">
            <span>Find a varity of properties that suit it very easilty</span>
            <span>Forget all difficalitis in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
            <MdLocationOn color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8000} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1900} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy customer</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp  start={20} end={28} duration={3}/>
                <span>+</span>
              </span>
              <span className="secondaryText">Award Wining</span>
            </div>
          </div>
        </div>
        {/* hero right side  */}
        <div className=" flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
