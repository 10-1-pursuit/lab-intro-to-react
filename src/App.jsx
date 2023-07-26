import React from "react";
import "./index.css";
import Posts from "./Components/Posts.jsx"
import NavBar from "./Components/NavBar.jsx"
import UserProfile from "./Components/UserProfile.jsx"
import Contacts from "./Components/Contacts.jsx"
import Post from "./Components/Post.jsx"


function App() {
  // return <p>Hello, world!</p>;


  return (
    <> 
    <NavBar />
    <UserProfile />
    <Posts />
    <Post />

    <Contacts />
    </>
  )
}

export default App;
