
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
.options({
a:{
  alias:'address',
  demand:true,
  describe: 'Address to Fetch Weather For..',
  string:true
}
})
.help()
.alias('help','h')
.argv;


var uri = argv._[0];



geocode.geocodeAddress(uri, (errorMessage, results) => {
  if (errorMessage){
    console.log(errorMessage);
  }
  else{
    console.log(results.address);
    weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
      if(errorMessage){
        console.log(errorMessage);
      } else{
        console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
      }
    });
  }
});
