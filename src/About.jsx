// src/components/About.jsx

import React from 'react';
import './about.css'; // Importing CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <h1 className="event-title">ACMI-W REGIONAL CELEBRATION-2024</h1>
      <h2 className="theme">THEME</h2>
      <p className="theme-text">“EMERGING TECHNOLOGIES FOR SUSTAINABLE DEVELOPMENT”</p>
      <h3 className="jointly-organized">JOINTLY ORGANIZED BY:</h3>
      <p className="organizers">
        ACM-W STUDENT CHAPTERS - L.D. COLLEGE OF ENGINEERING, <br />
        ADANI UNIVERSITY AND ACM AHMEDABAD PROFESSIONAL CHAPTER
      </p>
      <div className="event-dates">
        <div className="date">
          <strong>18TH OCTOBER, 2024</strong> <br />
          IT DEPARTMENT, L.D. COLLEGE OF ENGINEERING
        </div>
        <div className="date">
          <strong>19TH OCTOBER, 2024</strong> <br />
          ADANI UNIVERSITY
        </div>
      </div>
    </div>
  );
};

export default About;
