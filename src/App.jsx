import React from "react";
import "./index.css";
import Navbar from "./Components/NavBar"
import UserProfile from "./Components/UserProfile"
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard";
import Post from "./Components/Post";
function App() {
  return (<>
  <Navbar/>,
  <UserProfile/>
  <Contacts/>
  <ContactUserCard/>
  <Post/>
  </>
   );
  }

export default App;
