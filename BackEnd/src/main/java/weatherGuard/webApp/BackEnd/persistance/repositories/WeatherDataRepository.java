package weatherGuard.webApp.BackEnd.persistance.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import weatherGuard.webApp.BackEnd.persistance.entities.Location;
import weatherGuard.webApp.BackEnd.persistance.entities.WeatherData;

public interface WeatherDataRepository extends MongoRepository<WeatherData, String>{

	List<WeatherData> findByLocation(Location l);
	//boolean existsWeatherDataByDate_weather(Date date_weather);
	
	@Query("{'date_weather': ?0}")
	List<WeatherData> findByDate_Weather(String date_weather);
}
