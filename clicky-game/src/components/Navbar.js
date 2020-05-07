import React from 'react';

const Navbar = () => (

  <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <a className="navbar-brand" href="/">Clicky Game</a>
    <ul className="navbar-nav">
      <li>
        Click an image to begin!
      </li>
      <li>
        Score: 0 | Top Score: 0
      </li>
    </ul>
  </nav>
);

export default Navbar;