const apiKey = "043f937b51f962aeb8fff37a09a65e49";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    } catch (error) {
        console.error(error);
        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".temp").innerHTML = "-";
        document.querySelector(".wind").innerHTML = "-";
        document.querySelector(".humidity").innerHTML = "-";
    }

}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});


checkWeather("Delhi");