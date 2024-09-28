// Register.js
import React from 'react';
import './Register.css'; // Assume you'll add some CSS for styling

const Register = () => {
  return (
    <div className="register-container" id="register-section">
      <h1 style={styles.heading}>
        Registration <span style={styles.highlight}>Details</span>
      </h1>
      <div className="registration-days">
        {/* Coding Competition */}
        <div className="registration-day">
          <h3 className="event-title">CODING COMPETITION</h3>
          <p>A live competitive problem-solving competition in the timeframe of two hours using C/C++ or Java.</p>
          <p><strong>Registration Deadline:</strong> 14/10/2024</p>
          <p>
            <a href="https://forms.gle/w9HpZEpvcdXLUgyYA" target="_blank" rel="noopener noreferrer" className="register-link">Register Here</a>
          </p>
        </div>
        {/* Paper Presentation */}
        <div className="registration-day">
          <h3 className="event-title">PAPER PRESENTATION</h3>
          <p>Participants will present their research and insights on topics related to sustainable development.</p>
          <p><strong>Registration Deadline:</strong> 14/10/2024</p>
          <p>
            <a href="https://forms.gle/L8CiLJ11ntB9dan76" target="_blank" rel="noopener noreferrer" className="register-link">Register Here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  heading: {
    fontSize: '24px', // Adjusted font size
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
};

export default Register;
