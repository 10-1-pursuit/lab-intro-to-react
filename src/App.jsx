import React from "react";
import "./index.css";
import NavBar from '/src/Components/NavBar.jsx'
import UserProfile from '/src/Components/UserProfile.jsx'
import Posts from '/src/Components/Posts.jsx'
import Contacts from '/src/Components/Contacts.jsx'

function App() {
  return (
  <>
  <p>Hello, world!</p>
  
  <div className="Container">
    <NavBar />

    <UserProfile />

    <Posts />

    <Contacts />
  </div>
  </>
  
  );
  

}

export default App;
