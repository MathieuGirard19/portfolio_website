import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="/contact">Contact</a>
        <a href={process.env.PUBLIC_URL + '/Mathieu Girard Resume.pdf'} download={process.env.PUBLIC_URL + '/Mathieu Girard Resume.pdf'}>Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;