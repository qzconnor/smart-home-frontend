import {useEffect, useState} from "react";
import axios from "axios";

const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
const REACT_APP_API_KEY = "39ac91ffce924db544d7deb118c406a3"

export function useWeather(cb){
    const [lat, setLat] = useState(undefined)
    const [long, setLong] = useState(undefined)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        }))
        if(lat && long){

            axios.get(`${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`)
                .then(res => {
                    const weatherRaw = res.data.weather;
                    console.log(res.data)
                    const weather = weatherRaw.map(we => {
                        return {
                            description: we.description,
                            icon: `https://openweathermap.org/img/wn/${we.icon}@2x.png`,
                            main: we.main
                        }
                    })

                    cb({
                        weather,
                        data: res.data.main,
                        name: res.data.name,
                        country: res.data.sys.country,
                        wind: res.data.wind
                    })
                })

        }



    },[lat, long])//,

}