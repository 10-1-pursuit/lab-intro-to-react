import ContactUserCard from "./ContactUserCard.jsx";
import React from "react"
import "./Contacts.css"

function Contacts (){
    return (
        <div>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </div>
    )
}
export default Contacts