 
let latitude = "40.758896";
let longitude = "-73.985130";

/**************/
// function getLocation() {
//   if (navigator.geolocation) {
//          navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     console.log("your location not found");
//   }
// }

// getLocation(); 


// function showPosition(position) { 

//     user.location = {
//         latitude : position.coords.latitude,
//         longitude : position.coords.longitude
//     }
//      console.log(latitude);
//   }

 
let user = {
    loggedIn: false,
    location:{
        latitude: latitude,
        longitude: longitude
    },
    category: "102"
}

 

export default user;