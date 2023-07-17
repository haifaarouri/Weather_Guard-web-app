package weatherGuard.webApp.BackEnd.service.interfaces;

import java.util.Date;
import java.util.List;

import weatherGuard.webApp.BackEnd.persistance.entities.WeatherData;

public interface WeatherDataService {

	List<WeatherData> retrieveAllWeatherData();
	WeatherData addWeatherData (WeatherData u, String locationId);
	WeatherData updateWeatherData (WeatherData u);
	WeatherData retrieveWeatherData (String idWeatherData);
	String deleteWeatherData (String idWeatherData);
	List<WeatherData> retrieveAllWeatherDataByLocation(String locationId);
	List<WeatherData> getWetherDataByDate (Date d);
}
