import React from 'react';

function ChildMenu(props) {
  return (
    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
      <li>
        <a className="dropdown-item" href="index.html" target="_blank">
          Menu Child 1
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="home-two.html" target="_blank">
          Menu Child 2
        </a>
      </li>
    </ul>
  );
}

export default ChildMenu;
