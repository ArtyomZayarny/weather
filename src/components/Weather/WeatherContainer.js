import { useState, useEffect } from 'react'
import WeatherCard from './WeatherCard'
import { setGeoData, setWeatherData } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { apiClient } from '../../apiClient'
import { kelvinToCelsius } from '../../utils'

export function WeatherContainer(props) {
    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch();

    const geoData = useSelector(state => state.geo);
    const weatherData = useSelector(state => state.weatherData);

    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {

        //Request geo data
        if (Object.keys(geoData).length === 0) {
            setGeo()
        }

        //Geo data was recived
        if (Object.keys(geoData).length > 0) {
            const { lat, lon } = geoData;
            (async () => {
                const data = await getWeather(lat, lon)
                const weather = normalizeData(data)
                dispatch(setWeatherData(weather))
            })()

            setLoading(false)
        }

    }, [geoData])

    const normalizeData = (data) => {
        let result = {}
        result.temp = data.hasOwnProperty('temp') ? kelvinToCelsius(data.temp) : 0;
        result.feels = data.hasOwnProperty('feels_like') ? kelvinToCelsius(data.feels_like) : 0;
        result.min = data.hasOwnProperty('temp_min') ? kelvinToCelsius(data.temp_min) : 0;
        result.max = data.hasOwnProperty('temp_max') ? kelvinToCelsius(data.temp_max) : 0;
        result.pressure = data.hasOwnProperty('pressure') ? data.pressure : 0;
        result.humidity = data.hasOwnProperty('humidity') ? data.humidity : 0;
        result.city = data.hasOwnProperty('city') ? data.city : '';
        return result;
    }

    const getWeather = async (lat, lon) => {
        let response = await apiClient.get(`weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        let data = await response.data;
        const { name: city } = data;
        const result = Object.assign(data.main, { city })
        return result
    }

    const setGeo = async () => {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(async (position) => {
            const geo = {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            }
            dispatch(setGeoData(geo))
        })
    }


    return (
        <>
            {Object.keys(weatherData).length > 0 ? <WeatherCard {...weatherData} /> : <h2>Loading....</h2>}
        </>
    )
}
