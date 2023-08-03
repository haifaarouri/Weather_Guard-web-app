package tn.esprit.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.persistance.entities.WeatherData;
import tn.esprit.service.interfaces.WeatherDataService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/weatherData")
public class WeatherDataController {

	@Autowired
	private WeatherDataService weatherSer;
	
	@PostMapping(value="/saveWeatherData/{locationId}")
	public WeatherData addWeatherData(@RequestBody WeatherData u, @PathVariable String locationId) {
		return weatherSer.addWeatherData(u, locationId);
	}
	
	@GetMapping("/{locId}")
	public List<WeatherData> getWeatherDataByLocation(@PathVariable String locId) {
		return weatherSer.retrieveAllWeatherDataByLocation(locId);
	}
	
	@GetMapping
	public List<WeatherData> getWeatherData() {
		return weatherSer.retrieveAllWeatherData();
	}
	
	@GetMapping("/weatherDataById/{weatherDataId}")
	public WeatherData getWeatherDataById(@PathVariable String weatherDataId) {
		return weatherSer.retrieveWeatherData(weatherDataId);
	}
	
	@PutMapping
	public WeatherData editWeatherData(@RequestBody WeatherData u) {
		return weatherSer.updateWeatherData(u);
	}
	
	@DeleteMapping("/{weatherDataId}")
	public String deleteWeatherData(@PathVariable String weatherDataId) {
		return weatherSer.deleteWeatherData(weatherDataId);
	}
	
	@GetMapping("/date/{d}")
	public List<WeatherData> getWeatherDataByDate(@PathVariable Date d) {
		return weatherSer.getWetherDataByDate(d);
	}
}
