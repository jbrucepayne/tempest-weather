class WeatherUnits {

	constructor( ) {
		this.airDensityUnits = "kg/m3";
		this.brightnessUnits = "lux";
		this.solarRadiationUnits = "w/m2";
		// expected to be present for all messages
		this.temperatureUnits = "C";
		this.windSpeedUnits = "MPH";
		this.precipitationUnits = "In";
		this.pressureUnits = "MB";
		this.distanceUnits = "Mi";
		this.otherUnits = "Metric";
		// only for forecast type messages
		this.brightnessUnits = "Lux";
		this.solarRadiationUnits = "W / m^2";
		this.airDensityUnits = "Kg / m^3";
		// Only for observation type messages
		this.directionUnits = "Cardinal";
	}

	// Same both: units_temp, units_wind, units_precip, units_pressure, units_distance, units_other
	// forecast only: units_brightness, units_solar_radiation, units_air_density
	// obs only: units_direction

	fromTempestWxForecast( tempestUnits ) {
		// expected to be present for all messages
		this.temperatureUnits = capitalizeFirstLetter(tempestUnits.units_temp);
		this.windSpeedUnits = tempestUnits.units_wind.toUpperCase();
		this.precipitationUnits = capitalizeFirstLetter(tempestUnits.units_precip);
		this.pressureUnits = tempestUnits.units_pressure.toUpperCase();
		this.distanceUnits = capitalizeFirstLetter(tempestUnits.units_distance);
		this.otherUnits = capitalizeFirstLetter(tempestUnits.units_other);
		this.brightnessUnits = capitalizeFirstLetter(tempestUnits.units_brightness);
		this.solarRadiationUnits = capitalizeFirstLetter(tempestUnits.units_solar_radiation);
		this.airDensityUnits = capitalizeFirstLetter(tempestUnits.units_air_density);
	}

	fromTempestWxObservation( tempestUnits ) {
		console.log(tempestUnits);
		// expected to be present for all messages
		this.temperatureUnits = capitalizeFirstLetter(tempestUnits.units_temp);
		this.windSpeedUnits = tempestUnits.units_wind.toUpperCase();
		this.precipitationUnits = capitalizeFirstLetter(tempestUnits.units_precip);
		this.pressureUnits = tempestUnits.units_pressure.toUpperCase();
		this.distanceUnits = capitalizeFirstLetter(tempestUnits.units_distance);
		this.otherUnits = capitalizeFirstLetter(tempestUnits.units_other);
		this.directionUnits = tempestUnits.units_direction.toUpperCase();
	}
}

function capitalizeFirstLetter(lowercase) {
	if (typeof lowercase === 'string' && lowercase.length > 0)	{
		return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
	}
	return "";
  }

export { WeatherUnits };
