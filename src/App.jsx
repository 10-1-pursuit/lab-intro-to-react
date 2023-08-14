import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts/Contacts";
import ContactUserCard from "./Components/Contacts/ContactUserCard";
import NavBar from "./Components/NavBar";
import Post from "./Components/Posts/Post";
import Posts from "./Components/Posts/Posts";
import UserProfile from "./Components/UserProfile/UserProfile";

function App() {
  return <>
    {/* <p>Yes Hello, world!</p> */}
    <div className="grid-container">

      <div>
        <UserProfile />
      </div>

      <div>
        <Contacts />
        <div><ContactUserCard /></div>
      </div>
      <NavBar />
      {/* <Post /> */}
      {/* <Posts /> */}
      {/* <UserProfile /> */}

    </div>
  </>
};

export default App;
