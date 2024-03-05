const apiKey = '4b4cf024563e09a2b5f286f7eb138bd7';

    function checkWeather(){
        const cityInput = document.getElementById('cityInput').value;

        if (cityInput.trim() === '') {
            alert('Please Enter Correct City');
            return;
        }

        let Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

        
        function getWeather(){
            return new Promise((resolve, reject) => {
                fetch(Url)
                    .then(response => response.json())
                    .then(data =>{
                        if (data.cod === 200) {
                            const temperature = data.main.temp;
                            const weatherCondition = data.weather[0].description;
                            resolve({
                                city: cityInput,
                                temperature: temperature,
                                weatherCondition: weatherCondition
                            });
                        } else{
                            
                            reject(`Error: ${data.message}`);
                        }
                    })
                    .catch(error =>{
                       
                        reject(`An error occurred: ${error}`);
                    });
            });
        }

        getWeather()
            .then(weatherData => {
                let tableBody = document.querySelector('#weatherTable tbody');
                let row = tableBody.insertRow();
                let cellCity = row.insertCell(0);
                let cellTemperature = row.insertCell(1);
                let cellWeatherCondition = row.insertCell(2);

                cellCity.textContent = weatherData.city;
                cellTemperature.textContent = weatherData.temperature + '°C';
                cellWeatherCondition.textContent = weatherData.weatherCondition;
            })
            .catch(error => {
                console.error(error);
            });
    }