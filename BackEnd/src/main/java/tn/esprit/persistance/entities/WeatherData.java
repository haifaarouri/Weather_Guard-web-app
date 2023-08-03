package tn.esprit.persistance.entities;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Document(collection="WeatherData")
@AllArgsConstructor
@NoArgsConstructor
public class WeatherData {

	@Id
    private String _id;
    private float temp;
	private float feels_like;
	private float temp_min;
	private float temp_max;
	private int pressure;
	private int humidity;
	private String description;
	private float wind_speed;
	private Date date_weather;
	//@JsonIgnore
	private Location location;
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public float getTemp() {
		return temp;
	}
	public void setTemp(float temp) {
		this.temp = temp;
	}
	public float getFeels_like() {
		return feels_like;
	}
	public void setFeels_like(float feels_like) {
		this.feels_like = feels_like;
	}
	public float getTemp_min() {
		return temp_min;
	}
	public void setTemp_min(float temp_min) {
		this.temp_min = temp_min;
	}
	public float getTemp_max() {
		return temp_max;
	}
	public void setTemp_max(float temp_max) {
		this.temp_max = temp_max;
	}
	public int getPressure() {
		return pressure;
	}
	public void setPressure(int pressure) {
		this.pressure = pressure;
	}
	public int getHumidity() {
		return humidity;
	}
	public void setHumidity(int humidity) {
		this.humidity = humidity;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public float getWind_speed() {
		return wind_speed;
	}
	public void setWind_speed(float wend_speed) {
		this.wind_speed = wend_speed;
	}
	public Date getDate_weather() {
		return date_weather;
	}
	public void setDate_weather(Date date_weather) {
		this.date_weather = date_weather;
	}
	public Location getLocation() {
		return location;
	}
	public void setLocation(Location location) {
		this.location = location;
	}
	@Override
	public String toString() {
		return "WeatherData [date_weather=" + date_weather + "]";
	}
	
}
