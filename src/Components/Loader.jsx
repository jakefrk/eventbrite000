import React from 'react';

const Loading = () => {

    return(
        <div className="container">
        <div className="notification">
        <h3>Fetching nearby events from Eventbrite...</h3>
             <img src="https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif" alt=""/>
        </div>
        </div>
    )
}

export default Loading; 