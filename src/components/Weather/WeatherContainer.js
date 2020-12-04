import { useState, useEffect, useCallback } from 'react'
import WeatherCard from './WeatherCard'
import { setGeoData, setWeatherData } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { apiClient } from '../../apiClient'
import { normalizeData } from '../../utils'

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

    const getWeather = async (lat, lon) => {
        let response = await apiClient.get(`weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        let data = await response.data;
        const { name: city } = data;
        const result = Object.assign(data.main, { city })
        return result
    }

    const setGeo = () => {
        setLoading(true)
        navigator.geolocation.watchPosition(async (position) => {
            const geo = {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            }
            dispatch(setGeoData(geo))
        })
    }

    return (
        <>
            <WeatherCard {...weatherData} />
        </>
    )
}
