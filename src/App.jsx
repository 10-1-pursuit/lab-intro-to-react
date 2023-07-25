import React from "react";
import "./index.css";
import UserProfile from "./UserProfile";
import Posts from "./Posts";
import NavBar from "./NavBar";
import Contacts from "./Contacts";

function App() {
  return (
    <>
      <NavBar />
      <UserProfile />
      <Posts />
      <Contacts />
    </>
  );
}

export default App;
