import React from "react";
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import Post from './Components/Post';
import './index.css'

function App() {
  return (  // <NavBar />
    <div>
      <NavBar />
      <UserProfile />
      <Post />
    </div>
  );
}

export default App; // export default NavBar; 
