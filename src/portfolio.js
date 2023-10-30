import React from "react";

const Portfolio = () => (
  <div className="portfolio">
    <div className="header">
      <h2>Anumolu Hima Varsha</h2>
      <p>
        <a href="mailto:himavarshaanumolu100@gmail.com">
          himavarshaanumolu100@gmail.com
        </a>
      </p>
      <p>+91 8978092767</p>
    </div>

    <div className="education">
      <h2>Education</h2>

      <div className="education-item">
        <h4>Undergraduation</h4>
        <p>
          Currently pursuing B.Tech(Specialization in Artificial Intelligence
          and Machine Learning) in VIT-AP University
        </p>
        <p>CGPA: 8.77</p>
      </div>

      <div className="education-item">
        <h4>Higher secondary education</h4>
        <p>Narayana junior college,Vijayawada</p>
        <p>Score: 97.6%</p>
      </div>

      <div className="education-item">
        <h4>Secondary schooling</h4>
        <p>Wisewoods Inernational School,Gudivada</p>
        <p>Score: 10.0 CGPA</p>
      </div>
    </div>

    <div className="skills">
      <h2>Languages Known</h2>
      <ul>
        <li>Java</li>
        <li>Python</li>
        <li>HTML and CSS</li>
        <li>BootStrap</li>
        <li>React JS</li>
        <li>NodeJS</li>
        <li>SQL</li>
      </ul>
    </div>

    <div className="interests">
      <h2>Interests and Hobbies</h2>
      <ul>
        <li>Reading Books</li>
        <li>Watching Movies</li>
      </ul>
    </div>
  </div>
);

export default Portfolio;
