import React from "react";
import "./Organizers.css"; // Custom CSS for styling

const Organizers = () => {
  return (
    <div className="organizers-section" id="organizers-section">
      <div className="organizers-card">
        {/* Organizers Section */}
        <h1 style={styles.heading}>
          Organizing <span style={styles.highlight}>Committee</span>
        </h1>
        <div className="organizers-grid">
          {/* Left Column */}
          <div className="organizers-column">
            <div className="organizer-group">
            <h1 style={styles.heading}>
          LDCE <span style={styles.highlight}>Committee</span>
        </h1>
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
            <h1 style={styles.heading}>
          ADANI UNIVERSITY <span style={styles.highlight}>Committee</span>
        </h1>
              <h3>PATRON</h3>
              <p>Dr. Ravi P Singh</p>
            </div>
            <div className="organizer-group">
              <h3>CONVENER</h3>
              <p> Prof. (Dr). Hitesh Chhinkaniwal</p>
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
  heading: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#003366",
    marginBottom: "10px",
    borderBottom: "2px solid #003366",
    display: "inline-block",
    paddingBottom: "5px",
  },
  highlight: {
    color: "#ffb347",
  },
};

export default Organizers;
