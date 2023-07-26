import React from "react";
import Contacts from "./Contacts"


function ContactUserCard() {

    const profilePic = "./src/profile.png"

    return (
        <>
            <div className="contactUserCard">
                <div>
                    <img src={profilePic}></img>
                    <ul>
                        <li> Mitchell </li>
                    </ul>
                </div >
                <div>
                    <img src={profilePic}></img>
                    <ul>
                        <li>  Jay </li>
                    </ul>
                </div>
                <div>
                    <img src={profilePic}></img>
                    <ul>
                        <li> Gloria </li>
                    </ul>
                </div>
                <div>
                    <img src={profilePic}></img>
                    <ul>
                        <li> Manny </li>
                    </ul>
                </div>
                <div>
                    <img src={profilePic}></img>
                    <li> Phil </li>
                </div>
                <div>
                    <img src={profilePic}></img>
                    <ul>
                        <li> Claire</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ContactUserCard;