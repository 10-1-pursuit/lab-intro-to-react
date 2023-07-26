import React from "react";
import "./index.css";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import "./Components/App.css"

function App() {
  return (
    <div className="App">
        <h1>App</h1>
        <NavBar/>
      <div className="AppContainer">
        <div className="one">
          <UserProfile/>
        </div>
      <div className="two">
          <Posts/>
        </div>
      <div className="three">
          <Contacts/>
          </div> 
      </div>
    </div>
  )
}

export default App;
