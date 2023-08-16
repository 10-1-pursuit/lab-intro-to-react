import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts/Contacts";
import ContactUserCard from "./Components/Contacts/ContactUserCard";
import NavBar from "./Components/NavBar";
import Post from "./Components/Posts/Post";
import Posts from "./Components/Posts/Posts";
import UserProfile from "./Components/UserProfile/UserProfile";

function App() {
  return (
    <>
      {/* <p>Yes Hello, world!</p> */}
      <div className="grid-container">
        
          <NavBar />
        

        <div>
          <UserProfile />
          <Posts />
        </div>

        <div>
          <Contacts />
        </div>
      </div>
    </>
  );
}
export default App;
