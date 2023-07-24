import React from "react";
import "./index.css";
import User from "./Components/ContactUserCard"
import Nav from "./Components/NavBar"
import Post from "./Components/Post/"
import FormatCards from "./Components/ContactUserCard";




function App() {
  return (
    <div className="App">
    
      <h2>Feed</h2>
      <Nav />
      <Post />
      <Post />
      <User />
    <FormatCards />
    </div>
  );
}

export default App;
