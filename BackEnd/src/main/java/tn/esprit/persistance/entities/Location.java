package tn.esprit.persistance.entities;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Document(collection="Locations")
@AllArgsConstructor
@NoArgsConstructor
public class Location {

	@Id
    private String _id;
	private String city_name;
	private int latitude;
	private int longitude;
	private String country_code;
	private long population;
	private Date sunrise;
	private Date sunset;
	
	@DBRef
	@JsonIgnore
    private List<WeatherData> weatherDataList;

	public String get_id() {
		return _id;
	}

	public void set_id(String _id) {
		this._id = _id;
	}

	public String getCity_name() {
		return city_name;
	}

	public void setCity_name(String city_name) {
		this.city_name = city_name;
	}

	public int getLatitude() {
		return latitude;
	}

	public void setLatitude(int latitude) {
		this.latitude = latitude;
	}

	public int getLongitude() {
		return longitude;
	}

	public void setLongitude(int longitude) {
		this.longitude = longitude;
	}

	public String getCountry_code() {
		return country_code;
	}

	public void setCountry_code(String country_code) {
		this.country_code = country_code;
	}

	public long getPopulation() {
		return population;
	}

	public void setPopulation(long population) {
		this.population = population;
	}

	public Date getSunrise() {
		return sunrise;
	}

	public void setSunrise(Date sunrise) {
		this.sunrise = sunrise;
	}

	public Date getSunset() {
		return sunset;
	}

	public void setSunset(Date sunset) {
		this.sunset = sunset;
	}

	public List<WeatherData> getWeatherDataList() {
		return weatherDataList;
	}

	public void setWeatherDataList(List<WeatherData> weatherDataList) {
		this.weatherDataList = weatherDataList;
	}

	@Override
	public String toString() {
		return "Location [_id=" + _id + ", city_name=" + city_name + ", latitude=" + latitude + ", longitude="
				+ longitude + ", country_code=" + country_code + ", population=" + population + ", sunrise=" + sunrise
				+ ", sunset=" + sunset + ", weatherDataList=" + weatherDataList + "]";
	}
	
}
