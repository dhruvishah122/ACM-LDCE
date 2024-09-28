import React, { useState, useEffect, useRef } from 'react';
import './react.css'; // Custom CSS for styling

const Navbar = ({ detailsRef, scheduleRef, registerRef, organizersRef }) => { // Added registerRef and organizersRef as props
  const [isOpen, setIsOpen] = useState(false); // State to track toggle button
  const menuRef = useRef(null); // Ref to track menu element

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  // Close menu if clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Scroll to the details section when "About the Event" is clicked
  const scrollToDetails = () => {
    if (detailsRef && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the navbar after scrolling
  };

  // Scroll to the schedule section when "Schedule" is clicked
  const scrollToSchedule = () => {
    if (scheduleRef && scheduleRef.current) {
      scheduleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the navbar after scrolling
  };

  // Scroll to the register section when "Register" is clicked
  const scrollToRegister = () => {
    if (registerRef && registerRef.current) {
      registerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the navbar after scrolling
  };

  // Scroll to the organizers section when "Organizers" is clicked
  const scrollToOrganizers = () => {
    if (organizersRef && organizersRef.current) {
      organizersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the navbar after scrolling
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/ldce-logo.png" alt="LDCE Logo" className="logo" />
        <h1>ACMI-W 2024</h1>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`} ref={menuRef}>
        <li><a href="#about" onClick={scrollToDetails}>About the Event</a></li>
        <li><a href="#register" onClick={scrollToRegister}>Register</a></li> {/* Added smooth scroll to register */}
        <li><a href="#schedule" onClick={scrollToSchedule}>Schedule</a></li>
        <li><a href="#organizers" onClick={scrollToOrganizers}>Organizers</a></li> {/* Added smooth scroll to organizers */}
      </ul>
    </nav>
  );
};

export default Navbar;
