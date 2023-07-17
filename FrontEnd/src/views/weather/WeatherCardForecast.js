import React, { useEffect, useState } from 'react';

const WeatherCardForecast = ({ data, toggle }) => {

    const [day2, setDay2] = useState([])

    useEffect(() => {
        if (data) {
            for (let index = 0; index < data.list.length; index++) {
                if (`${data.list[index].dt_txt[8]}` + `${data.list[index].dt_txt[9]}` !== `${data.list[index + 1].dt_txt[8]}` + `${data.list[index + 1].dt_txt[9]}`) {
                    console.log(data.list[index].dt_txt[8]);
                }
            }
        }
    }, [])

    return (
        <>
            {data && <div
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
                onClick={toggle}
            >
                <div
                    style={{
                        padding: "5px 15px",
                        background: "#00264d",
                        borderRadius: 50,
                        textAlign: "center"
                    }}
                >
                    {data.list[0].dt_txt}
                </div>
                <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt="weather icon"
                    className="w-icon"
                />
                <div style={{ fontWeight: 100, fontSize: 12 }}>
                    Min {data.list[0].main.temp_min.toFixed(0)} °C
                </div>
                <div style={{ fontWeight: 100, fontSize: 12 }}>
                    Max {data.list[0].main.temp_max.toFixed(0)} °C
                </div>
            </div>}
        </>
    );
};

export default WeatherCardForecast;
