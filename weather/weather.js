const request = require('request');

var getWeather = (lat,lng,callback) => {
  request({
    url: `https://api.darksky.net/forecast/bf83965417a02d141c3beef1924edf96/${lat},${lng}`,
    json:true
  },(error,response,body)=>{

    if(error){
      callback('Unable to Connect');
    }
    else if(response.statusCode === "400"){
      callback('Unable to Fetch Weather..');
    } else if(response.statusCode === 200){
      callback(undefined,{
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });

    }
  });
};



module.exports.getWeather = getWeather;
