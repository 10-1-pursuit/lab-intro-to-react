import React from "react";
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import './index.css'

function App() {
  return (  // <NavBar />
    <div>
      <NavBar />
      <UserProfile />
    </div>
  );
}

export default App; // export default NavBar; 
