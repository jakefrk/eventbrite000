import user from './user';



/*******************/
// EVENTBRITE API SETUP 
// const apiKey  = `JI7WBTDSGGBTEC3QOC`;
// const clientSecret =  `AE3HUVAWXOFTJ7RX2MA4OX2OXP4RFKDU6SBFOJ3OMO7ZB7TMUG`;
// const OAuth  =  `AABSP7NQU7SR2TNLCSOQ`  //DONT SHARE
const anonOAuth = '6FSVC2IOJQW2VUCI7IBL'; 

const eventbriteBase = `https://www.eventbriteapi.com/v3/events/search/`;


const eventbriteURL = `${eventbriteBase}?location.within=1mi&location.latitude=${user.location.latitude}&location.longitude=${user.location.longitude}&categories=${user.category}&start_date.keyword=this_week&include_all_series_instances=on&token=${anonOAuth}`


 
export default eventbriteURL;


/*******************/


 