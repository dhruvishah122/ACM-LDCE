import React from "react";
import "./Organizers.css"; // Custom CSS for styling

const Organizers = () => {
  return (
    <div className="organizers-section" id="organizers-section">
      <div className="organizers-card">
        {/* Header Section */}
        <div className="committee-header">
          <div className="header-left">
            <h1>
              <span style={styles.blueText}>LDCE </span>
              <span style={styles.yellowText}>COMMITTEE</span>
            </h1>
          </div>
          <div className="header-right">
            <h1>
              <span style={styles.blueText}>ADANI UNIVERSITY </span>
              <span style={styles.yellowText}>COMMITTEE</span>
            </h1>
          </div>
        </div>

        {/* Organizers Section */}
        <div className="organizers-grid">
          {/* Left Column */}
          <div className="organizers-column">
            <div className="organizer-group">
              <h3>PATRON</h3>
              <p>Dr. Nilay N Bhuptani</p>
            </div>
            <div className="organizer-group">
              <h3>CONVENER</h3>
              <p>Dr. Hiteshi Diwnaji</p>
              <p>Dr. Rutvi Shah</p>
            </div>
            <div className="organizer-group">
              <h3>CO-ORDINATOR</h3>
              <p>Dr. Shital Solanki</p>
              <p>Prof. Vidisha Thakkar</p>
            </div>
            <div className="organizer-group">
              <h3>CO CO-ORDINATOR</h3>
              <p>Dr. Purvi Ramanuj</p>
              <p>Prof. Alka Patel</p>
              <p>Prof. Swati Patel</p>
              <p>Prof. Nirjari Desai</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="organizers-column">
            <div className="organizer-group">
              <h3>PATRON</h3>
              <p>Dr. Ravi P Singh</p>
            </div>
            <div className="organizer-group">
              <h3>CONVENER</h3>
              <p>Prof. (Dr). Hitesh Chhinkaniwal</p>
            </div>
            <div className="organizer-group">
              <h3>EVENT CO-ORDINATOR</h3>
              <p>Dr. Vaishali Chourey</p>
              <p>Dr. Nikita Joshi</p>
              <p>Dr. Ritika Ladha</p>
            </div>
            <div className="organizer-group">
              <h3>ORGANIZING COMMITTEE</h3>
              <p>Dr. Tejas Modi</p>
              <p>Dr. Diya Vadhwani</p>
              <p>Dr. Maitri Vaghela</p>
              <p>Dr. Ritu Patidar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  blueText: {
    color: "#003366",
  },
  yellowText: {
    color: "#ffb347",
  },
};

export default Organizers;
