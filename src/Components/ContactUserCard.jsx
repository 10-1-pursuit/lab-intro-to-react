import React from "react";
import defaultPicture from "../profile.png"

function ContactUserCard() {
    return (
        <div>
            <img src={defaultPicture} />
            <h2>User Name</h2>
            <h3>React Creator</h3>
            <h4>Lorem Ipsum</h4>
        </div>
    )
}

export default ContactUserCard;