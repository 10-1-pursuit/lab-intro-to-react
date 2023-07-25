import React from "react";
import "./index.css";
import Posts from "./Components/Posts.jsx";
import NavBar from "./Components/NavBar.jsx";
import Contacts from "./Components/Contacts.jsx";
import UserProfile from "./Components/UserProfile.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="column1">
          <UserProfile />
          <Posts />
        </div>
        <div className="column2">
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
