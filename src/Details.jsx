import React from 'react';

const DetailsSection = () => {
  return (

    <div style={styles.container}>
        <div><br></br></div>
      <div style={styles.section}>
        <h2 style={styles.heading}>
          About <span style={styles.highlight}>ACM</span>
        </h2>
        <p style={styles.paragraph}>
          ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life-long learning, career development, and professional networking.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>
          About <span style={styles.highlight}>The Celebration</span>
        </h2>
        <p style={styles.paragraph}>
          India's journey to net-zero emissions emphasizes green economic growth, renewable energy, sustainable finance, and cutting-edge technologies. Students at all levels, as future leaders, are crucial to achieving sustainable development. Collaboration between industry and academia will spark innovation. This event celebrates and empowers women in computing, fostering unity and progress towards shared sustainability goals.
        </p>
      </div>

      <div style={styles.details}>
        <h2 style={styles.detailsHeading}>Participation Eligibility and Details</h2>
        <ul style={styles.list}>
          <li>All female teachers and students of UG and PG courses, and PhD scholars are eligible to participate.</li>
          <li>A fee of 50 rupees per participant (including both days) is to be paid on the day of the event.</li>
          <li>Certificates will be provided to all registered participants.</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display:  'inline-block'
  },
  section: {
    marginBottom: '30px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#003366',
    marginBottom: '10px',
    borderBottom: '2px solid #003366',
    display: 'inline-block',
    paddingBottom: '5px',
  },
  highlight: {
    color: '#ffb347',
  },
  paragraph: {
    fontSize: '16px',
    color: '#444',
    lineHeight: '1.6',
    marginTop: '10px',
    textAlign: 'justify',
  },
  details: {
    backgroundColor: '#003366',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
  },
  detailsHeading: {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '15px',
    borderBottom: '2px solid white',
    display: 'inline-block',
    paddingBottom: '5px',
  },
  list: {
    fontSize: '16px',
    lineHeight: '1.8',
    paddingLeft: '20px',
  },
};

export default DetailsSection;
