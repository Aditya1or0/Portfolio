import React from "react";
import "./Hero.css";
import heroimg from "../../assets/heroimg.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div className="hero">
      <img src={heroimg} alt="" />
      <h1>
        <span>Hi, I'm Aditya Sharma</span>
      </h1>
      <p>
        I'm a Mern Stack Developer with a passion for creating dynamic and
        responsive websites.{" "}
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
