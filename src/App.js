import React, { Component } from 'react'; 
import Loader from './Components/Loader';
import Header from './Components/Header';
import './App.css';
/////////////////
import eventbriteURL from './eventbrite';
//import user from './user';
// import firebasedb from './config/fbConfig';
// import Categories from './Components/Categories';
import List from './Components/List';





class App extends Component {
  constructor(){
    super();
  
    this.state = {
      eventbriteData: null,
      hasLoaded: false 
    }
  }
  
//////////////////////////// 
  componentDidMount(){
    fetch(eventbriteURL)
    .then( (response) => {
        return response.json()})
      .then( (json) => { 
        this.setState({
          eventbriteData: json.events,
          hasLoaded: true
      })
    })
  }


////////////////
  renderEventbrite = () => {
    if (this.state.hasLoaded ){
      return <List eventbriteData={this.state.eventbriteData} />
    }
    else{
      return <Loader />
      }
  }


  //////////////////////////////////
  render() {
    return (
  
      <div className="App">
        <Header />
        {this.renderEventbrite()} 
      </div>
    );
  }
}

export default App;
