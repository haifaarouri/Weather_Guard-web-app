import React, { useEffect, useState } from 'react';

const WeatherCardForecast = ({ data, toggle, currentDay }) => {

    const [day, setDay] = useState(null)

    useEffect(() => {
        setDay(data.dt_txt.slice(0, 10))
    }, [])

    return (
        <>
            {data && day && <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 10px",
                    border: "1px solid #eee",
                    padding: 15,
                    borderRadius: 10,
                    background: "linear-gradient(87deg, #11cdef 0, #00264d 100%)",
                    cursor: "pointer"
                }}
                onClick={() => {
                    toggle()
                    currentDay(day)
                }}
            >
                <div
                    style={{
                        padding: "5px 15px",
                        background: "#00264d",
                        borderRadius: 50,
                        textAlign: "center"
                    }}
                >
                    {day}
                </div>
                <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt="weather icon"
                    className="w-icon"
                />
                <div style={{ fontWeight: 100, fontSize: 12 }}>
                    Min {data.main.temp_min.toFixed(0)} °C
                </div>
                <div style={{ fontWeight: 100, fontSize: 12 }}>
                    Max {data.main.temp_max.toFixed(0)} °C
                </div>
            </div>}
        </>
    );
};

export default WeatherCardForecast;