import React from "react";
import "./index.css";
import Navbar from "./Components/NavBar.jsx";
import UserProfile from "./Components/UserProfile.jsx";

function App() {
  return [
    <><div>
      <Navbar />
    </div><section className="user-container">
        <UserProfile />
      </section></>
  ];
}

export default App;
