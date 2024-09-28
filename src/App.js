import './App.css';
import React, { useRef } from 'react';
import Navbar from './Navbar';  
import Schedule from './Schedule';
import About from './About';
import DetailsSection from './Details';
import Register from './Register'; // Import Register component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Organizers from './Organizers';

function App() {
  const detailsRef = useRef(null);    // Ref for the details section
  const scheduleRef = useRef(null);   // Ref for the schedule section
  const registerRef = useRef(null);   // Ref for the register section
  const organizersRef = useRef(null);
  return (
    <div className="App">
      {/* Pass all refs to Navbar */}
      <Navbar 
        detailsRef={detailsRef} 
        scheduleRef={scheduleRef} 
        registerRef={registerRef} 
        organizersRef={organizersRef}
      />
      
      <About />

      {/* Details Section */}
      <section id="details-section" ref={detailsRef}>
        <DetailsSection />
      </section>

      {/* Schedule Section */}
      <section id="schedule-section" ref={scheduleRef}>
        <Schedule />
      </section>

      {/* Register Section */}
      <section id="register-section" ref={registerRef}>
        <Register /> {/* Your registration form or section */}
      </section>
      <section id="organizer-section" ref={organizersRef}>
        <Organizers /> {/* Your registration form or section */}
      </section>
    </div>
  );
}

export default App;
