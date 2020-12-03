import { SET_GEO_DATA } from './actionsTypes'

export const setGeoData = (data) => {
    return {
        type: SET_GEO_DATA,
        payload: data
    }
}