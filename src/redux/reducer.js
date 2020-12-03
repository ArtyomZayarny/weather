import { SET_GEO_DATA, SET_WEATHER_DATA } from "./actionsTypes";

const initState = {
    geo: {},
    city: '',
    weatherData: {}
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_GEO_DATA:
            return { ...state, geo: { ...action.payload } }
        case SET_WEATHER_DATA:
            return { ...state, weatherData: { ...action.payload } }
    }

    return state
}

export default reducer;