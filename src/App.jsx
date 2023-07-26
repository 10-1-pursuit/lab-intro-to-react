import React from "react";
import "./index.css";
import NavBar from './Components/NavBar'
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./App.css"
function App() {

  const defaultPic = 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'

  return (
    <div className="App1">
      <div className="border">
        <h1>Kenia Decoteau</h1>
        <h3> React Creator</h3>
        <img src={defaultPic} width="200"  height='200'/>
      </div>
      <NavBar />
      <UserProfile />
      <Posts />
  <Contacts />
    </div>
  )


}

export default App;
