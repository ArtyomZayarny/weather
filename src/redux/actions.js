import { SET_GEO_DATA, SET_WEATHER_DATA } from './actionsTypes'

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