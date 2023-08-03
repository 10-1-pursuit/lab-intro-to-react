import React from "react";
import defaultPicture from "../profile.png";

function UserProfile() {
    return (
    <div className="userProfile">
        <img src={defaultPicture} />
        <h2>User Name</h2>
        <h3>React Creator</h3>
        <h4>Pursuit Fellow</h4>
    </div> 
);
}

export default UserProfile;