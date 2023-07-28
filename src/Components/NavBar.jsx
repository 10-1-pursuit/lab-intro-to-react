import React from 'react';

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "pink" }}>
      <ul style={{display: 'inline-flex', listStyleType: "none"}}>
        <li style={{margin: '8px'}}>
          <button>What is Pursuit?</button>
        </li>
        <li style={{margin: '8px'}}>
          <button>Create an Account</button>
        </li>
        <li style={{margin: '8px'}}>
          <button>Sign In</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
