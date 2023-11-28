import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="/contact">Contact</a>
        <a href={process.env.PUBLIC_URL + '/assets/resume.pdf'} download={'Mathieu Girard Resume.pdf'}>Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;