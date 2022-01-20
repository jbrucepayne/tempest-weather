
import { WeatherUnits } from './WeatherUnits.js';
import { WeatherConditions } from './WeatherConditions.js';
import { DailyForecast } from './DailyForecast.js';
import { HourlyForecast } from './HourlyForecast.js';

class WeatherForecast {

	constructor( ) {
        this.currentConditions = new WeatherConditions()
        this.dailyForecasts = [];
        this.hourlyForecasts = [];
        this.units = new WeatherUnits();
    }

    fromTempestWxForecast (tempestWxForecastData)
    {
        this.currentConditions = new WeatherConditions()
        this.currentConditions.fromTempestWxForecast(tempestWxForecastData.current_conditions);

        this.units = new WeatherUnits();
        this.units.fromTempestWxForecast(tempestWxForecastData.units);

        // Copy units into the conditions object as they are not stored with the conditions.
        this.currentConditions.units = this.units;

        // TODO PARSE FORECAST DATA!!
        //tempestWxForecastData.forecast.daily.forEach(this.dailyForecasts.add(new DailyForecast()));
        tempestWxForecastData.forecast.daily.forEach(daily => 
                    { 
                        let forecast = new DailyForecast();
                        forecast.fromTempestWx(daily);
                        this.dailyForecasts.push(forecast);
                    }  
                    );

        tempestWxForecastData.forecast.hourly.forEach(hourly => 
                { 
                    let forecast = new HourlyForecast();
                    forecast.fromTempestWx(hourly);
                    this.hourlyForecasts.push(forecast);
                }  
            );
    }
}

export { WeatherForecast };


/*
latitude: 39.82956
location_name: "W 73rd Pl"
longitude: -105.19062
status: {status_code: 0, status_message: 'SUCCESS'}
timezone: "America/Denver"
timezone_offset_minutes: -420
*/


//BetterForecast {
//status (Status, optional),
//current_conditions (BetterForecastCurrentConditions, optional),
//forecast (BetterForecastForecast, optional),
//units (BetterForecastUnits, optional),
//latitude (number, optional),
//longitude (number, optional),
//timezone (string, optional),
//timezone_offset_minutes (number, optional)
//}
//Status {
//status_code (integer, optional),
//status_message (string, optional)
//}            
