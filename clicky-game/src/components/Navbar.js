import React from 'react';

const Navbar = () => (
  <nav className="purple darken-4">
    <div className="nav-wrapper row">
      <div className="container">
        <a href="#" className="brand-logo">Clicky Game</a>
        <ul className="right">
          <li>Click an image to begin!</li>
          <li>Score: 0 | Top Score: 0</li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;