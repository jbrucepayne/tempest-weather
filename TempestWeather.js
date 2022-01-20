// Rest API reference
// https://weatherflow.github.io/Tempest/api/swagger/

import { WeatherConditions } from './WeatherConditions.js';
import { WeatherForecast } from './WeatherForecast.js';

	 function GetWeatherForecast(station, token, weatherForecastUpdater){
		let url = "https://swd.weatherflow.com/swd/rest/better_forecast?station_id=" + station +  "&token="+token+"&units_temp=f&units_wind=mph&units_pressure=mb&units_precip=in&units_distance=mi";
		fetch(url).then(
			function(response) {
			  if (response.status !== 200) {
				return "Failure reading weather forecast: " + response.status;
			  }
			  
			  // Examine the text in the response
			  response.json().then(function(data) {
				returnWeatherForecast(data, weatherForecastUpdater);
				return "Success!"; 
			  });
			}
		  )
		  .catch(function(err) {			
			return "Error getting weather forecast:" + err;
		  });
	}

	function returnWeatherForecast(tempestWxForecast, weatherForecastUpdater) {
		let forecast = new WeatherForecast();
		forecast.fromTempestWxForecast(tempestWxForecast);
		weatherForecastUpdater(forecast);
	}
	
	function GetWeatherCurrentConditions(station, token, weatherConditionsUpdater) {
		let url = "https://swd.weatherflow.com/swd/rest/observations/station/"+station+"?token=" + token;
		
		fetch(url).then(
			function(response) {
				if (response.status !== 200) {
					return ("Failure reading current weather conditions: " + response.status);
				}
				response.json().then(function(data) {
					returnCurrentConditions(data, weatherConditionsUpdater);
					return ("Success!");			 
				});
			}
		)
		.catch(function(err) {
			return ("Error retrieving current weather conditions:"  + err);
		});
	}	

	function returnCurrentConditions(tempestWxCurrentConditions, weatherConditionsUpdater) {
		let currentConditions = new WeatherConditions();
		currentConditions.fromTempestWxObservation(tempestWxCurrentConditions);
		weatherConditionsUpdater(currentConditions);
	}

	export { GetWeatherForecast, GetWeatherCurrentConditions };
