'use strict';

function getWeather() {
    const weatherWindow = document.querySelector('#weather-window');
    const inputCity = document.querySelector('#input-city');

    inputCity.addEventListener('input', (e) => {
        const checkCity = e.target.value.trim().toLowerCase();
        if (!checkCity) {
            weatherWindow.innerHTML = '';
            return;
        }

        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + checkCity + '&units=metric&APPID=5d066958a60d315387d9492393935c19')
            .then(response => {
                if (!response.ok) {
                    throw new Error("You haven't entered all the letters or the city doesn't exist.");
                }
                return response.json();
            })
            .then(weather => {
                weatherWindow.innerHTML = '';
                const weatherElements = document.createElement('div');
                getIcon(weather.weather[0].icon);
                weatherElements.innerHTML = `<div>
        <p>City: ${weather.name}</p>
        <p>Temp: ${weather.main.temp}&deg</p>
        <p>Pressure: ${weather.main.pressure} hPa</p>
        <p>Description: ${weather.weather[0].description}</p>
        <p>Humidity: ${weather.main.humidity} %</p>
        <p>Wind speed: ${weather.wind.speed} m/s</p>
        <p>Wind degree: ${weather.wind.deg} degrees</p>
        </div>
        `;
                weatherWindow.appendChild(weatherElements);
            })
            .catch(error => {
                console.error('Error fetching weather:', error);
                weatherWindow.innerHTML = "<p>Error fetching weather. You haven't entered all the letters or the city doesn't exist.</p>";
            })
    })
}

getWeather();

function getIcon(icon) {
    fetch(`http://openweathermap.org/img/w/${icon}.png`)
        .then(response => {
            if (!response.ok) {
                throw new Error('ERROR fetching the ICON');
            }
            //I use the blob() method for fetching the binary data image, isn't string
            return response.blob();
        })
        .then(data => {
            const url = URL.createObjectURL(data);
            const icon = document.createElement('img');
            icon.classList.add('icon');
            icon.src = url;
            document.querySelector('#weather-window').appendChild(icon);
        })
        .catch(error => {
            console.error('Error getting weather icon.:', error);
            document.querySelector('#weather-window').appendChild(document.createElement('div')).innerHTML = '<p>Error getting weather icon.</p >';
        });
}