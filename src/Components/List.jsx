import React from 'react';
import Listing from './Listing';

const List = (props) => {

    return(
        <div className="container">
            {
            props.eventbriteData.map((eachListing) => { 
                return <Listing listingInfo={eachListing} key={eachListing.id} />
             })
            }
        </div>
    )
}

export default List; 