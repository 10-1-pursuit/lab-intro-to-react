import React from "react";
import NavBar from "./Components/NavBar";
import Links from "./Components/Links";
import Header from "./Components/Header";
import UserProfile from "./Components/UserProfile";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import ContactUserCard from "./Components/ContactUserCard";
import "./index.css"

function App() {

  const profilePic = "src/profile.png"
  return (
    <>
      <div>
        <Header />
        <img src={profilePic} />
        <NavBar />
        <Post />
        <Posts />
        <UserProfile />
        <ContactUserCard />
      </div>
    </>
  )
}

export default App;

