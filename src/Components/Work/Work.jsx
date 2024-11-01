import React from "react";
import "./Work.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Work = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <img className="work-img" src={work.w_img} alt={work.w_name} />
            </a>
          );
        })}
      </div>
      <a
        href="https://github.com/Aditya1or0?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mywork-showmore">
          <p>Show More</p> <img src={arrow_icon} alt="" />
        </div>
      </a>
    </div>
  );
};

export default Work;
