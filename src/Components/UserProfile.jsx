import React from "react";
import defaultPicture from "../profile.png";

function UserProfile() {
    return (
    <div className="userProfile">
        <img src={defaultPicture} />
        <h1>Name</h1>
        <h2>React Creator</h2>
        <h3>Pursuit Fellow</h3>
    </div> 
);
}

export default UserProfile;