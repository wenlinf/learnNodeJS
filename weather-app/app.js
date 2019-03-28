const request =require('request');
const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');
// const url = "https://api.darksky.net/forecast/26aade6ac08b5da18598e2851f17364b/37.8267,-122.4233?units=si&lang=zh";

// request({url:url,json:true},(error,response)=>{
//     if(error){
//         console.log('unable to connect to weather service');
//     }else if(response.body.error){
//         console.log('unable to find location');
//     }
//     else{
//         console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability*100}% chance of rain.`);
//     }
    // const dataJSON =JSON.parse(response.body);
    // console.log(response.body.currently);
// });

// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoid2VubGluZiIsImEiOiJjanRoeTZtOW4yam16NDRwOW9oaW44cmtuIn0.U7vpD3pM09mB3pGG2yOOAg&limit=1";
// request({url:geocodeURL,json:true},(error,response)=>{
//     if(error){
//         console.log('unable to connect to map service');
//     }else if(response.body.features.length===0){
//         console.log('can\'t find the location');
//     }else{
//         const latitude = response.body.features[0].center[0];
//         const longitude = response.body.features[0].center[1];
//           console.log(`The latitude of LA is ${latitude}. The longitude of LA is ${longitude}.`);
//     }
//  })


const geoLocation = process.argv[2];
if(!geoLocation){
        console.log('please provide address');
}else{
        geoCode(geoLocation, (error,{latitude,longitude,location}) => {
                if(error){
                        return console.log('error:',error);
                }
                forecast(latitude, longitude, (error, forecastData) => {
                        if(error){
                                return console.log('Error', error);
                        }
                        console.log(location);
                        console.log(forecastData);
                      }) 
         }) 
        
}




