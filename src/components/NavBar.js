import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <a href="/">Home</a>
        <a href="/about">Resume</a>
        <a href="/services">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;