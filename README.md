# tempest-weather
This project contains an example of how to create a simple web page to display weather information from the Tempest Weather station from WeatherFlow. See https://weatherflow.com/tempest-weather-system/ for more information on the hardward.

The tempest weather stations use a JSON API that allows a user with the correct authentication token to download weather condition data and localized forecasts via a REST API.   Documentation for the REST API is available at https://weatherflow.github.io/Tempest/api/swagger/.  There is also a socket based API that allows a client to register requests as updates come in from the server but that API is not explored in this example.  Only a subset of this API is currently provided in this example, the Get forecast and get station observation endpoints.

The APIs used here are pull only, so the application polls the API regularly (every minute by default) to remain continuously updated.  The station itself only updates every minute so this seems reasonable.  If faster updates are required, check out the socket API which might be a better fit. 

To use this toy for your weather station, you must first create an authentication token.  To do this, login to the weather portal for your station and go to settings.  Click on the Data Authorizations menu under More.  To create a token, click on the Create Token button and give it a name.  This token is needed to use the API to download weather data from your station.  Don't share this information with others.  Once you have this, rename or copy the file secrets_example.js to secrets.js, then save this file with your station ID and token in the file.

The html and css pages associated with this are pure example and are very rough.  The remainder of the javascript of the code should however be relatively portable and can be used for whatever other application you want.  

Have fun!