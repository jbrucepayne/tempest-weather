
import { WeatherUnits } from './WeatherUnits.js';

class WeatherConditions {

	constructor( ) {
		this.units = new WeatherUnits();

		this.airTemperature = -1;
		this.feelsLike = -1;
		this.heatIndex = -1;  		// Only present for Obs report
		this.windChill = -1;  		// Only present for Obs report

		this.relativeHumidity = -1;
		this.dewPointTemperature = -1;
		this.wetBulbTemperature = -1;
		this.deltaT = -1;
		
		this.airDensity = -1;
		this.barometricPressure = -1;  // Only present for Obs report, copied from sea level pressure for forecast
		this.pressureTrend = -1;
		this.stationPressure = -1;
		this.seaLevelPressure = -1;
		
		this.brightness = 0;
		this.solarRadiation = 0;
		this.uv = 0;
		
		this.lightningStrikeCount = 0;   			// Only present for Obs report
		this.lightningStrikeCountLast1hr = 0;
		this.lightningStrikeCountLast3hr = 0;
		this.lightningStrikeLastDistance = 0;		// Only present for Forecast report
		this.lightningStrikeLastDistanceMsg = 0;	// Only present for Forecast report
		this.lightningStrikeLastEpoch = 0;			// Only present for Forecast report

		this.precip = 0;   							// Only present for Obs report
		this.precipAccumLast1hr = 0;   				// Only present for Obs report
		this.precipAccumLocalDay = 0;
		this.precipAccumLocalDayFinal = 0;   		// Only present for Obs report
		this.precipAccumLocalYesterday = 0;
		this.precipAccumLocalYesterdayFinal = 0;   	// Only present for Obs report
		this.precipAnalysisTypeYesterday = 0;   	// Only present for Obs report
		this.precipMinutesLocalDay = 0;   			// Only present for Obs report
		this.precipMinutesLocalYesterday = 0;   	// Only present for Obs report
		this.precipMinutesLocalYesterdayFinal = 0;  // Only present for Obs report
		this.isPrecipLocalDayRainCheck = 0;   		// Only present for Forecast report
		this.isPrecipLocalYesterdayRainCheck = 0;   // Only present for Forecast report
				
		this.windSpeedAvg = 0;
		this.windDirection = 0;
		this.windSpeedGust = 0;
		this.windLull = 0;   						// Only present for Obs report	
		this.windDirectionCardinal = "";			// Only present for Forecast report
		this.windDirectionIcon = "";				// Only present for Forecast report

		this.time = new Date();   // timestamp in Obs, time in Forecast call

		this.forecastIcon = ""; //forecast only
	}

	fromTempestWxForecast (tempestWxData) {
		this.airTemperature = tempestWxData.air_temperature;
		this.feelsLike = tempestWxData.feels_like;
		
		this.relativeHumidity = tempestWxData.relative_humidity;
		this.dewPointTemperature = tempestWxData.dew_point_temperature;
		this.wetBulbTemperature = tempestWxData.wet_bulb_temperature;
		this.deltaT = tempestWxData.delta_t;
		
		this.airDensity = tempestWxData.air_density;
		this.pressureTrend = tempestWxData.pressure_trend;
		this.stationPressure = tempestWxData.station_pressure;
		this.seaLevelPressure = tempestWxData.sea_level_pressure;
		this.barometricPressure = this.stationPressure;  // Copy value since only present in OBS message
		
		this.brightness = tempestWxData.brightness;
		this.solarRadiation = tempestWxData.solar_radiation;
		this.uv = tempestWxData.uv;
		
		this.lightningStrikeCountLast1hr = tempestWxData.lightning_strike_count_last_1hr;
		this.lightningStrikeCountLast3hr = tempestWxData.lightning_strike_count_last_3hr;
		this.lightningStrikeLastDistance = tempestWxData.lightning_strike_last_distance;
		this.lightningStrikeLastDistanceMsg = tempestWxData.lightning_strike_last_distance_msg;
		this.lightningStrikeLastEpoch = tempestWxData.lightning_strike_count_last_epock;

		this.precipAccumLocalDay = tempestWxData.precip_accum_local_day;
		this.precipAccumLocalYesterday = tempestWxData.precip_accum_local_yesterday;
		this.isPrecipLocalDayRainCheck = tempestWxData.is_precip_local_day_rain_check;
		this.isPrecipLocalYesterdayRainCheck = tempestWxData.is_precip_local_yesterday_rain_check;
				
		this.windSpeedAvg = tempestWxData.wind_avg;
		this.windDirection = tempestWxData.wind_direction;
		this.windSpeedGust = tempestWxData.wind_gust;
		this.windDirectionCardinal = tempestWxData.wind_direction_cardinal;
		this.windDirectionIcon = tempestWxData.wind_direction_icon;
		
		this.time = new Date(tempestWxData.time);   // timestamp in Obs, time in Forecast call

		this.forecastIcon = tempestWxData.forecast_icon; 
	}

	fromTempestWxObservation (tempestWxData) {
		this.units = new WeatherUnits();
		this.units.fromTempestWxObservation(tempestWxData.station_units);

		this.airTemperature = tempestWxData.obs[0].air_temperature;
		this.feelsLike = tempestWxData.feels_like;
		this.heatIndex = tempestWxData.heat_index;
		this.windChill = tempestWxData.wind_chill;

		this.relativeHumidity = tempestWxData.relative_humidity;
		this.dewPointTemperature = tempestWxData.dew_point_temperature;
		this.wetBulbTemperature = tempestWxData.wet_bulb_temperature;
		this.deltaT = tempestWxData.delta_t;

		this.airDensity = tempestWxData.air_density;
		this.pressureTrend = tempestWxData.pressure_trend;
		this.stationPressure = tempestWxData.station_pressure;
		this.seaLevelPressure = tempestWxData.sea_level_pressure;
		this.barometricPressure = this.barometric_pressure;

		this.brightness = tempestWxData.brightness;
		this.solarRadiation = tempestWxData.solar_radiation;
		this.uv = tempestWxData.uv;

		this.lightningStrikeCount = tempestWxData.lightning_strike_count;
		this.lightningStrikeCountLast1hr = tempestWxData.lightning_strike_count_last_1hr;
		this.lightningStrikeCountLast3hr = tempestWxData.lightning_strike_count_last_3hr;

		this.precip = tempestWxData.precip;
		this.precipAccumLast1hr = tempestWxData.precip_accum_last_1hr;
		this.precipAccumLocalDay = tempestWxData.precip_accum_local_day;
		this.precipAccumLocalDayFinal = tempestWxData.precip_accum_local_day_final;
		this.precipAccumLocalYesterday = tempestWxData.precip_accum_local_yesterday;
		this.precipAccumLocalYesterdayFinal = tempestWxData.precip_accum_local_yesterday_final;
		this.precipAnalysisTypeYesterday = tempestWxData.precip_analysis_type_yesterday;
		this.precipMinutesLocalDay = tempestWxData.precip_minutes_local_day;
		this.precipMinutesLocalYesterday = tempestWxData.precip_minutes_local_yesterday;
		this.precipMinutesLocalYesterdayFinal = tempestWxData.precip_minutes_local_yesterday_final;

		this.windSpeedAvg = tempestWxData.wind_avg;
		this.windDirection = tempestWxData.wind_direction;
		this.windSpeedGust = tempestWxData.wind_gust;
		this.windLull = tempestWxData.wind_lull;

		this.time = new Date(tempestWxData.timestamp);   // timestamp in Obs, time in Forecast call
	}
}

export { WeatherConditions };
