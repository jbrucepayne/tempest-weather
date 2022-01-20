class HourlyForecast {

	constructor(  ) {

		this.airTemperature = 0;
		this.feelsLike = 0;

		this.relativeHumidity = 0;
		this.seaLevelPressure = 0;

		this.conditions = "";
		this.icon = "";

		this.precipIcon = "";
		this.precipChance = 0;
		this.precipType = "";

		this.uv = 0;

		this.windSpeedAvg = 0;
		this.windDirection = 0;
		this.windSpeedGust = 0;
		this.windDirectionCardinal = "";

		this.forecastHour = 0;
		this.forecastDay = 0;

		this.time = new Date();
	}

	fromTempestWx (tempestWxData) {
		this.airTemperature = tempestWxData.air_temperature;
		this.feelsLike = tempestWxData.feels_like;

		this.relativeHumidity = tempestWxData.relative_humidity;
		this.seaLevelPressure = tempestWxData.sea_level_pressure;

		this.conditions = tempestWxData.conditions;
		this.icon = tempestWxData.icon;

		this.precipIcon = tempestWxData.precip_icon;
		this.precipChance = tempestWxData.precip_probability;
		this.precipType = tempestWxData.precip_type;

		this.uv = tempestWxData.uv;

		this.windSpeedAvg = tempestWxData.wind_avg;
		this.windDirection = tempestWxData.wind_direction;
		this.windSpeedGust = tempestWxData.wind_gust;
		this.windDirectionCardinal = tempestWxData.wind_direction_cardinal;

		this.forecastDay = tempestWxData.local_day;
		this.forecastHour = tempestWxData.local_hour;

		this.time = new Date(tempestWxData.time);
	}
}

export { HourlyForecast };
