import React from "react";
import "./index.css";
import Navbar from "./Components/NavBar"
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";
import Post from "./Components/Post";



function App() {
 return(
  <>
   <Navbar/>
   <UserProfile/>
   <Contacts/>
   <Post></Post>
   </>
 )
}

export default App;
