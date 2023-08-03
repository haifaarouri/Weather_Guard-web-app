package tn.esprit.service.interfaces;

import java.util.Date;
import java.util.List;

import tn.esprit.persistance.entities.WeatherData;

public interface WeatherDataService {

	List<WeatherData> retrieveAllWeatherData();
	WeatherData addWeatherData (WeatherData u, String locationId);
	WeatherData updateWeatherData (WeatherData u);
	WeatherData retrieveWeatherData (String idWeatherData);
	String deleteWeatherData (String idWeatherData);
	List<WeatherData> retrieveAllWeatherDataByLocation(String locationId);
	List<WeatherData> getWetherDataByDate (Date d);
}
