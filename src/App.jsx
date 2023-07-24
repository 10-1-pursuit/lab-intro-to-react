import React from "react";
import "./index.css";
import ContactList from "./Components/Contacts"
import Post from "./Components/Post/"


function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Nicki",
  lastName: "Roxx",
};

const hello = <h1>Hello, {formatName(user)}!</h1>;

function App() {
  return (
    <div className="App">
      {hello}
      <h2>Feed</h2>
      <Post />
      <Post />
      <ContactList />
    </div>
  );
}

export default App;
