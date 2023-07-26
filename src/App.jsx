import React from "react";
import "./index.css";
import Header from "./Components/NavBar";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";

function App() {
  return(
 <>
 <Header />

<div className="mainContainer">
<div className="left">
<UserProfile />
<Posts />
</div>

<Contacts />

</div>
</>
  )
}

export default App;
