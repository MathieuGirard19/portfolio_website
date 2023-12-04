import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="/contact">Contact</a>
        <a href={'https://mathieu-girard.s3.us-east-2.amazonaws.com/portfolio-website/resume.pdf'}>Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;