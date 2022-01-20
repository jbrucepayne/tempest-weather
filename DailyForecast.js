class DailyForecast {

	constructor( ) {

		this.airTemperatureHigh = 0;
		this.airTemperatureLow = 0;
		
		this.conditions = "";
		this.icon = "";
		
		this.forecastMonth = 15;
		this.forecastDay = 15;
		this.dayStartLocal = new Date();

		this.precipIcon = "";
		this.precipChance = 0;
		this.precipType = "";
		
		this.sunriseTime = new Date();
		this.sunsetTime = new Date();
	}

	fromTempestWx (tempestWxData) {
		this.airTemperatureHigh = tempestWxData.air_temp_high;
		this.airTemperatureLow = tempestWxData.air_temp_low;
		
		this.conditions = tempestWxData.conditions;
		this.icon = tempestWxData.icon;
		
		this.forecastMonth = tempestWxData.month_num;
		this.forecastDay = tempestWxData.day_num;
		this.dayStartLocal = new Date(tempestWxData.day_start_local);

		this.precipIcon = tempestWxData.precip_icon;
		this.precipChance = tempestWxData.precip_probability;
		this.precipType = tempestWxData.precip_type;
		
		this.sunriseTime = new Date(tempestWxData.sunrise);
		this.sunsetTime = new Date(tempestWxData.sunset);
	}

}

export { DailyForecast };
