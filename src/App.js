import React, { Component } from 'react'; 
import Loader from './Components/Loader';
import Header from './Components/Header';
import './App.css';  
import List from './Components/List';



const anonOAuth = '6FSVC2IOJQW2VUCI7IBL'; 
const eventbriteBase = `https://www.eventbriteapi.com/v3/events/search/`;
const category = "102"
const eventbriteURL = `${eventbriteBase}?location.within=1mi&location.latitude=40.758896&location.longitude=-73.985130&categories=${category}&start_date.keyword=this_week&include_all_series_instances=on&token=${anonOAuth}`




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
