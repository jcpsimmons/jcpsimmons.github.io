var iconArray = ["fa-sun-o", "fa-cloud", "fa-tint", "fa-snowflake-o", "fa-question-circle"]
var weatherIcons = {
  "Clouds": "fa-cloud", 
  "Question": "fa-question-circle",
  "Rain": "fa-tint",
  "Snow": "fa-snowflake-o",
  "Clear": "fa-sun-o",
  "Thunderstorm": "fa-cloud",
  "Mist": "fa-cloud"
}
var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;

$( document ).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
});

function getWeather(lat, lon) {
  var urlString = api + lat + "&" + lon;
  $.ajax({
    url: urlString, success: function (result) {
      $("#city").text(result.name);
      $("#temp").text(Math.round((result.main.temp) * 1.8 + 32) + String.fromCharCode(176) + "F");
      $("#desc").text(result.weather[0].main);
      var weatherCondition = result.weather[0].main;
      console.log(result);
      
      $("#cond").text(result.weather[0].main);
      
      //set variable to weather coniditon, if it's undefined, use the ? mark
      var faWeatherIcon = "";
      if (weatherIcons[weatherCondition] == undefined) {
        faWeatherIcon = weatherIcons.Question;
      } else {
        faWeatherIcon = weatherIcons[weatherCondition];
      }
      
      //set the icon
      $("#icon").attr("class", "fa " + faWeatherIcon + " fa-5x center big-icon");
      
    }
  });
}