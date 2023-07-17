package weatherGuard.webApp.BackEnd.service.classes;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import weatherGuard.webApp.BackEnd.persistance.entities.Location;
import weatherGuard.webApp.BackEnd.persistance.entities.WeatherData;
import weatherGuard.webApp.BackEnd.persistance.repositories.LocationRepository;
import weatherGuard.webApp.BackEnd.persistance.repositories.WeatherDataRepository;
import weatherGuard.webApp.BackEnd.service.interfaces.WeatherDataService;

@Service
@Slf4j
public class WeatherDataImpl implements WeatherDataService {
	
	@Autowired
	private LocationRepository locRep;
	
	@Autowired
	private WeatherDataRepository weatherRep;

	@Override
	public List<WeatherData> retrieveAllWeatherData() {
		System.out.println(weatherRep.findAll());
		return weatherRep.findAll();
	}
	
	@Override
	public List<WeatherData> getWetherDataByDate(Date d) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        String formattedDate = dateFormat.format(d);
		return weatherRep.findByDate_Weather(formattedDate);
	}

	// add new weatherData document with different weather_date field
	@Override
	public WeatherData addWeatherData (WeatherData u, String locationId) {
		
		//SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
        //String formattedDate = dateFormat.format(u.getDate_weather());
//System.out.println(u.getDate_weather().toString());
		//if (weatherRep.findByDate_Weather(u.getDate_weather().toString()).isEmpty()) {
			Location l = locRep.findById(locationId).orElseThrow(
	                () -> new IllegalArgumentException("Location not found with id: " + locationId));
	
	        u.setLocation(l);
	        
	        WeatherData savedWeatherData = weatherRep.save(u);
	        
          //update location with adding weather data to the list
            if (l.getWeatherDataList() == null) {
                l.setWeatherDataList(new ArrayList<WeatherData>());
            }
            
            l.getWeatherDataList().add(savedWeatherData);
            locRep.save(l);
            return savedWeatherData;
        //}
        
		//return u;
	}

	@Override
	public WeatherData updateWeatherData(WeatherData u) {
		WeatherData w = weatherRep.findById(u.get_id()).get();
		w.setDate_weather(u.getDate_weather());
		w.setDescription(u.getDescription());
		w.setFeels_like(u.getFeels_like());
		w.setHumidity(u.getHumidity());
		w.setLocation(u.getLocation());
		w.setPressure(u.getPressure());
		w.setPressure(u.getPressure());
		w.setTemp(u.getTemp());
		w.setTemp_max(u.getTemp_max());
		w.setTemp_min(u.getTemp_min());
		w.setWind_speed(u.getWind_speed());
		return weatherRep.save(w);
	}

	@Override
	public WeatherData retrieveWeatherData(String idWeatherData) {
		return weatherRep.findById(idWeatherData).get();
	}

	@Override
	public String deleteWeatherData(String idWeatherData) {
		weatherRep.deleteById(idWeatherData);
		return "Weather data with the id : " + idWeatherData +" was deleletd successfully !";
	}

	@Override
	public List<WeatherData> retrieveAllWeatherDataByLocation(String locationId) {
		Location l = locRep.findById(locationId).orElseThrow(
                () -> new IllegalArgumentException("Location not found with id: " + locationId));

		return weatherRep.findByLocation(l);
	}

}
