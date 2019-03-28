import React from 'react';
import Categories from './Categories';

const Header = () => {
    return(
        <div className="App-header">
        <div className="columns">
        <div className="column is-one-quarter is-2">
              <img src="http://allaran.alperecreative.com.au/wp-content/uploads/2018/01/Eventbrite-Logo.png" className="logo" />
        </div>
        <div className="column is-three-quarters">    
              <h1>New York City Events This Week</h1>
              <Categories />
              </div>  
          </div>    
        </div>
    )
}

export default Header; 