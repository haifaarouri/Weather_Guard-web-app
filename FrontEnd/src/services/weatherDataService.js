export const getWeatherData = async (id) => {
    const res = await fetch(`http://localhost:8082/SpringMVC/weatherData/weatherDataById/${id}`)
    const json = await res.json()
    return json
}

export const postWeatherData = async (data) => {
    
    console.log(data);
    const d = new Date(data.list[0].dt_txt)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            temp: data.list[0].main.temp,
            feels_like: data.list[0].main.feels_like,
            temp_min: data.list[0].main.temp_min,
            temp_max: data.list[0].main.temp_max,
            pressure: data.list[0].main.pressure,
            humidity: data.list[0].main.humidity,
            description: data.list[0].weather[0].description,
            wind_speed: data.list[0].wind.speed,
            date_weather: d
            // location: {
            //     city_name: data.city.name,
            //     latitude: data.city.coord.lat,
            //     longitude: data.city.coord.lon,
            //     country_code: data.city.country,
            //     population: data.city.population,
            //     sunrise: data.city.sunrise,
            //     sunset: data.city.sunset
            // }
        }),

    }
    const res = await fetch(`http://localhost:8082/SpringMVC/weatherData/saveWeatherData/64afa44c6daa37093a8fe893`, options)
    const result = await res.json()
    console.log(result);
    return result
}