import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
       <NavBar/>
       <UserProfile/>
       <Posts/>
       <Contacts/>
    </div>
  )
}

export default App;
