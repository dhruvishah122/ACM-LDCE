// Schedule.js
import React from 'react';
import './Schedule.css'; // Assume you'll add some CSS for styling

const Schedule = () => {
  return (
    <div className="schedule-container" id="schedule-section">
 <h1 style={styles.heading}>
          Schedule <span style={styles.highlight}>Details</span>
        </h1>      <div className="schedule-days">
        {/* Day 1 */}
        <div className="schedule-day">
          <h3 className="day-title">DAY 1</h3>
          <ul className="events-list">
            <li>
              <strong>EXPERT TALK BY EMINENT SPEAKER</strong>
              <p>(Expert talk by Prof. Manisha Padala and Dr. Kartika Vijayan.)</p>
            </li>
            <li>
              <strong>PAPER PRESENTATION</strong>
              <p>(Participants will deliver a structured presentation showcasing their research and insights on a given topic.)</p>
            </li>
            <li>
              <strong>CODING COMPETITION</strong>
              <p>(A two-hour competitive problem-solving challenge using C/C++ or Java.)</p>
            </li>
          </ul>
        </div>
        {/* Day 2 */}
        <div className="schedule-day">
          <h3 className="day-title">DAY 2</h3>
          <ul className="events-list">
            <li>
              <strong>IDEATHON</strong>
              <p>(Students innovate solutions for sustainable development challenges.)</p>
            </li>
            <li>
              <strong>POSTER PRESENTATION</strong>
              <p>(Finalists present their concepts and prototypes to the community for evaluation.)</p>
            </li>
            <li>
              <strong>PANEL DISCUSSION</strong>
              <p>(Experts engage in discussions to evaluate sustainable development ideas.)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const styles={
    heading: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#003366',
        marginBottom: '10px',
        borderBottom: '2px solid #003366',
        display: 'inline-block',
        paddingBottom: '5px',
      },
      highlight: {
        color: '#ffb347',
      },
}
export default Schedule;
