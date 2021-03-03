const api = {
  baseUrl: "https://community-open-weather-map.p.rapidapi.com/",
  iconUrl: "http://openweathermap.org/img/w/"
}

const search = document.querySelector(".location");
search.addEventListener('keypress', setQuery);
search;

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(search.value);
  }
}

//Fetch api from openweathermap
function getResults(query) {
  fetch(`${api.baseUrl}weather?q=${query}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "1168d07021msh4a61850b28825e6p104510jsn0274ed39be61",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
  })
    .then(response => {
      return response.json();
    }).then(displayResults)
    .catch(err => {
      console.error(err);
    })

  // Display the data returned
  function displayResults(weather) {
    console.log(weather)
    //Check for errors
    function getError() {
      if (weather.message == null) {
        document.querySelector('.err-msg').innerText = ``
      } else {
        document.querySelector('.err-msg').innerText = `${weather.message}`
      }
    }
    getError();

    let city = document.querySelector('.city');
    let desc = document.querySelector('.desc');
    let temperature = document.querySelector('.temp');
    let tempMin = document.querySelector('.temp-min');
    let tempMax = document.querySelector('.temp-max');
    let humidity = document.querySelector('.humidity');

    //convert temperature from kelvin to celcius
    let temp = weather.main.temp;
    let temp_min = weather.main.temp_min;
    let temp_max = weather.main.temp_max;

    temp = Math.round(temp - 273.15);
    temp_min = Math.round(temp_min - 273.15);
    temp_max = Math.round(temp_max - 273.15);

    let locationIcon = document.querySelector('.weather-icon');
    let icon = weather.weather[0].icon;
    locationIcon.innerHTML = `<img src="${api.iconUrl}/${icon}.png">`;

    city.innerText = `${weather.name}, ${weather.sys.country}`;
    desc.innerText = `${weather.weather[0].description}`;
    temperature.innerText = `${temp}°C`;
    tempMin.innerText = `${temp_min}°C`;
    tempMax.innerText = `${temp_max}°C`;
    humidity.innerText = `${weather.main.humidity}%`;
  }
}