import { SET_GEO_DATA, SET_WEATHER_DATA, SET_CITY } from './actionsTypes'
import { apiClient } from '../apiClient'
import { normalizeData } from '../utils'

export const setGeoData = (data) => {
    return {
        type: SET_GEO_DATA,
        payload: data
    }
}
export const setWeatherData = (data) => {
    return {
        type: SET_WEATHER_DATA,
        payload: data
    }
}

export const setCity = city => {
    return {
        type: SET_CITY,
        payload: city
    }
}

export const fetchWeather = (city) => {
    return dispatch => {
        dispatch(setCity(city));
        apiClient.get(`weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                const { name: city } = response.data;
                const result = Object.assign(response.data.main, { city });
                const data = normalizeData(result)
                dispatch(setWeatherData(data))
            })
    }
}