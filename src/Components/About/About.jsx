import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">{/* <img></img> */}</div>
      </div>
      <div className="about-right">
        <div className="about-para">
          <p>
            As a passionate MERN stack developer with a strong foundation, I
            thrive on turning innovative ideas into robust web applications.
            <span>
              My expertise in MongoDB, Express.js, React, and Node.js enables me
              to create dynamic, user-friendly interfaces that enhance user
              experiences...
            </span>
          </p>
        </div>
        <div className="about-skills">
          <div className="about-skill">
            <p>Frontend </p>
            <hr style={{ width: "70%" }} />
          </div>
          <div className="about-skill">
            <p>Backend</p>
            <hr style={{ width: "50%" }} />
          </div>
          <div className="about-skill">
            <p>Web Development</p>
            <hr style={{ width: "50%" }} />
          </div>
          <div className="about-skill">
            <p>Java</p>
            <hr style={{ width: "50%" }} />
          </div>
          <div className="about-skill">
            <p>C++</p>
            <hr style={{ width: "50%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
