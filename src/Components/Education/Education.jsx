import React from "react";
import { experiences } from "../../assets/education.js";
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="education-title">
        <h1>My Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="education-container">
        {experiences.map((education, index) => (
          <div className="education-format" key={index}>
            <div
              className="education-icon"
              style={{ backgroundColor: education.iconBg }}
            >
              <img src={education.icon} alt={education.title} />
            </div>
            <h3>{education.date}</h3>
            <h2>{education.title}</h2>
            <p>{education.company_name}</p>
            <ul>
              {education.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
