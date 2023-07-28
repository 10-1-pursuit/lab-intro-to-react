import React from "react";
import "./index.css";
import Navbar from  "./Components/NavBar.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import Posts from "./Components/Posts.jsx";
// import Post from "./Components/Post.jsx";
import Contacts from "./Components/Contacts.jsx";
import ContactCard from  "./Components/ContactUserCard.jsx";


function App() {
  return (
    <div className="app-container">
      <div className="top-section">
        <Navbar />
        <UserProfile />
      </div>
      <div className="bottom-section">
        <div className="container">
          <div className="column">
            <Posts />
          </div>
          <div className="column">
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



