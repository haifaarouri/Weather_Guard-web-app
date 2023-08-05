export const getWeatherData = async (id) => {
    const res = await fetch(`http://localhost:8082/SpringMVC/weatherData/weatherDataById/${id}`)
    const json = await res.json()
    return json
}

// export const deleteSportType = async (id) => {
//     const res = await fetch(`${process.env.backurl}/api/sportTypes/${id}`, {
//         method: 'DELETE'
//     })
//     const data = await res.json()
//     return data
// }

export const postLocation = async (data, userId) => {

    console.log(data);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            city_name: data.name,
            latitude: data.coord.lat,
            longitude: data.coord.lon,
            country_code: data.country,
            population: data.population,
            sunrise: data.sunrise,
            sunset: data.sunset
        }),

    }
    const res = await fetch(`http://localhost:8082/SpringMVC/location/saveLocation/${userId}`, options)
    const result = await res.json()
    console.log(result);
    return result
}

export const getUserLocations = async (data) => {

    console.log(data);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _id: data._id,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            birthDate: data.birthDate,
            profilePicture: data.profilePicture,
            gender: data.gender
        })
    }
    const res = await fetch(`http://localhost:8082/SpringMVC/location/user-locations`, options)
    const result = await res.json()
    console.log(result);
    return result
}