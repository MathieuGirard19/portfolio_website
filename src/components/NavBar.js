import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <a href="/">Home</a>
        <a href="/resume">Resume</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;