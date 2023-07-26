import React , {useState} from "react";
import "./index.css";

import Nav from "./Components/NavBar"
import Post from "./Components/Post/"
import formatCards from "./Components/ContactUserCard";

console.log(formatCards)

function App() {

  return (
    <div className="App">
      <h2>Feed</h2>
      <Nav />
      <Post />
      <Post />
      {/* <User />
    <formatCards />
    {cards } */}
    </div>
  );
}

export default App;
