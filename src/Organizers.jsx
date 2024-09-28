import React from "react";
import "./Organizers.css"; // Assume you'll add some CSS for styling

const Organizers = () => {
  return (
    <div className="organizers-container" id="organizers-section">
      {/* Organizers Section */}
      <h1 style={styles.heading}>
        Organizing <span style={styles.highlight}>Committee</span>
      </h1>
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
            <h3>CO-ORDINATOR</h3> {/* Moved to the first column */}
            <p>Dr. Shital Solanki</p>
            <p>Prof. Vidisha Thakkar</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="organizers-column">
          <div className="organizer-group">
            <h3>CO CO-ORDINATOR</h3>
            <p>Dr. Purvi Ramanuj</p>
            <p>Prof. Alka Patel</p>
            <p>Prof. Swati Patel</p>
            <p>Prof. Nirjari Desai</p>
          </div>
          <div className="organizer-group">
            <h3>ORGANIZING COMMITTEE</h3>
            <p>Dr. Tejas Modi</p>
            <p>Dr. Diya Vadhwani</p>
            <p>Dr. Maitri Vaghela</p>
            <p>Dr. Ritu Padhiar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  heading: {
    fontSize: "24px", // Adjusted font size
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
