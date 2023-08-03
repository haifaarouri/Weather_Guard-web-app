package tn.esprit.persistance.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import tn.esprit.persistance.entities.Location;
import tn.esprit.persistance.entities.WeatherData;

public interface WeatherDataRepository extends MongoRepository<WeatherData, String>{

	List<WeatherData> findByLocation(Location l);
	//boolean existsWeatherDataByDate_weather(Date date_weather);
	
	@Query("{'date_weather': ?0}")
	List<WeatherData> findByDate_Weather(String date_weather);
}
