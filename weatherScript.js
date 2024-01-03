let apikey = "69e1debaf9dfe2611b06cf61d7406134";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity = document.getElementById("userText");
let temperature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humditiy-info");
let windInfo = document.getElementById("wind-info");
let weather_img = document.querySelector(".weather_img");

async function getWeatherData() {
    if(userCity.value==""){
        alert("Enter a City Name");
    }
    else{
        city = userCity.value;
        let respone = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        let data = await respone.json();
        ct.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp - 273.15)+ "°C";
        humidity.innerHTML = data.main.humidity + "%";
        windInfo.innerHTML = data.wind.speed + "Km/h";
        userCity.value="";
        if(data.weather[0].main=="Clear"){
            weather_img.src = "image/clear.png"
        }
        else if(data.weather[0].main=="Snow"){
            weather_img.src = "image/snow.png"
        }
        else if(data.weather[0].main=="Clouds"){
            weather_img.src = "image/cloud.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            weather_img.src = "image/rain.png"
        }
        else if(data.weather[0].main=="Mist"){
            weather_img.src = "image/mist.png"
        }
        else if(data.weather[0].main=="Rain"){
            weather_img.src = "image/rain.png"
        }
        console.log(data)
    }
}