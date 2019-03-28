const request = require('request');
const forecast = (latitude, longtitude, callback) =>{
const url = `https://api.darksky.net/forecast/26aade6ac08b5da18598e2851f17364b/${latitude},${longtitude}?units=si&lang=zh`;
request({url,json:true},(error,{body})=>{
    if(error){
        callback('unable to connect to weather service',undefined);
    }else if(body.error){
        callback('unable to find location, try another one',undefined);
    }else{
        callback(undefined,`${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability*100}% chance of rain.`);
}
});
}


module.exports=forecast;