import React from 'react';

function ContactUserCard() {
    return (
        <div className='contactUserCard-container'>
            <div className='img'>
                <img src="./src/profile.png" alt="" />
            </div>
            <div className='info'>
                <strong>Kenneth</strong>
                <br />
                pursuit
            </div>
        </div>
    );
}

export default ContactUserCard;