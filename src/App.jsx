import React from "react";
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";

function App() {
  return (
    <div className="App">
      <section className="header">
          <NavBar />
      </section>
      <section className="body">
          <UserProfile />
          <Posts />
          <Contacts />
          </section>
    </div>
  );
}

export default App;
