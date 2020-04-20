
const iconElement = document.querySelector(".icon");
const tempElement = document.querySelector(".temp-value p");
const descElement = document.querySelector(".temp-description p");
const locatElement = document.querySelector(".location");
const notifElement = document.querySelector(".norification");

//App data
const weather ={};
 weather.temp={
    unit: "celsius"
}
//App Consts and vars
const KELVIN = 273;

//API key
const key = "ab40af0f0f91a3975145fd300671a768";
//const key ="82005d27a116c2880c8fcb866998a0";
//Check location 
if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPostition, showError);
}else{
    notifElement.style.display ="block";
    notifElement.innerHTML="<p>allow your location</p>";
}
//user location 
function setPostition(currentPosition){
    let lat = currentPosition.coords.altitude;
    let long = currentPosition.coords.longitude;
    
    getWeather(lat,long);
}
//SHow error 
function showError(error){
    notifElement.style.display="block";
    notifElement.innerHTML = `<p>${error.message}</p>`;

}
//Get weather from api 
function getWeather(lat,long){
let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;

fetch(api)
.then (function(data){
    weather.temprature.value = Math.floor(data.main.temprature - KELVIN);
    weather.description = data.weather.description ;
    weather.city =data.name;
    weather.country = data.sys.country;
})
.then(function(){
    displayWeather();

});
function displayWeather(){
    iconElement.innerHTML = `img src ="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temp.value}<span>c</span>`;
    descElement.innerHTML= `${weather.city}, ${weather.country}`;
}
}
