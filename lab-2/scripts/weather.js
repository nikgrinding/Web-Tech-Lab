const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    // Call the Vercel serverless function instead of directly calling the API
    const response = await fetch(`/api/get-weather?city=${city}`);
    let data = await response.json();
    if (data.cod === "404") {
        document.querySelector(".error").style.display= "block";
        document.querySelector(".weather").style.display= "none";
        return;
    }
    console.log(data);
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".desc").innerHTML = data.weather[0].description;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".error").style.display= "none";
    document.querySelector(".weather").style.display= "block";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rainy.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }
}

searchButton.addEventListener("click",  () => {
    checkWeather(searchBox.value)
});

searchBox.addEventListener("keyup",  (event) => {
    if (event.key == "Enter") {
        checkWeather(searchBox.value);
    }
});