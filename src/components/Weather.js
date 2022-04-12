import './style/Weather.css';
import {useWeather} from "../utils/useWeather";
import {useState} from "react";

import {FaMapMarker, FaTemperatureHigh, FaEye} from 'react-icons/fa';

function Weather() {
    const [data, setData] = useState(undefined)
    useWeather(res => {
        setData(res)
        console.log(res)
    })

    return (
        <div className="weather">
            {data &&
                <div className="data">
                    <div className="location"><FaMapMarker /> {data.name}</div>
                    <div className="icon">
                        <img src={data.weather[0].icon} alt={data.weather[0].main}/>
                        <div className="right">
                            <span className="temp"><FaTemperatureHigh /> {data.data.temp} °C</span>
                            <span className="feels_like"><FaEye /> {data.data["feels_like"]} °C</span>
                        </div>
                    </div>
                    {/*data.data.temp*/}
                </div>
            }
        </div>
    );

}

export default Weather;
