const https = require('https');
const url = `https://api.darksky.net/forecast/26aade6ac08b5da18598e2851f17364b/40,45?units=si&lang=zh`;
const request = https.request(url,(response)=>{
    let data = '';
    response.on('data',(chunk)=>{
        data+=chunk.toString();
    });

    response.on('end',()=>{
        const body = JSON.parse(data);
        console.log(body);
    });
})
request.on('error',(error)=>{
    console.log('An error');
})
request.end();