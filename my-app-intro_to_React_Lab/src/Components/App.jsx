import React from "react";
import "./index.css";
import '../App.css'


import NavBar from './NavBar.jsx'
import Contacts from './Contacts.jsx'
import Posts from './Posts'
import UserProfile from './UserProfile.jsx'
// import App from '../Components'


function App() {
  return (
    <div>
     <p>Hello, world!</p>
    <NavBar/>
    <UserProfile/>
    </div>
  );
}

export default App;
