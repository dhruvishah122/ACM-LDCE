import React, { useState, useEffect, useRef } from "react";
import "./react.css"; // Custom CSS for styling

const Navbar = ({ detailsRef, scheduleRef, registerRef, organizersRef }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track toggle button
  const menuRef = useRef(null); // Ref to track menu element
  const navbarHeight = 70; // Set this to the height of your sticky navbar (in pixels)

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
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Generic scroll function with offset for sticky navbar
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      const yOffset = -navbarHeight; // Offset for sticky navbar
      const yPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
    setIsOpen(false); // Close the navbar after scrolling
  };

  return (
    <nav className="navbar position-sticky sticky-top">
      <div className="navbar-logo">
        <img src="/ldce-logo.png" alt="LDCE Logo" className="logo" />
        <h1>ACMI-W 2024</h1>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`} ref={menuRef}>
        <li>
          <a href="#about" onClick={() => scrollToSection(detailsRef)}>
            About the Event
          </a>
        </li>
        <li>
          <a href="#register" onClick={() => scrollToSection(registerRef)}>
            Register
          </a>
        </li>
        <li>
          <a href="#schedule" onClick={() => scrollToSection(scheduleRef)}>
            Schedule
          </a>
        </li>
        <li>
          <a href="#organizers" onClick={() => scrollToSection(organizersRef)}>
            Organizers
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
